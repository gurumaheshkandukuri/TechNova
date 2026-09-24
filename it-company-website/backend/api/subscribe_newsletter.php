<?php
/**
 * TechNova Solutions — Newsletter Subscription Endpoint
 *
 * Phase 11.5A: Newsletter Persistence Endpoint
 * Handles POST requests, validates email, and records subscribers in MySQL.
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

// 5. Extract and validate email
$email = trim($data['email'] ?? '');
$errors = [];

if (empty($email)) {
    $errors[] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 150) {
    $errors[] = 'Please provide a valid business email address.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors'  => $errors
    ]);
    exit;
}

// 6. Check duplicate and insert into newsletter_subscribers
try {
    // Check if email already exists
    $checkStmt = $pdo->prepare("SELECT id FROM newsletter_subscribers WHERE email = :email LIMIT 1");
    $checkStmt->bindValue(':email', $email, PDO::PARAM_STR);
    $checkStmt->execute();
    $existing = $checkStmt->fetch();

    if ($existing) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'You are already subscribed to TechNova updates.'
        ]);
        exit;
    }

    // Insert new subscriber
    $insertStmt = $pdo->prepare("INSERT INTO newsletter_subscribers (email) VALUES (:email)");
    $insertStmt->bindValue(':email', $email, PDO::PARAM_STR);
    $insertStmt->execute();

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! You have successfully subscribed to TechNova updates.'
    ]);
    exit;

} catch (PDOException $e) {
    // Handle potential concurrency unique constraint race
    if ($e->getCode() === '23000' || (isset($e->errorInfo[1]) && $e->errorInfo[1] === 1062)) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'You are already subscribed to TechNova updates.'
        ]);
        exit;
    }

    error_log('Database Error in subscribe_newsletter: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to process subscription. Please try again later.'
    ]);
    exit;
} catch (Exception $e) {
    error_log('General Error in subscribe_newsletter: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to process subscription. Please try again later.'
    ]);
    exit;
}
