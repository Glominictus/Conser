<?php 

//llamando a los campos//
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$profesor =$_POST['profesor'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//Datos para el correo//
$destinatario = "cmus.profesional.obarco@edu.xunta.gal";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n";
$carta .= "Teléfono: $telefono \n";
$carta .= "Profesor: $profesor \n";
$carta .= "Mensaje: $mensaje";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: Secretria del Conservatorio secretaria@obarco.com\r\n";


//Enviando mensaje//
mail($destinatario, $asunto, $carta, $headers);
header("Location: envio-correcto.html");
exit;

?>