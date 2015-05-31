//calificador de examenes
 
function calificarSimu() {
  form = document.getElementById('exam-form');
  //$.mobile.changePage("./examen/testSimuSol.html");
  //var te = document.getElementById('checkbox-2a').checked;
  var nombre = form.medico.value;
  var a = 0;//aciertos
  var e = 0;//errores
  //var t = form.checkbox1a.checked;
  if (form.checkbox1d.checked) {
    a++; 
  } else {
    e++;
    if (form.checkbox1a.checked) { document.getElementById('label1a').style.color = "#f00"; }
    if (form.checkbox1b.checked) { document.getElementById('label1b').style.color = "#f00"; }
    if (form.checkbox1c.checked) { document.getElementById('label1c').style.color = "#f00"; }
    if (form.checkbox1e.checked) { document.getElementById('label1e').style.color = "#f00"; }
  }
  if (form.checkbox2b.checked) {
    a++; 
  } else {
    e++;
    if (form.checkbox2a.checked) { document.getElementById('label2a').style.color = "#f00"; }
    if (form.checkbox2c.checked) { document.getElementById('label2c').style.color = "#f00"; }
    if (form.checkbox2d.checked) { document.getElementById('label2d').style.color = "#f00"; }
    if (form.checkbox2e.checked) { document.getElementById('label2e').style.color = "#f00"; }
  }
  if (form.checkbox3e.checked) {
    a++; 
  } else {
    e++;
    if (form.checkbox3a.checked) { document.getElementById('label3a').style.color = "#f00"; }
    if (form.checkbox3b.checked) { document.getElementById('label3b').style.color = "#f00"; }
    if (form.checkbox3c.checked) { document.getElementById('label3c').style.color = "#f00"; }
    if (form.checkbox3d.checked) { document.getElementById('label3d').style.color = "#f00"; }
  }
  if (form.checkbox4a.checked) {
    a++; }
  else {
      e++;
      if (form.checkbox4b.checked) { document.getElementById('label4b').style.color = "#f00"; }
      if (form.checkbox4c.checked) { document.getElementById('label4c').style.color = "#f00"; }
      if (form.checkbox4d.checked) { document.getElementById('label4d').style.color = "#f00"; }
      if (form.checkbox4e.checked) { document.getElementById('label4e').style.color = "#f00"; }
      }
  if (form.checkbox5a.checked) {
    a++; }
  else {
      e++;
      if (form.checkbox5b.checked) { document.getElementById('label5b').style.color = "#f00"; }
      if (form.checkbox5c.checked) { document.getElementById('label5c').style.color = "#f00"; }
      if (form.checkbox5d.checked) { document.getElementById('label5d').style.color = "#f00"; }
      if (form.checkbox5e.checked) { document.getElementById('label5e').style.color = "#f00"; }
      }
  if (form.checkbox6e.checked) {
    a++; }
  else {
      e++;
      if (form.checkbox6a.checked) { document.getElementById('label6a').style.color = "#f00"; }
      if (form.checkbox6b.checked) { document.getElementById('label6b').style.color = "#f00"; }
      if (form.checkbox6c.checked) { document.getElementById('label6c').style.color = "#f00"; }
      if (form.checkbox6d.checked) { document.getElementById('label6d').style.color = "#f00"; }
      }
  if (form.checkbox7a.checked) {
    a++; }
  else {
      e++;
      if (form.checkbox7b.checked) { document.getElementById('label7b').style.color = "#f00"; }
      if (form.checkbox7c.checked) { document.getElementById('label7c').style.color = "#f00"; }
      if (form.checkbox7d.checked) { document.getElementById('label7d').style.color = "#f00"; }
      if (form.checkbox7e.checked) { document.getElementById('label7e').style.color = "#f00"; }
      }
  if (form.checkbox8b.checked) {
    a++; }
  else{
      e++;
      if (form.checkbox8a.checked) { document.getElementById('label8a').style.color = "#f00"; }
      if (form.checkbox8c.checked) { document.getElementById('label8c').style.color = "#f00"; }
      if (form.checkbox8d.checked) { document.getElementById('label8d').style.color = "#f00"; }
      if (form.checkbox8e.checked) { document.getElementById('label8e').style.color = "#f00"; }
      }
  if (form.checkbox9c.checked) {
    a++; } 
  else {
      e++;
      if (form.checkbox9a.checked) { document.getElementById('label9a').style.color = "#f00"; }
      if (form.checkbox9b.checked) { document.getElementById('label9b').style.color = "#f00"; }
      if (form.checkbox9d.checked) { document.getElementById('label9d').style.color = "#f00"; }
      if (form.checkbox9e.checked) { document.getElementById('label9e').style.color = "#f00"; }
      }
  if (form.checkbox10e.checked) {
    a++; }
  else {
      e++;
      if (form.checkbox10a.checked) { document.getElementById('label10a').style.color = "#f00"; }
      if (form.checkbox10b.checked) { document.getElementById('label10b').style.color = "#f00"; }
      if (form.checkbox10c.checked) { document.getElementById('label10c').style.color = "#f00"; }
      if (form.checkbox10d.checked) { document.getElementById('label10d').style.color = "#f00"; }
      }
  alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNumero de errores: '+e);
  return false;
}

function restoreformSol() {
  
  document.getElementById('label1a').style.color = "#fff";
  document.getElementById('label1b').style.color = "#fff";
  document.getElementById('label1c').style.color = "#fff";
  document.getElementById('label1e').style.color = "#fff";
  
  document.getElementById('label2a').style.color = "#fff";
  document.getElementById('label2c').style.color = "#fff";
  document.getElementById('label2d').style.color = "#fff";
  document.getElementById('label2e').style.color = "#fff";
  
  document.getElementById('label3a').style.color = "#fff";
  document.getElementById('label3b').style.color = "#fff";
  document.getElementById('label3c').style.color = "#fff";
  document.getElementById('label3d').style.color = "#fff";
  
  document.getElementById('label4b').style.color = "#fff";
  document.getElementById('label4c').style.color = "#fff";
  document.getElementById('label4d').style.color = "#fff";
  document.getElementById('label4e').style.color = "#fff";
  
  document.getElementById('label5b').style.color = "#fff";
  document.getElementById('label5c').style.color = "#fff";
  document.getElementById('label5d').style.color = "#fff";
  document.getElementById('label5e').style.color = "#fff";
  
  document.getElementById('label6a').style.color = "#fff";
  document.getElementById('label6b').style.color = "#fff";
  document.getElementById('label6c').style.color = "#fff";
  document.getElementById('label6d').style.color = "#fff";
  
  document.getElementById('label7b').style.color = "#fff";
  document.getElementById('label7c').style.color = "#fff";
  document.getElementById('label7d').style.color = "#fff";
  document.getElementById('label7e').style.color = "#fff";
  
  document.getElementById('label8a').style.color = "#fff";
  document.getElementById('label8c').style.color = "#fff";
  document.getElementById('label8d').style.color = "#fff";
  document.getElementById('label8e').style.color = "#fff";
  
  document.getElementById('label9a').style.color = "#fff";
  document.getElementById('label9b').style.color = "#fff";
  document.getElementById('label9d').style.color = "#fff";
  document.getElementById('label9e').style.color = "#fff";
  
  document.getElementById('label10a').style.color = "#fff";
  document.getElementById('label10b').style.color = "#fff";
  document.getElementById('label10c').style.color = "#fff";
  document.getElementById('label10d').style.color = "#fff";
}

function calificarSimuA() {
  var form = document.getElementById('examFormA');
  var nombre = form.medico.value;
  var a = 0;//aciertos
  var e = 0;//errores
  
if (form.checkboxA1b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA1a.checked) { document.getElementById('labelA1a').style.color = '#f00'; }
      if (form.checkboxA1c.checked) { document.getElementById('labelA1c').style.color = '#f00'; }
      if (form.checkboxA1d.checked) { document.getElementById('labelA1d').style.color = '#f00'; }
      if (form.checkboxA1e.checked) { document.getElementById('labelA1e').style.color = '#f00'; }
    }
if (form.checkboxA2b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA2a.checked) { document.getElementById('labelA2a').style.color = '#f00'; }
      if (form.checkboxA2c.checked) { document.getElementById('labelA2c').style.color = '#f00'; }
      if (form.checkboxA2d.checked) { document.getElementById('labelA2d').style.color = '#f00'; }
      if (form.checkboxA2e.checked) { document.getElementById('labelA2e').style.color = '#f00'; }
    }
if (form.checkboxA3d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA3a.checked) { document.getElementById('labelA3a').style.color = '#f00'; }
      if (form.checkboxA3b.checked) { document.getElementById('labelA3b').style.color = '#f00'; }
      if (form.checkboxA3c.checked) { document.getElementById('labelA3c').style.color = '#f00'; }

      if (form.checkboxA3e.checked) { document.getElementById('labelA3e').style.color = '#f00'; }
    }
if (form.checkboxA4c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA4a.checked) { document.getElementById('labelA4a').style.color = '#f00'; }
      if (form.checkboxA4b.checked) { document.getElementById('labelA4b').style.color = '#f00'; }

      if (form.checkboxA4d.checked) { document.getElementById('labelA4d').style.color = '#f00'; }
      if (form.checkboxA4e.checked) { document.getElementById('labelA4e').style.color = '#f00'; }
    }
if (form.checkboxA5c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA5a.checked) { document.getElementById('labelA5a').style.color = '#f00'; }
      if (form.checkboxA5b.checked) { document.getElementById('labelA5b').style.color = '#f00'; }

      if (form.checkboxA5d.checked) { document.getElementById('labelA5d').style.color = '#f00'; }
      if (form.checkboxA5e.checked) { document.getElementById('labelA5e').style.color = '#f00'; }
    }
