<?php
/**
 * TechNova Solutions — Job Application Submission Endpoint
 *
 * Phase 11.5B-2: Job Application PHP API Endpoint
 * Accepts multipart/form-data POST requests, validates candidate input and resume file,
 * securely stores the resume on disk, and records the application in MySQL.
 */

// 1. JSON Content-Type header
header('Content-Type: application/json; charset=utf-8');

// 2. Accept POST requests only
$requestMethod = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($requestMethod !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are accepted.'
    ]);
    exit;
}

// 3. Require database connection layer
require_once __DIR__ . '/../config/database.php';

// 4. Retrieve form inputs (supporting both direct and applicant_* naming conventions)
$jobTitle    = trim($_POST['job_title'] ?? '');
$name        = trim($_POST['name'] ?? $_POST['applicant_name'] ?? '');
$email       = trim($_POST['email'] ?? $_POST['applicant_email'] ?? '');
$phone       = trim($_POST['phone'] ?? $_POST['applicant_phone'] ?? '');
$linkedin    = trim($_POST['linkedin'] ?? $_POST['applicant_linkedin'] ?? '');
$portfolio   = trim($_POST['portfolio'] ?? $_POST['applicant_portfolio'] ?? '');
$coverLetter = trim($_POST['cover_letter'] ?? $_POST['applicant_cover'] ?? '');

$errors = [];

// 5. Server-side validation of text fields
if (empty($jobTitle)) {
    $errors[] = 'Job title is required.';
} elseif (strlen($jobTitle) > 150) {
    $errors[] = 'Job title must not exceed 150 characters.';
}

if (empty($name)) {
    $errors[] = 'Full name is required.';
} elseif (strlen($name) > 100) {
    $errors[] = 'Full name must not exceed 100 characters.';
}

if (empty($email)) {
    $errors[] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 150) {
    $errors[] = 'Please provide a valid business email address.';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required.';
} elseif (!preg_match('/^[\d\s+\-()]{7,30}$/', $phone) || strlen($phone) > 30) {
    $errors[] = 'Please provide a valid phone number.';
}

if (!empty($linkedin)) {
    if (strlen($linkedin) > 255 || !filter_var($linkedin, FILTER_VALIDATE_URL)) {
        $errors[] = 'Please provide a valid LinkedIn URL.';
    }
} else {
    $linkedin = null;
}

if (!empty($portfolio)) {
    if (strlen($portfolio) > 255 || !filter_var($portfolio, FILTER_VALIDATE_URL)) {
        $errors[] = 'Please provide a valid portfolio or GitHub URL.';
    }
} else {
    $portfolio = null;
}

if (empty($coverLetter)) {
    $coverLetter = null;
}

// 6. Server-side validation of Resume file
$resumeFile = $_FILES['resume'] ?? $_FILES['applicant_resume'] ?? null;
$fileExt = '';

if (!$resumeFile || !isset($resumeFile['error']) || $resumeFile['error'] === UPLOAD_ERR_NO_FILE) {
    $errors[] = 'Please attach a resume file.';
} elseif ($resumeFile['error'] !== UPLOAD_ERR_OK) {
    $errors[] = 'Failed to upload resume file. Please try again.';
} else {
    // Validate file size: 5 MB maximum
    $maxFileSize = 5 * 1024 * 1024; // 5,242,880 bytes
    if ($resumeFile['size'] > $maxFileSize) {
        $errors[] = 'Resume file size must not exceed 5 MB.';
    }

    // Validate file extension against approved whitelist
    $originalName = $resumeFile['name'] ?? '';
    $fileExt = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
    $allowedExtensions = ['pdf', 'doc', 'docx'];

    if (!in_array($fileExt, $allowedExtensions, true)) {
        $errors[] = 'Only PDF, DOC, and DOCX files are permitted for resumes.';
    }
}

// 7. Halt and return HTTP 400 if validation errors exist
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors'  => $errors
    ]);
    exit;
}

// 8. Secure upload destination directory
$uploadDir = __DIR__ . '/../uploads/resumes/';
if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true) && !is_dir($uploadDir)) {
        error_log('Failed to create upload directory: ' . $uploadDir);
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Unable to process job application. Please try again later.'
        ]);
        exit;
    }
}

// 9. Generate secure, unique server-side filename (never trust original filename)
try {
    $uniqueToken = bin2hex(random_bytes(16));
} catch (Exception $e) {
    $uniqueToken = uniqid('res_', true);
}

$timestamp       = time();
$savedFileName   = "resume_{$timestamp}_{$uniqueToken}.{$fileExt}";
$destinationPath = $uploadDir . $savedFileName;
$relativeDbPath  = "backend/uploads/resumes/" . $savedFileName;

// 10. Move uploaded file to destination
if (!move_uploaded_file($resumeFile['tmp_name'], $destinationPath)) {
    error_log("Failed to move uploaded resume file to {$destinationPath}");
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to save resume file. Please try again later.'
    ]);
    exit;
}

// 11. Insert application record into job_applications table
try {
    $sql = "INSERT INTO job_applications (job_title, name, email, phone, resume_path, linkedin, portfolio, cover_letter, status)
            VALUES (:job_title, :name, :email, :phone, :resume_path, :linkedin, :portfolio, :cover_letter, :status)";

    $stmt = $pdo->prepare($sql);
    $status = 'New';

    $stmt->bindValue(':job_title', $jobTitle, PDO::PARAM_STR);
    $stmt->bindValue(':name', $name, PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindValue(':resume_path', $relativeDbPath, PDO::PARAM_STR);
    $stmt->bindValue(':linkedin', $linkedin, $linkedin !== null ? PDO::PARAM_STR : PDO::PARAM_NULL);
    $stmt->bindValue(':portfolio', $portfolio, $portfolio !== null ? PDO::PARAM_STR : PDO::PARAM_NULL);
    $stmt->bindValue(':cover_letter', $coverLetter, $coverLetter !== null ? PDO::PARAM_STR : PDO::PARAM_NULL);
    $stmt->bindValue(':status', $status, PDO::PARAM_STR);

    $stmt->execute();

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Job application submitted successfully.'
    ]);
    exit;

} catch (PDOException $e) {
    // Clean up uploaded file if database insert fails
    if (file_exists($destinationPath)) {
        @unlink($destinationPath);
    }

    error_log('Database Insert Error in submit_job_application: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to submit job application. Please try again later.'
    ]);
    exit;

} catch (Exception $e) {
    // Clean up uploaded file if general failure occurs
    if (file_exists($destinationPath)) {
        @unlink($destinationPath);
    }

    error_log('General Error in submit_job_application: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to submit job application. Please try again later.'
    ]);
    exit;
}
