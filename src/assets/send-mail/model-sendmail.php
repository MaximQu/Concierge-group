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

if (trim(!empty($_POST['nameSurname']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Имя и Фамилия:</strong> ' . $_POST['nameSurname'] . '</p>';
}
if (trim(!empty($_POST['birthday']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Дата рождения:</strong> ' . $_POST['birthday'] . '</p>';
}
if (trim(!empty($_POST['city']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Город:</strong> ' . $_POST['city'] . '</p>';
}
if (trim(!empty($_POST['height']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Рост:</strong> ' . $_POST['height'] . '</p>';
}
if (trim(!empty($_POST['clothingSize']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Размер одежды:</strong> ' . $_POST['clothingSize'] . '</p>';
}
if (trim(!empty($_POST['breast']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Грудь:</strong> ' . $_POST['breast'] . '</p>';
}
if (trim(!empty($_POST['hairColor']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Цвет волос:</strong> ' . $_POST['hairColor'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
   $body .= '<p style="font-size: 2rem;"><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['phone']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Телефон:</strong> ' . $_POST['phone'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
   $body .= '<p style="font-size: 2rem;"><strong>Сопроводительное письмо:</strong> ' . $_POST['message'] . '</p>';
}
if (!empty($_FILES['image']['tmp_name'])) {
   $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
   if (copy($_FILES['image']['tmp_name'], $filePath)){
      $fileAttach = $filePath;
      $body .='<p><strong>Фото</strong></p>';
      $mail->addAttachment($fileAttach);
   }
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