if (form.checkboxA6b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA6a.checked) { document.getElementById('labelA6a').style.color = '#f00'; }

      if (form.checkboxA6c.checked) { document.getElementById('labelA6c').style.color = '#f00'; }
      if (form.checkboxA6d.checked) { document.getElementById('labelA6d').style.color = '#f00'; }
      if (form.checkboxA6e.checked) { document.getElementById('labelA6e').style.color = '#f00'; }
    }
if (form.checkboxA7d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA7a.checked) { document.getElementById('labelA7a').style.color = '#f00'; }
      if (form.checkboxA7b.checked) { document.getElementById('labelA7b').style.color = '#f00'; }
      if (form.checkboxA7c.checked) { document.getElementById('labelA7c').style.color = '#f00'; }

      if (form.checkboxA7e.checked) { document.getElementById('labelA7e').style.color = '#f00'; }
    }
if (form.checkboxA8c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA8a.checked) { document.getElementById('labelA8a').style.color = '#f00'; }
      if (form.checkboxA8b.checked) { document.getElementById('labelA8b').style.color = '#f00'; }

      if (form.checkboxA8d.checked) { document.getElementById('labelA8d').style.color = '#f00'; }
      if (form.checkboxA8e.checked) { document.getElementById('labelA8e').style.color = '#f00'; }
    }
if (form.checkboxA9d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA9a.checked) { document.getElementById('labelA9a').style.color = '#f00'; }
      if (form.checkboxA9b.checked) { document.getElementById('labelA9b').style.color = '#f00'; }
      if (form.checkboxA9c.checked) { document.getElementById('labelA9c').style.color = '#f00'; }

      if (form.checkboxA9e.checked) { document.getElementById('labelA9e').style.color = '#f00'; }
    }
if (form.checkboxA10d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA10a.checked) { document.getElementById('labelA10a').style.color = '#f00'; }
      if (form.checkboxA10b.checked) { document.getElementById('labelA10b').style.color = '#f00'; }
      if (form.checkboxA10c.checked) { document.getElementById('labelA10c').style.color = '#f00'; }
  
      if (form.checkboxA10e.checked) { document.getElementById('labelA10e').style.color = '#f00'; }
    }
if (form.checkboxA11b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA11a.checked) { document.getElementById('labelA11a').style.color = '#f00'; }
   
      if (form.checkboxA11c.checked) { document.getElementById('labelA11c').style.color = '#f00'; }
      if (form.checkboxA11d.checked) { document.getElementById('labelA11d').style.color = '#f00'; }
      if (form.checkboxA11e.checked) { document.getElementById('labelA11e').style.color = '#f00'; }
    }
if (form.checkboxA12d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA12a.checked) { document.getElementById('labelA12a').style.color = '#f00'; }
      if (form.checkboxA12b.checked) { document.getElementById('labelA12b').style.color = '#f00'; }
      if (form.checkboxA12c.checked) { document.getElementById('labelA12c').style.color = '#f00'; }

      if (form.checkboxA12e.checked) { document.getElementById('labelA12e').style.color = '#f00'; }
    }
if (form.checkboxA13b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA13a.checked) { document.getElementById('labelA13a').style.color = '#f00'; }

      if (form.checkboxA13c.checked) { document.getElementById('labelA13c').style.color = '#f00'; }
      if (form.checkboxA13d.checked) { document.getElementById('labelA13d').style.color = '#f00'; }
      if (form.checkboxA13e.checked) { document.getElementById('labelA13e').style.color = '#f00'; }
    }
if (form.checkboxA14d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA14a.checked) { document.getElementById('labelA14a').style.color = '#f00'; }
      if (form.checkboxA14b.checked) { document.getElementById('labelA14b').style.color = '#f00'; }
      if (form.checkboxA14c.checked) { document.getElementById('labelA14c').style.color = '#f00'; }

      if (form.checkboxA14e.checked) { document.getElementById('labelA14e').style.color = '#f00'; }
    }
if (form.checkboxA15d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA15a.checked) { document.getElementById('labelA15a').style.color = '#f00'; }
      if (form.checkboxA15b.checked) { document.getElementById('labelA15b').style.color = '#f00'; }
      if (form.checkboxA15c.checked) { document.getElementById('labelA15c').style.color = '#f00'; }

      if (form.checkboxA15e.checked) { document.getElementById('labelA15e').style.color = '#f00'; }
    }
if (form.checkboxA16c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA16a.checked) { document.getElementById('labelA16a').style.color = '#f00'; }
      if (form.checkboxA16b.checked) { document.getElementById('labelA16b').style.color = '#f00'; }

      if (form.checkboxA16d.checked) { document.getElementById('labelA16d').style.color = '#f00'; }
      if (form.checkboxA16e.checked) { document.getElementById('labelA16e').style.color = '#f00'; }
    }
if (form.checkboxA17c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA17a.checked) { document.getElementById('labelA17a').style.color = '#f00'; }
      if (form.checkboxA17b.checked) { document.getElementById('labelA17b').style.color = '#f00'; }

      if (form.checkboxA17d.checked) { document.getElementById('labelA17d').style.color = '#f00'; }
      if (form.checkboxA17e.checked) { document.getElementById('labelA17e').style.color = '#f00'; }
    }
if (form.checkboxA18b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA18a.checked) { document.getElementById('labelA18a').style.color = '#f00'; }
  
      if (form.checkboxA18c.checked) { document.getElementById('labelA18c').style.color = '#f00'; }
      if (form.checkboxA18d.checked) { document.getElementById('labelA18d').style.color = '#f00'; }
      if (form.checkboxA18e.checked) { document.getElementById('labelA18e').style.color = '#f00'; }
    }
if (form.checkboxA19d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA19a.checked) { document.getElementById('labelA19a').style.color = '#f00'; }
      if (form.checkboxA19b.checked) { document.getElementById('labelA19b').style.color = '#f00'; }
      if (form.checkboxA19c.checked) { document.getElementById('labelA19c').style.color = '#f00'; }
  
      if (form.checkboxA19e.checked) { document.getElementById('labelA19e').style.color = '#f00'; }
    }
if (form.checkboxA20a.checked) {
    a++; 
    } else {
      e++;

      if (form.checkboxA20b.checked) { document.getElementById('labelA20b').style.color = '#f00'; }
      if (form.checkboxA20c.checked) { document.getElementById('labelA20c').style.color = '#f00'; }
      if (form.checkboxA20d.checked) { document.getElementById('labelA20d').style.color = '#f00'; }
      if (form.checkboxA20e.checked) { document.getElementById('labelA20e').style.color = '#f00'; }
    }
if (form.checkboxA21b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA21a.checked) { document.getElementById('labelA21a').style.color = '#f00'; }

      if (form.checkboxA21c.checked) { document.getElementById('labelA21c').style.color = '#f00'; }
      if (form.checkboxA21d.checked) { document.getElementById('labelA21d').style.color = '#f00'; }
      if (form.checkboxA21e.checked) { document.getElementById('labelA21e').style.color = '#f00'; }
    }
if (form.checkboxA22c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA22a.checked) { document.getElementById('labelA22a').style.color = '#f00'; }
      if (form.checkboxA22b.checked) { document.getElementById('labelA22b').style.color = '#f00'; }

      if (form.checkboxA22d.checked) { document.getElementById('labelA22d').style.color = '#f00'; }
      if (form.checkboxA22e.checked) { document.getElementById('labelA22e').style.color = '#f00'; }
    }
if (form.checkboxA23b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA23a.checked) { document.getElementById('labelA23a').style.color = '#f00'; }

      if (form.checkboxA23c.checked) { document.getElementById('labelA23c').style.color = '#f00'; }
      if (form.checkboxA23d.checked) { document.getElementById('labelA23d').style.color = '#f00'; }
      if (form.checkboxA23e.checked) { document.getElementById('labelA23e').style.color = '#f00'; }
    }
if (form.checkboxA24e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA24a.checked) { document.getElementById('labelA24a').style.color = '#f00'; }
      if (form.checkboxA24b.checked) { document.getElementById('labelA24b').style.color = '#f00'; }
      if (form.checkboxA24c.checked) { document.getElementById('labelA24c').style.color = '#f00'; }
      if (form.checkboxA24d.checked) { document.getElementById('labelA24d').style.color = '#f00'; }

    }
if (form.checkboxA25d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA25a.checked) { document.getElementById('labelA25a').style.color = '#f00'; }
      if (form.checkboxA25b.checked) { document.getElementById('labelA25b').style.color = '#f00'; }
      if (form.checkboxA25c.checked) { document.getElementById('labelA25c').style.color = '#f00'; }

      if (form.checkboxA25e.checked) { document.getElementById('labelA25e').style.color = '#f00'; }
    }
if (form.checkboxA26c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA26a.checked) { document.getElementById('labelA26a').style.color = '#f00'; }
      if (form.checkboxA26b.checked) { document.getElementById('labelA26b').style.color = '#f00'; }

      if (form.checkboxA26d.checked) { document.getElementById('labelA26d').style.color = '#f00'; }
      if (form.checkboxA26e.checked) { document.getElementById('labelA26e').style.color = '#f00'; }
    }
