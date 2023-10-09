<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

// To who E-mail
$mail->addAddress('conciergegroup@gmail.com');

// Topic
$mail->Subject = 'Concierge Group meiler';

// Mail Body
$body = '<h1>Application form for consideration</h1>';

if (trim(!empty($_POST['request']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Запрос:</strong> ' . $_POST['request'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
   $body .= '<p style="font-size: 2rem;"><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}

$mail->Body = $body;

if (!$mail->Send()) {
   $message = 'Error';
} else {
   $message = 'The form has been submitted';
}

$response = ['message' => $message];

header('content-type: application/json');
echo json_encode($response);
?>