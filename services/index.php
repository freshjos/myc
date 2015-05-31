<?php

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



require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(); 



// GET route 
$app->get('/:comando', function ($comando) { 
    //resumen de noticias
    $bikes = array('Ducati', 'Royal Enfield' , 'Harley Davidson');
  
    if ("$comando" == 'noticias'){
      //print json_encode($bikes);
      print 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nisl ligula. Aliquam varius dui eu eros maximus venenatis. Maecenas velit lectus, mollis nec felis quis, bibendum interdum purus. Praesent elit lorem, malesuada nec lacus quis, finibus interdum odio...';
    }
  
    if ("$comando" == 'cursos'){
      //echo "Execuntando cursos."; 
      $pregunta = new stdClass();
      $pregunta->titulo = "En los ambientes del Colegio Médico del Perú, se suscribió el CONVENIO entre el Colegio Médico del Perú, representado por el Decano Nacional, Dr. César Palomino Colina y la Academia de Preparación Médica Estudios M y C sac.";
      $pregunta->categoria = "Cultura";
      $pregunta->respuestas = array("respuesta1"=>8850,"respuesta2"=>8900,"respuesta3"=>8875);
      $json = json_encode($pregunta);
      header("Content-Type: application/json");
      echo $json;
      exit;
    }
  
    if ("$comando" == 'contactos'){
      echo "Execuntando contactos."; 
    }
}); 

$app->get('/cursos/:comando', function ($comando) { 
    //resumen de noticias
    if ("$comando" == 'curso1'){
      echo "Execuntando curso1."; 
    }
  
    if ("$comando" == 'curso2'){
      echo "Execuntando curso2."; 
    }
  
    if ("$comando" == 'curso3'){
      echo "Execuntando curso3."; 
    }
}); 
$app->run();
?>