if (form.checkboxA27a.checked) {
    a++; 
    } else {
      e++;

      if (form.checkboxA27b.checked) { document.getElementById('labelA27b').style.color = '#f00'; }
      if (form.checkboxA27c.checked) { document.getElementById('labelA27c').style.color = '#f00'; }
      if (form.checkboxA27d.checked) { document.getElementById('labelA27d').style.color = '#f00'; }
      if (form.checkboxA27e.checked) { document.getElementById('labelA27e').style.color = '#f00'; }
    }
if (form.checkboxA28e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA28a.checked) { document.getElementById('labelA28a').style.color = '#f00'; }
      if (form.checkboxA28b.checked) { document.getElementById('labelA28b').style.color = '#f00'; }
      if (form.checkboxA28c.checked) { document.getElementById('labelA28c').style.color = '#f00'; }
      if (form.checkboxA28d.checked) { document.getElementById('labelA28d').style.color = '#f00'; }

    }
if (form.checkboxA29c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA29a.checked) { document.getElementById('labelA29a').style.color = '#f00'; }
      if (form.checkboxA29b.checked) { document.getElementById('labelA29b').style.color = '#f00'; }
 
      if (form.checkboxA29d.checked) { document.getElementById('labelA29d').style.color = '#f00'; }
      if (form.checkboxA29e.checked) { document.getElementById('labelA29e').style.color = '#f00'; }
    }
if (form.checkboxA30e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA30a.checked) { document.getElementById('labelA30a').style.color = '#f00'; }
      if (form.checkboxA30b.checked) { document.getElementById('labelA30b').style.color = '#f00'; }
      if (form.checkboxA30c.checked) { document.getElementById('labelA30c').style.color = '#f00'; }
      if (form.checkboxA30d.checked) { document.getElementById('labelA30d').style.color = '#f00'; }
  
    }
if (form.checkboxA31a.checked) {
    a++; 
    } else {
      e++;
   
      if (form.checkboxA31b.checked) { document.getElementById('labelA31b').style.color = '#f00'; }
      if (form.checkboxA31c.checked) { document.getElementById('labelA31c').style.color = '#f00'; }
      if (form.checkboxA31d.checked) { document.getElementById('labelA31d').style.color = '#f00'; }
      if (form.checkboxA31e.checked) { document.getElementById('labelA31e').style.color = '#f00'; }
    }
if (form.checkboxA32c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA32a.checked) { document.getElementById('labelA32a').style.color = '#f00'; }
      if (form.checkboxA32b.checked) { document.getElementById('labelA32b').style.color = '#f00'; }
    
      if (form.checkboxA32d.checked) { document.getElementById('labelA32d').style.color = '#f00'; }
      if (form.checkboxA32e.checked) { document.getElementById('labelA32e').style.color = '#f00'; }
    }
if (form.checkboxA33a.checked) {
    a++; 
    } else {
      e++;
  
      if (form.checkboxA33b.checked) { document.getElementById('labelA33b').style.color = '#f00'; }
      if (form.checkboxA33c.checked) { document.getElementById('labelA33c').style.color = '#f00'; }
      if (form.checkboxA33d.checked) { document.getElementById('labelA33d').style.color = '#f00'; }
      if (form.checkboxA33e.checked) { document.getElementById('labelA33e').style.color = '#f00'; }
    }
if (form.checkboxA34c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA34a.checked) { document.getElementById('labelA34a').style.color = '#f00'; }
      if (form.checkboxA34b.checked) { document.getElementById('labelA34b').style.color = '#f00'; }

      if (form.checkboxA34d.checked) { document.getElementById('labelA34d').style.color = '#f00'; }
      if (form.checkboxA34e.checked) { document.getElementById('labelA34e').style.color = '#f00'; }
    }
if (form.checkboxA35d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA35a.checked) { document.getElementById('labelA35a').style.color = '#f00'; }
      if (form.checkboxA35b.checked) { document.getElementById('labelA35b').style.color = '#f00'; }
      if (form.checkboxA35c.checked) { document.getElementById('labelA35c').style.color = '#f00'; }
     
      if (form.checkboxA35e.checked) { document.getElementById('labelA35e').style.color = '#f00'; }
    }
if (form.checkboxA36d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA36a.checked) { document.getElementById('labelA36a').style.color = '#f00'; }
      if (form.checkboxA36b.checked) { document.getElementById('labelA36b').style.color = '#f00'; }
      if (form.checkboxA36c.checked) { document.getElementById('labelA36c').style.color = '#f00'; }
   
      if (form.checkboxA36e.checked) { document.getElementById('labelA36e').style.color = '#f00'; }
    }
if (form.checkboxA37e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA37a.checked) { document.getElementById('labelA37a').style.color = '#f00'; }
      if (form.checkboxA37b.checked) { document.getElementById('labelA37b').style.color = '#f00'; }
      if (form.checkboxA37c.checked) { document.getElementById('labelA37c').style.color = '#f00'; }
      if (form.checkboxA37d.checked) { document.getElementById('labelA37d').style.color = '#f00'; }
     
    }
if (form.checkboxA38c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA38a.checked) { document.getElementById('labelA38a').style.color = '#f00'; }
      if (form.checkboxA38b.checked) { document.getElementById('labelA38b').style.color = '#f00'; }
      
      if (form.checkboxA38d.checked) { document.getElementById('labelA38d').style.color = '#f00'; }
      if (form.checkboxA38e.checked) { document.getElementById('labelA38e').style.color = '#f00'; }
    }
if (form.checkboxA39e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA39a.checked) { document.getElementById('labelA39a').style.color = '#f00'; }
      if (form.checkboxA39b.checked) { document.getElementById('labelA39b').style.color = '#f00'; }
      if (form.checkboxA39c.checked) { document.getElementById('labelA39c').style.color = '#f00'; }
      if (form.checkboxA39d.checked) { document.getElementById('labelA39d').style.color = '#f00'; }

    }
if (form.checkboxA40d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA40a.checked) { document.getElementById('labelA40a').style.color = '#f00'; }
      if (form.checkboxA40b.checked) { document.getElementById('labelA40b').style.color = '#f00'; }
      if (form.checkboxA40c.checked) { document.getElementById('labelA40c').style.color = '#f00'; }
     
      if (form.checkboxA40e.checked) { document.getElementById('labelA40e').style.color = '#f00'; }
    }
if (form.checkboxA41a.checked) {
    a++; 
    } else {
      e++;
      
      if (form.checkboxA41b.checked) { document.getElementById('labelA41b').style.color = '#f00'; }
      if (form.checkboxA41c.checked) { document.getElementById('labelA41c').style.color = '#f00'; }
      if (form.checkboxA41d.checked) { document.getElementById('labelA41d').style.color = '#f00'; }
      if (form.checkboxA41e.checked) { document.getElementById('labelA41e').style.color = '#f00'; }
    }
if (form.checkboxA42b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA42a.checked) { document.getElementById('labelA42a').style.color = '#f00'; }

      if (form.checkboxA42c.checked) { document.getElementById('labelA42c').style.color = '#f00'; }
      if (form.checkboxA42d.checked) { document.getElementById('labelA42d').style.color = '#f00'; }
      if (form.checkboxA42e.checked) { document.getElementById('labelA42e').style.color = '#f00'; }
    }
if (form.checkboxA43c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA43a.checked) { document.getElementById('labelA43a').style.color = '#f00'; }
      if (form.checkboxA43b.checked) { document.getElementById('labelA43b').style.color = '#f00'; }
     
      if (form.checkboxA43d.checked) { document.getElementById('labelA43d').style.color = '#f00'; }
      if (form.checkboxA43e.checked) { document.getElementById('labelA43e').style.color = '#f00'; }
    }
if (form.checkboxA44a.checked) {
    a++; 
    } else {
      e++;
    
      if (form.checkboxA44b.checked) { document.getElementById('labelA44b').style.color = '#f00'; }
      if (form.checkboxA44c.checked) { document.getElementById('labelA44c').style.color = '#f00'; }
      if (form.checkboxA44d.checked) { document.getElementById('labelA44d').style.color = '#f00'; }
      if (form.checkboxA44e.checked) { document.getElementById('labelA44e').style.color = '#f00'; }
    }
if (form.checkboxA45a.checked) {
    a++; 
    } else {
      e++;
     
      if (form.checkboxA45b.checked) { document.getElementById('labelA45b').style.color = '#f00'; }
      if (form.checkboxA45c.checked) { document.getElementById('labelA45c').style.color = '#f00'; }
      if (form.checkboxA45d.checked) { document.getElementById('labelA45d').style.color = '#f00'; }
      if (form.checkboxA45e.checked) { document.getElementById('labelA45e').style.color = '#f00'; }
    }
if (form.checkboxA46e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA46a.checked) { document.getElementById('labelA46a').style.color = '#f00'; }
      if (form.checkboxA46b.checked) { document.getElementById('labelA46b').style.color = '#f00'; }
      if (form.checkboxA46c.checked) { document.getElementById('labelA46c').style.color = '#f00'; }
      if (form.checkboxA46d.checked) { document.getElementById('labelA46d').style.color = '#f00'; }

    }
if (form.checkboxA47a.checked) {
    a++; 
    } else {
      e++;
      
      if (form.checkboxA47b.checked) { document.getElementById('labelA47b').style.color = '#f00'; }
      if (form.checkboxA47c.checked) { document.getElementById('labelA47c').style.color = '#f00'; }
      if (form.checkboxA47d.checked) { document.getElementById('labelA47d').style.color = '#f00'; }
      if (form.checkboxA47e.checked) { document.getElementById('labelA47e').style.color = '#f00'; }
    }
