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
$mail->SMTPDebug = 2;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "webdomain04.dnscpanel.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;
$mail->SMTPSecure='tls';
$mail->Username = "geral@atlanticautomoveis.pt";
$mail->Password = "mariocosta2022";

$mail->setFrom("geral@atlanticautomoveis.pt", "David");
$mail->addAddress("geral@atlanticautomoveis.pt", "David");
 // Set Message
$mail->isHTML(true); 
$message = "Email enviado por: " . $name . "<br />";
$message .= "Email address: " . $email . "<br />";
$message .= "Message:" . $mensagem . "<br />";
$message .= "<br /> ----- <br /> Este email foi enviado atraves do site. <br/>";

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();
header("Location: contactar.html");
die();
?>



