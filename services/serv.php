<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim(); 

// GET route 
$app->get('/:comando', function ($comando) { 
    echo "Execuntando $comando."; 
}); 
$app->run();
?>