if (form.checkboxA48d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA48a.checked) { document.getElementById('labelA48a').style.color = '#f00'; }
      if (form.checkboxA48b.checked) { document.getElementById('labelA48b').style.color = '#f00'; }
      if (form.checkboxA48c.checked) { document.getElementById('labelA48c').style.color = '#f00'; }
    
      if (form.checkboxA48e.checked) { document.getElementById('labelA48e').style.color = '#f00'; }
    }
if (form.checkboxA49c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA49a.checked) { document.getElementById('labelA49a').style.color = '#f00'; }
      if (form.checkboxA49b.checked) { document.getElementById('labelA49b').style.color = '#f00'; }
  
      if (form.checkboxA49d.checked) { document.getElementById('labelA49d').style.color = '#f00'; }
      if (form.checkboxA49e.checked) { document.getElementById('labelA49e').style.color = '#f00'; }
    }
if (form.checkboxA50b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA50a.checked) { document.getElementById('labelA50a').style.color = '#f00'; }

      if (form.checkboxA50c.checked) { document.getElementById('labelA50c').style.color = '#f00'; }
      if (form.checkboxA50d.checked) { document.getElementById('labelA50d').style.color = '#f00'; }
      if (form.checkboxA50e.checked) { document.getElementById('labelA50e').style.color = '#f00'; }
    }
if (form.checkboxA51b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA51a.checked) { document.getElementById('labelA51a').style.color = '#f00'; }
     
      if (form.checkboxA51c.checked) { document.getElementById('labelA51c').style.color = '#f00'; }
      if (form.checkboxA51d.checked) { document.getElementById('labelA51d').style.color = '#f00'; }
      if (form.checkboxA51e.checked) { document.getElementById('labelA51e').style.color = '#f00'; }
    }
if (form.checkboxA52d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA52a.checked) { document.getElementById('labelA52a').style.color = '#f00'; }
      if (form.checkboxA52b.checked) { document.getElementById('labelA52b').style.color = '#f00'; }
      if (form.checkboxA52c.checked) { document.getElementById('labelA52c').style.color = '#f00'; }

      if (form.checkboxA52e.checked) { document.getElementById('labelA52e').style.color = '#f00'; }
    }
if (form.checkboxA53e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA53a.checked) { document.getElementById('labelA53a').style.color = '#f00'; }
      if (form.checkboxA53b.checked) { document.getElementById('labelA53b').style.color = '#f00'; }
      if (form.checkboxA53c.checked) { document.getElementById('labelA53c').style.color = '#f00'; }
      if (form.checkboxA53d.checked) { document.getElementById('labelA53d').style.color = '#f00'; }
    
    }
if (form.checkboxA54d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA54a.checked) { document.getElementById('labelA54a').style.color = '#f00'; }
      if (form.checkboxA54b.checked) { document.getElementById('labelA54b').style.color = '#f00'; }
      if (form.checkboxA54c.checked) { document.getElementById('labelA54c').style.color = '#f00'; }
   
      if (form.checkboxA54e.checked) { document.getElementById('labelA54e').style.color = '#f00'; }
    }
if (form.checkboxA55c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA55a.checked) { document.getElementById('labelA55a').style.color = '#f00'; }
      if (form.checkboxA55b.checked) { document.getElementById('labelA55b').style.color = '#f00'; }
  
      if (form.checkboxA55d.checked) { document.getElementById('labelA55d').style.color = '#f00'; }
      if (form.checkboxA55e.checked) { document.getElementById('labelA55e').style.color = '#f00'; }
    }
if (form.checkboxA56e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA56a.checked) { document.getElementById('labelA56a').style.color = '#f00'; }
      if (form.checkboxA56b.checked) { document.getElementById('labelA56b').style.color = '#f00'; }
      if (form.checkboxA56c.checked) { document.getElementById('labelA56c').style.color = '#f00'; }
      if (form.checkboxA56d.checked) { document.getElementById('labelA56d').style.color = '#f00'; }

    }
if (form.checkboxA57a.checked) {
    a++; 
    } else {
      e++;
     
      if (form.checkboxA57b.checked) { document.getElementById('labelA57b').style.color = '#f00'; }
      if (form.checkboxA57c.checked) { document.getElementById('labelA57c').style.color = '#f00'; }
      if (form.checkboxA57d.checked) { document.getElementById('labelA57d').style.color = '#f00'; }
      if (form.checkboxA57e.checked) { document.getElementById('labelA57e').style.color = '#f00'; }
    }
if (form.checkboxA58d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA58a.checked) { document.getElementById('labelA58a').style.color = '#f00'; }
      if (form.checkboxA58b.checked) { document.getElementById('labelA58b').style.color = '#f00'; }
      if (form.checkboxA58c.checked) { document.getElementById('labelA58c').style.color = '#f00'; }
    
      if (form.checkboxA58e.checked) { document.getElementById('labelA58e').style.color = '#f00'; }
    }
if (form.checkboxA59a.checked) {
    a++; 
    } else {
      e++;
   
      if (form.checkboxA59b.checked) { document.getElementById('labelA59b').style.color = '#f00'; }
      if (form.checkboxA59c.checked) { document.getElementById('labelA59c').style.color = '#f00'; }
      if (form.checkboxA59d.checked) { document.getElementById('labelA59d').style.color = '#f00'; }
      if (form.checkboxA59e.checked) { document.getElementById('labelA59e').style.color = '#f00'; }
    }
if (form.checkboxA60c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA60a.checked) { document.getElementById('labelA60a').style.color = '#f00'; }
      if (form.checkboxA60b.checked) { document.getElementById('labelA60b').style.color = '#f00'; }
 
      if (form.checkboxA60d.checked) { document.getElementById('labelA60d').style.color = '#f00'; }
      if (form.checkboxA60e.checked) { document.getElementById('labelA60e').style.color = '#f00'; }
    }
if (form.checkboxA61a.checked) {
    a++; 
    } else {
      e++;
    
      if (form.checkboxA61b.checked) { document.getElementById('labelA61b').style.color = '#f00'; }
      if (form.checkboxA61c.checked) { document.getElementById('labelA61c').style.color = '#f00'; }
      if (form.checkboxA61d.checked) { document.getElementById('labelA61d').style.color = '#f00'; }
      if (form.checkboxA61e.checked) { document.getElementById('labelA61e').style.color = '#f00'; }
    }
if (form.checkboxA62e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA62a.checked) { document.getElementById('labelA62a').style.color = '#f00'; }
      if (form.checkboxA62b.checked) { document.getElementById('labelA62b').style.color = '#f00'; }
      if (form.checkboxA62c.checked) { document.getElementById('labelA62c').style.color = '#f00'; }
      if (form.checkboxA62d.checked) { document.getElementById('labelA62d').style.color = '#f00'; }
     
    }
if (form.checkboxA63d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA63a.checked) { document.getElementById('labelA63a').style.color = '#f00'; }
      if (form.checkboxA63b.checked) { document.getElementById('labelA63b').style.color = '#f00'; }
      if (form.checkboxA63c.checked) { document.getElementById('labelA63c').style.color = '#f00'; }
      
      if (form.checkboxA63e.checked) { document.getElementById('labelA63e').style.color = '#f00'; }
    }
if (form.checkboxA64c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA64a.checked) { document.getElementById('labelA64a').style.color = '#f00'; }
      if (form.checkboxA64b.checked) { document.getElementById('labelA64b').style.color = '#f00'; }

      if (form.checkboxA64d.checked) { document.getElementById('labelA64d').style.color = '#f00'; }
      if (form.checkboxA64e.checked) { document.getElementById('labelA64e').style.color = '#f00'; }
    }
if (form.checkboxA65a.checked) {
    a++; 
    } else {
      e++;
  
      if (form.checkboxA65b.checked) { document.getElementById('labelA65b').style.color = '#f00'; }
      if (form.checkboxA65c.checked) { document.getElementById('labelA65c').style.color = '#f00'; }
      if (form.checkboxA65d.checked) { document.getElementById('labelA65d').style.color = '#f00'; }
      if (form.checkboxA65e.checked) { document.getElementById('labelA65e').style.color = '#f00'; }
    }
if (form.checkboxA66a.checked) {
    a++; 
    } else {
      e++;
 
      if (form.checkboxA66b.checked) { document.getElementById('labelA66b').style.color = '#f00'; }
      if (form.checkboxA66c.checked) { document.getElementById('labelA66c').style.color = '#f00'; }
      if (form.checkboxA66d.checked) { document.getElementById('labelA66d').style.color = '#f00'; }
      if (form.checkboxA66e.checked) { document.getElementById('labelA66e').style.color = '#f00'; }
    }
if (form.checkboxA67a.checked) {
    a++; 
    } else {
      e++;
   
      if (form.checkboxA67b.checked) { document.getElementById('labelA67b').style.color = '#f00'; }
      if (form.checkboxA67c.checked) { document.getElementById('labelA67c').style.color = '#f00'; }
      if (form.checkboxA67d.checked) { document.getElementById('labelA67d').style.color = '#f00'; }
      if (form.checkboxA67e.checked) { document.getElementById('labelA67e').style.color = '#f00'; }
    }
if (form.checkboxA68d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA68a.checked) { document.getElementById('labelA68a').style.color = '#f00'; }
      if (form.checkboxA68b.checked) { document.getElementById('labelA68b').style.color = '#f00'; }
      if (form.checkboxA68c.checked) { document.getElementById('labelA68c').style.color = '#f00'; }
    
      if (form.checkboxA68e.checked) { document.getElementById('labelA68e').style.color = '#f00'; }
    }
