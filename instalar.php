<?php
/*
 * creado por Jose Luis Sequeiros Medina
 * www.BitComplex.com
 */
header("Content-Type: text/html; charset=utf-8");
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8"/>
    <title>Creacion de base de datos</title>

    <!-- Mobile viewport optimisation -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- (en) Add your meta data here -->
    <meta http-equiv="Expires" content="0" >
    <meta http-equiv="Last-Modified" content="0" >
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate" > 
    <meta http-equiv="Pragma" content="no-cache" >
    <!-- (de) Fuegen Sie hier ihre Meta-Daten ein -->
    <link rel="shortcut icon" href=""/>
  </head>
  <body>
      <div>
          <?php
            
            require_once('./lib/libConexion.php');
            require_once('./services/serviceInstalarDB.php');
          ?>
          <h1></h1>
      </div>
  </body>
</html>

