<?php
/**
 * TechNova Solutions — Database Connection Layer
 *
 * Phase 11.3: PHP Database Connection (PDO)
 * Connects to the MySQL 'technova' database.
 */

// Optional untracked local/production configuration file
$localConfigFile = __DIR__ . '/database.local.php';
$localConfig = [];
if (file_exists($localConfigFile)) {
    $loaded = include $localConfigFile;
    if (is_array($loaded)) {
        $localConfig = $loaded;
    }
}

// Database connection configuration (supports environment variables > local config file > local development fallbacks)
$host    = getenv('DB_HOST') !== false ? getenv('DB_HOST') : ($localConfig['DB_HOST'] ?? $localConfig['host'] ?? 'localhost');
$port    = getenv('DB_PORT') !== false ? (int)getenv('DB_PORT') : (int)($localConfig['DB_PORT'] ?? $localConfig['port'] ?? 3306);
$dbname  = getenv('DB_NAME') !== false ? getenv('DB_NAME') : ($localConfig['DB_NAME'] ?? $localConfig['dbname'] ?? 'technova');
$user    = getenv('DB_USER') !== false ? getenv('DB_USER') : ($localConfig['DB_USER'] ?? $localConfig['user'] ?? 'root');
$pass    = getenv('DB_PASS') !== false ? getenv('DB_PASS') : ($localConfig['DB_PASS'] ?? $localConfig['pass'] ?? '');
$charset = getenv('DB_CHARSET') !== false ? getenv('DB_CHARSET') : ($localConfig['DB_CHARSET'] ?? $localConfig['charset'] ?? 'utf8mb4');

$dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset={$charset}";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    // Log error internally to server logs for debugging
    error_log('Database Connection Error: ' . $e->getMessage());

    // Safe minimal error response: never expose credentials or database details
    if (!headers_sent()) {
        http_response_code(500);
    }
    die(json_encode([
        'status'  => 'error',
        'message' => 'Database connection failed. Please try again later.'
    ]));
}

/**
 * Helper function to retrieve the active PDO connection instance.
 *
 * @return PDO
 */
function getDbConnection(): PDO {
    global $pdo;
    return $pdo;
}

return $pdo;