if (form.checkboxA69d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA69a.checked) { document.getElementById('labelA69a').style.color = '#f00'; }
      if (form.checkboxA69b.checked) { document.getElementById('labelA69b').style.color = '#f00'; }
      if (form.checkboxA69c.checked) { document.getElementById('labelA69c').style.color = '#f00'; }
     
      if (form.checkboxA69e.checked) { document.getElementById('labelA69e').style.color = '#f00'; }
    }
if (form.checkboxA70b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA70a.checked) { document.getElementById('labelA70a').style.color = '#f00'; }
    
      if (form.checkboxA70c.checked) { document.getElementById('labelA70c').style.color = '#f00'; }
      if (form.checkboxA70d.checked) { document.getElementById('labelA70d').style.color = '#f00'; }
      if (form.checkboxA70e.checked) { document.getElementById('labelA70e').style.color = '#f00'; }
    }
if (form.checkboxA71b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA71a.checked) { document.getElementById('labelA71a').style.color = '#f00'; }
 
      if (form.checkboxA71c.checked) { document.getElementById('labelA71c').style.color = '#f00'; }
      if (form.checkboxA71d.checked) { document.getElementById('labelA71d').style.color = '#f00'; }
      if (form.checkboxA71e.checked) { document.getElementById('labelA71e').style.color = '#f00'; }
    }
if (form.checkboxA72a.checked) {
    a++; 
    } else {
      e++;
    
      if (form.checkboxA72b.checked) { document.getElementById('labelA72b').style.color = '#f00'; }
      if (form.checkboxA72c.checked) { document.getElementById('labelA72c').style.color = '#f00'; }
      if (form.checkboxA72d.checked) { document.getElementById('labelA72d').style.color = '#f00'; }
      if (form.checkboxA72e.checked) { document.getElementById('labelA72e').style.color = '#f00'; }
    }
if (form.checkboxA73d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA73a.checked) { document.getElementById('labelA73a').style.color = '#f00'; }
      if (form.checkboxA73b.checked) { document.getElementById('labelA73b').style.color = '#f00'; }
      if (form.checkboxA73c.checked) { document.getElementById('labelA73c').style.color = '#f00'; }
    
      if (form.checkboxA73e.checked) { document.getElementById('labelA73e').style.color = '#f00'; }
    }
if (form.checkboxA74b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA74a.checked) { document.getElementById('labelA74a').style.color = '#f00'; }
     
      if (form.checkboxA74c.checked) { document.getElementById('labelA74c').style.color = '#f00'; }
      if (form.checkboxA74d.checked) { document.getElementById('labelA74d').style.color = '#f00'; }
      if (form.checkboxA74e.checked) { document.getElementById('labelA74e').style.color = '#f00'; }
    }
if (form.checkboxA75c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA75a.checked) { document.getElementById('labelA75a').style.color = '#f00'; }
      if (form.checkboxA75b.checked) { document.getElementById('labelA75b').style.color = '#f00'; }

      if (form.checkboxA75d.checked) { document.getElementById('labelA75d').style.color = '#f00'; }
      if (form.checkboxA75e.checked) { document.getElementById('labelA75e').style.color = '#f00'; }
    }
if (form.checkboxA76b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA76a.checked) { document.getElementById('labelA76a').style.color = '#f00'; }
 
      if (form.checkboxA76c.checked) { document.getElementById('labelA76c').style.color = '#f00'; }
      if (form.checkboxA76d.checked) { document.getElementById('labelA76d').style.color = '#f00'; }
      if (form.checkboxA76e.checked) { document.getElementById('labelA76e').style.color = '#f00'; }
    }
if (form.checkboxA77a.checked) {
    a++; 
    } else {
      e++;
  
      if (form.checkboxA77b.checked) { document.getElementById('labelA77b').style.color = '#f00'; }
      if (form.checkboxA77c.checked) { document.getElementById('labelA77c').style.color = '#f00'; }
      if (form.checkboxA77d.checked) { document.getElementById('labelA77d').style.color = '#f00'; }
      if (form.checkboxA77e.checked) { document.getElementById('labelA77e').style.color = '#f00'; }
    }
if (form.checkboxA78b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA78a.checked) { document.getElementById('labelA78a').style.color = '#f00'; }
     
      if (form.checkboxA78c.checked) { document.getElementById('labelA78c').style.color = '#f00'; }
      if (form.checkboxA78d.checked) { document.getElementById('labelA78d').style.color = '#f00'; }
      if (form.checkboxA78e.checked) { document.getElementById('labelA78e').style.color = '#f00'; }
    }
if (form.checkboxA79a.checked) {
    a++; 
    } else {
      e++;
   
      if (form.checkboxA79b.checked) { document.getElementById('labelA79b').style.color = '#f00'; }
      if (form.checkboxA79c.checked) { document.getElementById('labelA79c').style.color = '#f00'; }
      if (form.checkboxA79d.checked) { document.getElementById('labelA79d').style.color = '#f00'; }
      if (form.checkboxA79e.checked) { document.getElementById('labelA79e').style.color = '#f00'; }
    }
if (form.checkboxA80c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA80a.checked) { document.getElementById('labelA80a').style.color = '#f00'; }
      if (form.checkboxA80b.checked) { document.getElementById('labelA80b').style.color = '#f00'; }
     
      if (form.checkboxA80d.checked) { document.getElementById('labelA80d').style.color = '#f00'; }
      if (form.checkboxA80e.checked) { document.getElementById('labelA80e').style.color = '#f00'; }
    }
if (form.checkboxA81e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA81a.checked) { document.getElementById('labelA81a').style.color = '#f00'; }
      if (form.checkboxA81b.checked) { document.getElementById('labelA81b').style.color = '#f00'; }
      if (form.checkboxA81c.checked) { document.getElementById('labelA81c').style.color = '#f00'; }
      if (form.checkboxA81d.checked) { document.getElementById('labelA81d').style.color = '#f00'; }
 
    }
if (form.checkboxA82d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA82a.checked) { document.getElementById('labelA82a').style.color = '#f00'; }
      if (form.checkboxA82b.checked) { document.getElementById('labelA82b').style.color = '#f00'; }
      if (form.checkboxA82c.checked) { document.getElementById('labelA82c').style.color = '#f00'; }
     
      if (form.checkboxA82e.checked) { document.getElementById('labelA82e').style.color = '#f00'; }
    }
if (form.checkboxA83a.checked) {
    a++; 
    } else {
      e++;
    
      if (form.checkboxA83b.checked) { document.getElementById('labelA83b').style.color = '#f00'; }
      if (form.checkboxA83c.checked) { document.getElementById('labelA83c').style.color = '#f00'; }
      if (form.checkboxA83d.checked) { document.getElementById('labelA83d').style.color = '#f00'; }
      if (form.checkboxA83e.checked) { document.getElementById('labelA83e').style.color = '#f00'; }
    }
if (form.checkboxA84e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA84a.checked) { document.getElementById('labelA84a').style.color = '#f00'; }
      if (form.checkboxA84b.checked) { document.getElementById('labelA84b').style.color = '#f00'; }
      if (form.checkboxA84c.checked) { document.getElementById('labelA84c').style.color = '#f00'; }
      if (form.checkboxA84d.checked) { document.getElementById('labelA84d').style.color = '#f00'; }
     
    }
if (form.checkboxA85b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA85a.checked) { document.getElementById('labelA85a').style.color = '#f00'; }
  
      if (form.checkboxA85c.checked) { document.getElementById('labelA85c').style.color = '#f00'; }
      if (form.checkboxA85d.checked) { document.getElementById('labelA85d').style.color = '#f00'; }
      if (form.checkboxA85e.checked) { document.getElementById('labelA85e').style.color = '#f00'; }
    }
if (form.checkboxA86e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA86a.checked) { document.getElementById('labelA86a').style.color = '#f00'; }
      if (form.checkboxA86b.checked) { document.getElementById('labelA86b').style.color = '#f00'; }
      if (form.checkboxA86c.checked) { document.getElementById('labelA86c').style.color = '#f00'; }
      if (form.checkboxA86d.checked) { document.getElementById('labelA86d').style.color = '#f00'; }
 
    }
if (form.checkboxA87d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA87a.checked) { document.getElementById('labelA87a').style.color = '#f00'; }
      if (form.checkboxA87b.checked) { document.getElementById('labelA87b').style.color = '#f00'; }
      if (form.checkboxA87c.checked) { document.getElementById('labelA87c').style.color = '#f00'; }
   
      if (form.checkboxA87e.checked) { document.getElementById('labelA87e').style.color = '#f00'; }
    }
if (form.checkboxA88e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA88a.checked) { document.getElementById('labelA88a').style.color = '#f00'; }
      if (form.checkboxA88b.checked) { document.getElementById('labelA88b').style.color = '#f00'; }
      if (form.checkboxA88c.checked) { document.getElementById('labelA88c').style.color = '#f00'; }
      if (form.checkboxA88d.checked) { document.getElementById('labelA88d').style.color = '#f00'; }

    }
if (form.checkboxA89b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA89a.checked) { document.getElementById('labelA89a').style.color = '#f00'; }
  
      if (form.checkboxA89c.checked) { document.getElementById('labelA89c').style.color = '#f00'; }
      if (form.checkboxA89d.checked) { document.getElementById('labelA89d').style.color = '#f00'; }
      if (form.checkboxA89e.checked) { document.getElementById('labelA89e').style.color = '#f00'; }
    }
if (form.checkboxA90c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA90a.checked) { document.getElementById('labelA90a').style.color = '#f00'; }
      if (form.checkboxA90b.checked) { document.getElementById('labelA90b').style.color = '#f00'; }
   
      if (form.checkboxA90d.checked) { document.getElementById('labelA90d').style.color = '#f00'; }
      if (form.checkboxA90e.checked) { document.getElementById('labelA90e').style.color = '#f00'; }
    }
