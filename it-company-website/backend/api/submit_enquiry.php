<?php
/**
 * TechNova Solutions — Project Enquiry Submission Endpoint
 *
 * Phase 11.4B: Project Enquiry PHP API Endpoint
 * Handles POST requests, validates input, and records enquiries in MySQL.
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

// 4. Accept JSON request data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors'  => ['Invalid JSON payload. Please provide a valid JSON object.']
    ]);
    exit;
}

// 5. Map frontend fields
$name     = trim($data['contact_name'] ?? $data['name'] ?? '');
$company  = trim($data['contact_company'] ?? $data['company'] ?? '');
$email    = trim($data['contact_email'] ?? $data['email'] ?? '');
$phone    = trim($data['contact_phone'] ?? $data['phone'] ?? '');
$service  = trim($data['project_type'] ?? $data['service'] ?? '');
$budget   = trim($data['budget_range'] ?? $data['budget'] ?? '');
$timeline = trim($data['project_timeline'] ?? $data['timeline'] ?? '');

// 6. Combine requirement fields into the database message field
$description   = trim($data['project_description'] ?? '');
$features      = trim($data['project_features'] ?? '');
$targetUsers   = trim($data['target_users'] ?? '');
$directMessage = trim($data['message'] ?? '');

$messageParts = [];
if (!empty($description)) {
    $messageParts[] = "Project Description:\n" . $description;
}
if (!empty($features)) {
    $messageParts[] = "Required Features:\n" . $features;
}
if (!empty($targetUsers)) {
    $messageParts[] = "Target Users:\n" . $targetUsers;
}
if (!empty($directMessage)) {
    $messageParts[] = "Message:\n" . $directMessage;
}

$message = implode("\n\n", $messageParts);

// 7. Server-side validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Contact name is required.';
} elseif (strlen($name) > 100) {
    $errors[] = 'Contact name must not exceed 100 characters.';
}

if (empty($email)) {
    $errors[] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 150) {
    $errors[] = 'Please provide a valid email address.';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required.';
} elseif (!preg_match('/^[\d\s+\-()]{7,30}$/', $phone)) {
    $errors[] = 'Please provide a valid phone number.';
}

if (empty($company)) {
    $errors[] = 'Company name is required.';
} elseif (strlen($company) > 150) {
    $errors[] = 'Company name must not exceed 150 characters.';
}

if (empty($service)) {
    $errors[] = 'Project type / service selection is required.';
} elseif (strlen($service) > 100) {
    $errors[] = 'Service name must not exceed 100 characters.';
}

if (empty($budget)) {
    $errors[] = 'Budget selection is required.';
} elseif (strlen($budget) > 50) {
    $errors[] = 'Budget selection must not exceed 50 characters.';
}

if (empty($timeline)) {
    $errors[] = 'Timeline selection is required.';
} elseif (strlen($timeline) > 50) {
    $errors[] = 'Timeline selection must not exceed 50 characters.';
}

if (empty($message)) {
    $errors[] = 'Project requirements or description are required.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors'  => $errors
    ]);
    exit;
}

// 8. Insert into enquiries table using PDO prepared statements
try {
    $sql = "INSERT INTO enquiries (name, company, email, phone, service, budget, timeline, message, status)
            VALUES (:name, :company, :email, :phone, :service, :budget, :timeline, :message, :status)";

    $stmt = $pdo->prepare($sql);
    $status = 'New';

    $stmt->bindValue(':name', $name, PDO::PARAM_STR);
    $stmt->bindValue(':company', $company, PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindValue(':service', $service, PDO::PARAM_STR);
    $stmt->bindValue(':budget', $budget, PDO::PARAM_STR);
    $stmt->bindValue(':timeline', $timeline, PDO::PARAM_STR);
    $stmt->bindValue(':message', $message, PDO::PARAM_STR);
    $stmt->bindValue(':status', $status, PDO::PARAM_STR);

    $stmt->execute();

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Enquiry submitted successfully'
    ]);
    exit;

} catch (PDOException $e) {
    error_log('Database Insert Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to submit enquiry.'
    ]);
    exit;
} catch (Exception $e) {
    error_log('General Error in submit_enquiry: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to submit enquiry.'
    ]);
    exit;
}
