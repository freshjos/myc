<?php
/*$para      = 'freshjos@msn.com';
$titulo    = 'El titulo';
$mensaje   = 'Hola a todos es';
$cabeceras = 'From: simulacrosmyc@simulacrosmyc.com' . "\r\n" .
    'Reply-To: freshjos@msn.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);*/
?>

<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    if (isset($_SERVER['HTTP_ORIGIN'])) {  
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");  
        header('Access-Control-Allow-Credentials: true');  
        header('Access-Control-Max-Age: 86400');   
    }  
      
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {  
      
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))  
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");  
      
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))  
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");  
    }  
// Varios destinatarios
$para  = 'informes@estudiosmyc.com' . ', '; // atención a la coma
$para .= 'estudios.myc@gmail.com' . ', ';
$para .= 'freshjos@gmail.com';

// título
$título = 'Mensaje enviado de la APP simulacrosmyc';

// mensaje
$mensaje = '
<html>
<head>
  <title>Mensaje enviado de la APP simulacrosmyc</title>
</head>
<body>
  <p>Direcci&oacute;n remitente:</p>
  <p>'.htmlspecialchars($_POST["address"]).'</p>
  <p>Mensaje:</p>
  <p>'.htmlspecialchars($_POST["mensaje"]).'</p>
</body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'To: informes <informes@estudiosmyc.com>, estudios <estudios.myc@gmail.com>' . "\r\n";
$cabeceras .= 'From: simulacrosmyc <simulacrosmyc@simulacrosmyc.com>' . "\r\n";


// Enviarlo
mail($para, $título, $mensaje, $cabeceras);

?>