if (form.checkboxA91e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA91a.checked) { document.getElementById('labelA91a').style.color = '#f00'; }
      if (form.checkboxA91b.checked) { document.getElementById('labelA91b').style.color = '#f00'; }
      if (form.checkboxA91c.checked) { document.getElementById('labelA91c').style.color = '#f00'; }
      if (form.checkboxA91d.checked) { document.getElementById('labelA91d').style.color = '#f00'; }
  
    }
if (form.checkboxA92a.checked) {
    a++; 
    } else {
      e++;
  
      if (form.checkboxA92b.checked) { document.getElementById('labelA92b').style.color = '#f00'; }
      if (form.checkboxA92c.checked) { document.getElementById('labelA92c').style.color = '#f00'; }
      if (form.checkboxA92d.checked) { document.getElementById('labelA92d').style.color = '#f00'; }
      if (form.checkboxA92e.checked) { document.getElementById('labelA92e').style.color = '#f00'; }
    }
if (form.checkboxA93c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA93a.checked) { document.getElementById('labelA93a').style.color = '#f00'; }
      if (form.checkboxA93b.checked) { document.getElementById('labelA93b').style.color = '#f00'; }
   
      if (form.checkboxA93d.checked) { document.getElementById('labelA93d').style.color = '#f00'; }
      if (form.checkboxA93e.checked) { document.getElementById('labelA93e').style.color = '#f00'; }
    }
if (form.checkboxA94a.checked) {
    a++; 
    } else {
      e++;
    
      if (form.checkboxA94b.checked) { document.getElementById('labelA94b').style.color = '#f00'; }
      if (form.checkboxA94c.checked) { document.getElementById('labelA94c').style.color = '#f00'; }
      if (form.checkboxA94d.checked) { document.getElementById('labelA94d').style.color = '#f00'; }
      if (form.checkboxA94e.checked) { document.getElementById('labelA94e').style.color = '#f00'; }
    }
if (form.checkboxA95e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA95a.checked) { document.getElementById('labelA95a').style.color = '#f00'; }
      if (form.checkboxA95b.checked) { document.getElementById('labelA95b').style.color = '#f00'; }
      if (form.checkboxA95c.checked) { document.getElementById('labelA95c').style.color = '#f00'; }
      if (form.checkboxA95d.checked) { document.getElementById('labelA95d').style.color = '#f00'; }
  
    }
if (form.checkboxA96c.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA96a.checked) { document.getElementById('labelA96a').style.color = '#f00'; }
      if (form.checkboxA96b.checked) { document.getElementById('labelA96b').style.color = '#f00'; }
  
      if (form.checkboxA96d.checked) { document.getElementById('labelA96d').style.color = '#f00'; }
      if (form.checkboxA96e.checked) { document.getElementById('labelA96e').style.color = '#f00'; }
    }
if (form.checkboxA97e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA97a.checked) { document.getElementById('labelA97a').style.color = '#f00'; }
      if (form.checkboxA97b.checked) { document.getElementById('labelA97b').style.color = '#f00'; }
      if (form.checkboxA97c.checked) { document.getElementById('labelA97c').style.color = '#f00'; }
      if (form.checkboxA97d.checked) { document.getElementById('labelA97d').style.color = '#f00'; }
    
    }
if (form.checkboxA98d.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA98a.checked) { document.getElementById('labelA98a').style.color = '#f00'; }
      if (form.checkboxA98b.checked) { document.getElementById('labelA98b').style.color = '#f00'; }
      if (form.checkboxA98c.checked) { document.getElementById('labelA98c').style.color = '#f00'; }
     
      if (form.checkboxA98e.checked) { document.getElementById('labelA98e').style.color = '#f00'; }
    }
if (form.checkboxA99e.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA99a.checked) { document.getElementById('labelA99a').style.color = '#f00'; }
      if (form.checkboxA99b.checked) { document.getElementById('labelA99b').style.color = '#f00'; }
      if (form.checkboxA99c.checked) { document.getElementById('labelA99c').style.color = '#f00'; }
      if (form.checkboxA99d.checked) { document.getElementById('labelA99d').style.color = '#f00'; }
   
    }
if (form.checkboxA100b.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA100a.checked) { document.getElementById('labelA100a').style.color = '#f00'; }

      if (form.checkboxA100c.checked) { document.getElementById('labelA100c').style.color = '#f00'; }
      if (form.checkboxA100d.checked) { document.getElementById('labelA100d').style.color = '#f00'; }
      if (form.checkboxA100e.checked) { document.getElementById('labelA100e').style.color = '#f00'; }
    }

  
  
  alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNumero de errores: '+e);
  return false;
}

