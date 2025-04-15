<?php
// Telegram Bot API credentials
$botToken = 'YOUR_BOT_TOKEN'; // Replace with your bot token
$chatId = '1884010038'; // The username or chat ID to receive messages

// Get form data
$name = isset($_POST['name']) ? $_POST['name'] : 'Не указано';
$phone = isset($_POST['phone']) ? $_POST['phone'] : 'Не указано';
$contactMethod = isset($_POST['contactMethod']) ? $_POST['contactMethod'] : 'Не указано';

// Validate phone number
if (empty($phone) || $phone === 'Не указано') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Пожалуйста, укажите номер телефона']);
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

// Send the request to Telegram API
$response = file_get_contents($url);

// Check response
$responseData = json_decode($response, true);
if ($responseData['ok']) {
    // Success response
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена!']);
} else {
    // Error response
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки заявки. Пожалуйста, попробуйте позже.']);
}
?> 