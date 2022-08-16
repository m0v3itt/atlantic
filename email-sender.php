<?php 
header("contactar.html");
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$mensagem = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.office365.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "sddavid_@hotmail.com";
$mail->Password = "58FA714383";

$mail->setFrom("sddavid_@hotmail.com", "David");
$mail->addAddress("sddavid_@hotmail.com", "David");
 // Set Message
$mail->isHTML(true); 
$message = "Email enviado por: " . $name . "<br />";
$message .= "Email address: " . $email . "<br />";
$message .= "Message:" . $mensagem . "<br />";
$message .= "<br /> ----- <br /> Este email foi enviado através do site. <br />";

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();
header("Location: contactar.html");
die();
?>