function restoreformSolA() {
  
      document.getElementById('labelA1a').style.color = '#fff';
      
      document.getElementById('labelA1c').style.color = '#fff';
      document.getElementById('labelA1d').style.color = '#fff';
      document.getElementById('labelA1e').style.color = '#fff';

      document.getElementById('labelA2a').style.color = '#fff';
 
      document.getElementById('labelA2c').style.color = '#fff';
      document.getElementById('labelA2d').style.color = '#fff';
      document.getElementById('labelA2e').style.color = '#fff';

      document.getElementById('labelA3a').style.color = '#fff';
      document.getElementById('labelA3b').style.color = '#fff';
      document.getElementById('labelA3c').style.color = '#fff';
     
      document.getElementById('labelA3e').style.color = '#fff';

      document.getElementById('labelA4a').style.color = '#fff';
      document.getElementById('labelA4b').style.color = '#fff';
      
      document.getElementById('labelA4d').style.color = '#fff';
      document.getElementById('labelA4e').style.color = '#fff';

      document.getElementById('labelA5a').style.color = '#fff';
      document.getElementById('labelA5b').style.color = '#fff';
 
      document.getElementById('labelA5d').style.color = '#fff';
      document.getElementById('labelA5e').style.color = '#fff';

      document.getElementById('labelA6a').style.color = '#fff';
  
      document.getElementById('labelA6c').style.color = '#fff';
      document.getElementById('labelA6d').style.color = '#fff';
      document.getElementById('labelA6e').style.color = '#fff';

      document.getElementById('labelA7a').style.color = '#fff';
      document.getElementById('labelA7b').style.color = '#fff';
      document.getElementById('labelA7c').style.color = '#fff';
     
      document.getElementById('labelA7e').style.color = '#fff';

      document.getElementById('labelA8a').style.color = '#fff';
      document.getElementById('labelA8b').style.color = '#fff';
     
      document.getElementById('labelA8d').style.color = '#fff';
      document.getElementById('labelA8e').style.color = '#fff';

      document.getElementById('labelA9a').style.color = '#fff';
      document.getElementById('labelA9b').style.color = '#fff';
      document.getElementById('labelA9c').style.color = '#fff';
   
      document.getElementById('labelA9e').style.color = '#fff';

      document.getElementById('labelA10a').style.color = '#fff';
      document.getElementById('labelA10b').style.color = '#fff';
      document.getElementById('labelA10c').style.color = '#fff';

      document.getElementById('labelA10e').style.color = '#fff';

      document.getElementById('labelA11a').style.color = '#fff';
  
      document.getElementById('labelA11c').style.color = '#fff';
      document.getElementById('labelA11d').style.color = '#fff';
      document.getElementById('labelA11e').style.color = '#fff';

      document.getElementById('labelA12a').style.color = '#fff';
      document.getElementById('labelA12b').style.color = '#fff';
      document.getElementById('labelA12c').style.color = '#fff';
   
      document.getElementById('labelA12e').style.color = '#fff';

      document.getElementById('labelA13a').style.color = '#fff';
      
      document.getElementById('labelA13c').style.color = '#fff';
      document.getElementById('labelA13d').style.color = '#fff';
      document.getElementById('labelA13e').style.color = '#fff';

      document.getElementById('labelA14a').style.color = '#fff';
      document.getElementById('labelA14b').style.color = '#fff';
      document.getElementById('labelA14c').style.color = '#fff';

      document.getElementById('labelA14e').style.color = '#fff';

      document.getElementById('labelA15a').style.color = '#fff';
      document.getElementById('labelA15b').style.color = '#fff';
      document.getElementById('labelA15c').style.color = '#fff';
    
      document.getElementById('labelA15e').style.color = '#fff';

      document.getElementById('labelA16a').style.color = '#fff';
      document.getElementById('labelA16b').style.color = '#fff';
     
      document.getElementById('labelA16d').style.color = '#fff';
      document.getElementById('labelA16e').style.color = '#fff';

      document.getElementById('labelA17a').style.color = '#fff';
      document.getElementById('labelA17b').style.color = '#fff';
   
      document.getElementById('labelA17d').style.color = '#fff';
      document.getElementById('labelA17e').style.color = '#fff';

      document.getElementById('labelA18a').style.color = '#fff';
   
      document.getElementById('labelA18c').style.color = '#fff';
      document.getElementById('labelA18d').style.color = '#fff';
      document.getElementById('labelA18e').style.color = '#fff';

      document.getElementById('labelA19a').style.color = '#fff';
      document.getElementById('labelA19b').style.color = '#fff';
      document.getElementById('labelA19c').style.color = '#fff';

      document.getElementById('labelA19e').style.color = '#fff';

    
      document.getElementById('labelA20b').style.color = '#fff';
      document.getElementById('labelA20c').style.color = '#fff';
      document.getElementById('labelA20d').style.color = '#fff';
      document.getElementById('labelA20e').style.color = '#fff';

      document.getElementById('labelA21a').style.color = '#fff';
   
      document.getElementById('labelA21c').style.color = '#fff';
      document.getElementById('labelA21d').style.color = '#fff';
      document.getElementById('labelA21e').style.color = '#fff';

      document.getElementById('labelA22a').style.color = '#fff';
      document.getElementById('labelA22b').style.color = '#fff';
     
      document.getElementById('labelA22d').style.color = '#fff';
      document.getElementById('labelA22e').style.color = '#fff';

      document.getElementById('labelA23a').style.color = '#fff';
     
      document.getElementById('labelA23c').style.color = '#fff';
      document.getElementById('labelA23d').style.color = '#fff';
      document.getElementById('labelA23e').style.color = '#fff';

      document.getElementById('labelA24a').style.color = '#fff';
      document.getElementById('labelA24b').style.color = '#fff';
      document.getElementById('labelA24c').style.color = '#fff';
      document.getElementById('labelA24d').style.color = '#fff';


      document.getElementById('labelA25a').style.color = '#fff';
      document.getElementById('labelA25b').style.color = '#fff';
      document.getElementById('labelA25c').style.color = '#fff';

      document.getElementById('labelA25e').style.color = '#fff';

      document.getElementById('labelA26a').style.color = '#fff';
      document.getElementById('labelA26b').style.color = '#fff';
   
      document.getElementById('labelA26d').style.color = '#fff';
      document.getElementById('labelA26e').style.color = '#fff';

  
      document.getElementById('labelA27b').style.color = '#fff';
      document.getElementById('labelA27c').style.color = '#fff';
      document.getElementById('labelA27d').style.color = '#fff';
      document.getElementById('labelA27e').style.color = '#fff';

      document.getElementById('labelA28a').style.color = '#fff';
      document.getElementById('labelA28b').style.color = '#fff';
      document.getElementById('labelA28c').style.color = '#fff';
      document.getElementById('labelA28d').style.color = '#fff';


      document.getElementById('labelA29a').style.color = '#fff';
      document.getElementById('labelA29b').style.color = '#fff';
      
      document.getElementById('labelA29d').style.color = '#fff';
      document.getElementById('labelA29e').style.color = '#fff';

      document.getElementById('labelA30a').style.color = '#fff';
      document.getElementById('labelA30b').style.color = '#fff';
      document.getElementById('labelA30c').style.color = '#fff';
      document.getElementById('labelA30d').style.color = '#fff';


      
      document.getElementById('labelA31b').style.color = '#fff';
      document.getElementById('labelA31c').style.color = '#fff';
      document.getElementById('labelA31d').style.color = '#fff';
      document.getElementById('labelA31e').style.color = '#fff';

      document.getElementById('labelA32a').style.color = '#fff';
      document.getElementById('labelA32b').style.color = '#fff';

      document.getElementById('labelA32d').style.color = '#fff';
      document.getElementById('labelA32e').style.color = '#fff';

    
      document.getElementById('labelA33b').style.color = '#fff';
      document.getElementById('labelA33c').style.color = '#fff';
      document.getElementById('labelA33d').style.color = '#fff';
      document.getElementById('labelA33e').style.color = '#fff';

      document.getElementById('labelA34a').style.color = '#fff';
      document.getElementById('labelA34b').style.color = '#fff';
      
      document.getElementById('labelA34d').style.color = '#fff';
      document.getElementById('labelA34e').style.color = '#fff';

      document.getElementById('labelA35a').style.color = '#fff';
      document.getElementById('labelA35b').style.color = '#fff';
      document.getElementById('labelA35c').style.color = '#fff';
  
      document.getElementById('labelA35e').style.color = '#fff';

      document.getElementById('labelA36a').style.color = '#fff';
      document.getElementById('labelA36b').style.color = '#fff';
      document.getElementById('labelA36c').style.color = '#fff';
      
      document.getElementById('labelA36e').style.color = '#fff';

      document.getElementById('labelA37a').style.color = '#fff';
      document.getElementById('labelA37b').style.color = '#fff';
      document.getElementById('labelA37c').style.color = '#fff';
      document.getElementById('labelA37d').style.color = '#fff';
   

      document.getElementById('labelA38a').style.color = '#fff';
      document.getElementById('labelA38b').style.color = '#fff';
  
      document.getElementById('labelA38d').style.color = '#fff';
      document.getElementById('labelA38e').style.color = '#fff';

      document.getElementById('labelA39a').style.color = '#fff';
      document.getElementById('labelA39b').style.color = '#fff';
      document.getElementById('labelA39c').style.color = '#fff';
      document.getElementById('labelA39d').style.color = '#fff';


      document.getElementById('labelA40a').style.color = '#fff';
      document.getElementById('labelA40b').style.color = '#fff';
      document.getElementById('labelA40c').style.color = '#fff';
    
      document.getElementById('labelA40e').style.color = '#fff';


      document.getElementById('labelA41b').style.color = '#fff';
      document.getElementById('labelA41c').style.color = '#fff';
      document.getElementById('labelA41d').style.color = '#fff';
      document.getElementById('labelA41e').style.color = '#fff';

      document.getElementById('labelA42a').style.color = '#fff';
      document.getElementById('labelA42c').style.color = '#fff';
      document.getElementById('labelA42d').style.color = '#fff';
      document.getElementById('labelA42e').style.color = '#fff';

      document.getElementById('labelA43a').style.color = '#fff';
      document.getElementById('labelA43b').style.color = '#fff';
      document.getElementById('labelA43d').style.color = '#fff';
      document.getElementById('labelA43e').style.color = '#fff';

      document.getElementById('labelA44b').style.color = '#fff';
      document.getElementById('labelA44c').style.color = '#fff';
      document.getElementById('labelA44d').style.color = '#fff';
      document.getElementById('labelA44e').style.color = '#fff';

      document.getElementById('labelA45b').style.color = '#fff';
      document.getElementById('labelA45c').style.color = '#fff';
      document.getElementById('labelA45d').style.color = '#fff';
      document.getElementById('labelA45e').style.color = '#fff';

      document.getElementById('labelA46a').style.color = '#fff';
      document.getElementById('labelA46b').style.color = '#fff';
      document.getElementById('labelA46c').style.color = '#fff';
      document.getElementById('labelA46d').style.color = '#fff';

      document.getElementById('labelA47b').style.color = '#fff';
      document.getElementById('labelA47c').style.color = '#fff';
      document.getElementById('labelA47d').style.color = '#fff';
      document.getElementById('labelA47e').style.color = '#fff';

      document.getElementById('labelA48a').style.color = '#fff';
      document.getElementById('labelA48b').style.color = '#fff';
      document.getElementById('labelA48c').style.color = '#fff';
      document.getElementById('labelA48e').style.color = '#fff';

      document.getElementById('labelA49a').style.color = '#fff';
      document.getElementById('labelA49b').style.color = '#fff';
      document.getElementById('labelA49d').style.color = '#fff';
      document.getElementById('labelA49e').style.color = '#fff';

      document.getElementById('labelA50a').style.color = '#fff';
      document.getElementById('labelA50c').style.color = '#fff';
      document.getElementById('labelA50d').style.color = '#fff';
      document.getElementById('labelA50e').style.color = '#fff';

      document.getElementById('labelA51a').style.color = '#fff';
      document.getElementById('labelA51c').style.color = '#fff';
      document.getElementById('labelA51d').style.color = '#fff';
      document.getElementById('labelA51e').style.color = '#fff';

      document.getElementById('labelA52a').style.color = '#fff';
      document.getElementById('labelA52b').style.color = '#fff';
      document.getElementById('labelA52c').style.color = '#fff';
      document.getElementById('labelA52e').style.color = '#fff';

      document.getElementById('labelA53a').style.color = '#fff';
      document.getElementById('labelA53b').style.color = '#fff';
      document.getElementById('labelA53c').style.color = '#fff';
      document.getElementById('labelA53d').style.color = '#fff';

      document.getElementById('labelA54a').style.color = '#fff';
      document.getElementById('labelA54b').style.color = '#fff';
      document.getElementById('labelA54c').style.color = '#fff';
      document.getElementById('labelA54e').style.color = '#fff';

      document.getElementById('labelA55a').style.color = '#fff';
      document.getElementById('labelA55b').style.color = '#fff';
      document.getElementById('labelA55d').style.color = '#fff';
      document.getElementById('labelA55e').style.color = '#fff';

      document.getElementById('labelA56a').style.color = '#fff';
      document.getElementById('labelA56b').style.color = '#fff';
      document.getElementById('labelA56c').style.color = '#fff';
      document.getElementById('labelA56d').style.color = '#fff';

      document.getElementById('labelA57b').style.color = '#fff';
      document.getElementById('labelA57c').style.color = '#fff';
      document.getElementById('labelA57d').style.color = '#fff';
      document.getElementById('labelA57e').style.color = '#fff';

      document.getElementById('labelA58a').style.color = '#fff';
      document.getElementById('labelA58b').style.color = '#fff';
      document.getElementById('labelA58c').style.color = '#fff';
      document.getElementById('labelA58e').style.color = '#fff';

      document.getElementById('labelA59b').style.color = '#fff';
      document.getElementById('labelA59c').style.color = '#fff';
      document.getElementById('labelA59d').style.color = '#fff';
      document.getElementById('labelA59e').style.color = '#fff';

      document.getElementById('labelA60a').style.color = '#fff';
      document.getElementById('labelA60b').style.color = '#fff';
      document.getElementById('labelA60d').style.color = '#fff';
      document.getElementById('labelA60e').style.color = '#fff';

      document.getElementById('labelA61b').style.color = '#fff';
      document.getElementById('labelA61c').style.color = '#fff';
      document.getElementById('labelA61d').style.color = '#fff';
      document.getElementById('labelA61e').style.color = '#fff';

      document.getElementById('labelA62a').style.color = '#fff';
      document.getElementById('labelA62b').style.color = '#fff';
      document.getElementById('labelA62c').style.color = '#fff';
      document.getElementById('labelA62d').style.color = '#fff';

      document.getElementById('labelA63a').style.color = '#fff';
      document.getElementById('labelA63b').style.color = '#fff';
      document.getElementById('labelA63c').style.color = '#fff';
      document.getElementById('labelA63e').style.color = '#fff';

      document.getElementById('labelA64a').style.color = '#fff';
      document.getElementById('labelA64b').style.color = '#fff';
      document.getElementById('labelA64d').style.color = '#fff';
      document.getElementById('labelA64e').style.color = '#fff';

      document.getElementById('labelA65b').style.color = '#fff';
      document.getElementById('labelA65c').style.color = '#fff';
      document.getElementById('labelA65d').style.color = '#fff';
      document.getElementById('labelA65e').style.color = '#fff';

      document.getElementById('labelA66b').style.color = '#fff';
      document.getElementById('labelA66c').style.color = '#fff';
      document.getElementById('labelA66d').style.color = '#fff';
      document.getElementById('labelA66e').style.color = '#fff';

      document.getElementById('labelA67b').style.color = '#fff';
      document.getElementById('labelA67c').style.color = '#fff';
      document.getElementById('labelA67d').style.color = '#fff';
      document.getElementById('labelA67e').style.color = '#fff';

      document.getElementById('labelA68a').style.color = '#fff';
      document.getElementById('labelA68b').style.color = '#fff';
      document.getElementById('labelA68c').style.color = '#fff';
      document.getElementById('labelA68e').style.color = '#fff';

      document.getElementById('labelA69a').style.color = '#fff';
      document.getElementById('labelA69b').style.color = '#fff';
      document.getElementById('labelA69c').style.color = '#fff';
      document.getElementById('labelA69e').style.color = '#fff';

      document.getElementById('labelA70a').style.color = '#fff';
      document.getElementById('labelA70c').style.color = '#fff';
      document.getElementById('labelA70d').style.color = '#fff';
      document.getElementById('labelA70e').style.color = '#fff';

      document.getElementById('labelA71a').style.color = '#fff';
      document.getElementById('labelA71c').style.color = '#fff';
      document.getElementById('labelA71d').style.color = '#fff';
      document.getElementById('labelA71e').style.color = '#fff';

      document.getElementById('labelA72b').style.color = '#fff';
      document.getElementById('labelA72c').style.color = '#fff';
      document.getElementById('labelA72d').style.color = '#fff';
      document.getElementById('labelA72e').style.color = '#fff';

      document.getElementById('labelA73a').style.color = '#fff';
      document.getElementById('labelA73b').style.color = '#fff';
      document.getElementById('labelA73c').style.color = '#fff';
      document.getElementById('labelA73e').style.color = '#fff';

      document.getElementById('labelA74a').style.color = '#fff';
      document.getElementById('labelA74c').style.color = '#fff';
      document.getElementById('labelA74d').style.color = '#fff';
      document.getElementById('labelA74e').style.color = '#fff';

      document.getElementById('labelA75a').style.color = '#fff';
      document.getElementById('labelA75b').style.color = '#fff';
      document.getElementById('labelA75d').style.color = '#fff';
      document.getElementById('labelA75e').style.color = '#fff';

      document.getElementById('labelA76a').style.color = '#fff';
      document.getElementById('labelA76c').style.color = '#fff';
      document.getElementById('labelA76d').style.color = '#fff';
      document.getElementById('labelA76e').style.color = '#fff';

      document.getElementById('labelA77b').style.color = '#fff';
      document.getElementById('labelA77c').style.color = '#fff';
      document.getElementById('labelA77d').style.color = '#fff';
      document.getElementById('labelA77e').style.color = '#fff';

      document.getElementById('labelA78a').style.color = '#fff';
      document.getElementById('labelA78c').style.color = '#fff';
      document.getElementById('labelA78d').style.color = '#fff';
      document.getElementById('labelA78e').style.color = '#fff';

      document.getElementById('labelA79b').style.color = '#fff';
      document.getElementById('labelA79c').style.color = '#fff';
      document.getElementById('labelA79d').style.color = '#fff';
      document.getElementById('labelA79e').style.color = '#fff';

      document.getElementById('labelA80a').style.color = '#fff';
      document.getElementById('labelA80b').style.color = '#fff';
      document.getElementById('labelA80d').style.color = '#fff';
      document.getElementById('labelA80e').style.color = '#fff';

      document.getElementById('labelA81a').style.color = '#fff';
      document.getElementById('labelA81b').style.color = '#fff';
      document.getElementById('labelA81c').style.color = '#fff';
      document.getElementById('labelA81d').style.color = '#fff';

      document.getElementById('labelA82a').style.color = '#fff';
      document.getElementById('labelA82b').style.color = '#fff';
      document.getElementById('labelA82c').style.color = '#fff';
      document.getElementById('labelA82e').style.color = '#fff';

      document.getElementById('labelA83b').style.color = '#fff';
      document.getElementById('labelA83c').style.color = '#fff';
      document.getElementById('labelA83d').style.color = '#fff';
      document.getElementById('labelA83e').style.color = '#fff';

      document.getElementById('labelA84a').style.color = '#fff';
      document.getElementById('labelA84b').style.color = '#fff';
      document.getElementById('labelA84c').style.color = '#fff';
      document.getElementById('labelA84d').style.color = '#fff';

      document.getElementById('labelA85a').style.color = '#fff';
      document.getElementById('labelA85c').style.color = '#fff';
      document.getElementById('labelA85d').style.color = '#fff';
      document.getElementById('labelA85e').style.color = '#fff';

      document.getElementById('labelA86a').style.color = '#fff';
      document.getElementById('labelA86b').style.color = '#fff';
      document.getElementById('labelA86c').style.color = '#fff';
      document.getElementById('labelA86d').style.color = '#fff';

      document.getElementById('labelA87a').style.color = '#fff';
      document.getElementById('labelA87b').style.color = '#fff';
      document.getElementById('labelA87c').style.color = '#fff';
      document.getElementById('labelA87e').style.color = '#fff';

      document.getElementById('labelA88a').style.color = '#fff';
      document.getElementById('labelA88b').style.color = '#fff';
      document.getElementById('labelA88c').style.color = '#fff';
      document.getElementById('labelA88d').style.color = '#fff';

      document.getElementById('labelA89a').style.color = '#fff';
      document.getElementById('labelA89c').style.color = '#fff';
      document.getElementById('labelA89d').style.color = '#fff';
      document.getElementById('labelA89e').style.color = '#fff';

      document.getElementById('labelA90a').style.color = '#fff';
      document.getElementById('labelA90b').style.color = '#fff';
      document.getElementById('labelA90d').style.color = '#fff';
      document.getElementById('labelA90e').style.color = '#fff';

      document.getElementById('labelA91a').style.color = '#fff';
      document.getElementById('labelA91b').style.color = '#fff';
      document.getElementById('labelA91c').style.color = '#fff';
      document.getElementById('labelA91d').style.color = '#fff';

      document.getElementById('labelA92b').style.color = '#fff';
      document.getElementById('labelA92c').style.color = '#fff';
      document.getElementById('labelA92d').style.color = '#fff';
      document.getElementById('labelA92e').style.color = '#fff';

      document.getElementById('labelA93a').style.color = '#fff';
      document.getElementById('labelA93b').style.color = '#fff';
      document.getElementById('labelA93d').style.color = '#fff';
      document.getElementById('labelA93e').style.color = '#fff';

      document.getElementById('labelA94b').style.color = '#fff';
      document.getElementById('labelA94c').style.color = '#fff';
      document.getElementById('labelA94d').style.color = '#fff';
      document.getElementById('labelA94e').style.color = '#fff';

      document.getElementById('labelA95a').style.color = '#fff';
      document.getElementById('labelA95b').style.color = '#fff';
      document.getElementById('labelA95c').style.color = '#fff';
      document.getElementById('labelA95d').style.color = '#fff';

      document.getElementById('labelA96a').style.color = '#fff';
      document.getElementById('labelA96b').style.color = '#fff';
      document.getElementById('labelA96d').style.color = '#fff';
      document.getElementById('labelA96e').style.color = '#fff';

      document.getElementById('labelA97a').style.color = '#fff';
      document.getElementById('labelA97b').style.color = '#fff';
      document.getElementById('labelA97c').style.color = '#fff';
      document.getElementById('labelA97d').style.color = '#fff';

      document.getElementById('labelA98a').style.color = '#fff';
      document.getElementById('labelA98b').style.color = '#fff';
      document.getElementById('labelA98c').style.color = '#fff';
      document.getElementById('labelA98e').style.color = '#fff';

      document.getElementById('labelA99a').style.color = '#fff';
      document.getElementById('labelA99b').style.color = '#fff';
      document.getElementById('labelA99c').style.color = '#fff';
      document.getElementById('labelA99d').style.color = '#fff';

      document.getElementById('labelA100a').style.color = '#fff';
      document.getElementById('labelA100c').style.color = '#fff';
      document.getElementById('labelA100d').style.color = '#fff';
      document.getElementById('labelA100e').style.color = '#fff';

}