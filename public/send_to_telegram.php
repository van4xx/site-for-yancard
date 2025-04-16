<?php
// Enable CORS for local testing
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Debug logging
function logDebug($message) {
    $logFile = __DIR__ . '/telegram_debug.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

logDebug("Script started");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Telegram Bot API credentials
$botToken = '7989864669:AAG7tHhRUB-BQWzlLtU8zpL-6CHx6tASK70'; // Replace with your bot token
$chatId = '1884010038'; // The username or chat ID to receive messages

// Get form data
$name = isset($_POST['name']) ? $_POST['name'] : 'Не указано';
$phone = isset($_POST['phone']) ? $_POST['phone'] : 'Не указано';
$contactMethod = isset($_POST['contactMethod']) ? $_POST['contactMethod'] : 'Не указано';

logDebug("Received data: name=$name, phone=$phone, contactMethod=$contactMethod");

// Validate phone number
if (empty($phone) || $phone === 'Не указано') {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Пожалуйста, укажите номер телефона']);
    logDebug("Validation failed: empty phone number");
    exit;
}

// Create message text
$messageText = "✅ НОВАЯ ЗАЯВКА!\n\n";
$messageText .= "👤 Имя: $name\n";
$messageText .= "📞 Телефон: $phone\n";
$messageText .= "📱 Способ связи: $contactMethod\n";
$messageText .= "🕒 Время: " . date('d.m.Y H:i:s') . "\n";

// URL encode the message
$encodedMessage = urlencode($messageText);

// API endpoint URL
$url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=$encodedMessage&parse_mode=HTML";

logDebug("Sending request to Telegram API");

// Send the request to Telegram API
$response = file_get_contents($url);
logDebug("Response from Telegram: " . $response);

// Check response
$responseData = json_decode($response, true);
if ($responseData['ok']) {
    // Success response
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена!']);
    logDebug("Success: Message sent to Telegram");
} else {
    // Error response
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки заявки. Пожалуйста, попробуйте позже.']);
    logDebug("Error: Failed to send message to Telegram. Response: " . json_encode($responseData));
}
?> 