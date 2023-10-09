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

if (trim(!empty($_POST['modalName']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Имя и Фамилия:</strong> ' . $_POST['modalName'] . '</p>';
}
if (trim(!empty($_POST['modalEmail']))) {
   $body .= '<p style="font-size: 2rem;"><strong>E-mail:</strong> ' . $_POST['modalEmail'] . '</p>';
}
if (trim(!empty($_POST['modalPhone']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Телефон:</strong> ' . $_POST['modalPhone'] . '</p>';
}
if (trim(!empty($_POST['modalMessage']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Сопроводительное письмо:</strong> ' . $_POST['modalMessage'] . '</p>';
}

$mail->Body = $body;

if (!$mail->Send()) {
   $message = 'Error';
} else {
   $message = 'The form has been submitted';
}

$response = ['modalMessage' => $message];

header('content-type: application/json');
echo json_encode($response);
?>