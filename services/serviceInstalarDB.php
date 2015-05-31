<?php

/*
 * creado por Jose Luis Sequeiros Medina
 * bitcomplex.tk
 */
if (!$mysqli->query("DROP TABLE IF EXISTS examen")||!$mysqli->query("DROP TABLE IF EXISTS modulos")||!$mysqli->query("DROP TABLE IF EXISTS noticias")||!$mysqli->query("DROP TABLE IF EXISTS alumnos")||!$mysqli->query("DROP TABLE IF EXISTS obs")){
  echo "Drop Table failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->query("DROP TABLE IF EXISTS modulos") || !$mysqli->query("CREATE TABLE modulos(
                                                                      idModulo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                                                      fechaCreacion DATETIME NOT NULL,
                                                                      fechaModificacion DATETIME NOT NULL,
                                                                      nombre VARCHAR(200) NOT NULL,
                                                                      urlAudio LONGTEXT DEFAULT NULL,
                                                                      urlVideo LONGTEXT DEFAULT NULL,
                                                                      urlDoc LONGTEXT DEFAULT NULL,
                                                                      todo LONGTEXT DEFAULT NULL
                                                                      )ENGINE=InnoDB DEFAULT CHARSET=utf8")) {
  echo "Table unidadNegocio creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
if (!$mysqli->query("DROP TABLE IF EXISTS noticias") || !$mysqli->query("CREATE TABLE noticias(
                                                                      idNoticia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                                                      fechaCreacion DATETIME NOT NULL,
                                                                      fechaModificacion DATETIME NOT NULL,
                                                                      encabezado VARCHAR(200) NOT NULL,
                                                                      cuerpo VARCHAR(200) NOT NULL,
                                                                      todo LONGTEXT DEFAULT NULL
                                                                      )ENGINE=InnoDB DEFAULT CHARSET=utf8")) {
  echo "Table trabajadores creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
if (!$mysqli->query("DROP TABLE IF EXISTS alumnos") || !$mysqli->query("CREATE TABLE alumnos(
                                                                      idAlumno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                                                      fechaCreacion DATETIME NOT NULL,
                                                                      fechaModificacion DATETIME NOT NULL, 
                                                                      habilitado INT NOT NULL,
                                                                      nombre VARCHAR(200) NULL,
                                                                      aPat VARCHAR(200) NULL,
                                                                      aMat VARCHAR(200) NULL,
                                                                      correo VARCHAR(200) NULL,
                                                                      docIden VARCHAR(200) NULL,
                                                                      sedeHospitalaria VARCHAR(200) NULL,
                                                                      ciudad VARCHAR(200) NULL,
                                                                      telefono VARCHAR(200) NULL,
                                                                      todo LONGTEXT DEFAULT NULL
                                                                      )ENGINE=InnoDB DEFAULT CHARSET=utf8")) {
  echo "Table habitaciones creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
if (!$mysqli->query("DROP TABLE IF EXISTS examen") || !$mysqli->query("CREATE TABLE examen(
                                                                      idExamen INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                                                      idModulo INT NOT NULL,
                                                                      fechaCreacion DATETIME NOT NULL,
                                                                      fechaModificacion DATETIME NOT NULL,
                                                                      cuestionario LONGTEXT DEFAULT NULL,
                                                                      todo LONGTEXT DEFAULT NULL,
                                                                      FOREIGN KEY (idModulo) REFERENCES modulos(idModulo)
                                                                      )ENGINE=InnoDB DEFAULT CHARSET=utf8")) {
  echo "Table encuestaHabitaciones creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->query("DROP TABLE IF EXISTS obs") || !$mysqli->query("CREATE TABLE obs(
                                                                      idObs INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                                                      fechaCreacion DATETIME NOT NULL,
                                                                      fechaModificacion DATETIME NOT NULL,
                                                                      todo LONGTEXT DEFAULT NULL
                                                                      )ENGINE=InnoDB DEFAULT CHARSET=utf8")) {
  echo "Table encuestaHabitaciones creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!($res = $mysqli->query("SELECT * FROM noticias"))) {
  echo "SELECT failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

//crear vistas
//var_dump($res->fetch_assoc());

if (!$mysqli->query("DROP PROCEDURE IF EXISTS pp") ||
        !$mysqli->query("CREATE PROCEDURE pp() BEGIN SELECT * FROM noticias; END;")) {
  echo "Stored procedure creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!($rs = $mysqli->query("CALL pp()"))) {
  echo "SELECT failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
//var_dump($rs);

$arregloNoticias = null;

while ($row = $rs->fetch_assoc()) {
  $arregloNoticias[] = $row;
}
var_dump($arregloNoticias);
echo "base de datos crada satisfactoriamente"; 
?>
