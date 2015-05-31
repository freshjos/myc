<?php
/*
 creado por Jose Luis Sequeiros Medina
 * www.BitComplex.com
 */

$mysqli = new mysqli("localhost", "u750348810_myc", "123456", "u750348810_dbmyc");
//$mysqli = new mysqli('mysql.nixiweb.com', "u750348810_myc", "123456", "u750348810_dbmyc");
//bitcomplex $mysqli = new mysqli('mysql.nixiweb.com', 'u706178210_myc', '123456', 'u706178210_dbmyc');
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}else{
    if (!$mysqli->set_charset('utf8')) {
      printf("Error loading character set utf8: %s\n", $mysqli->error);
    } else {
      printf("Current character set: %s\n", $mysqli->character_set_name());
    }
}
?>
