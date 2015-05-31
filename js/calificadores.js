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

function calificarSimuB() {
  var form = document.getElementById('examFormB');
  var nombre = form.medico.value;
  var a = 0;//aciertos
  var e = 0;//errores
  if (document.getElementById('radioB1a').checked) {
    a++; 
    } else {
      e++;
      
      if (document.getElementById('radioB1b').checked) { document.getElementById('labelB1b').style.color = '#f00'; }
      if (document.getElementById('radioB1c').checked) { document.getElementById('labelB1c').style.color = '#f00'; }
      if (document.getElementById('radioB1d').checked) { document.getElementById('labelB1d').style.color = '#f00'; }
      if (document.getElementById('radioB1e').checked) { document.getElementById('labelB1e').style.color = '#f00'; }
    }
  
	if (document.getElementById('radioB2b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB2a').checked) { document.getElementById('labelB2a').style.color = '#f00'; }
      //if (document.getElementById('radioB2b').checked) { document.getElementById('labelB2b').style.color = '#f00'; }
      if (document.getElementById('radioB2c').checked) { document.getElementById('labelB2c').style.color = '#f00'; }
      if (document.getElementById('radioB2d').checked) { document.getElementById('labelB2d').style.color = '#f00'; }
      if (document.getElementById('radioB2e').checked) { document.getElementById('labelB2e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB3d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB3a').checked) { document.getElementById('labelB3a').style.color = '#f00'; }
      if (document.getElementById('radioB3b').checked) { document.getElementById('labelB3b').style.color = '#f00'; }
      if (document.getElementById('radioB3c').checked) { document.getElementById('labelB3c').style.color = '#f00'; }
      //if (document.getElementById('radioB3d').checked) { document.getElementById('labelB3d').style.color = '#f00'; }
      if (document.getElementById('radioB3e').checked) { document.getElementById('labelB3e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB4c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB4a').checked) { document.getElementById('labelB4a').style.color = '#f00'; }
      if (document.getElementById('radioB4b').checked) { document.getElementById('labelB4b').style.color = '#f00'; }
      //if (document.getElementById('radioB4c').checked) { document.getElementById('labelB4c').style.color = '#f00'; }
      if (document.getElementById('radioB4d').checked) { document.getElementById('labelB4d').style.color = '#f00'; }
      if (document.getElementById('radioB4e').checked) { document.getElementById('labelB4e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB5c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB5a').checked) { document.getElementById('labelB5a').style.color = '#f00'; }
      if (document.getElementById('radioB5b').checked) { document.getElementById('labelB5b').style.color = '#f00'; }
      //if (document.getElementById('radioB5c').checked) { document.getElementById('labelB5c').style.color = '#f00'; }
      if (document.getElementById('radioB5d').checked) { document.getElementById('labelB5d').style.color = '#f00'; }
      if (document.getElementById('radioB5e').checked) { document.getElementById('labelB5e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB6a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB6a').checked) { document.getElementById('labelB6a').style.color = '#f00'; }
      if (document.getElementById('radioB6b').checked) { document.getElementById('labelB6b').style.color = '#f00'; }
      if (document.getElementById('radioB6c').checked) { document.getElementById('labelB6c').style.color = '#f00'; }
      if (document.getElementById('radioB6d').checked) { document.getElementById('labelB6d').style.color = '#f00'; }
      if (document.getElementById('radioB6e').checked) { document.getElementById('labelB6e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB7b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB7a').checked) { document.getElementById('labelB7a').style.color = '#f00'; }
      //if (document.getElementById('radioB7b').checked) { document.getElementById('labelB7b').style.color = '#f00'; }
      if (document.getElementById('radioB7c').checked) { document.getElementById('labelB7c').style.color = '#f00'; }
      if (document.getElementById('radioB7d').checked) { document.getElementById('labelB7d').style.color = '#f00'; }
      if (document.getElementById('radioB7e').checked) { document.getElementById('labelB7e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB8c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB8a').checked) { document.getElementById('labelB8a').style.color = '#f00'; }
      if (document.getElementById('radioB8b').checked) { document.getElementById('labelB8b').style.color = '#f00'; }
      //if (document.getElementById('radioB8c').checked) { document.getElementById('labelB8c').style.color = '#f00'; }
      if (document.getElementById('radioB8d').checked) { document.getElementById('labelB8d').style.color = '#f00'; }
      if (document.getElementById('radioB8e').checked) { document.getElementById('labelB8e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB9d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB9a').checked) { document.getElementById('labelB9a').style.color = '#f00'; }
      if (document.getElementById('radioB9b').checked) { document.getElementById('labelB9b').style.color = '#f00'; }
      if (document.getElementById('radioB9c').checked) { document.getElementById('labelB9c').style.color = '#f00'; }
      //if (document.getElementById('radioB9d').checked) { document.getElementById('labelB9d').style.color = '#f00'; }
      if (document.getElementById('radioB9e').checked) { document.getElementById('labelB9e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB10a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB10a').checked) { document.getElementById('labelB10a').style.color = '#f00'; }
      if (document.getElementById('radioB10b').checked) { document.getElementById('labelB10b').style.color = '#f00'; }
      if (document.getElementById('radioB10c').checked) { document.getElementById('labelB10c').style.color = '#f00'; }
      if (document.getElementById('radioB10d').checked) { document.getElementById('labelB10d').style.color = '#f00'; }
      if (document.getElementById('radioB10e').checked) { document.getElementById('labelB10e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB11d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB11a').checked) { document.getElementById('labelB11a').style.color = '#f00'; }
      if (document.getElementById('radioB11b').checked) { document.getElementById('labelB11b').style.color = '#f00'; }
      if (document.getElementById('radioB11c').checked) { document.getElementById('labelB11c').style.color = '#f00'; }
      //if (document.getElementById('radioB11d').checked) { document.getElementById('labelB11d').style.color = '#f00'; }
      if (document.getElementById('radioB11e').checked) { document.getElementById('labelB11e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB12b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB12a').checked) { document.getElementById('labelB12a').style.color = '#f00'; }
      //if (document.getElementById('radioB12b').checked) { document.getElementById('labelB12b').style.color = '#f00'; }
      if (document.getElementById('radioB12c').checked) { document.getElementById('labelB12c').style.color = '#f00'; }
      if (document.getElementById('radioB12d').checked) { document.getElementById('labelB12d').style.color = '#f00'; }
      if (document.getElementById('radioB12e').checked) { document.getElementById('labelB12e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB13e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB13a').checked) { document.getElementById('labelB13a').style.color = '#f00'; }
      if (document.getElementById('radioB13b').checked) { document.getElementById('labelB13b').style.color = '#f00'; }
      if (document.getElementById('radioB13c').checked) { document.getElementById('labelB13c').style.color = '#f00'; }
      if (document.getElementById('radioB13d').checked) { document.getElementById('labelB13d').style.color = '#f00'; }
      //if (document.getElementById('radioB13e').checked) { document.getElementById('labelB13e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB14e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB14a').checked) { document.getElementById('labelB14a').style.color = '#f00'; }
      if (document.getElementById('radioB14b').checked) { document.getElementById('labelB14b').style.color = '#f00'; }
      if (document.getElementById('radioB14c').checked) { document.getElementById('labelB14c').style.color = '#f00'; }
      if (document.getElementById('radioB14d').checked) { document.getElementById('labelB14d').style.color = '#f00'; }
      //if (document.getElementById('radioB14e').checked) { document.getElementById('labelB14e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB15c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB15a').checked) { document.getElementById('labelB15a').style.color = '#f00'; }
      if (document.getElementById('radioB15b').checked) { document.getElementById('labelB15b').style.color = '#f00'; }
      //if (document.getElementById('radioB15c').checked) { document.getElementById('labelB15c').style.color = '#f00'; }
      if (document.getElementById('radioB15d').checked) { document.getElementById('labelB15d').style.color = '#f00'; }
      if (document.getElementById('radioB15e').checked) { document.getElementById('labelB15e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB16b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB16a').checked) { document.getElementById('labelB16a').style.color = '#f00'; }
      //if (document.getElementById('radioB16b').checked) { document.getElementById('labelB16b').style.color = '#f00'; }
      if (document.getElementById('radioB16c').checked) { document.getElementById('labelB16c').style.color = '#f00'; }
      if (document.getElementById('radioB16d').checked) { document.getElementById('labelB16d').style.color = '#f00'; }
      if (document.getElementById('radioB16e').checked) { document.getElementById('labelB16e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB17c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB17a').checked) { document.getElementById('labelB17a').style.color = '#f00'; }
      if (document.getElementById('radioB17b').checked) { document.getElementById('labelB17b').style.color = '#f00'; }
      //if (document.getElementById('radioB17c').checked) { document.getElementById('labelB17c').style.color = '#f00'; }
      if (document.getElementById('radioB17d').checked) { document.getElementById('labelB17d').style.color = '#f00'; }
      if (document.getElementById('radioB17e').checked) { document.getElementById('labelB17e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB18e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB18a').checked) { document.getElementById('labelB18a').style.color = '#f00'; }
      if (document.getElementById('radioB18b').checked) { document.getElementById('labelB18b').style.color = '#f00'; }
      if (document.getElementById('radioB18c').checked) { document.getElementById('labelB18c').style.color = '#f00'; }
      if (document.getElementById('radioB18d').checked) { document.getElementById('labelB18d').style.color = '#f00'; }
      //if (document.getElementById('radioB18e').checked) { document.getElementById('labelB18e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB19d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB19a').checked) { document.getElementById('labelB19a').style.color = '#f00'; }
      if (document.getElementById('radioB19b').checked) { document.getElementById('labelB19b').style.color = '#f00'; }
      if (document.getElementById('radioB19c').checked) { document.getElementById('labelB19c').style.color = '#f00'; }
      //if (document.getElementById('radioB19d').checked) { document.getElementById('labelB19d').style.color = '#f00'; }
      if (document.getElementById('radioB19e').checked) { document.getElementById('labelB19e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB20b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB20a').checked) { document.getElementById('labelB20a').style.color = '#f00'; }
      //if (document.getElementById('radioB20b').checked) { document.getElementById('labelB20b').style.color = '#f00'; }
      if (document.getElementById('radioB20c').checked) { document.getElementById('labelB20c').style.color = '#f00'; }
      if (document.getElementById('radioB20d').checked) { document.getElementById('labelB20d').style.color = '#f00'; }
      if (document.getElementById('radioB20e').checked) { document.getElementById('labelB20e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB21c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB21a').checked) { document.getElementById('labelB21a').style.color = '#f00'; }
      if (document.getElementById('radioB21b').checked) { document.getElementById('labelB21b').style.color = '#f00'; }
      //if (document.getElementById('radioB21c').checked) { document.getElementById('labelB21c').style.color = '#f00'; }
      if (document.getElementById('radioB21d').checked) { document.getElementById('labelB21d').style.color = '#f00'; }
      if (document.getElementById('radioB21e').checked) { document.getElementById('labelB21e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB22e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB22a').checked) { document.getElementById('labelB22a').style.color = '#f00'; }
      if (document.getElementById('radioB22b').checked) { document.getElementById('labelB22b').style.color = '#f00'; }
      if (document.getElementById('radioB22c').checked) { document.getElementById('labelB22c').style.color = '#f00'; }
      if (document.getElementById('radioB22d').checked) { document.getElementById('labelB22d').style.color = '#f00'; }
      //if (document.getElementById('radioB22e').checked) { document.getElementById('labelB22e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB23d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB23a').checked) { document.getElementById('labelB23a').style.color = '#f00'; }
      if (document.getElementById('radioB23b').checked) { document.getElementById('labelB23b').style.color = '#f00'; }
      if (document.getElementById('radioB23c').checked) { document.getElementById('labelB23c').style.color = '#f00'; }
      //if (document.getElementById('radioB23d').checked) { document.getElementById('labelB23d').style.color = '#f00'; }
      if (document.getElementById('radioB23e').checked) { document.getElementById('labelB23e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB24d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB24a').checked) { document.getElementById('labelB24a').style.color = '#f00'; }
      if (document.getElementById('radioB24b').checked) { document.getElementById('labelB24b').style.color = '#f00'; }
      if (document.getElementById('radioB24c').checked) { document.getElementById('labelB24c').style.color = '#f00'; }
      //if (document.getElementById('radioB24d').checked) { document.getElementById('labelB24d').style.color = '#f00'; }
      if (document.getElementById('radioB24e').checked) { document.getElementById('labelB24e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB25d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB25a').checked) { document.getElementById('labelB25a').style.color = '#f00'; }
      if (document.getElementById('radioB25b').checked) { document.getElementById('labelB25b').style.color = '#f00'; }
      if (document.getElementById('radioB25c').checked) { document.getElementById('labelB25c').style.color = '#f00'; }
      //if (document.getElementById('radioB25d').checked) { document.getElementById('labelB25d').style.color = '#f00'; }
      if (document.getElementById('radioB25e').checked) { document.getElementById('labelB25e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB26d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB26a').checked) { document.getElementById('labelB26a').style.color = '#f00'; }
      if (document.getElementById('radioB26b').checked) { document.getElementById('labelB26b').style.color = '#f00'; }
      if (document.getElementById('radioB26c').checked) { document.getElementById('labelB26c').style.color = '#f00'; }
      //if (document.getElementById('radioB26d').checked) { document.getElementById('labelB26d').style.color = '#f00'; }
      if (document.getElementById('radioB26e').checked) { document.getElementById('labelB26e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB27b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB27a').checked) { document.getElementById('labelB27a').style.color = '#f00'; }
      //if (document.getElementById('radioB27b').checked) { document.getElementById('labelB27b').style.color = '#f00'; }
      if (document.getElementById('radioB27c').checked) { document.getElementById('labelB27c').style.color = '#f00'; }
      if (document.getElementById('radioB27d').checked) { document.getElementById('labelB27d').style.color = '#f00'; }
      if (document.getElementById('radioB27e').checked) { document.getElementById('labelB27e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB28b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB28a').checked) { document.getElementById('labelB28a').style.color = '#f00'; }
      //if (document.getElementById('radioB28b').checked) { document.getElementById('labelB28b').style.color = '#f00'; }
      if (document.getElementById('radioB28c').checked) { document.getElementById('labelB28c').style.color = '#f00'; }
      if (document.getElementById('radioB28d').checked) { document.getElementById('labelB28d').style.color = '#f00'; }
      if (document.getElementById('radioB28e').checked) { document.getElementById('labelB28e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB29e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB29a').checked) { document.getElementById('labelB29a').style.color = '#f00'; }
      if (document.getElementById('radioB29b').checked) { document.getElementById('labelB29b').style.color = '#f00'; }
      if (document.getElementById('radioB29c').checked) { document.getElementById('labelB29c').style.color = '#f00'; }
      if (document.getElementById('radioB29d').checked) { document.getElementById('labelB29d').style.color = '#f00'; }
      //if (document.getElementById('radioB29e').checked) { document.getElementById('labelB29e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB30b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB30a').checked) { document.getElementById('labelB30a').style.color = '#f00'; }
      //if (document.getElementById('radioB30b').checked) { document.getElementById('labelB30b').style.color = '#f00'; }
      if (document.getElementById('radioB30c').checked) { document.getElementById('labelB30c').style.color = '#f00'; }
      if (document.getElementById('radioB30d').checked) { document.getElementById('labelB30d').style.color = '#f00'; }
      if (document.getElementById('radioB30e').checked) { document.getElementById('labelB30e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB31e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB31a').checked) { document.getElementById('labelB31a').style.color = '#f00'; }
      if (document.getElementById('radioB31b').checked) { document.getElementById('labelB31b').style.color = '#f00'; }
      if (document.getElementById('radioB31c').checked) { document.getElementById('labelB31c').style.color = '#f00'; }
      if (document.getElementById('radioB31d').checked) { document.getElementById('labelB31d').style.color = '#f00'; }
      //if (document.getElementById('radioB31e').checked) { document.getElementById('labelB31e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB32d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB32a').checked) { document.getElementById('labelB32a').style.color = '#f00'; }
      if (document.getElementById('radioB32b').checked) { document.getElementById('labelB32b').style.color = '#f00'; }
      if (document.getElementById('radioB32c').checked) { document.getElementById('labelB32c').style.color = '#f00'; }
      //if (document.getElementById('radioB32d').checked) { document.getElementById('labelB32d').style.color = '#f00'; }
      if (document.getElementById('radioB32e').checked) { document.getElementById('labelB32e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB33b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB33a').checked) { document.getElementById('labelB33a').style.color = '#f00'; }
      //if (document.getElementById('radioB33b').checked) { document.getElementById('labelB33b').style.color = '#f00'; }
      if (document.getElementById('radioB33c').checked) { document.getElementById('labelB33c').style.color = '#f00'; }
      if (document.getElementById('radioB33d').checked) { document.getElementById('labelB33d').style.color = '#f00'; }
      if (document.getElementById('radioB33e').checked) { document.getElementById('labelB33e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB34b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB34a').checked) { document.getElementById('labelB34a').style.color = '#f00'; }
      //if (document.getElementById('radioB34b').checked) { document.getElementById('labelB34b').style.color = '#f00'; }
      if (document.getElementById('radioB34c').checked) { document.getElementById('labelB34c').style.color = '#f00'; }
      if (document.getElementById('radioB34d').checked) { document.getElementById('labelB34d').style.color = '#f00'; }
      if (document.getElementById('radioB34e').checked) { document.getElementById('labelB34e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB35a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB35a').checked) { document.getElementById('labelB35a').style.color = '#f00'; }
      if (document.getElementById('radioB35b').checked) { document.getElementById('labelB35b').style.color = '#f00'; }
      if (document.getElementById('radioB35c').checked) { document.getElementById('labelB35c').style.color = '#f00'; }
      if (document.getElementById('radioB35d').checked) { document.getElementById('labelB35d').style.color = '#f00'; }
      if (document.getElementById('radioB35e').checked) { document.getElementById('labelB35e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB36c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB36a').checked) { document.getElementById('labelB36a').style.color = '#f00'; }
      if (document.getElementById('radioB36b').checked) { document.getElementById('labelB36b').style.color = '#f00'; }
      //if (document.getElementById('radioB36c').checked) { document.getElementById('labelB36c').style.color = '#f00'; }
      if (document.getElementById('radioB36d').checked) { document.getElementById('labelB36d').style.color = '#f00'; }
      if (document.getElementById('radioB36e').checked) { document.getElementById('labelB36e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB37b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB37a').checked) { document.getElementById('labelB37a').style.color = '#f00'; }
      //if (document.getElementById('radioB37b').checked) { document.getElementById('labelB37b').style.color = '#f00'; }
      if (document.getElementById('radioB37c').checked) { document.getElementById('labelB37c').style.color = '#f00'; }
      if (document.getElementById('radioB37d').checked) { document.getElementById('labelB37d').style.color = '#f00'; }
      if (document.getElementById('radioB37e').checked) { document.getElementById('labelB37e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB38d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB38a').checked) { document.getElementById('labelB38a').style.color = '#f00'; }
      if (document.getElementById('radioB38b').checked) { document.getElementById('labelB38b').style.color = '#f00'; }
      if (document.getElementById('radioB38c').checked) { document.getElementById('labelB38c').style.color = '#f00'; }
      //if (document.getElementById('radioB38d').checked) { document.getElementById('labelB38d').style.color = '#f00'; }
      if (document.getElementById('radioB38e').checked) { document.getElementById('labelB38e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB39e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB39a').checked) { document.getElementById('labelB39a').style.color = '#f00'; }
      if (document.getElementById('radioB39b').checked) { document.getElementById('labelB39b').style.color = '#f00'; }
      if (document.getElementById('radioB39c').checked) { document.getElementById('labelB39c').style.color = '#f00'; }
      if (document.getElementById('radioB39d').checked) { document.getElementById('labelB39d').style.color = '#f00'; }
      //if (document.getElementById('radioB39e').checked) { document.getElementById('labelB39e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB40a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB40a').checked) { document.getElementById('labelB40a').style.color = '#f00'; }
      if (document.getElementById('radioB40b').checked) { document.getElementById('labelB40b').style.color = '#f00'; }
      if (document.getElementById('radioB40c').checked) { document.getElementById('labelB40c').style.color = '#f00'; }
      if (document.getElementById('radioB40d').checked) { document.getElementById('labelB40d').style.color = '#f00'; }
      if (document.getElementById('radioB40e').checked) { document.getElementById('labelB40e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB41d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB41a').checked) { document.getElementById('labelB41a').style.color = '#f00'; }
      if (document.getElementById('radioB41b').checked) { document.getElementById('labelB41b').style.color = '#f00'; }
      if (document.getElementById('radioB41c').checked) { document.getElementById('labelB41c').style.color = '#f00'; }
      //if (document.getElementById('radioB41d').checked) { document.getElementById('labelB41d').style.color = '#f00'; }
      if (document.getElementById('radioB41e').checked) { document.getElementById('labelB41e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB42b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB42a').checked) { document.getElementById('labelB42a').style.color = '#f00'; }
      //if (document.getElementById('radioB42b').checked) { document.getElementById('labelB42b').style.color = '#f00'; }
      if (document.getElementById('radioB42c').checked) { document.getElementById('labelB42c').style.color = '#f00'; }
      if (document.getElementById('radioB42d').checked) { document.getElementById('labelB42d').style.color = '#f00'; }
      if (document.getElementById('radioB42e').checked) { document.getElementById('labelB42e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB43c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB43a').checked) { document.getElementById('labelB43a').style.color = '#f00'; }
      if (document.getElementById('radioB43b').checked) { document.getElementById('labelB43b').style.color = '#f00'; }
      //if (document.getElementById('radioB43c').checked) { document.getElementById('labelB43c').style.color = '#f00'; }
      if (document.getElementById('radioB43d').checked) { document.getElementById('labelB43d').style.color = '#f00'; }
      if (document.getElementById('radioB43e').checked) { document.getElementById('labelB43e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB44c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB44a').checked) { document.getElementById('labelB44a').style.color = '#f00'; }
      if (document.getElementById('radioB44b').checked) { document.getElementById('labelB44b').style.color = '#f00'; }
      //if (document.getElementById('radioB44c').checked) { document.getElementById('labelB44c').style.color = '#f00'; }
      if (document.getElementById('radioB44d').checked) { document.getElementById('labelB44d').style.color = '#f00'; }
      if (document.getElementById('radioB44e').checked) { document.getElementById('labelB44e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB45a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB45a').checked) { document.getElementById('labelB45a').style.color = '#f00'; }
      if (document.getElementById('radioB45b').checked) { document.getElementById('labelB45b').style.color = '#f00'; }
      if (document.getElementById('radioB45c').checked) { document.getElementById('labelB45c').style.color = '#f00'; }
      if (document.getElementById('radioB45d').checked) { document.getElementById('labelB45d').style.color = '#f00'; }
      if (document.getElementById('radioB45e').checked) { document.getElementById('labelB45e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB46c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB46a').checked) { document.getElementById('labelB46a').style.color = '#f00'; }
      if (document.getElementById('radioB46b').checked) { document.getElementById('labelB46b').style.color = '#f00'; }
      //if (document.getElementById('radioB46c').checked) { document.getElementById('labelB46c').style.color = '#f00'; }
      if (document.getElementById('radioB46d').checked) { document.getElementById('labelB46d').style.color = '#f00'; }
      if (document.getElementById('radioB46e').checked) { document.getElementById('labelB46e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB47c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB47a').checked) { document.getElementById('labelB47a').style.color = '#f00'; }
      if (document.getElementById('radioB47b').checked) { document.getElementById('labelB47b').style.color = '#f00'; }
      //if (document.getElementById('radioB47c').checked) { document.getElementById('labelB47c').style.color = '#f00'; }
      if (document.getElementById('radioB47d').checked) { document.getElementById('labelB47d').style.color = '#f00'; }
      if (document.getElementById('radioB47e').checked) { document.getElementById('labelB47e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB48e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB48a').checked) { document.getElementById('labelB48a').style.color = '#f00'; }
      if (document.getElementById('radioB48b').checked) { document.getElementById('labelB48b').style.color = '#f00'; }
      if (document.getElementById('radioB48c').checked) { document.getElementById('labelB48c').style.color = '#f00'; }
      if (document.getElementById('radioB48d').checked) { document.getElementById('labelB48d').style.color = '#f00'; }
      //if (document.getElementById('radioB48e').checked) { document.getElementById('labelB48e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB49d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB49a').checked) { document.getElementById('labelB49a').style.color = '#f00'; }
      if (document.getElementById('radioB49b').checked) { document.getElementById('labelB49b').style.color = '#f00'; }
      if (document.getElementById('radioB49c').checked) { document.getElementById('labelB49c').style.color = '#f00'; }
      //if (document.getElementById('radioB49d').checked) { document.getElementById('labelB49d').style.color = '#f00'; }
      if (document.getElementById('radioB49e').checked) { document.getElementById('labelB49e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB50b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB50a').checked) { document.getElementById('labelB50a').style.color = '#f00'; }
      //if (document.getElementById('radioB50b').checked) { document.getElementById('labelB50b').style.color = '#f00'; }
      if (document.getElementById('radioB50c').checked) { document.getElementById('labelB50c').style.color = '#f00'; }
      if (document.getElementById('radioB50d').checked) { document.getElementById('labelB50d').style.color = '#f00'; }
      if (document.getElementById('radioB50e').checked) { document.getElementById('labelB50e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB51e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB51a').checked) { document.getElementById('labelB51a').style.color = '#f00'; }
      if (document.getElementById('radioB51b').checked) { document.getElementById('labelB51b').style.color = '#f00'; }
      if (document.getElementById('radioB51c').checked) { document.getElementById('labelB51c').style.color = '#f00'; }
      if (document.getElementById('radioB51d').checked) { document.getElementById('labelB51d').style.color = '#f00'; }
      //if (document.getElementById('radioB51e').checked) { document.getElementById('labelB51e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB52d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB52a').checked) { document.getElementById('labelB52a').style.color = '#f00'; }
      if (document.getElementById('radioB52b').checked) { document.getElementById('labelB52b').style.color = '#f00'; }
      if (document.getElementById('radioB52c').checked) { document.getElementById('labelB52c').style.color = '#f00'; }
      //if (document.getElementById('radioB52d').checked) { document.getElementById('labelB52d').style.color = '#f00'; }
      if (document.getElementById('radioB52e').checked) { document.getElementById('labelB52e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB53e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB53a').checked) { document.getElementById('labelB53a').style.color = '#f00'; }
      if (document.getElementById('radioB53b').checked) { document.getElementById('labelB53b').style.color = '#f00'; }
      if (document.getElementById('radioB53c').checked) { document.getElementById('labelB53c').style.color = '#f00'; }
      if (document.getElementById('radioB53d').checked) { document.getElementById('labelB53d').style.color = '#f00'; }
      //if (document.getElementById('radioB53e').checked) { document.getElementById('labelB53e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB54c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB54a').checked) { document.getElementById('labelB54a').style.color = '#f00'; }
      if (document.getElementById('radioB54b').checked) { document.getElementById('labelB54b').style.color = '#f00'; }
      //if (document.getElementById('radioB54c').checked) { document.getElementById('labelB54c').style.color = '#f00'; }
      if (document.getElementById('radioB54d').checked) { document.getElementById('labelB54d').style.color = '#f00'; }
      if (document.getElementById('radioB54e').checked) { document.getElementById('labelB54e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB55b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB55a').checked) { document.getElementById('labelB55a').style.color = '#f00'; }
      //if (document.getElementById('radioB55b').checked) { document.getElementById('labelB55b').style.color = '#f00'; }
      if (document.getElementById('radioB55c').checked) { document.getElementById('labelB55c').style.color = '#f00'; }
      if (document.getElementById('radioB55d').checked) { document.getElementById('labelB55d').style.color = '#f00'; }
      if (document.getElementById('radioB55e').checked) { document.getElementById('labelB55e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB56c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB56a').checked) { document.getElementById('labelB56a').style.color = '#f00'; }
      if (document.getElementById('radioB56b').checked) { document.getElementById('labelB56b').style.color = '#f00'; }
      //if (document.getElementById('radioB56c').checked) { document.getElementById('labelB56c').style.color = '#f00'; }
      if (document.getElementById('radioB56d').checked) { document.getElementById('labelB56d').style.color = '#f00'; }
      if (document.getElementById('radioB56e').checked) { document.getElementById('labelB56e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB57b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB57a').checked) { document.getElementById('labelB57a').style.color = '#f00'; }
      //if (document.getElementById('radioB57b').checked) { document.getElementById('labelB57b').style.color = '#f00'; }
      if (document.getElementById('radioB57c').checked) { document.getElementById('labelB57c').style.color = '#f00'; }
      if (document.getElementById('radioB57d').checked) { document.getElementById('labelB57d').style.color = '#f00'; }
      if (document.getElementById('radioB57e').checked) { document.getElementById('labelB57e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB58a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB58a').checked) { document.getElementById('labelB58a').style.color = '#f00'; }
      if (document.getElementById('radioB58b').checked) { document.getElementById('labelB58b').style.color = '#f00'; }
      if (document.getElementById('radioB58c').checked) { document.getElementById('labelB58c').style.color = '#f00'; }
      if (document.getElementById('radioB58d').checked) { document.getElementById('labelB58d').style.color = '#f00'; }
      if (document.getElementById('radioB58e').checked) { document.getElementById('labelB58e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB59b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB59a').checked) { document.getElementById('labelB59a').style.color = '#f00'; }
      //if (document.getElementById('radioB59b').checked) { document.getElementById('labelB59b').style.color = '#f00'; }
      if (document.getElementById('radioB59c').checked) { document.getElementById('labelB59c').style.color = '#f00'; }
      if (document.getElementById('radioB59d').checked) { document.getElementById('labelB59d').style.color = '#f00'; }
      if (document.getElementById('radioB59e').checked) { document.getElementById('labelB59e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB60b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB60a').checked) { document.getElementById('labelB60a').style.color = '#f00'; }
      //if (document.getElementById('radioB60b').checked) { document.getElementById('labelB60b').style.color = '#f00'; }
      if (document.getElementById('radioB60c').checked) { document.getElementById('labelB60c').style.color = '#f00'; }
      if (document.getElementById('radioB60d').checked) { document.getElementById('labelB60d').style.color = '#f00'; }
      if (document.getElementById('radioB60e').checked) { document.getElementById('labelB60e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB61c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB61a').checked) { document.getElementById('labelB61a').style.color = '#f00'; }
      if (document.getElementById('radioB61b').checked) { document.getElementById('labelB61b').style.color = '#f00'; }
      //if (document.getElementById('radioB61c').checked) { document.getElementById('labelB61c').style.color = '#f00'; }
      if (document.getElementById('radioB61d').checked) { document.getElementById('labelB61d').style.color = '#f00'; }
      if (document.getElementById('radioB61e').checked) { document.getElementById('labelB61e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB62d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB62a').checked) { document.getElementById('labelB62a').style.color = '#f00'; }
      if (document.getElementById('radioB62b').checked) { document.getElementById('labelB62b').style.color = '#f00'; }
      if (document.getElementById('radioB62c').checked) { document.getElementById('labelB62c').style.color = '#f00'; }
      //if (document.getElementById('radioB62d').checked) { document.getElementById('labelB62d').style.color = '#f00'; }
      if (document.getElementById('radioB62e').checked) { document.getElementById('labelB62e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB63d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB63a').checked) { document.getElementById('labelB63a').style.color = '#f00'; }
      if (document.getElementById('radioB63b').checked) { document.getElementById('labelB63b').style.color = '#f00'; }
      if (document.getElementById('radioB63c').checked) { document.getElementById('labelB63c').style.color = '#f00'; }
      //if (document.getElementById('radioB63d').checked) { document.getElementById('labelB63d').style.color = '#f00'; }
      if (document.getElementById('radioB63e').checked) { document.getElementById('labelB63e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB64c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB64a').checked) { document.getElementById('labelB64a').style.color = '#f00'; }
      if (document.getElementById('radioB64b').checked) { document.getElementById('labelB64b').style.color = '#f00'; }
      //if (document.getElementById('radioB64c').checked) { document.getElementById('labelB64c').style.color = '#f00'; }
      if (document.getElementById('radioB64d').checked) { document.getElementById('labelB64d').style.color = '#f00'; }
      if (document.getElementById('radioB64e').checked) { document.getElementById('labelB64e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB65d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB65a').checked) { document.getElementById('labelB65a').style.color = '#f00'; }
      if (document.getElementById('radioB65b').checked) { document.getElementById('labelB65b').style.color = '#f00'; }
      if (document.getElementById('radioB65c').checked) { document.getElementById('labelB65c').style.color = '#f00'; }
      //if (document.getElementById('radioB65d').checked) { document.getElementById('labelB65d').style.color = '#f00'; }
      if (document.getElementById('radioB65e').checked) { document.getElementById('labelB65e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB66c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB66a').checked) { document.getElementById('labelB66a').style.color = '#f00'; }
      if (document.getElementById('radioB66b').checked) { document.getElementById('labelB66b').style.color = '#f00'; }
      //if (document.getElementById('radioB66c').checked) { document.getElementById('labelB66c').style.color = '#f00'; }
      if (document.getElementById('radioB66d').checked) { document.getElementById('labelB66d').style.color = '#f00'; }
      if (document.getElementById('radioB66e').checked) { document.getElementById('labelB66e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB67e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB67a').checked) { document.getElementById('labelB67a').style.color = '#f00'; }
      if (document.getElementById('radioB67b').checked) { document.getElementById('labelB67b').style.color = '#f00'; }
      if (document.getElementById('radioB67c').checked) { document.getElementById('labelB67c').style.color = '#f00'; }
      if (document.getElementById('radioB67d').checked) { document.getElementById('labelB67d').style.color = '#f00'; }
      //if (document.getElementById('radioB67e').checked) { document.getElementById('labelB67e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB68c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB68a').checked) { document.getElementById('labelB68a').style.color = '#f00'; }
      if (document.getElementById('radioB68b').checked) { document.getElementById('labelB68b').style.color = '#f00'; }
      //if (document.getElementById('radioB68c').checked) { document.getElementById('labelB68c').style.color = '#f00'; }
      if (document.getElementById('radioB68d').checked) { document.getElementById('labelB68d').style.color = '#f00'; }
      if (document.getElementById('radioB68e').checked) { document.getElementById('labelB68e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB69b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB69a').checked) { document.getElementById('labelB69a').style.color = '#f00'; }
      //if (document.getElementById('radioB69b').checked) { document.getElementById('labelB69b').style.color = '#f00'; }
      if (document.getElementById('radioB69c').checked) { document.getElementById('labelB69c').style.color = '#f00'; }
      if (document.getElementById('radioB69d').checked) { document.getElementById('labelB69d').style.color = '#f00'; }
      if (document.getElementById('radioB69e').checked) { document.getElementById('labelB69e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB70e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB70a').checked) { document.getElementById('labelB70a').style.color = '#f00'; }
      if (document.getElementById('radioB70b').checked) { document.getElementById('labelB70b').style.color = '#f00'; }
      if (document.getElementById('radioB70c').checked) { document.getElementById('labelB70c').style.color = '#f00'; }
      if (document.getElementById('radioB70d').checked) { document.getElementById('labelB70d').style.color = '#f00'; }
      //if (document.getElementById('radioB70e').checked) { document.getElementById('labelB70e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB71c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB71a').checked) { document.getElementById('labelB71a').style.color = '#f00'; }
      if (document.getElementById('radioB71b').checked) { document.getElementById('labelB71b').style.color = '#f00'; }
      //if (document.getElementById('radioB71c').checked) { document.getElementById('labelB71c').style.color = '#f00'; }
      if (document.getElementById('radioB71d').checked) { document.getElementById('labelB71d').style.color = '#f00'; }
      if (document.getElementById('radioB71e').checked) { document.getElementById('labelB71e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB72d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB72a').checked) { document.getElementById('labelB72a').style.color = '#f00'; }
      if (document.getElementById('radioB72b').checked) { document.getElementById('labelB72b').style.color = '#f00'; }
      if (document.getElementById('radioB72c').checked) { document.getElementById('labelB72c').style.color = '#f00'; }
      //if (document.getElementById('radioB72d').checked) { document.getElementById('labelB72d').style.color = '#f00'; }
      if (document.getElementById('radioB72e').checked) { document.getElementById('labelB72e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB73a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB73a').checked) { document.getElementById('labelB73a').style.color = '#f00'; }
      if (document.getElementById('radioB73b').checked) { document.getElementById('labelB73b').style.color = '#f00'; }
      if (document.getElementById('radioB73c').checked) { document.getElementById('labelB73c').style.color = '#f00'; }
      if (document.getElementById('radioB73d').checked) { document.getElementById('labelB73d').style.color = '#f00'; }
      if (document.getElementById('radioB73e').checked) { document.getElementById('labelB73e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB74c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB74a').checked) { document.getElementById('labelB74a').style.color = '#f00'; }
      if (document.getElementById('radioB74b').checked) { document.getElementById('labelB74b').style.color = '#f00'; }
      //if (document.getElementById('radioB74c').checked) { document.getElementById('labelB74c').style.color = '#f00'; }
      if (document.getElementById('radioB74d').checked) { document.getElementById('labelB74d').style.color = '#f00'; }
      if (document.getElementById('radioB74e').checked) { document.getElementById('labelB74e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB75a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB75a').checked) { document.getElementById('labelB75a').style.color = '#f00'; }
      if (document.getElementById('radioB75b').checked) { document.getElementById('labelB75b').style.color = '#f00'; }
      if (document.getElementById('radioB75c').checked) { document.getElementById('labelB75c').style.color = '#f00'; }
      if (document.getElementById('radioB75d').checked) { document.getElementById('labelB75d').style.color = '#f00'; }
      if (document.getElementById('radioB75e').checked) { document.getElementById('labelB75e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB76c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB76a').checked) { document.getElementById('labelB76a').style.color = '#f00'; }
      if (document.getElementById('radioB76b').checked) { document.getElementById('labelB76b').style.color = '#f00'; }
      //if (document.getElementById('radioB76c').checked) { document.getElementById('labelB76c').style.color = '#f00'; }
      if (document.getElementById('radioB76d').checked) { document.getElementById('labelB76d').style.color = '#f00'; }
      if (document.getElementById('radioB76e').checked) { document.getElementById('labelB76e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB77e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB77a').checked) { document.getElementById('labelB77a').style.color = '#f00'; }
      if (document.getElementById('radioB77b').checked) { document.getElementById('labelB77b').style.color = '#f00'; }
      if (document.getElementById('radioB77c').checked) { document.getElementById('labelB77c').style.color = '#f00'; }
      if (document.getElementById('radioB77d').checked) { document.getElementById('labelB77d').style.color = '#f00'; }
      //if (document.getElementById('radioB77e').checked) { document.getElementById('labelB77e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB78d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB78a').checked) { document.getElementById('labelB78a').style.color = '#f00'; }
      if (document.getElementById('radioB78b').checked) { document.getElementById('labelB78b').style.color = '#f00'; }
      if (document.getElementById('radioB78c').checked) { document.getElementById('labelB78c').style.color = '#f00'; }
      //if (document.getElementById('radioB78d').checked) { document.getElementById('labelB78d').style.color = '#f00'; }
      if (document.getElementById('radioB78e').checked) { document.getElementById('labelB78e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB79d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB79a').checked) { document.getElementById('labelB79a').style.color = '#f00'; }
      if (document.getElementById('radioB79b').checked) { document.getElementById('labelB79b').style.color = '#f00'; }
      if (document.getElementById('radioB79c').checked) { document.getElementById('labelB79c').style.color = '#f00'; }
      //if (document.getElementById('radioB79d').checked) { document.getElementById('labelB79d').style.color = '#f00'; }
      if (document.getElementById('radioB79e').checked) { document.getElementById('labelB79e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB80a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB80a').checked) { document.getElementById('labelB80a').style.color = '#f00'; }
      if (document.getElementById('radioB80b').checked) { document.getElementById('labelB80b').style.color = '#f00'; }
      if (document.getElementById('radioB80c').checked) { document.getElementById('labelB80c').style.color = '#f00'; }
      if (document.getElementById('radioB80d').checked) { document.getElementById('labelB80d').style.color = '#f00'; }
      if (document.getElementById('radioB80e').checked) { document.getElementById('labelB80e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB81b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB81a').checked) { document.getElementById('labelB81a').style.color = '#f00'; }
      //if (document.getElementById('radioB81b').checked) { document.getElementById('labelB81b').style.color = '#f00'; }
      if (document.getElementById('radioB81c').checked) { document.getElementById('labelB81c').style.color = '#f00'; }
      if (document.getElementById('radioB81d').checked) { document.getElementById('labelB81d').style.color = '#f00'; }
      if (document.getElementById('radioB81e').checked) { document.getElementById('labelB81e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB82a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB82a').checked) { document.getElementById('labelB82a').style.color = '#f00'; }
      if (document.getElementById('radioB82b').checked) { document.getElementById('labelB82b').style.color = '#f00'; }
      if (document.getElementById('radioB82c').checked) { document.getElementById('labelB82c').style.color = '#f00'; }
      if (document.getElementById('radioB82d').checked) { document.getElementById('labelB82d').style.color = '#f00'; }
      if (document.getElementById('radioB82e').checked) { document.getElementById('labelB82e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB83a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB83a').checked) { document.getElementById('labelB83a').style.color = '#f00'; }
      if (document.getElementById('radioB83b').checked) { document.getElementById('labelB83b').style.color = '#f00'; }
      if (document.getElementById('radioB83c').checked) { document.getElementById('labelB83c').style.color = '#f00'; }
      if (document.getElementById('radioB83d').checked) { document.getElementById('labelB83d').style.color = '#f00'; }
      if (document.getElementById('radioB83e').checked) { document.getElementById('labelB83e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB84d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB84a').checked) { document.getElementById('labelB84a').style.color = '#f00'; }
      if (document.getElementById('radioB84b').checked) { document.getElementById('labelB84b').style.color = '#f00'; }
      if (document.getElementById('radioB84c').checked) { document.getElementById('labelB84c').style.color = '#f00'; }
      //if (document.getElementById('radioB84d').checked) { document.getElementById('labelB84d').style.color = '#f00'; }
      if (document.getElementById('radioB84e').checked) { document.getElementById('labelB84e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB85b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB85a').checked) { document.getElementById('labelB85a').style.color = '#f00'; }
      //if (document.getElementById('radioB85b').checked) { document.getElementById('labelB85b').style.color = '#f00'; }
      if (document.getElementById('radioB85c').checked) { document.getElementById('labelB85c').style.color = '#f00'; }
      if (document.getElementById('radioB85d').checked) { document.getElementById('labelB85d').style.color = '#f00'; }
      if (document.getElementById('radioB85e').checked) { document.getElementById('labelB85e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB86c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB86a').checked) { document.getElementById('labelB86a').style.color = '#f00'; }
      if (document.getElementById('radioB86b').checked) { document.getElementById('labelB86b').style.color = '#f00'; }
      //if (document.getElementById('radioB86c').checked) { document.getElementById('labelB86c').style.color = '#f00'; }
      if (document.getElementById('radioB86d').checked) { document.getElementById('labelB86d').style.color = '#f00'; }
      if (document.getElementById('radioB86e').checked) { document.getElementById('labelB86e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB87a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB87a').checked) { document.getElementById('labelB87a').style.color = '#f00'; }
      if (document.getElementById('radioB87b').checked) { document.getElementById('labelB87b').style.color = '#f00'; }
      if (document.getElementById('radioB87c').checked) { document.getElementById('labelB87c').style.color = '#f00'; }
      if (document.getElementById('radioB87d').checked) { document.getElementById('labelB87d').style.color = '#f00'; }
      if (document.getElementById('radioB87e').checked) { document.getElementById('labelB87e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB88a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB88a').checked) { document.getElementById('labelB88a').style.color = '#f00'; }
      if (document.getElementById('radioB88b').checked) { document.getElementById('labelB88b').style.color = '#f00'; }
      if (document.getElementById('radioB88c').checked) { document.getElementById('labelB88c').style.color = '#f00'; }
      if (document.getElementById('radioB88d').checked) { document.getElementById('labelB88d').style.color = '#f00'; }
      if (document.getElementById('radioB88e').checked) { document.getElementById('labelB88e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB89d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB89a').checked) { document.getElementById('labelB89a').style.color = '#f00'; }
      if (document.getElementById('radioB89b').checked) { document.getElementById('labelB89b').style.color = '#f00'; }
      if (document.getElementById('radioB89c').checked) { document.getElementById('labelB89c').style.color = '#f00'; }
      //if (document.getElementById('radioB89d').checked) { document.getElementById('labelB89d').style.color = '#f00'; }
      if (document.getElementById('radioB89e').checked) { document.getElementById('labelB89e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB90c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB90a').checked) { document.getElementById('labelB90a').style.color = '#f00'; }
      if (document.getElementById('radioB90b').checked) { document.getElementById('labelB90b').style.color = '#f00'; }
      //if (document.getElementById('radioB90c').checked) { document.getElementById('labelB90c').style.color = '#f00'; }
      if (document.getElementById('radioB90d').checked) { document.getElementById('labelB90d').style.color = '#f00'; }
      if (document.getElementById('radioB90e').checked) { document.getElementById('labelB90e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB91a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB91a').checked) { document.getElementById('labelB91a').style.color = '#f00'; }
      if (document.getElementById('radioB91b').checked) { document.getElementById('labelB91b').style.color = '#f00'; }
      if (document.getElementById('radioB91c').checked) { document.getElementById('labelB91c').style.color = '#f00'; }
      if (document.getElementById('radioB91d').checked) { document.getElementById('labelB91d').style.color = '#f00'; }
      if (document.getElementById('radioB91e').checked) { document.getElementById('labelB91e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB92c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB92a').checked) { document.getElementById('labelB92a').style.color = '#f00'; }
      if (document.getElementById('radioB92b').checked) { document.getElementById('labelB92b').style.color = '#f00'; }
      //if (document.getElementById('radioB92c').checked) { document.getElementById('labelB92c').style.color = '#f00'; }
      if (document.getElementById('radioB92d').checked) { document.getElementById('labelB92d').style.color = '#f00'; }
      if (document.getElementById('radioB92e').checked) { document.getElementById('labelB92e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB93c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB93a').checked) { document.getElementById('labelB93a').style.color = '#f00'; }
      if (document.getElementById('radioB93b').checked) { document.getElementById('labelB93b').style.color = '#f00'; }
      //if (document.getElementById('radioB93c').checked) { document.getElementById('labelB93c').style.color = '#f00'; }
      if (document.getElementById('radioB93d').checked) { document.getElementById('labelB93d').style.color = '#f00'; }
      if (document.getElementById('radioB93e').checked) { document.getElementById('labelB93e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB94c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB94a').checked) { document.getElementById('labelB94a').style.color = '#f00'; }
      if (document.getElementById('radioB94b').checked) { document.getElementById('labelB94b').style.color = '#f00'; }
      //if (document.getElementById('radioB94c').checked) { document.getElementById('labelB94c').style.color = '#f00'; }
      if (document.getElementById('radioB94d').checked) { document.getElementById('labelB94d').style.color = '#f00'; }
      if (document.getElementById('radioB94e').checked) { document.getElementById('labelB94e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB95c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB95a').checked) { document.getElementById('labelB95a').style.color = '#f00'; }
      if (document.getElementById('radioB95b').checked) { document.getElementById('labelB95b').style.color = '#f00'; }
      //if (document.getElementById('radioB95c').checked) { document.getElementById('labelB95c').style.color = '#f00'; }
      if (document.getElementById('radioB95d').checked) { document.getElementById('labelB95d').style.color = '#f00'; }
      if (document.getElementById('radioB95e').checked) { document.getElementById('labelB95e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB96c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB96a').checked) { document.getElementById('labelB96a').style.color = '#f00'; }
      if (document.getElementById('radioB96b').checked) { document.getElementById('labelB96b').style.color = '#f00'; }
      //if (document.getElementById('radioB96c').checked) { document.getElementById('labelB96c').style.color = '#f00'; }
      if (document.getElementById('radioB96d').checked) { document.getElementById('labelB96d').style.color = '#f00'; }
      if (document.getElementById('radioB96e').checked) { document.getElementById('labelB96e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB97e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB97a').checked) { document.getElementById('labelB97a').style.color = '#f00'; }
      if (document.getElementById('radioB97b').checked) { document.getElementById('labelB97b').style.color = '#f00'; }
      if (document.getElementById('radioB97c').checked) { document.getElementById('labelB97c').style.color = '#f00'; }
      if (document.getElementById('radioB97d').checked) { document.getElementById('labelB97d').style.color = '#f00'; }
      //if (document.getElementById('radioB97e').checked) { document.getElementById('labelB97e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB98d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB98a').checked) { document.getElementById('labelB98a').style.color = '#f00'; }
      if (document.getElementById('radioB98b').checked) { document.getElementById('labelB98b').style.color = '#f00'; }
      if (document.getElementById('radioB98c').checked) { document.getElementById('labelB98c').style.color = '#f00'; }
      //if (document.getElementById('radioB98d').checked) { document.getElementById('labelB98d').style.color = '#f00'; }
      if (document.getElementById('radioB98e').checked) { document.getElementById('labelB98e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB99d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB99a').checked) { document.getElementById('labelB99a').style.color = '#f00'; }
      if (document.getElementById('radioB99b').checked) { document.getElementById('labelB99b').style.color = '#f00'; }
      if (document.getElementById('radioB99c').checked) { document.getElementById('labelB99c').style.color = '#f00'; }
      //if (document.getElementById('radioB99d').checked) { document.getElementById('labelB99d').style.color = '#f00'; }
      if (document.getElementById('radioB99e').checked) { document.getElementById('labelB99e').style.color = '#f00'; }
    }
  if (document.getElementById('radioB100a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioB100a').checked) { document.getElementById('labelB100a').style.color = '#f00'; }
      if (document.getElementById('radioB100b').checked) { document.getElementById('labelB100b').style.color = '#f00'; }
      if (document.getElementById('radioB100c').checked) { document.getElementById('labelB100c').style.color = '#f00'; }
      if (document.getElementById('radioB100d').checked) { document.getElementById('labelB100d').style.color = '#f00'; }
      if (document.getElementById('radioB100e').checked) { document.getElementById('labelB100e').style.color = '#f00'; }
    }

	alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNumero de errores: '+e);
  return false;
}

function restoreformSolB() {
      //document.getElementById('labelB1a').style.color = '#fff';
      document.getElementById('labelB1b').style.color = '#fff';
      document.getElementById('labelB1c').style.color = '#fff';
      document.getElementById('labelB1d').style.color = '#fff';
      document.getElementById('labelB1e').style.color = '#fff';
      /********/

      document.getElementById('labelB2a').style.color = '#fff';
      //document.getElementById('labelB2b').style.color = '#fff';
      document.getElementById('labelB2c').style.color = '#fff';
      document.getElementById('labelB2d').style.color = '#fff';
      document.getElementById('labelB2e').style.color = '#fff';
      /********/

      document.getElementById('labelB3a').style.color = '#fff';
      document.getElementById('labelB3b').style.color = '#fff';
      document.getElementById('labelB3c').style.color = '#fff';
      //document.getElementById('labelB3d').style.color = '#fff';
      document.getElementById('labelB3e').style.color = '#fff';
      /********/

      document.getElementById('labelB4a').style.color = '#fff';
      document.getElementById('labelB4b').style.color = '#fff';
      //document.getElementById('labelB4c').style.color = '#fff';
      document.getElementById('labelB4d').style.color = '#fff';
      document.getElementById('labelB4e').style.color = '#fff';
      /********/

      document.getElementById('labelB5a').style.color = '#fff';
      document.getElementById('labelB5b').style.color = '#fff';
      //document.getElementById('labelB5c').style.color = '#fff';
      document.getElementById('labelB5d').style.color = '#fff';
      document.getElementById('labelB5e').style.color = '#fff';
      /********/

      //document.getElementById('labelB6a').style.color = '#fff';
      document.getElementById('labelB6b').style.color = '#fff';
      document.getElementById('labelB6c').style.color = '#fff';
      document.getElementById('labelB6d').style.color = '#fff';
      document.getElementById('labelB6e').style.color = '#fff';
      /********/

      document.getElementById('labelB7a').style.color = '#fff';
      //document.getElementById('labelB7b').style.color = '#fff';
      document.getElementById('labelB7c').style.color = '#fff';
      document.getElementById('labelB7d').style.color = '#fff';
      document.getElementById('labelB7e').style.color = '#fff';
      /********/

      document.getElementById('labelB8a').style.color = '#fff';
      document.getElementById('labelB8b').style.color = '#fff';
      //document.getElementById('labelB8c').style.color = '#fff';
      document.getElementById('labelB8d').style.color = '#fff';
      document.getElementById('labelB8e').style.color = '#fff';
      /********/

      document.getElementById('labelB9a').style.color = '#fff';
      document.getElementById('labelB9b').style.color = '#fff';
      document.getElementById('labelB9c').style.color = '#fff';
      //document.getElementById('labelB9d').style.color = '#fff';
      document.getElementById('labelB9e').style.color = '#fff';
      /********/

      //document.getElementById('labelB10a').style.color = '#fff';
      document.getElementById('labelB10b').style.color = '#fff';
      document.getElementById('labelB10c').style.color = '#fff';
      document.getElementById('labelB10d').style.color = '#fff';
      document.getElementById('labelB10e').style.color = '#fff';
      /********/

      document.getElementById('labelB11a').style.color = '#fff';
      document.getElementById('labelB11b').style.color = '#fff';
      document.getElementById('labelB11c').style.color = '#fff';
      //document.getElementById('labelB11d').style.color = '#fff';
      document.getElementById('labelB11e').style.color = '#fff';
      /********/

      document.getElementById('labelB12a').style.color = '#fff';
      //document.getElementById('labelB12b').style.color = '#fff';
      document.getElementById('labelB12c').style.color = '#fff';
      document.getElementById('labelB12d').style.color = '#fff';
      document.getElementById('labelB12e').style.color = '#fff';
      /********/

      document.getElementById('labelB13a').style.color = '#fff';
      document.getElementById('labelB13b').style.color = '#fff';
      document.getElementById('labelB13c').style.color = '#fff';
      document.getElementById('labelB13d').style.color = '#fff';
      //document.getElementById('labelB13e').style.color = '#fff';
      /********/

      document.getElementById('labelB14a').style.color = '#fff';
      document.getElementById('labelB14b').style.color = '#fff';
      document.getElementById('labelB14c').style.color = '#fff';
      document.getElementById('labelB14d').style.color = '#fff';
      //document.getElementById('labelB14e').style.color = '#fff';
      /********/

      document.getElementById('labelB15a').style.color = '#fff';
      document.getElementById('labelB15b').style.color = '#fff';
      //document.getElementById('labelB15c').style.color = '#fff';
      document.getElementById('labelB15d').style.color = '#fff';
      document.getElementById('labelB15e').style.color = '#fff';
      /********/

      document.getElementById('labelB16a').style.color = '#fff';
      //document.getElementById('labelB16b').style.color = '#fff';
      document.getElementById('labelB16c').style.color = '#fff';
      document.getElementById('labelB16d').style.color = '#fff';
      document.getElementById('labelB16e').style.color = '#fff';
      /********/

      document.getElementById('labelB17a').style.color = '#fff';
      document.getElementById('labelB17b').style.color = '#fff';
      //document.getElementById('labelB17c').style.color = '#fff';
      document.getElementById('labelB17d').style.color = '#fff';
      document.getElementById('labelB17e').style.color = '#fff';
      /********/

      document.getElementById('labelB18a').style.color = '#fff';
      document.getElementById('labelB18b').style.color = '#fff';
      document.getElementById('labelB18c').style.color = '#fff';
      document.getElementById('labelB18d').style.color = '#fff';
      //document.getElementById('labelB18e').style.color = '#fff';
      /********/

      document.getElementById('labelB19a').style.color = '#fff';
      document.getElementById('labelB19b').style.color = '#fff';
      document.getElementById('labelB19c').style.color = '#fff';
      //document.getElementById('labelB19d').style.color = '#fff';
      document.getElementById('labelB19e').style.color = '#fff';
      /********/

      document.getElementById('labelB20a').style.color = '#fff';
      //document.getElementById('labelB20b').style.color = '#fff';
      document.getElementById('labelB20c').style.color = '#fff';
      document.getElementById('labelB20d').style.color = '#fff';
      document.getElementById('labelB20e').style.color = '#fff';
      /********/

      document.getElementById('labelB21a').style.color = '#fff';
      document.getElementById('labelB21b').style.color = '#fff';
      //document.getElementById('labelB21c').style.color = '#fff';
      document.getElementById('labelB21d').style.color = '#fff';
      document.getElementById('labelB21e').style.color = '#fff';
      /********/

      document.getElementById('labelB22a').style.color = '#fff';
      document.getElementById('labelB22b').style.color = '#fff';
      document.getElementById('labelB22c').style.color = '#fff';
      document.getElementById('labelB22d').style.color = '#fff';
      //document.getElementById('labelB22e').style.color = '#fff';
      /********/

      document.getElementById('labelB23a').style.color = '#fff';
      document.getElementById('labelB23b').style.color = '#fff';
      document.getElementById('labelB23c').style.color = '#fff';
      //document.getElementById('labelB23d').style.color = '#fff';
      document.getElementById('labelB23e').style.color = '#fff';
      /********/

      document.getElementById('labelB24a').style.color = '#fff';
      document.getElementById('labelB24b').style.color = '#fff';
      document.getElementById('labelB24c').style.color = '#fff';
      //document.getElementById('labelB24d').style.color = '#fff';
      document.getElementById('labelB24e').style.color = '#fff';
      /********/

      document.getElementById('labelB25a').style.color = '#fff';
      document.getElementById('labelB25b').style.color = '#fff';
      document.getElementById('labelB25c').style.color = '#fff';
      //document.getElementById('labelB25d').style.color = '#fff';
      document.getElementById('labelB25e').style.color = '#fff';
      /********/

      document.getElementById('labelB26a').style.color = '#fff';
      document.getElementById('labelB26b').style.color = '#fff';
      document.getElementById('labelB26c').style.color = '#fff';
      //document.getElementById('labelB26d').style.color = '#fff';
      document.getElementById('labelB26e').style.color = '#fff';
      /********/

      document.getElementById('labelB27a').style.color = '#fff';
      //document.getElementById('labelB27b').style.color = '#fff';
      document.getElementById('labelB27c').style.color = '#fff';
      document.getElementById('labelB27d').style.color = '#fff';
      document.getElementById('labelB27e').style.color = '#fff';
      /********/

      document.getElementById('labelB28a').style.color = '#fff';
      //document.getElementById('labelB28b').style.color = '#fff';
      document.getElementById('labelB28c').style.color = '#fff';
      document.getElementById('labelB28d').style.color = '#fff';
      document.getElementById('labelB28e').style.color = '#fff';
      /********/

      document.getElementById('labelB29a').style.color = '#fff';
      document.getElementById('labelB29b').style.color = '#fff';
      document.getElementById('labelB29c').style.color = '#fff';
      document.getElementById('labelB29d').style.color = '#fff';
      //document.getElementById('labelB29e').style.color = '#fff';
      /********/

      document.getElementById('labelB30a').style.color = '#fff';
      //document.getElementById('labelB30b').style.color = '#fff';
      document.getElementById('labelB30c').style.color = '#fff';
      document.getElementById('labelB30d').style.color = '#fff';
      document.getElementById('labelB30e').style.color = '#fff';
      /********/

      document.getElementById('labelB31a').style.color = '#fff';
      document.getElementById('labelB31b').style.color = '#fff';
      document.getElementById('labelB31c').style.color = '#fff';
      document.getElementById('labelB31d').style.color = '#fff';
      //document.getElementById('labelB31e').style.color = '#fff';
      /********/

      document.getElementById('labelB32a').style.color = '#fff';
      document.getElementById('labelB32b').style.color = '#fff';
      document.getElementById('labelB32c').style.color = '#fff';
      //document.getElementById('labelB32d').style.color = '#fff';
      document.getElementById('labelB32e').style.color = '#fff';
      /********/

      document.getElementById('labelB33a').style.color = '#fff';
      //document.getElementById('labelB33b').style.color = '#fff';
      document.getElementById('labelB33c').style.color = '#fff';
      document.getElementById('labelB33d').style.color = '#fff';
      document.getElementById('labelB33e').style.color = '#fff';
      /********/

      document.getElementById('labelB34a').style.color = '#fff';
      //document.getElementById('labelB34b').style.color = '#fff';
      document.getElementById('labelB34c').style.color = '#fff';
      document.getElementById('labelB34d').style.color = '#fff';
      document.getElementById('labelB34e').style.color = '#fff';
      /********/

      //document.getElementById('labelB35a').style.color = '#fff';
      document.getElementById('labelB35b').style.color = '#fff';
      document.getElementById('labelB35c').style.color = '#fff';
      document.getElementById('labelB35d').style.color = '#fff';2
      document.getElementById('labelB35e').style.color = '#fff';
      /********/

      document.getElementById('labelB36a').style.color = '#fff';
      document.getElementById('labelB36b').style.color = '#fff';
      //document.getElementById('labelB36c').style.color = '#fff';
      document.getElementById('labelB36d').style.color = '#fff';
      document.getElementById('labelB36e').style.color = '#fff';
      /********/

      document.getElementById('labelB37a').style.color = '#fff';
      //document.getElementById('labelB37b').style.color = '#fff';
      document.getElementById('labelB37c').style.color = '#fff';
      document.getElementById('labelB37d').style.color = '#fff';
      document.getElementById('labelB37e').style.color = '#fff';
      /********/

      document.getElementById('labelB38a').style.color = '#fff';
      document.getElementById('labelB38b').style.color = '#fff';
      document.getElementById('labelB38c').style.color = '#fff';
      //document.getElementById('labelB38d').style.color = '#fff';
      document.getElementById('labelB38e').style.color = '#fff';
      /********/

      document.getElementById('labelB39a').style.color = '#fff';
      document.getElementById('labelB39b').style.color = '#fff';
      document.getElementById('labelB39c').style.color = '#fff';
      document.getElementById('labelB39d').style.color = '#fff';
      //document.getElementById('labelB39e').style.color = '#fff';
      /********/

      //document.getElementById('labelB40a').style.color = '#fff';
      document.getElementById('labelB40b').style.color = '#fff';
      document.getElementById('labelB40c').style.color = '#fff';
      document.getElementById('labelB40d').style.color = '#fff';
      document.getElementById('labelB40e').style.color = '#fff';
      /********/

      document.getElementById('labelB41a').style.color = '#fff';
      document.getElementById('labelB41b').style.color = '#fff';
      document.getElementById('labelB41c').style.color = '#fff';
      //document.getElementById('labelB41d').style.color = '#fff';
      document.getElementById('labelB41e').style.color = '#fff';
      /********/

      document.getElementById('labelB42a').style.color = '#fff';
      //document.getElementById('labelB42b').style.color = '#fff';
      document.getElementById('labelB42c').style.color = '#fff';
      document.getElementById('labelB42d').style.color = '#fff';
      document.getElementById('labelB42e').style.color = '#fff';
      /********/

      document.getElementById('labelB43a').style.color = '#fff';
      document.getElementById('labelB43b').style.color = '#fff';
      //document.getElementById('labelB43c').style.color = '#fff';
      document.getElementById('labelB43d').style.color = '#fff';
      document.getElementById('labelB43e').style.color = '#fff';
      /********/

      document.getElementById('labelB44a').style.color = '#fff';
      document.getElementById('labelB44b').style.color = '#fff';
      //document.getElementById('labelB44c').style.color = '#fff';
      document.getElementById('labelB44d').style.color = '#fff';
      document.getElementById('labelB44e').style.color = '#fff';
      /********/

      //document.getElementById('labelB45a').style.color = '#fff';
      document.getElementById('labelB45b').style.color = '#fff';
      document.getElementById('labelB45c').style.color = '#fff';
      document.getElementById('labelB45d').style.color = '#fff';
      document.getElementById('labelB45e').style.color = '#fff';
      /********/

      document.getElementById('labelB46a').style.color = '#fff';
      document.getElementById('labelB46b').style.color = '#fff';
      //document.getElementById('labelB46c').style.color = '#fff';
      document.getElementById('labelB46d').style.color = '#fff';
      document.getElementById('labelB46e').style.color = '#fff';
      /********/

      document.getElementById('labelB47a').style.color = '#fff';
      document.getElementById('labelB47b').style.color = '#fff';
      //document.getElementById('labelB47c').style.color = '#fff';
      document.getElementById('labelB47d').style.color = '#fff';
      document.getElementById('labelB47e').style.color = '#fff';
      /********/

      document.getElementById('labelB48a').style.color = '#fff';
      document.getElementById('labelB48b').style.color = '#fff';
      document.getElementById('labelB48c').style.color = '#fff';
      document.getElementById('labelB48d').style.color = '#fff';
      //document.getElementById('labelB48e').style.color = '#fff';
      /********/

      document.getElementById('labelB49a').style.color = '#fff';
      document.getElementById('labelB49b').style.color = '#fff';
      document.getElementById('labelB49c').style.color = '#fff';
      //document.getElementById('labelB49d').style.color = '#fff';
      document.getElementById('labelB49e').style.color = '#fff';
      /********/

      document.getElementById('labelB50a').style.color = '#fff';
      //document.getElementById('labelB50b').style.color = '#fff';
      document.getElementById('labelB50c').style.color = '#fff';
      document.getElementById('labelB50d').style.color = '#fff';
      document.getElementById('labelB50e').style.color = '#fff';
      /********/

      document.getElementById('labelB51a').style.color = '#fff';
      document.getElementById('labelB51b').style.color = '#fff';
      document.getElementById('labelB51c').style.color = '#fff';
      document.getElementById('labelB51d').style.color = '#fff';
      //document.getElementById('labelB51e').style.color = '#fff';
      /********/

      document.getElementById('labelB52a').style.color = '#fff';
      document.getElementById('labelB52b').style.color = '#fff';
      document.getElementById('labelB52c').style.color = '#fff';
      //document.getElementById('labelB52d').style.color = '#fff';
      document.getElementById('labelB52e').style.color = '#fff';
      /********/

      document.getElementById('labelB53a').style.color = '#fff';
      document.getElementById('labelB53b').style.color = '#fff';
      document.getElementById('labelB53c').style.color = '#fff';
      document.getElementById('labelB53d').style.color = '#fff';
      //document.getElementById('labelB53e').style.color = '#fff';
      /********/

      document.getElementById('labelB54a').style.color = '#fff';
      document.getElementById('labelB54b').style.color = '#fff';
      //document.getElementById('labelB54c').style.color = '#fff';
      document.getElementById('labelB54d').style.color = '#fff';
      document.getElementById('labelB54e').style.color = '#fff';
      /********/

      document.getElementById('labelB55a').style.color = '#fff';
      //document.getElementById('labelB55b').style.color = '#fff';
      document.getElementById('labelB55c').style.color = '#fff';
      document.getElementById('labelB55d').style.color = '#fff';
      document.getElementById('labelB55e').style.color = '#fff';
      /********/

      document.getElementById('labelB56a').style.color = '#fff';
      document.getElementById('labelB56b').style.color = '#fff';
      //document.getElementById('labelB56c').style.color = '#fff';
      document.getElementById('labelB56d').style.color = '#fff';
      document.getElementById('labelB56e').style.color = '#fff';
      /********/

      document.getElementById('labelB57a').style.color = '#fff';
      //document.getElementById('labelB57b').style.color = '#fff';
      document.getElementById('labelB57c').style.color = '#fff';
      document.getElementById('labelB57d').style.color = '#fff';
      document.getElementById('labelB57e').style.color = '#fff';
      /********/

      //document.getElementById('labelB58a').style.color = '#fff';
      document.getElementById('labelB58b').style.color = '#fff';
      document.getElementById('labelB58c').style.color = '#fff';
      document.getElementById('labelB58d').style.color = '#fff';
      document.getElementById('labelB58e').style.color = '#fff';
      /********/

      document.getElementById('labelB59a').style.color = '#fff';
      //document.getElementById('labelB59b').style.color = '#fff';
      document.getElementById('labelB59c').style.color = '#fff';
      document.getElementById('labelB59d').style.color = '#fff';
      document.getElementById('labelB59e').style.color = '#fff';
      /********/

      document.getElementById('labelB60a').style.color = '#fff';
      //document.getElementById('labelB60b').style.color = '#fff';
      document.getElementById('labelB60c').style.color = '#fff';
      document.getElementById('labelB60d').style.color = '#fff';
      document.getElementById('labelB60e').style.color = '#fff';
      /********/

      document.getElementById('labelB61a').style.color = '#fff';
      document.getElementById('labelB61b').style.color = '#fff';
      //document.getElementById('labelB61c').style.color = '#fff';
      document.getElementById('labelB61d').style.color = '#fff';
      document.getElementById('labelB61e').style.color = '#fff';
      /********/

      document.getElementById('labelB62a').style.color = '#fff';
      document.getElementById('labelB62b').style.color = '#fff';
      document.getElementById('labelB62c').style.color = '#fff';
      //document.getElementById('labelB62d').style.color = '#fff';
      document.getElementById('labelB62e').style.color = '#fff';
      /********/

      document.getElementById('labelB63a').style.color = '#fff';
      document.getElementById('labelB63b').style.color = '#fff';
      document.getElementById('labelB63c').style.color = '#fff';
      //document.getElementById('labelB63d').style.color = '#fff';
      document.getElementById('labelB63e').style.color = '#fff';
      /********/

      document.getElementById('labelB64a').style.color = '#fff';
      document.getElementById('labelB64b').style.color = '#fff';
      //document.getElementById('labelB64c').style.color = '#fff';
      document.getElementById('labelB64d').style.color = '#fff';
      document.getElementById('labelB64e').style.color = '#fff';
      /********/

      document.getElementById('labelB65a').style.color = '#fff';
      document.getElementById('labelB65b').style.color = '#fff';
      document.getElementById('labelB65c').style.color = '#fff';
      //document.getElementById('labelB65d').style.color = '#fff';
      document.getElementById('labelB65e').style.color = '#fff';
      /********/

      document.getElementById('labelB66a').style.color = '#fff';
      document.getElementById('labelB66b').style.color = '#fff';
      //document.getElementById('labelB66c').style.color = '#fff';
      document.getElementById('labelB66d').style.color = '#fff';
      document.getElementById('labelB66e').style.color = '#fff';
      /********/

      document.getElementById('labelB67a').style.color = '#fff';
      document.getElementById('labelB67b').style.color = '#fff';
      document.getElementById('labelB67c').style.color = '#fff';
      document.getElementById('labelB67d').style.color = '#fff';
      //document.getElementById('labelB67e').style.color = '#fff';
      /********/

      document.getElementById('labelB68a').style.color = '#fff';
      document.getElementById('labelB68b').style.color = '#fff';
      //document.getElementById('labelB68c').style.color = '#fff';
      document.getElementById('labelB68d').style.color = '#fff';
      document.getElementById('labelB68e').style.color = '#fff';
      /********/

      document.getElementById('labelB69a').style.color = '#fff';
      //document.getElementById('labelB69b').style.color = '#fff';
      document.getElementById('labelB69c').style.color = '#fff';
      document.getElementById('labelB69d').style.color = '#fff';
      document.getElementById('labelB69e').style.color = '#fff';
      /********/

      document.getElementById('labelB70a').style.color = '#fff';
      document.getElementById('labelB70b').style.color = '#fff';
      document.getElementById('labelB70c').style.color = '#fff';
      document.getElementById('labelB70d').style.color = '#fff';
      //document.getElementById('labelB70e').style.color = '#fff';
      /********/

      document.getElementById('labelB71a').style.color = '#fff';
      document.getElementById('labelB71b').style.color = '#fff';
      //document.getElementById('labelB71c').style.color = '#fff';
      document.getElementById('labelB71d').style.color = '#fff';
      document.getElementById('labelB71e').style.color = '#fff';
      /********/

      document.getElementById('labelB72a').style.color = '#fff';
      document.getElementById('labelB72b').style.color = '#fff';
      document.getElementById('labelB72c').style.color = '#fff';
      //document.getElementById('labelB72d').style.color = '#fff';
      document.getElementById('labelB72e').style.color = '#fff';
      /********/

      //document.getElementById('labelB73a').style.color = '#fff';
      document.getElementById('labelB73b').style.color = '#fff';
      document.getElementById('labelB73c').style.color = '#fff';
      document.getElementById('labelB73d').style.color = '#fff';
      document.getElementById('labelB73e').style.color = '#fff';
      /********/

      document.getElementById('labelB74a').style.color = '#fff';
      document.getElementById('labelB74b').style.color = '#fff';
      //document.getElementById('labelB74c').style.color = '#fff';
      document.getElementById('labelB74d').style.color = '#fff';
      document.getElementById('labelB74e').style.color = '#fff';
      /********/

      //document.getElementById('labelB75a').style.color = '#fff';
      document.getElementById('labelB75b').style.color = '#fff';
      document.getElementById('labelB75c').style.color = '#fff';
      document.getElementById('labelB75d').style.color = '#fff';
      document.getElementById('labelB75e').style.color = '#fff';
      /********/

      document.getElementById('labelB76a').style.color = '#fff';
      document.getElementById('labelB76b').style.color = '#fff';
      //document.getElementById('labelB76c').style.color = '#fff';
      document.getElementById('labelB76d').style.color = '#fff';
      document.getElementById('labelB76e').style.color = '#fff';
      /********/

      document.getElementById('labelB77a').style.color = '#fff';
      document.getElementById('labelB77b').style.color = '#fff';
      document.getElementById('labelB77c').style.color = '#fff';
      document.getElementById('labelB77d').style.color = '#fff';
      //document.getElementById('labelB77e').style.color = '#fff';
      /********/

      document.getElementById('labelB78a').style.color = '#fff';
      document.getElementById('labelB78b').style.color = '#fff';
      document.getElementById('labelB78c').style.color = '#fff';
      //document.getElementById('labelB78d').style.color = '#fff';
      document.getElementById('labelB78e').style.color = '#fff';
      /********/

      document.getElementById('labelB79a').style.color = '#fff';
      document.getElementById('labelB79b').style.color = '#fff';
      document.getElementById('labelB79c').style.color = '#fff';
      //document.getElementById('labelB79d').style.color = '#fff';
      document.getElementById('labelB79e').style.color = '#fff';
      /********/

      //document.getElementById('labelB80a').style.color = '#fff';
      document.getElementById('labelB80b').style.color = '#fff';
      document.getElementById('labelB80c').style.color = '#fff';
      document.getElementById('labelB80d').style.color = '#fff';
      document.getElementById('labelB80e').style.color = '#fff';
      /********/

      document.getElementById('labelB81a').style.color = '#fff';
      //document.getElementById('labelB81b').style.color = '#fff';
      document.getElementById('labelB81c').style.color = '#fff';
      document.getElementById('labelB81d').style.color = '#fff';
      document.getElementById('labelB81e').style.color = '#fff';
      /********/

      //document.getElementById('labelB82a').style.color = '#fff';
      document.getElementById('labelB82b').style.color = '#fff';
      document.getElementById('labelB82c').style.color = '#fff';
      document.getElementById('labelB82d').style.color = '#fff';
      document.getElementById('labelB82e').style.color = '#fff';
      /********/

      //document.getElementById('labelB83a').style.color = '#fff';
      document.getElementById('labelB83b').style.color = '#fff';
      document.getElementById('labelB83c').style.color = '#fff';
      document.getElementById('labelB83d').style.color = '#fff';
      document.getElementById('labelB83e').style.color = '#fff';
      /********/

      document.getElementById('labelB84a').style.color = '#fff';
      document.getElementById('labelB84b').style.color = '#fff';
      document.getElementById('labelB84c').style.color = '#fff';
      //document.getElementById('labelB84d').style.color = '#fff';
      document.getElementById('labelB84e').style.color = '#fff';
      /********/

      document.getElementById('labelB85a').style.color = '#fff';
      //document.getElementById('labelB85b').style.color = '#fff';
      document.getElementById('labelB85c').style.color = '#fff';
      document.getElementById('labelB85d').style.color = '#fff';
      document.getElementById('labelB85e').style.color = '#fff';
      /********/

      document.getElementById('labelB86a').style.color = '#fff';
      document.getElementById('labelB86b').style.color = '#fff';
      //document.getElementById('labelB86c').style.color = '#fff';
      document.getElementById('labelB86d').style.color = '#fff';
      document.getElementById('labelB86e').style.color = '#fff';
      /********/

      //document.getElementById('labelB87a').style.color = '#fff';
      document.getElementById('labelB87b').style.color = '#fff';
      document.getElementById('labelB87c').style.color = '#fff';
      document.getElementById('labelB87d').style.color = '#fff';
      document.getElementById('labelB87e').style.color = '#fff';
      /********/

      //document.getElementById('labelB88a').style.color = '#fff';
      document.getElementById('labelB88b').style.color = '#fff';
      document.getElementById('labelB88c').style.color = '#fff';
      document.getElementById('labelB88d').style.color = '#fff';
      document.getElementById('labelB88e').style.color = '#fff';
      /********/

      document.getElementById('labelB89a').style.color = '#fff';
      document.getElementById('labelB89b').style.color = '#fff';
      document.getElementById('labelB89c').style.color = '#fff';
      //document.getElementById('labelB89d').style.color = '#fff';
      document.getElementById('labelB89e').style.color = '#fff';
      /********/

      document.getElementById('labelB90a').style.color = '#fff';
      document.getElementById('labelB90b').style.color = '#fff';
      //document.getElementById('labelB90c').style.color = '#fff';
      document.getElementById('labelB90d').style.color = '#fff';
      document.getElementById('labelB90e').style.color = '#fff';
      /********/

      //document.getElementById('labelB91a').style.color = '#fff';
      document.getElementById('labelB91b').style.color = '#fff';
      document.getElementById('labelB91c').style.color = '#fff';
      document.getElementById('labelB91d').style.color = '#fff';
      document.getElementById('labelB91e').style.color = '#fff';
      /********/

      document.getElementById('labelB92a').style.color = '#fff';
      document.getElementById('labelB92b').style.color = '#fff';
      //document.getElementById('labelB92c').style.color = '#fff';
      document.getElementById('labelB92d').style.color = '#fff';
      document.getElementById('labelB92e').style.color = '#fff';
      /********/

      document.getElementById('labelB93a').style.color = '#fff';
      document.getElementById('labelB93b').style.color = '#fff';
      //document.getElementById('labelB93c').style.color = '#fff';
      document.getElementById('labelB93d').style.color = '#fff';
      document.getElementById('labelB93e').style.color = '#fff';
      /********/

      document.getElementById('labelB94a').style.color = '#fff';
      document.getElementById('labelB94b').style.color = '#fff';
      //document.getElementById('labelB94c').style.color = '#fff';
      document.getElementById('labelB94d').style.color = '#fff';
      document.getElementById('labelB94e').style.color = '#fff';
      /********/

      document.getElementById('labelB95a').style.color = '#fff';
      document.getElementById('labelB95b').style.color = '#fff';
      //document.getElementById('labelB95c').style.color = '#fff';
      document.getElementById('labelB95d').style.color = '#fff';
      document.getElementById('labelB95e').style.color = '#fff';
      /********/

      document.getElementById('labelB96a').style.color = '#fff';
      document.getElementById('labelB96b').style.color = '#fff';
      //document.getElementById('labelB96c').style.color = '#fff';
      document.getElementById('labelB96d').style.color = '#fff';
      document.getElementById('labelB96e').style.color = '#fff';
      /********/

      document.getElementById('labelB97a').style.color = '#fff';
      document.getElementById('labelB97b').style.color = '#fff';
      document.getElementById('labelB97c').style.color = '#fff';
      document.getElementById('labelB97d').style.color = '#fff';
      //document.getElementById('labelB97e').style.color = '#fff';
      /********/

      document.getElementById('labelB98a').style.color = '#fff';
      document.getElementById('labelB98b').style.color = '#fff';
      document.getElementById('labelB98c').style.color = '#fff';
      //document.getElementById('labelB98d').style.color = '#fff';
      document.getElementById('labelB98e').style.color = '#fff';
      /********/

      document.getElementById('labelB99a').style.color = '#fff';
      document.getElementById('labelB99b').style.color = '#fff';
      document.getElementById('labelB99c').style.color = '#fff';
      //document.getElementById('labelB99d').style.color = '#fff';
      document.getElementById('labelB99e').style.color = '#fff';
      /********/

      //document.getElementById('labelB100a').style.color = '#fff';
      document.getElementById('labelB100b').style.color = '#fff';
      document.getElementById('labelB100c').style.color = '#fff';
      document.getElementById('labelB100d').style.color = '#fff';
      document.getElementById('labelB100e').style.color = '#fff';
      /********/
}

function calificarAnti() {
    var form = document.getElementById('formAnti');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioAnti1c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti1a').checked) { document.getElementById('labelAnti1a').style.color = '#f00'; }
      if (document.getElementById('radioAnti1b').checked) { document.getElementById('labelAnti1b').style.color = '#f00'; }
      //if (document.getElementById('radioAnti1c').checked) { document.getElementById('labelAnti1c').style.color = '#f00'; }
      if (document.getElementById('radioAnti1d').checked) { document.getElementById('labelAnti1d').style.color = '#f00'; }
      if (document.getElementById('radioAnti1e').checked) { document.getElementById('labelAnti1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti2b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti2a').checked) { document.getElementById('labelAnti2a').style.color = '#f00'; }
      //if (document.getElementById('radioAnti2b').checked) { document.getElementById('labelAnti2b').style.color = '#f00'; }
      if (document.getElementById('radioAnti2c').checked) { document.getElementById('labelAnti2c').style.color = '#f00'; }
      if (document.getElementById('radioAnti2d').checked) { document.getElementById('labelAnti2d').style.color = '#f00'; }
      if (document.getElementById('radioAnti2e').checked) { document.getElementById('labelAnti2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti3e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti3a').checked) { document.getElementById('labelAnti3a').style.color = '#f00'; }
      if (document.getElementById('radioAnti3b').checked) { document.getElementById('labelAnti3b').style.color = '#f00'; }
      if (document.getElementById('radioAnti3c').checked) { document.getElementById('labelAnti3c').style.color = '#f00'; }
      if (document.getElementById('radioAnti3d').checked) { document.getElementById('labelAnti3d').style.color = '#f00'; }
      //if (document.getElementById('radioAnti3e').checked) { document.getElementById('labelAnti3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti4d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti4a').checked) { document.getElementById('labelAnti4a').style.color = '#f00'; }
      if (document.getElementById('radioAnti4b').checked) { document.getElementById('labelAnti4b').style.color = '#f00'; }
      if (document.getElementById('radioAnti4c').checked) { document.getElementById('labelAnti4c').style.color = '#f00'; }
      //if (document.getElementById('radioAnti4d').checked) { document.getElementById('labelAnti4d').style.color = '#f00'; }
      if (document.getElementById('radioAnti4e').checked) { document.getElementById('labelAnti4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti5a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioAnti5a').checked) { document.getElementById('labelAnti5a').style.color = '#f00'; }
      if (document.getElementById('radioAnti5b').checked) { document.getElementById('labelAnti5b').style.color = '#f00'; }
      if (document.getElementById('radioAnti5c').checked) { document.getElementById('labelAnti5c').style.color = '#f00'; }
      if (document.getElementById('radioAnti5d').checked) { document.getElementById('labelAnti5d').style.color = '#f00'; }
      if (document.getElementById('radioAnti5e').checked) { document.getElementById('labelAnti5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti6a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioAnti6a').checked) { document.getElementById('labelAnti6a').style.color = '#f00'; }
      if (document.getElementById('radioAnti6b').checked) { document.getElementById('labelAnti6b').style.color = '#f00'; }
      if (document.getElementById('radioAnti6c').checked) { document.getElementById('labelAnti6c').style.color = '#f00'; }
      if (document.getElementById('radioAnti6d').checked) { document.getElementById('labelAnti6d').style.color = '#f00'; }
      if (document.getElementById('radioAnti6e').checked) { document.getElementById('labelAnti6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti7b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti7a').checked) { document.getElementById('labelAnti7a').style.color = '#f00'; }
      //if (document.getElementById('radioAnti7b').checked) { document.getElementById('labelAnti7b').style.color = '#f00'; }
      if (document.getElementById('radioAnti7c').checked) { document.getElementById('labelAnti7c').style.color = '#f00'; }
      if (document.getElementById('radioAnti7d').checked) { document.getElementById('labelAnti7d').style.color = '#f00'; }
      if (document.getElementById('radioAnti7e').checked) { document.getElementById('labelAnti7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti8d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti8a').checked) { document.getElementById('labelAnti8a').style.color = '#f00'; }
      if (document.getElementById('radioAnti8b').checked) { document.getElementById('labelAnti8b').style.color = '#f00'; }
      if (document.getElementById('radioAnti8c').checked) { document.getElementById('labelAnti8c').style.color = '#f00'; }
      //if (document.getElementById('radioAnti8d').checked) { document.getElementById('labelAnti8d').style.color = '#f00'; }
      if (document.getElementById('radioAnti8e').checked) { document.getElementById('labelAnti8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti9c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti9a').checked) { document.getElementById('labelAnti9a').style.color = '#f00'; }
      if (document.getElementById('radioAnti9b').checked) { document.getElementById('labelAnti9b').style.color = '#f00'; }
      //if (document.getElementById('radioAnti9c').checked) { document.getElementById('labelAnti9c').style.color = '#f00'; }
      if (document.getElementById('radioAnti9d').checked) { document.getElementById('labelAnti9d').style.color = '#f00'; }
      if (document.getElementById('radioAnti9e').checked) { document.getElementById('labelAnti9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti10a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioAnti10a').checked) { document.getElementById('labelAnti10a').style.color = '#f00'; }
      if (document.getElementById('radioAnti10b').checked) { document.getElementById('labelAnti10b').style.color = '#f00'; }
      if (document.getElementById('radioAnti10c').checked) { document.getElementById('labelAnti10c').style.color = '#f00'; }
      if (document.getElementById('radioAnti10d').checked) { document.getElementById('labelAnti10d').style.color = '#f00'; }
      if (document.getElementById('radioAnti10e').checked) { document.getElementById('labelAnti10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti11c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti11a').checked) { document.getElementById('labelAnti11a').style.color = '#f00'; }
      if (document.getElementById('radioAnti11b').checked) { document.getElementById('labelAnti11b').style.color = '#f00'; }
      //if (document.getElementById('radioAnti11c').checked) { document.getElementById('labelAnti11c').style.color = '#f00'; }
      if (document.getElementById('radioAnti11d').checked) { document.getElementById('labelAnti11d').style.color = '#f00'; }
      if (document.getElementById('radioAnti11e').checked) { document.getElementById('labelAnti11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti12b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti12a').checked) { document.getElementById('labelAnti12a').style.color = '#f00'; }
      //if (document.getElementById('radioAnti12b').checked) { document.getElementById('labelAnti12b').style.color = '#f00'; }
      if (document.getElementById('radioAnti12c').checked) { document.getElementById('labelAnti12c').style.color = '#f00'; }
      if (document.getElementById('radioAnti12d').checked) { document.getElementById('labelAnti12d').style.color = '#f00'; }
      if (document.getElementById('radioAnti12e').checked) { document.getElementById('labelAnti12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti13e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti13a').checked) { document.getElementById('labelAnti13a').style.color = '#f00'; }
      if (document.getElementById('radioAnti13b').checked) { document.getElementById('labelAnti13b').style.color = '#f00'; }
      if (document.getElementById('radioAnti13c').checked) { document.getElementById('labelAnti13c').style.color = '#f00'; }
      if (document.getElementById('radioAnti13d').checked) { document.getElementById('labelAnti13d').style.color = '#f00'; }
      //if (document.getElementById('radioAnti13e').checked) { document.getElementById('labelAnti13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti14c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti14a').checked) { document.getElementById('labelAnti14a').style.color = '#f00'; }
      if (document.getElementById('radioAnti14b').checked) { document.getElementById('labelAnti14b').style.color = '#f00'; }
      //if (document.getElementById('radioAnti14c').checked) { document.getElementById('labelAnti14c').style.color = '#f00'; }
      if (document.getElementById('radioAnti14d').checked) { document.getElementById('labelAnti14d').style.color = '#f00'; }
      if (document.getElementById('radioAnti14e').checked) { document.getElementById('labelAnti14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti15d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti15a').checked) { document.getElementById('labelAnti15a').style.color = '#f00'; }
      if (document.getElementById('radioAnti15b').checked) { document.getElementById('labelAnti15b').style.color = '#f00'; }
      if (document.getElementById('radioAnti15c').checked) { document.getElementById('labelAnti15c').style.color = '#f00'; }
      //if (document.getElementById('radioAnti15d').checked) { document.getElementById('labelAnti15d').style.color = '#f00'; }
      if (document.getElementById('radioAnti15e').checked) { document.getElementById('labelAnti15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti16d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti16a').checked) { document.getElementById('labelAnti16a').style.color = '#f00'; }
      if (document.getElementById('radioAnti16b').checked) { document.getElementById('labelAnti16b').style.color = '#f00'; }
      if (document.getElementById('radioAnti16c').checked) { document.getElementById('labelAnti16c').style.color = '#f00'; }
      //if (document.getElementById('radioAnti16d').checked) { document.getElementById('labelAnti16d').style.color = '#f00'; }
      if (document.getElementById('radioAnti16e').checked) { document.getElementById('labelAnti16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti17e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti17a').checked) { document.getElementById('labelAnti17a').style.color = '#f00'; }
      if (document.getElementById('radioAnti17b').checked) { document.getElementById('labelAnti17b').style.color = '#f00'; }
      if (document.getElementById('radioAnti17c').checked) { document.getElementById('labelAnti17c').style.color = '#f00'; }
      if (document.getElementById('radioAnti17d').checked) { document.getElementById('labelAnti17d').style.color = '#f00'; }
      //if (document.getElementById('radioAnti17e').checked) { document.getElementById('labelAnti17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti18d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti18a').checked) { document.getElementById('labelAnti18a').style.color = '#f00'; }
      if (document.getElementById('radioAnti18b').checked) { document.getElementById('labelAnti18b').style.color = '#f00'; }
      if (document.getElementById('radioAnti18c').checked) { document.getElementById('labelAnti18c').style.color = '#f00'; }
      //if (document.getElementById('radioAnti18d').checked) { document.getElementById('labelAnti18d').style.color = '#f00'; }
      if (document.getElementById('radioAnti18e').checked) { document.getElementById('labelAnti18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti19d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti19a').checked) { document.getElementById('labelAnti19a').style.color = '#f00'; }
      if (document.getElementById('radioAnti19b').checked) { document.getElementById('labelAnti19b').style.color = '#f00'; }
      if (document.getElementById('radioAnti19c').checked) { document.getElementById('labelAnti19c').style.color = '#f00'; }
      //if (document.getElementById('radioAnti19d').checked) { document.getElementById('labelAnti19d').style.color = '#f00'; }
      if (document.getElementById('radioAnti19e').checked) { document.getElementById('labelAnti19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioAnti20a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioAnti20a').checked) { document.getElementById('labelAnti20a').style.color = '#f00'; }
      if (document.getElementById('radioAnti20b').checked) { document.getElementById('labelAnti20b').style.color = '#f00'; }
      if (document.getElementById('radioAnti20c').checked) { document.getElementById('labelAnti20c').style.color = '#f00'; }
      if (document.getElementById('radioAnti20d').checked) { document.getElementById('labelAnti20d').style.color = '#f00'; }
      if (document.getElementById('radioAnti20e').checked) { document.getElementById('labelAnti20e').style.color = '#f00'; }
    }
    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNumero de errores: '+e);
    return false;
}

function restoreFormSolAnti() {

      document.getElementById('labelAnti1a').style.color = '#fff';
      document.getElementById('labelAnti1b').style.color = '#fff';
      //document.getElementById('labelAnti1c').style.color = '#fff';
      document.getElementById('labelAnti1d').style.color = '#fff';
      document.getElementById('labelAnti1e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti2a').style.color = '#fff';
      //document.getElementById('labelAnti2b').style.color = '#fff';
      document.getElementById('labelAnti2c').style.color = '#fff';
      document.getElementById('labelAnti2d').style.color = '#fff';
      document.getElementById('labelAnti2e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti3a').style.color = '#fff';
      document.getElementById('labelAnti3b').style.color = '#fff';
      document.getElementById('labelAnti3c').style.color = '#fff';
      document.getElementById('labelAnti3d').style.color = '#fff';
      //document.getElementById('labelAnti3e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti4a').style.color = '#fff';
      document.getElementById('labelAnti4b').style.color = '#fff';
      document.getElementById('labelAnti4c').style.color = '#fff';
      //document.getElementById('labelAnti4d').style.color = '#fff';
      document.getElementById('labelAnti4e').style.color = '#fff';
      //-------/
      

      //document.getElementById('labelAnti5a').style.color = '#fff';
      document.getElementById('labelAnti5b').style.color = '#fff';
      document.getElementById('labelAnti5c').style.color = '#fff';
      document.getElementById('labelAnti5d').style.color = '#fff';
      document.getElementById('labelAnti5e').style.color = '#fff';
      //-------/
      

      //document.getElementById('labelAnti6a').style.color = '#fff';
      document.getElementById('labelAnti6b').style.color = '#fff';
      document.getElementById('labelAnti6c').style.color = '#fff';
      document.getElementById('labelAnti6d').style.color = '#fff';
      document.getElementById('labelAnti6e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti7a').style.color = '#fff';
      //document.getElementById('labelAnti7b').style.color = '#fff';
      document.getElementById('labelAnti7c').style.color = '#fff';
      document.getElementById('labelAnti7d').style.color = '#fff';
      document.getElementById('labelAnti7e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti8a').style.color = '#fff';
      document.getElementById('labelAnti8b').style.color = '#fff';
      document.getElementById('labelAnti8c').style.color = '#fff';
      //document.getElementById('labelAnti8d').style.color = '#fff';
      document.getElementById('labelAnti8e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti9a').style.color = '#fff';
      document.getElementById('labelAnti9b').style.color = '#fff';
      //document.getElementById('labelanti9c').style.color = '#fff';
      document.getElementById('labelAnti9d').style.color = '#fff';
      document.getElementById('labelAnti9e').style.color = '#fff';
      //-------/
      

      //document.getElementById('labelAnti10a').style.color = '#fff';
      document.getElementById('labelAnti10b').style.color = '#fff';
      document.getElementById('labelAnti10c').style.color = '#fff';
      document.getElementById('labelAnti10d').style.color = '#fff';
      document.getElementById('labelAnti10e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti11a').style.color = '#fff';
      document.getElementById('labelAnti11b').style.color = '#fff';
      //document.getElementById('labelanti11c').style.color = '#fff';
      document.getElementById('labelAnti11d').style.color = '#fff';
      document.getElementById('labelAnti11e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti12a').style.color = '#fff';
      //document.getElementById('labelAnti12b').style.color = '#fff';
      document.getElementById('labelAnti12c').style.color = '#fff';
      document.getElementById('labelAnti12d').style.color = '#fff';
      document.getElementById('labelAnti12e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti13a').style.color = '#fff';
      document.getElementById('labelAnti13b').style.color = '#fff';
      document.getElementById('labelAnti13c').style.color = '#fff';
      document.getElementById('labelAnti13d').style.color = '#fff';
      //document.getElementById('labelAnti13e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti14a').style.color = '#fff';
      document.getElementById('labelAnti14b').style.color = '#fff';
      //document.getElementById('labelAnti14c').style.color = '#fff';
      document.getElementById('labelAnti14d').style.color = '#fff';
      document.getElementById('labelAnti14e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti15a').style.color = '#fff';
      document.getElementById('labelAnti15b').style.color = '#fff';
      document.getElementById('labelAnti15c').style.color = '#fff';
      //document.getElementById('labelAnti15d').style.color = '#fff';
      document.getElementById('labelAnti15e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti16a').style.color = '#fff';
      document.getElementById('labelAnti16b').style.color = '#fff';
      document.getElementById('labelAnti16c').style.color = '#fff';
      //document.getElementById('labelAnti16d').style.color = '#fff';
      document.getElementById('labelAnti16e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti17a').style.color = '#fff';
      document.getElementById('labelAnti17b').style.color = '#fff';
      document.getElementById('labelAnti17c').style.color = '#fff';
      document.getElementById('labelAnti17d').style.color = '#fff';
      //document.getElementById('labelAnti17e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti18a').style.color = '#fff';
      document.getElementById('labelAnti18b').style.color = '#fff';
      document.getElementById('labelAnti18c').style.color = '#fff';
      //document.getElementById('labelAnti18d').style.color = '#fff';
      document.getElementById('labelAnti18e').style.color = '#fff';
      //-------/
      

      document.getElementById('labelAnti19a').style.color = '#fff';
      document.getElementById('labelAnti19b').style.color = '#fff';
      document.getElementById('labelAnti19c').style.color = '#fff';
      //document.getElementById('labelAnti19d').style.color = '#fff';
      document.getElementById('labelAnti19e').style.color = '#fff';
      //-------/
      

      //document.getElementById('labelAnti20a').style.color = '#fff';
      document.getElementById('labelAnti20b').style.color = '#fff';
      document.getElementById('labelAnti20c').style.color = '#fff';
      document.getElementById('labelAnti20d').style.color = '#fff';
      document.getElementById('labelAnti20e').style.color = '#fff';
      //-------/
}

function calificarCardio() {
    var form = document.getElementById('formCardio');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioCardio1e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio1a').checked) { document.getElementById('labelCardio1a').style.color = '#f00'; }
      if (document.getElementById('radioCardio1b').checked) { document.getElementById('labelCardio1b').style.color = '#f00'; }
      if (document.getElementById('radioCardio1c').checked) { document.getElementById('labelCardio1c').style.color = '#f00'; }
      if (document.getElementById('radioCardio1d').checked) { document.getElementById('labelCardio1d').style.color = '#f00'; }
      //if (document.getElementById('radioCardio1e').checked) { document.getElementById('labelCardio1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio2c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio2a').checked) { document.getElementById('labelCardio2a').style.color = '#f00'; }
      if (document.getElementById('radioCardio2b').checked) { document.getElementById('labelCardio2b').style.color = '#f00'; }
      //if (document.getElementById('radioCardio2c').checked) { document.getElementById('labelCardio2c').style.color = '#f00'; }
      if (document.getElementById('radioCardio2d').checked) { document.getElementById('labelCardio2d').style.color = '#f00'; }
      if (document.getElementById('radioCardio2e').checked) { document.getElementById('labelCardio2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio3c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio3a').checked) { document.getElementById('labelCardio3a').style.color = '#f00'; }
      if (document.getElementById('radioCardio3b').checked) { document.getElementById('labelCardio3b').style.color = '#f00'; }
      //if (document.getElementById('radioCardio3c').checked) { document.getElementById('labelCardio3c').style.color = '#f00'; }
      if (document.getElementById('radioCardio3d').checked) { document.getElementById('labelCardio3d').style.color = '#f00'; }
      if (document.getElementById('radioCardio3e').checked) { document.getElementById('labelCardio3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio4a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCardio4a').checked) { document.getElementById('labelCardio4a').style.color = '#f00'; }
      if (document.getElementById('radioCardio4b').checked) { document.getElementById('labelCardio4b').style.color = '#f00'; }
      if (document.getElementById('radioCardio4c').checked) { document.getElementById('labelCardio4c').style.color = '#f00'; }
      if (document.getElementById('radioCardio4d').checked) { document.getElementById('labelCardio4d').style.color = '#f00'; }
      if (document.getElementById('radioCardio4e').checked) { document.getElementById('labelCardio4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio5b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio5a').checked) { document.getElementById('labelCardio5a').style.color = '#f00'; }
      //if (document.getElementById('radioCardio5b').checked) { document.getElementById('labelCardio5b').style.color = '#f00'; }
      if (document.getElementById('radioCardio5c').checked) { document.getElementById('labelCardio5c').style.color = '#f00'; }
      if (document.getElementById('radioCardio5d').checked) { document.getElementById('labelCardio5d').style.color = '#f00'; }
      if (document.getElementById('radioCardio5e').checked) { document.getElementById('labelCardio5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio6d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio6a').checked) { document.getElementById('labelCardio6a').style.color = '#f00'; }
      if (document.getElementById('radioCardio6b').checked) { document.getElementById('labelCardio6b').style.color = '#f00'; }
      if (document.getElementById('radioCardio6c').checked) { document.getElementById('labelCardio6c').style.color = '#f00'; }
      //if (document.getElementById('radioCardio6d').checked) { document.getElementById('labelCardio6d').style.color = '#f00'; }
      if (document.getElementById('radioCardio6e').checked) { document.getElementById('labelCardio6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio7a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCardio7a').checked) { document.getElementById('labelCardio7a').style.color = '#f00'; }
      if (document.getElementById('radioCardio7b').checked) { document.getElementById('labelCardio7b').style.color = '#f00'; }
      if (document.getElementById('radioCardio7c').checked) { document.getElementById('labelCardio7c').style.color = '#f00'; }
      if (document.getElementById('radioCardio7d').checked) { document.getElementById('labelCardio7d').style.color = '#f00'; }
      if (document.getElementById('radioCardio7e').checked) { document.getElementById('labelCardio7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio8e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio8a').checked) { document.getElementById('labelCardio8a').style.color = '#f00'; }
      if (document.getElementById('radioCardio8b').checked) { document.getElementById('labelCardio8b').style.color = '#f00'; }
      if (document.getElementById('radioCardio8c').checked) { document.getElementById('labelCardio8c').style.color = '#f00'; }
      if (document.getElementById('radioCardio8d').checked) { document.getElementById('labelCardio8d').style.color = '#f00'; }
      //if (document.getElementById('radioCardio8e').checked) { document.getElementById('labelCardio8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio9b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio9a').checked) { document.getElementById('labelCardio9a').style.color = '#f00'; }
      //if (document.getElementById('radioCardio9b').checked) { document.getElementById('labelCardio9b').style.color = '#f00'; }
      if (document.getElementById('radioCardio9c').checked) { document.getElementById('labelCardio9c').style.color = '#f00'; }
      if (document.getElementById('radioCardio9d').checked) { document.getElementById('labelCardio9d').style.color = '#f00'; }
      if (document.getElementById('radioCardio9e').checked) { document.getElementById('labelCardio9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio10e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio10a').checked) { document.getElementById('labelCardio10a').style.color = '#f00'; }
      if (document.getElementById('radioCardio10b').checked) { document.getElementById('labelCardio10b').style.color = '#f00'; }
      if (document.getElementById('radioCardio10c').checked) { document.getElementById('labelCardio10c').style.color = '#f00'; }
      if (document.getElementById('radioCardio10d').checked) { document.getElementById('labelCardio10d').style.color = '#f00'; }
      //if (document.getElementById('radioCardio10e').checked) { document.getElementById('labelCardio10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio11d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio11a').checked) { document.getElementById('labelCardio11a').style.color = '#f00'; }
      if (document.getElementById('radioCardio11b').checked) { document.getElementById('labelCardio11b').style.color = '#f00'; }
      if (document.getElementById('radioCardio11c').checked) { document.getElementById('labelCardio11c').style.color = '#f00'; }
      //if (document.getElementById('radioCardio11d').checked) { document.getElementById('labelCardio11d').style.color = '#f00'; }
      if (document.getElementById('radioCardio11e').checked) { document.getElementById('labelCardio11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio12a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCardio12a').checked) { document.getElementById('labelCardio12a').style.color = '#f00'; }
      if (document.getElementById('radioCardio12b').checked) { document.getElementById('labelCardio12b').style.color = '#f00'; }
      if (document.getElementById('radioCardio12c').checked) { document.getElementById('labelCardio12c').style.color = '#f00'; }
      if (document.getElementById('radioCardio12d').checked) { document.getElementById('labelCardio12d').style.color = '#f00'; }
      if (document.getElementById('radioCardio12e').checked) { document.getElementById('labelCardio12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio13b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio13a').checked) { document.getElementById('labelCardio13a').style.color = '#f00'; }
      //if (document.getElementById('radioCardio13b').checked) { document.getElementById('labelCardio13b').style.color = '#f00'; }
      if (document.getElementById('radioCardio13c').checked) { document.getElementById('labelCardio13c').style.color = '#f00'; }
      if (document.getElementById('radioCardio13d').checked) { document.getElementById('labelCardio13d').style.color = '#f00'; }
      if (document.getElementById('radioCardio13e').checked) { document.getElementById('labelCardio13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio14a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCardio14a').checked) { document.getElementById('labelCardio14a').style.color = '#f00'; }
      if (document.getElementById('radioCardio14b').checked) { document.getElementById('labelCardio14b').style.color = '#f00'; }
      if (document.getElementById('radioCardio14c').checked) { document.getElementById('labelCardio14c').style.color = '#f00'; }
      if (document.getElementById('radioCardio14d').checked) { document.getElementById('labelCardio14d').style.color = '#f00'; }
      if (document.getElementById('radioCardio14e').checked) { document.getElementById('labelCardio14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio15d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio15a').checked) { document.getElementById('labelCardio15a').style.color = '#f00'; }
      if (document.getElementById('radioCardio15b').checked) { document.getElementById('labelCardio15b').style.color = '#f00'; }
      if (document.getElementById('radioCardio15c').checked) { document.getElementById('labelCardio15c').style.color = '#f00'; }
      //if (document.getElementById('radioCardio15d').checked) { document.getElementById('labelCardio15d').style.color = '#f00'; }
      if (document.getElementById('radioCardio15e').checked) { document.getElementById('labelCardio15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio16c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio16a').checked) { document.getElementById('labelCardio16a').style.color = '#f00'; }
      if (document.getElementById('radioCardio16b').checked) { document.getElementById('labelCardio16b').style.color = '#f00'; }
      //if (document.getElementById('radioCardio16c').checked) { document.getElementById('labelCardio16c').style.color = '#f00'; }
      if (document.getElementById('radioCardio16d').checked) { document.getElementById('labelCardio16d').style.color = '#f00'; }
      if (document.getElementById('radioCardio16e').checked) { document.getElementById('labelCardio16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio17c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio17a').checked) { document.getElementById('labelCardio17a').style.color = '#f00'; }
      if (document.getElementById('radioCardio17b').checked) { document.getElementById('labelCardio17b').style.color = '#f00'; }
      //if (document.getElementById('radioCardio17c').checked) { document.getElementById('labelCardio17c').style.color = '#f00'; }
      if (document.getElementById('radioCardio17d').checked) { document.getElementById('labelCardio17d').style.color = '#f00'; }
      if (document.getElementById('radioCardio17e').checked) { document.getElementById('labelCardio17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio18e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio18a').checked) { document.getElementById('labelCardio18a').style.color = '#f00'; }
      if (document.getElementById('radioCardio18b').checked) { document.getElementById('labelCardio18b').style.color = '#f00'; }
      if (document.getElementById('radioCardio18c').checked) { document.getElementById('labelCardio18c').style.color = '#f00'; }
      if (document.getElementById('radioCardio18d').checked) { document.getElementById('labelCardio18d').style.color = '#f00'; }
      //if (document.getElementById('radioCardio18e').checked) { document.getElementById('labelCardio18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio19a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCardio19a').checked) { document.getElementById('labelCardio19a').style.color = '#f00'; }
      if (document.getElementById('radioCardio19b').checked) { document.getElementById('labelCardio19b').style.color = '#f00'; }
      if (document.getElementById('radioCardio19c').checked) { document.getElementById('labelCardio19c').style.color = '#f00'; }
      if (document.getElementById('radioCardio19d').checked) { document.getElementById('labelCardio19d').style.color = '#f00'; }
      if (document.getElementById('radioCardio19e').checked) { document.getElementById('labelCardio19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCardio20e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio20a').checked) { document.getElementById('labelCardio20a').style.color = '#f00'; }
      if (document.getElementById('radioCardio20b').checked) { document.getElementById('labelCardio20b').style.color = '#f00'; }
      if (document.getElementById('radioCardio20c').checked) { document.getElementById('labelCardio20c').style.color = '#f00'; }
      if (document.getElementById('radioCardio20d').checked) { document.getElementById('labelCardio20d').style.color = '#f00'; }
      //if (document.getElementById('radioCardio20e').checked) { document.getElementById('labelCardio20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;  
}

function restoreFormSolCardio() {

      document.getElementById('labelCardio1a').style.color = '#fff';
      document.getElementById('labelCardio1b').style.color = '#fff';
      document.getElementById('labelCardio1c').style.color = '#fff';
      document.getElementById('labelCardio1d').style.color = '#fff';
      //document.getElementById('labelCardio1e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio2a').style.color = '#fff';
      document.getElementById('labelCardio2b').style.color = '#fff';
      //document.getElementById('labelCardio2c').style.color = '#fff';
      document.getElementById('labelCardio2d').style.color = '#fff';
      document.getElementById('labelCardio2e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio3a').style.color = '#fff';
      document.getElementById('labelCardio3b').style.color = '#fff';
      //document.getElementById('labelCardio3c').style.color = '#fff';
      document.getElementById('labelCardio3d').style.color = '#fff';
      document.getElementById('labelCardio3e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCardio4a').style.color = '#fff';
      document.getElementById('labelCardio4b').style.color = '#fff';
      document.getElementById('labelCardio4c').style.color = '#fff';
      document.getElementById('labelCardio4d').style.color = '#fff';
      document.getElementById('labelCardio4e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio5a').style.color = '#fff';
      //document.getElementById('labelCardio5b').style.color = '#fff';
      document.getElementById('labelCardio5c').style.color = '#fff';
      document.getElementById('labelCardio5d').style.color = '#fff';
      document.getElementById('labelCardio5e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio6a').style.color = '#fff';
      document.getElementById('labelCardio6b').style.color = '#fff';
      document.getElementById('labelCardio6c').style.color = '#fff';
      //document.getElementById('labelCardio6d').style.color = '#fff';
      document.getElementById('labelCardio6e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCardio7a').style.color = '#fff';
      document.getElementById('labelCardio7b').style.color = '#fff';
      document.getElementById('labelCardio7c').style.color = '#fff';
      document.getElementById('labelCardio7d').style.color = '#fff';
      document.getElementById('labelCardio7e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio8a').style.color = '#fff';
      document.getElementById('labelCardio8b').style.color = '#fff';
      document.getElementById('labelCardio8c').style.color = '#fff';
      document.getElementById('labelCardio8d').style.color = '#fff';
      //document.getElementById('labelCardio8e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio9a').style.color = '#fff';
      //document.getElementById('labelCardio9b').style.color = '#fff';
      document.getElementById('labelCardio9c').style.color = '#fff';
      document.getElementById('labelCardio9d').style.color = '#fff';
      document.getElementById('labelCardio9e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio10a').style.color = '#fff';
      document.getElementById('labelCardio10b').style.color = '#fff';
      document.getElementById('labelCardio10c').style.color = '#fff';
      document.getElementById('labelCardio10d').style.color = '#fff';
      //document.getElementById('labelCardio10e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio11a').style.color = '#fff';
      document.getElementById('labelCardio11b').style.color = '#fff';
      //document.getElementById('labelCardio11c').style.color = '#fff';
      document.getElementById('labelCardio11d').style.color = '#fff';
      document.getElementById('labelCardio11e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCardio12a').style.color = '#fff';
      document.getElementById('labelCardio12b').style.color = '#fff';
      document.getElementById('labelCardio12c').style.color = '#fff';
      document.getElementById('labelCardio12d').style.color = '#fff';
      document.getElementById('labelCardio12e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio13a').style.color = '#fff';
      //document.getElementById('labelCardio13b').style.color = '#fff';
      document.getElementById('labelCardio13c').style.color = '#fff';
      document.getElementById('labelCardio13d').style.color = '#fff';
      document.getElementById('labelCardio13e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCardio14a').style.color = '#fff';
      document.getElementById('labelCardio14b').style.color = '#fff';
      document.getElementById('labelCardio14c').style.color = '#fff';
      document.getElementById('labelCardio14d').style.color = '#fff';
      document.getElementById('labelCardio14e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio15a').style.color = '#fff';
      document.getElementById('labelCardio15b').style.color = '#fff';
      document.getElementById('labelCardio15c').style.color = '#fff';
      //document.getElementById('labelCardio15d').style.color = '#fff';
      document.getElementById('labelCardio15e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio16a').style.color = '#fff';
      document.getElementById('labelCardio16b').style.color = '#fff';
      //document.getElementById('labelCardio16c').style.color = '#fff';
      document.getElementById('labelCardio16d').style.color = '#fff';
      document.getElementById('labelCardio16e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio17a').style.color = '#fff';
      document.getElementById('labelCardio17b').style.color = '#fff';
      //document.getElementById('labelCardio17c').style.color = '#fff';
      document.getElementById('labelCardio17d').style.color = '#fff';
      document.getElementById('labelCardio17e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio18a').style.color = '#fff';
      document.getElementById('labelCardio18b').style.color = '#fff';
      document.getElementById('labelCardio18c').style.color = '#fff';
      document.getElementById('labelCardio18d').style.color = '#fff';
      //document.getElementById('labelCardio18e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCardio19a').style.color = '#fff';
      document.getElementById('labelCardio19b').style.color = '#fff';
      document.getElementById('labelCardio19c').style.color = '#fff';
      document.getElementById('labelCardio19d').style.color = '#fff';
      document.getElementById('labelCardio19e').style.color = '#fff';
      //-------/

      document.getElementById('labelCardio20a').style.color = '#fff';
      document.getElementById('labelCardio20b').style.color = '#fff';
      document.getElementById('labelCardio20c').style.color = '#fff';
      document.getElementById('labelCardio20d').style.color = '#fff';
      //document.getElementById('labelCardio20e').style.color = '#fff';
      //-------/
}

function calificarCiru() {
    var form = document.getElementById('formCiru');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioCiru1e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru1a').checked) { document.getElementById('labelCiru1a').style.color = '#f00'; }
      if (document.getElementById('radioCiru1b').checked) { document.getElementById('labelCiru1b').style.color = '#f00'; }
      if (document.getElementById('radioCiru1c').checked) { document.getElementById('labelCiru1c').style.color = '#f00'; }
      if (document.getElementById('radioCiru1d').checked) { document.getElementById('labelCiru1d').style.color = '#f00'; }
      //if (document.getElementById('radioCiru1e').checked) { document.getElementById('labelCiru1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru2e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru2a').checked) { document.getElementById('labelCiru2a').style.color = '#f00'; }
      if (document.getElementById('radioCiru2b').checked) { document.getElementById('labelCiru2b').style.color = '#f00'; }
      if (document.getElementById('radioCiru2c').checked) { document.getElementById('labelCiru2c').style.color = '#f00'; }
      if (document.getElementById('radioCiru2d').checked) { document.getElementById('labelCiru2d').style.color = '#f00'; }
      //if (document.getElementById('radioCiru2e').checked) { document.getElementById('labelCiru2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru3a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCiru3a').checked) { document.getElementById('labelCiru3a').style.color = '#f00'; }
      if (document.getElementById('radioCiru3b').checked) { document.getElementById('labelCiru3b').style.color = '#f00'; }
      if (document.getElementById('radioCiru3c').checked) { document.getElementById('labelCiru3c').style.color = '#f00'; }
      if (document.getElementById('radioCiru3d').checked) { document.getElementById('labelCiru3d').style.color = '#f00'; }
      if (document.getElementById('radioCiru3e').checked) { document.getElementById('labelCiru3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru4c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru4a').checked) { document.getElementById('labelCiru4a').style.color = '#f00'; }
      if (document.getElementById('radioCiru4b').checked) { document.getElementById('labelCiru4b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru4c').checked) { document.getElementById('labelCiru4c').style.color = '#f00'; }
      if (document.getElementById('radioCiru4d').checked) { document.getElementById('labelCiru4d').style.color = '#f00'; }
      if (document.getElementById('radioCiru4e').checked) { document.getElementById('labelCiru4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru5c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru5a').checked) { document.getElementById('labelCiru5a').style.color = '#f00'; }
      if (document.getElementById('radioCiru5b').checked) { document.getElementById('labelCiru5b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru5c').checked) { document.getElementById('labelCiru5c').style.color = '#f00'; }
      if (document.getElementById('radioCiru5d').checked) { document.getElementById('labelCiru5d').style.color = '#f00'; }
      if (document.getElementById('radioCiru5e').checked) { document.getElementById('labelCiru5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru6c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru6a').checked) { document.getElementById('labelCiru6a').style.color = '#f00'; }
      if (document.getElementById('radioCiru6b').checked) { document.getElementById('labelCiru6b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru6c').checked) { document.getElementById('labelCiru6c').style.color = '#f00'; }
      if (document.getElementById('radioCiru6d').checked) { document.getElementById('labelCiru6d').style.color = '#f00'; }
      if (document.getElementById('radioCiru6e').checked) { document.getElementById('labelCiru6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru7a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioCiru7a').checked) { document.getElementById('labelCiru7a').style.color = '#f00'; }
      if (document.getElementById('radioCiru7b').checked) { document.getElementById('labelCiru7b').style.color = '#f00'; }
      if (document.getElementById('radioCiru7c').checked) { document.getElementById('labelCiru7c').style.color = '#f00'; }
      if (document.getElementById('radioCiru7d').checked) { document.getElementById('labelCiru7d').style.color = '#f00'; }
      if (document.getElementById('radioCiru7e').checked) { document.getElementById('labelCiru7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru8c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru8a').checked) { document.getElementById('labelCiru8a').style.color = '#f00'; }
      if (document.getElementById('radioCiru8b').checked) { document.getElementById('labelCiru8b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru8c').checked) { document.getElementById('labelCiru8c').style.color = '#f00'; }
      if (document.getElementById('radioCiru8d').checked) { document.getElementById('labelCiru8d').style.color = '#f00'; }
      if (document.getElementById('radioCiru8e').checked) { document.getElementById('labelCiru8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru9c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru9a').checked) { document.getElementById('labelCiru9a').style.color = '#f00'; }
      if (document.getElementById('radioCiru9b').checked) { document.getElementById('labelCiru9b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru9c').checked) { document.getElementById('labelCiru9c').style.color = '#f00'; }
      if (document.getElementById('radioCiru9d').checked) { document.getElementById('labelCiru9d').style.color = '#f00'; }
      if (document.getElementById('radioCiru9e').checked) { document.getElementById('labelCiru9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru10b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru10a').checked) { document.getElementById('labelCiru10a').style.color = '#f00'; }
      //if (document.getElementById('radioCiru10b').checked) { document.getElementById('labelCiru10b').style.color = '#f00'; }
      if (document.getElementById('radioCiru10c').checked) { document.getElementById('labelCiru10c').style.color = '#f00'; }
      if (document.getElementById('radioCiru10d').checked) { document.getElementById('labelCiru10d').style.color = '#f00'; }
      if (document.getElementById('radioCiru10e').checked) { document.getElementById('labelCiru10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru11d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru11a').checked) { document.getElementById('labelCiru11a').style.color = '#f00'; }
      if (document.getElementById('radioCiru11b').checked) { document.getElementById('labelCiru11b').style.color = '#f00'; }
      if (document.getElementById('radioCiru11c').checked) { document.getElementById('labelCiru11c').style.color = '#f00'; }
      //if (document.getElementById('radioCiru11d').checked) { document.getElementById('labelCiru11d').style.color = '#f00'; }
      if (document.getElementById('radioCiru11e').checked) { document.getElementById('labelCiru11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru12b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru12a').checked) { document.getElementById('labelCiru12a').style.color = '#f00'; }
      //if (document.getElementById('radioCiru12b').checked) { document.getElementById('labelCiru12b').style.color = '#f00'; }
      if (document.getElementById('radioCiru12c').checked) { document.getElementById('labelCiru12c').style.color = '#f00'; }
      if (document.getElementById('radioCiru12d').checked) { document.getElementById('labelCiru12d').style.color = '#f00'; }
      if (document.getElementById('radioCiru12e').checked) { document.getElementById('labelCiru12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru13c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru13a').checked) { document.getElementById('labelCiru13a').style.color = '#f00'; }
      if (document.getElementById('radioCiru13b').checked) { document.getElementById('labelCiru13b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru13c').checked) { document.getElementById('labelCiru13c').style.color = '#f00'; }
      if (document.getElementById('radioCiru13d').checked) { document.getElementById('labelCiru13d').style.color = '#f00'; }
      if (document.getElementById('radioCiru13e').checked) { document.getElementById('labelCiru13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru14d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru14a').checked) { document.getElementById('labelCiru14a').style.color = '#f00'; }
      if (document.getElementById('radioCiru14b').checked) { document.getElementById('labelCiru14b').style.color = '#f00'; }
      if (document.getElementById('radioCiru14c').checked) { document.getElementById('labelCiru14c').style.color = '#f00'; }
      //if (document.getElementById('radioCiru14d').checked) { document.getElementById('labelCiru14d').style.color = '#f00'; }
      if (document.getElementById('radioCiru14e').checked) { document.getElementById('labelCiru14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru15d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru15a').checked) { document.getElementById('labelCiru15a').style.color = '#f00'; }
      if (document.getElementById('radioCiru15b').checked) { document.getElementById('labelCiru15b').style.color = '#f00'; }
      if (document.getElementById('radioCiru15c').checked) { document.getElementById('labelCiru15c').style.color = '#f00'; }
      //if (document.getElementById('radioCiru15d').checked) { document.getElementById('labelCiru15d').style.color = '#f00'; }
      if (document.getElementById('radioCiru15e').checked) { document.getElementById('labelCiru15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru16c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru16a').checked) { document.getElementById('labelCiru16a').style.color = '#f00'; }
      if (document.getElementById('radioCiru16b').checked) { document.getElementById('labelCiru16b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru16c').checked) { document.getElementById('labelCiru16c').style.color = '#f00'; }
      if (document.getElementById('radioCiru16d').checked) { document.getElementById('labelCiru16d').style.color = '#f00'; }
      if (document.getElementById('radioCiru16e').checked) { document.getElementById('labelCiru16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru17b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru17a').checked) { document.getElementById('labelCiru17a').style.color = '#f00'; }
      //if (document.getElementById('radioCiru17b').checked) { document.getElementById('labelCiru17b').style.color = '#f00'; }
      if (document.getElementById('radioCiru17c').checked) { document.getElementById('labelCiru17c').style.color = '#f00'; }
      if (document.getElementById('radioCiru17d').checked) { document.getElementById('labelCiru17d').style.color = '#f00'; }
      if (document.getElementById('radioCiru17e').checked) { document.getElementById('labelCiru17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru18e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru18a').checked) { document.getElementById('labelCiru18a').style.color = '#f00'; }
      if (document.getElementById('radioCiru18b').checked) { document.getElementById('labelCiru18b').style.color = '#f00'; }
      if (document.getElementById('radioCiru18c').checked) { document.getElementById('labelCiru18c').style.color = '#f00'; }
      if (document.getElementById('radioCiru18d').checked) { document.getElementById('labelCiru18d').style.color = '#f00'; }
      //if (document.getElementById('radioCiru18e').checked) { document.getElementById('labelCiru18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru19d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru19a').checked) { document.getElementById('labelCiru19a').style.color = '#f00'; }
      if (document.getElementById('radioCiru19b').checked) { document.getElementById('labelCiru19b').style.color = '#f00'; }
      if (document.getElementById('radioCiru19c').checked) { document.getElementById('labelCiru19c').style.color = '#f00'; }
      //if (document.getElementById('radioCiru19d').checked) { document.getElementById('labelCiru19d').style.color = '#f00'; }
      if (document.getElementById('radioCiru19e').checked) { document.getElementById('labelCiru19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioCiru20c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru20a').checked) { document.getElementById('labelCiru20a').style.color = '#f00'; }
      if (document.getElementById('radioCiru20b').checked) { document.getElementById('labelCiru20b').style.color = '#f00'; }
      //if (document.getElementById('radioCiru20c').checked) { document.getElementById('labelCiru20c').style.color = '#f00'; }
      if (document.getElementById('radioCiru20d').checked) { document.getElementById('labelCiru20d').style.color = '#f00'; }
      if (document.getElementById('radioCiru20e').checked) { document.getElementById('labelCiru20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;  
}

function restoreFormSolCiru() {

      document.getElementById('labelCiru1a').style.color = '#fff';
      document.getElementById('labelCiru1b').style.color = '#fff';
      document.getElementById('labelCiru1c').style.color = '#fff';
      document.getElementById('labelCiru1d').style.color = '#fff';
      //document.getElementById('labelCiru1e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru2a').style.color = '#fff';
      document.getElementById('labelCiru2b').style.color = '#fff';
      document.getElementById('labelCiru2c').style.color = '#fff';
      document.getElementById('labelCiru2d').style.color = '#fff';
      //document.getElementById('labelCiru2e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCiru3a').style.color = '#fff';
      document.getElementById('labelCiru3b').style.color = '#fff';
      document.getElementById('labelCiru3c').style.color = '#fff';
      document.getElementById('labelCiru3d').style.color = '#fff';
      document.getElementById('labelCiru3e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru4a').style.color = '#fff';
      document.getElementById('labelCiru4b').style.color = '#fff';
      //document.getElementById('labelCiru4c').style.color = '#fff';
      document.getElementById('labelCiru4d').style.color = '#fff';
      document.getElementById('labelCiru4e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru5a').style.color = '#fff';
      document.getElementById('labelCiru5b').style.color = '#fff';
      //document.getElementById('labelCiru5c').style.color = '#fff';
      document.getElementById('labelCiru5d').style.color = '#fff';
      document.getElementById('labelCiru5e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru6a').style.color = '#fff';
      document.getElementById('labelCiru6b').style.color = '#fff';
      //document.getElementById('labelCiru6c').style.color = '#fff';
      document.getElementById('labelCiru6d').style.color = '#fff';
      document.getElementById('labelCiru6e').style.color = '#fff';
      //-------/

      //document.getElementById('labelCiru7a').style.color = '#fff';
      document.getElementById('labelCiru7b').style.color = '#fff';
      document.getElementById('labelCiru7c').style.color = '#fff';
      document.getElementById('labelCiru7d').style.color = '#fff';
      document.getElementById('labelCiru7e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru8a').style.color = '#fff';
      document.getElementById('labelCiru8b').style.color = '#fff';
      //document.getElementById('labelCiru8c').style.color = '#fff';
      document.getElementById('labelCiru8d').style.color = '#fff';
      document.getElementById('labelCiru8e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru9a').style.color = '#fff';
      document.getElementById('labelCiru9b').style.color = '#fff';
      //document.getElementById('labelCiru9c').style.color = '#fff';
      document.getElementById('labelCiru9d').style.color = '#fff';
      document.getElementById('labelCiru9e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru10a').style.color = '#fff';
      //document.getElementById('labelCiru10b').style.color = '#fff';
      document.getElementById('labelCiru10c').style.color = '#fff';
      document.getElementById('labelCiru10d').style.color = '#fff';
      document.getElementById('labelCiru10e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru11a').style.color = '#fff';
      document.getElementById('labelCiru11b').style.color = '#fff';
      document.getElementById('labelCiru11c').style.color = '#fff';
      //document.getElementById('labelCiru11d').style.color = '#fff';
      document.getElementById('labelCiru11e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru12a').style.color = '#fff';
      //document.getElementById('labelCiru12b').style.color = '#fff';
      document.getElementById('labelCiru12c').style.color = '#fff';
      document.getElementById('labelCiru12d').style.color = '#fff';
      document.getElementById('labelCiru12e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru13a').style.color = '#fff';
      document.getElementById('labelCiru13b').style.color = '#fff';
      //document.getElementById('labelCiru13c').style.color = '#fff';
      document.getElementById('labelCiru13d').style.color = '#fff';
      document.getElementById('labelCiru13e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru14a').style.color = '#fff';
      document.getElementById('labelCiru14b').style.color = '#fff';
      document.getElementById('labelCiru14c').style.color = '#fff';
      //document.getElementById('labelCiru14d').style.color = '#fff';
      document.getElementById('labelCiru14e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru15a').style.color = '#fff';
      document.getElementById('labelCiru15b').style.color = '#fff';
      document.getElementById('labelCiru15c').style.color = '#fff';
      //document.getElementById('labelCiru15d').style.color = '#fff';
      document.getElementById('labelCiru15e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru16a').style.color = '#fff';
      document.getElementById('labelCiru16b').style.color = '#fff';
      //document.getElementById('labelCiru16c').style.color = '#fff';
      document.getElementById('labelCiru16d').style.color = '#fff';
      document.getElementById('labelCiru16e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru17a').style.color = '#fff';
      //document.getElementById('labelCiru17b').style.color = '#fff';
      document.getElementById('labelCiru17c').style.color = '#fff';
      document.getElementById('labelCiru17d').style.color = '#fff';
      document.getElementById('labelCiru17e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru18a').style.color = '#fff';
      document.getElementById('labelCiru18b').style.color = '#fff';
      document.getElementById('labelCiru18c').style.color = '#fff';
      document.getElementById('labelCiru18d').style.color = '#fff';
      //document.getElementById('labelCiru18e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru19a').style.color = '#fff';
      document.getElementById('labelCiru19b').style.color = '#fff';
      document.getElementById('labelCiru19c').style.color = '#fff';
      //document.getElementById('labelCiru19d').style.color = '#fff';
      document.getElementById('labelCiru19e').style.color = '#fff';
      //-------/

      document.getElementById('labelCiru20a').style.color = '#fff';
      document.getElementById('labelCiru20b').style.color = '#fff';
      //document.getElementById('labelCiru20c').style.color = '#fff';
      document.getElementById('labelCiru20d').style.color = '#fff';
      document.getElementById('labelCiru20e').style.color = '#fff';
      //-------/
}

function calificarDerma() {
    var form = document.getElementById('formDerma');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioDerma1d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma1a').checked) { document.getElementById('labelDerma1a').style.color = '#f00'; }
      if (document.getElementById('radioDerma1b').checked) { document.getElementById('labelDerma1b').style.color = '#f00'; }
      if (document.getElementById('radioDerma1c').checked) { document.getElementById('labelDerma1c').style.color = '#f00'; }
      //if (document.getElementById('radioDerma1d').checked) { document.getElementById('labelDerma1d').style.color = '#f00'; }
      if (document.getElementById('radioDerma1e').checked) { document.getElementById('labelDerma1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma2a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioDerma2a').checked) { document.getElementById('labelDerma2a').style.color = '#f00'; }
      if (document.getElementById('radioDerma2b').checked) { document.getElementById('labelDerma2b').style.color = '#f00'; }
      if (document.getElementById('radioDerma2c').checked) { document.getElementById('labelDerma2c').style.color = '#f00'; }
      if (document.getElementById('radioDerma2d').checked) { document.getElementById('labelDerma2d').style.color = '#f00'; }
      if (document.getElementById('radioDerma2e').checked) { document.getElementById('labelDerma2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma3c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma3a').checked) { document.getElementById('labelDerma3a').style.color = '#f00'; }
      if (document.getElementById('radioDerma3b').checked) { document.getElementById('labelDerma3b').style.color = '#f00'; }
      //if (document.getElementById('radioDerma3c').checked) { document.getElementById('labelDerma3c').style.color = '#f00'; }
      if (document.getElementById('radioDerma3d').checked) { document.getElementById('labelDerma3d').style.color = '#f00'; }
      if (document.getElementById('radioDerma3e').checked) { document.getElementById('labelDerma3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma4a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioDerma4a').checked) { document.getElementById('labelDerma4a').style.color = '#f00'; }
      if (document.getElementById('radioDerma4b').checked) { document.getElementById('labelDerma4b').style.color = '#f00'; }
      if (document.getElementById('radioDerma4c').checked) { document.getElementById('labelDerma4c').style.color = '#f00'; }
      if (document.getElementById('radioDerma4d').checked) { document.getElementById('labelDerma4d').style.color = '#f00'; }
      if (document.getElementById('radioDerma4e').checked) { document.getElementById('labelDerma4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma5a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioDerma5a').checked) { document.getElementById('labelDerma5a').style.color = '#f00'; }
      if (document.getElementById('radioDerma5b').checked) { document.getElementById('labelDerma5b').style.color = '#f00'; }
      if (document.getElementById('radioDerma5c').checked) { document.getElementById('labelDerma5c').style.color = '#f00'; }
      if (document.getElementById('radioDerma5d').checked) { document.getElementById('labelDerma5d').style.color = '#f00'; }
      if (document.getElementById('radioDerma5e').checked) { document.getElementById('labelDerma5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma6a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioDerma6a').checked) { document.getElementById('labelDerma6a').style.color = '#f00'; }
      if (document.getElementById('radioDerma6b').checked) { document.getElementById('labelDerma6b').style.color = '#f00'; }
      if (document.getElementById('radioDerma6c').checked) { document.getElementById('labelDerma6c').style.color = '#f00'; }
      if (document.getElementById('radioDerma6d').checked) { document.getElementById('labelDerma6d').style.color = '#f00'; }
      if (document.getElementById('radioDerma6e').checked) { document.getElementById('labelDerma6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma7e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma7a').checked) { document.getElementById('labelDerma7a').style.color = '#f00'; }
      if (document.getElementById('radioDerma7b').checked) { document.getElementById('labelDerma7b').style.color = '#f00'; }
      if (document.getElementById('radioDerma7c').checked) { document.getElementById('labelDerma7c').style.color = '#f00'; }
      if (document.getElementById('radioDerma7d').checked) { document.getElementById('labelDerma7d').style.color = '#f00'; }
      //if (document.getElementById('radioDerma7e').checked) { document.getElementById('labelDerma7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma8e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma8a').checked) { document.getElementById('labelDerma8a').style.color = '#f00'; }
      if (document.getElementById('radioDerma8b').checked) { document.getElementById('labelDerma8b').style.color = '#f00'; }
      if (document.getElementById('radioDerma8c').checked) { document.getElementById('labelDerma8c').style.color = '#f00'; }
      if (document.getElementById('radioDerma8d').checked) { document.getElementById('labelDerma8d').style.color = '#f00'; }
      //if (document.getElementById('radioDerma8e').checked) { document.getElementById('labelDerma8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma9c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma9a').checked) { document.getElementById('labelDerma9a').style.color = '#f00'; }
      if (document.getElementById('radioDerma9b').checked) { document.getElementById('labelDerma9b').style.color = '#f00'; }
      //if (document.getElementById('radioDerma9c').checked) { document.getElementById('labelDerma9c').style.color = '#f00'; }
      if (document.getElementById('radioDerma9d').checked) { document.getElementById('labelDerma9d').style.color = '#f00'; }
      if (document.getElementById('radioDerma9e').checked) { document.getElementById('labelDerma9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma10d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma10a').checked) { document.getElementById('labelDerma10a').style.color = '#f00'; }
      if (document.getElementById('radioDerma10b').checked) { document.getElementById('labelDerma10b').style.color = '#f00'; }
      if (document.getElementById('radioDerma10c').checked) { document.getElementById('labelDerma10c').style.color = '#f00'; }
      //if (document.getElementById('radioDerma10d').checked) { document.getElementById('labelDerma10d').style.color = '#f00'; }
      if (document.getElementById('radioDerma10e').checked) { document.getElementById('labelDerma10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma11c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma11a').checked) { document.getElementById('labelDerma11a').style.color = '#f00'; }
      if (document.getElementById('radioDerma11b').checked) { document.getElementById('labelDerma11b').style.color = '#f00'; }
      //if (document.getElementById('radioDerma11c').checked) { document.getElementById('labelDerma11c').style.color = '#f00'; }
      if (document.getElementById('radioDerma11d').checked) { document.getElementById('labelDerma11d').style.color = '#f00'; }
      if (document.getElementById('radioDerma11e').checked) { document.getElementById('labelDerma11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma12c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma12a').checked) { document.getElementById('labelDerma12a').style.color = '#f00'; }
      if (document.getElementById('radioDerma12b').checked) { document.getElementById('labelDerma12b').style.color = '#f00'; }
      //if (document.getElementById('radioDerma12c').checked) { document.getElementById('labelDerma12c').style.color = '#f00'; }
      if (document.getElementById('radioDerma12d').checked) { document.getElementById('labelDerma12d').style.color = '#f00'; }
      if (document.getElementById('radioDerma12e').checked) { document.getElementById('labelDerma12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma13d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma13a').checked) { document.getElementById('labelDerma13a').style.color = '#f00'; }
      if (document.getElementById('radioDerma13b').checked) { document.getElementById('labelDerma13b').style.color = '#f00'; }
      if (document.getElementById('radioDerma13c').checked) { document.getElementById('labelDerma13c').style.color = '#f00'; }
      //if (document.getElementById('radioDerma13d').checked) { document.getElementById('labelDerma13d').style.color = '#f00'; }
      if (document.getElementById('radioDerma13e').checked) { document.getElementById('labelDerma13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma14d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma14a').checked) { document.getElementById('labelDerma14a').style.color = '#f00'; }
      if (document.getElementById('radioDerma14b').checked) { document.getElementById('labelDerma14b').style.color = '#f00'; }
      if (document.getElementById('radioDerma14c').checked) { document.getElementById('labelDerma14c').style.color = '#f00'; }
      //if (document.getElementById('radioDerma14d').checked) { document.getElementById('labelDerma14d').style.color = '#f00'; }
      if (document.getElementById('radioDerma14e').checked) { document.getElementById('labelDerma14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma15d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma15a').checked) { document.getElementById('labelDerma15a').style.color = '#f00'; }
      if (document.getElementById('radioDerma15b').checked) { document.getElementById('labelDerma15b').style.color = '#f00'; }
      if (document.getElementById('radioDerma15c').checked) { document.getElementById('labelDerma15c').style.color = '#f00'; }
      //if (document.getElementById('radioDerma15d').checked) { document.getElementById('labelDerma15d').style.color = '#f00'; }
      if (document.getElementById('radioDerma15e').checked) { document.getElementById('labelDerma15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma16b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma16a').checked) { document.getElementById('labelDerma16a').style.color = '#f00'; }
      //if (document.getElementById('radioDerma16b').checked) { document.getElementById('labelDerma16b').style.color = '#f00'; }
      if (document.getElementById('radioDerma16c').checked) { document.getElementById('labelDerma16c').style.color = '#f00'; }
      if (document.getElementById('radioDerma16d').checked) { document.getElementById('labelDerma16d').style.color = '#f00'; }
      if (document.getElementById('radioDerma16e').checked) { document.getElementById('labelDerma16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma17b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma17a').checked) { document.getElementById('labelDerma17a').style.color = '#f00'; }
      //if (document.getElementById('radioDerma17b').checked) { document.getElementById('labelDerma17b').style.color = '#f00'; }
      if (document.getElementById('radioDerma17c').checked) { document.getElementById('labelDerma17c').style.color = '#f00'; }
      if (document.getElementById('radioDerma17d').checked) { document.getElementById('labelDerma17d').style.color = '#f00'; }
      if (document.getElementById('radioDerma17e').checked) { document.getElementById('labelDerma17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma18d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma18a').checked) { document.getElementById('labelDerma18a').style.color = '#f00'; }
      if (document.getElementById('radioDerma18b').checked) { document.getElementById('labelDerma18b').style.color = '#f00'; }
      if (document.getElementById('radioDerma18c').checked) { document.getElementById('labelDerma18c').style.color = '#f00'; }
      //if (document.getElementById('radioDerma18d').checked) { document.getElementById('labelDerma18d').style.color = '#f00'; }
      if (document.getElementById('radioDerma18e').checked) { document.getElementById('labelDerma18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma19a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioDerma19a').checked) { document.getElementById('labelDerma19a').style.color = '#f00'; }
      if (document.getElementById('radioDerma19b').checked) { document.getElementById('labelDerma19b').style.color = '#f00'; }
      if (document.getElementById('radioDerma19c').checked) { document.getElementById('labelDerma19c').style.color = '#f00'; }
      if (document.getElementById('radioDerma19d').checked) { document.getElementById('labelDerma19d').style.color = '#f00'; }
      if (document.getElementById('radioDerma19e').checked) { document.getElementById('labelDerma19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioDerma20c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma20a').checked) { document.getElementById('labelDerma20a').style.color = '#f00'; }
      if (document.getElementById('radioDerma20b').checked) { document.getElementById('labelDerma20b').style.color = '#f00'; }
      //if (document.getElementById('radioDerma20c').checked) { document.getElementById('labelDerma20c').style.color = '#f00'; }
      if (document.getElementById('radioDerma20d').checked) { document.getElementById('labelDerma20d').style.color = '#f00'; }
      if (document.getElementById('radioDerma20e').checked) { document.getElementById('labelDerma20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolDerma() {

      document.getElementById('labelDerma1a').style.color = '#fff';
      document.getElementById('labelDerma1b').style.color = '#fff';
      document.getElementById('labelDerma1c').style.color = '#fff';
      //document.getElementById('labelDerma1d').style.color = '#fff';
      document.getElementById('labelDerma1e').style.color = '#fff';
      //-------/

      //document.getElementById('labelDerma2a').style.color = '#fff';
      document.getElementById('labelDerma2b').style.color = '#fff';
      document.getElementById('labelDerma2c').style.color = '#fff';
      document.getElementById('labelDerma2d').style.color = '#fff';
      document.getElementById('labelDerma2e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma3a').style.color = '#fff';
      document.getElementById('labelDerma3b').style.color = '#fff';
      //document.getElementById('labelDerma3c').style.color = '#fff';
      document.getElementById('labelDerma3d').style.color = '#fff';
      document.getElementById('labelDerma3e').style.color = '#fff';
      //-------/

      //document.getElementById('labelDerma4a').style.color = '#fff';
      document.getElementById('labelDerma4b').style.color = '#fff';
      document.getElementById('labelDerma4c').style.color = '#fff';
      document.getElementById('labelDerma4d').style.color = '#fff';
      document.getElementById('labelDerma4e').style.color = '#fff';
      //-------/

      //document.getElementById('labelDerma5a').style.color = '#fff';
      document.getElementById('labelDerma5b').style.color = '#fff';
      document.getElementById('labelDerma5c').style.color = '#fff';
      document.getElementById('labelDerma5d').style.color = '#fff';
      document.getElementById('labelDerma5e').style.color = '#fff';
      //-------/

      //document.getElementById('labelDerma6a').style.color = '#fff';
      document.getElementById('labelDerma6b').style.color = '#fff';
      document.getElementById('labelDerma6c').style.color = '#fff';
      document.getElementById('labelDerma6d').style.color = '#fff';
      document.getElementById('labelDerma6e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma7a').style.color = '#fff';
      document.getElementById('labelDerma7b').style.color = '#fff';
      document.getElementById('labelDerma7c').style.color = '#fff';
      document.getElementById('labelDerma7d').style.color = '#fff';
      //document.getElementById('labelDerma7e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma8a').style.color = '#fff';
      document.getElementById('labelDerma8b').style.color = '#fff';
      document.getElementById('labelDerma8c').style.color = '#fff';
      document.getElementById('labelDerma8d').style.color = '#fff';
      //document.getElementById('labelDerma8e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma9a').style.color = '#fff';
      document.getElementById('labelDerma9b').style.color = '#fff';
      //document.getElementById('labelDerma9c').style.color = '#fff';
      document.getElementById('labelDerma9d').style.color = '#fff';
      document.getElementById('labelDerma9e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma10a').style.color = '#fff';
      document.getElementById('labelDerma10b').style.color = '#fff';
      document.getElementById('labelDerma10c').style.color = '#fff';
      //document.getElementById('labelDerma10d').style.color = '#fff';
      document.getElementById('labelDerma10e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma11a').style.color = '#fff';
      document.getElementById('labelDerma11b').style.color = '#fff';
      //document.getElementById('labelDerma11c').style.color = '#fff';
      document.getElementById('labelDerma11d').style.color = '#fff';
      document.getElementById('labelDerma11e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma12a').style.color = '#fff';
      document.getElementById('labelDerma12b').style.color = '#fff';
      //document.getElementById('labelDerma12c').style.color = '#fff';
      document.getElementById('labelDerma12d').style.color = '#fff';
      document.getElementById('labelDerma12e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma13a').style.color = '#fff';
      document.getElementById('labelDerma13b').style.color = '#fff';
      document.getElementById('labelDerma13c').style.color = '#fff';
      //document.getElementById('labelDerma13d').style.color = '#fff';
      document.getElementById('labelDerma13e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma14a').style.color = '#fff';
      document.getElementById('labelDerma14b').style.color = '#fff';
      document.getElementById('labelDerma14c').style.color = '#fff';
      //document.getElementById('labelDerma14d').style.color = '#fff';
      document.getElementById('labelDerma14e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma15a').style.color = '#fff';
      document.getElementById('labelDerma15b').style.color = '#fff';
      document.getElementById('labelDerma15c').style.color = '#fff';
      //document.getElementById('labelDerma15d').style.color = '#fff';
      document.getElementById('labelDerma15e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma16a').style.color = '#fff';
      //document.getElementById('labelDerma16b').style.color = '#fff';
      document.getElementById('labelDerma16c').style.color = '#fff';
      document.getElementById('labelDerma16d').style.color = '#fff';
      document.getElementById('labelDerma16e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma17a').style.color = '#fff';
      //document.getElementById('labelDerma17b').style.color = '#fff';
      document.getElementById('labelDerma17c').style.color = '#fff';
      document.getElementById('labelDerma17d').style.color = '#fff';
      document.getElementById('labelDerma17e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma18a').style.color = '#fff';
      document.getElementById('labelDerma18b').style.color = '#fff';
      document.getElementById('labelDerma18c').style.color = '#fff';
      //document.getElementById('labelDerma18d').style.color = '#fff';
      document.getElementById('labelDerma18e').style.color = '#fff';
      //-------/

      //document.getElementById('labelDerma19a').style.color = '#fff';
      document.getElementById('labelDerma19b').style.color = '#fff';
      document.getElementById('labelDerma19c').style.color = '#fff';
      document.getElementById('labelDerma19d').style.color = '#fff';
      document.getElementById('labelDerma19e').style.color = '#fff';
      //-------/

      document.getElementById('labelDerma20a').style.color = '#fff';
      document.getElementById('labelDerma20b').style.color = '#fff';
      //document.getElementById('labelDerma20c').style.color = '#fff';
      document.getElementById('labelDerma20d').style.color = '#fff';
      document.getElementById('labelDerma20e').style.color = '#fff';
      //-------/
}

function calificarGastro() {
    var form = document.getElementById('formGastro');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioGastro1c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro1a').checked) { document.getElementById('labelGastro1a').style.color = '#f00'; }
      if (document.getElementById('radioGastro1b').checked) { document.getElementById('labelGastro1b').style.color = '#f00'; }
      //if (document.getElementById('radioGastro1c').checked) { document.getElementById('labelGastro1c').style.color = '#f00'; }
      if (document.getElementById('radioGastro1d').checked) { document.getElementById('labelGastro1d').style.color = '#f00'; }
      if (document.getElementById('radioGastro1e').checked) { document.getElementById('labelGastro1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro2e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro2a').checked) { document.getElementById('labelGastro2a').style.color = '#f00'; }
      if (document.getElementById('radioGastro2b').checked) { document.getElementById('labelGastro2b').style.color = '#f00'; }
      if (document.getElementById('radioGastro2c').checked) { document.getElementById('labelGastro2c').style.color = '#f00'; }
      if (document.getElementById('radioGastro2d').checked) { document.getElementById('labelGastro2d').style.color = '#f00'; }
      //if (document.getElementById('radioGastro2e').checked) { document.getElementById('labelGastro2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro3d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro3a').checked) { document.getElementById('labelGastro3a').style.color = '#f00'; }
      if (document.getElementById('radioGastro3b').checked) { document.getElementById('labelGastro3b').style.color = '#f00'; }
      if (document.getElementById('radioGastro3c').checked) { document.getElementById('labelGastro3c').style.color = '#f00'; }
      //if (document.getElementById('radioGastro3d').checked) { document.getElementById('labelGastro3d').style.color = '#f00'; }
      if (document.getElementById('radioGastro3e').checked) { document.getElementById('labelGastro3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro4c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro4a').checked) { document.getElementById('labelGastro4a').style.color = '#f00'; }
      if (document.getElementById('radioGastro4b').checked) { document.getElementById('labelGastro4b').style.color = '#f00'; }
      //if (document.getElementById('radioGastro4c').checked) { document.getElementById('labelGastro4c').style.color = '#f00'; }
      if (document.getElementById('radioGastro4d').checked) { document.getElementById('labelGastro4d').style.color = '#f00'; }
      if (document.getElementById('radioGastro4e').checked) { document.getElementById('labelGastro4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro5a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro5a').checked) { document.getElementById('labelGastro5a').style.color = '#f00'; }
      if (document.getElementById('radioGastro5b').checked) { document.getElementById('labelGastro5b').style.color = '#f00'; }
      if (document.getElementById('radioGastro5c').checked) { document.getElementById('labelGastro5c').style.color = '#f00'; }
      if (document.getElementById('radioGastro5d').checked) { document.getElementById('labelGastro5d').style.color = '#f00'; }
      if (document.getElementById('radioGastro5e').checked) { document.getElementById('labelGastro5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro6b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro6a').checked) { document.getElementById('labelGastro6a').style.color = '#f00'; }
      //if (document.getElementById('radioGastro6b').checked) { document.getElementById('labelGastro6b').style.color = '#f00'; }
      if (document.getElementById('radioGastro6c').checked) { document.getElementById('labelGastro6c').style.color = '#f00'; }
      if (document.getElementById('radioGastro6d').checked) { document.getElementById('labelGastro6d').style.color = '#f00'; }
      if (document.getElementById('radioGastro6e').checked) { document.getElementById('labelGastro6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro7c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro7a').checked) { document.getElementById('labelGastro7a').style.color = '#f00'; }
      if (document.getElementById('radioGastro7b').checked) { document.getElementById('labelGastro7b').style.color = '#f00'; }
      //if (document.getElementById('radioGastro7c').checked) { document.getElementById('labelGastro7c').style.color = '#f00'; }
      if (document.getElementById('radioGastro7d').checked) { document.getElementById('labelGastro7d').style.color = '#f00'; }
      if (document.getElementById('radioGastro7e').checked) { document.getElementById('labelGastro7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro8b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro8a').checked) { document.getElementById('labelGastro8a').style.color = '#f00'; }
      //if (document.getElementById('radioGastro8b').checked) { document.getElementById('labelGastro8b').style.color = '#f00'; }
      if (document.getElementById('radioGastro8c').checked) { document.getElementById('labelGastro8c').style.color = '#f00'; }
      if (document.getElementById('radioGastro8d').checked) { document.getElementById('labelGastro8d').style.color = '#f00'; }
      if (document.getElementById('radioGastro8e').checked) { document.getElementById('labelGastro8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro9a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro9a').checked) { document.getElementById('labelGastro9a').style.color = '#f00'; }
      if (document.getElementById('radioGastro9b').checked) { document.getElementById('labelGastro9b').style.color = '#f00'; }
      if (document.getElementById('radioGastro9c').checked) { document.getElementById('labelGastro9c').style.color = '#f00'; }
      if (document.getElementById('radioGastro9d').checked) { document.getElementById('labelGastro9d').style.color = '#f00'; }
      if (document.getElementById('radioGastro9e').checked) { document.getElementById('labelGastro9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro10c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro10a').checked) { document.getElementById('labelGastro10a').style.color = '#f00'; }
      if (document.getElementById('radioGastro10b').checked) { document.getElementById('labelGastro10b').style.color = '#f00'; }
      //if (document.getElementById('radioGastro10c').checked) { document.getElementById('labelGastro10c').style.color = '#f00'; }
      if (document.getElementById('radioGastro10d').checked) { document.getElementById('labelGastro10d').style.color = '#f00'; }
      if (document.getElementById('radioGastro10e').checked) { document.getElementById('labelGastro10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro11c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro11a').checked) { document.getElementById('labelGastro11a').style.color = '#f00'; }
      if (document.getElementById('radioGastro11b').checked) { document.getElementById('labelGastro11b').style.color = '#f00'; }
      //if (document.getElementById('radioGastro11c').checked) { document.getElementById('labelGastro11c').style.color = '#f00'; }
      if (document.getElementById('radioGastro11d').checked) { document.getElementById('labelGastro11d').style.color = '#f00'; }
      if (document.getElementById('radioGastro11e').checked) { document.getElementById('labelGastro11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro12e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro12a').checked) { document.getElementById('labelGastro12a').style.color = '#f00'; }
      if (document.getElementById('radioGastro12b').checked) { document.getElementById('labelGastro12b').style.color = '#f00'; }
      if (document.getElementById('radioGastro12c').checked) { document.getElementById('labelGastro12c').style.color = '#f00'; }
      if (document.getElementById('radioGastro12d').checked) { document.getElementById('labelGastro12d').style.color = '#f00'; }
      //if (document.getElementById('radioGastro12e').checked) { document.getElementById('labelGastro12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro13a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro13a').checked) { document.getElementById('labelGastro13a').style.color = '#f00'; }
      if (document.getElementById('radioGastro13b').checked) { document.getElementById('labelGastro13b').style.color = '#f00'; }
      if (document.getElementById('radioGastro13c').checked) { document.getElementById('labelGastro13c').style.color = '#f00'; }
      if (document.getElementById('radioGastro13d').checked) { document.getElementById('labelGastro13d').style.color = '#f00'; }
      if (document.getElementById('radioGastro13e').checked) { document.getElementById('labelGastro13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro14c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro14a').checked) { document.getElementById('labelGastro14a').style.color = '#f00'; }
      if (document.getElementById('radioGastro14b').checked) { document.getElementById('labelGastro14b').style.color = '#f00'; }
      //if (document.getElementById('radioGastro14c').checked) { document.getElementById('labelGastro14c').style.color = '#f00'; }
      if (document.getElementById('radioGastro14d').checked) { document.getElementById('labelGastro14d').style.color = '#f00'; }
      if (document.getElementById('radioGastro14e').checked) { document.getElementById('labelGastro14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro15a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro15a').checked) { document.getElementById('labelGastro15a').style.color = '#f00'; }
      if (document.getElementById('radioGastro15b').checked) { document.getElementById('labelGastro15b').style.color = '#f00'; }
      if (document.getElementById('radioGastro15c').checked) { document.getElementById('labelGastro15c').style.color = '#f00'; }
      if (document.getElementById('radioGastro15d').checked) { document.getElementById('labelGastro15d').style.color = '#f00'; }
      if (document.getElementById('radioGastro15e').checked) { document.getElementById('labelGastro15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro16a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro16a').checked) { document.getElementById('labelGastro16a').style.color = '#f00'; }
      if (document.getElementById('radioGastro16b').checked) { document.getElementById('labelGastro16b').style.color = '#f00'; }
      if (document.getElementById('radioGastro16c').checked) { document.getElementById('labelGastro16c').style.color = '#f00'; }
      if (document.getElementById('radioGastro16d').checked) { document.getElementById('labelGastro16d').style.color = '#f00'; }
      if (document.getElementById('radioGastro16e').checked) { document.getElementById('labelGastro16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro17e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro17a').checked) { document.getElementById('labelGastro17a').style.color = '#f00'; }
      if (document.getElementById('radioGastro17b').checked) { document.getElementById('labelGastro17b').style.color = '#f00'; }
      if (document.getElementById('radioGastro17c').checked) { document.getElementById('labelGastro17c').style.color = '#f00'; }
      if (document.getElementById('radioGastro17d').checked) { document.getElementById('labelGastro17d').style.color = '#f00'; }
      //if (document.getElementById('radioGastro17e').checked) { document.getElementById('labelGastro17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro18a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro18a').checked) { document.getElementById('labelGastro18a').style.color = '#f00'; }
      if (document.getElementById('radioGastro18b').checked) { document.getElementById('labelGastro18b').style.color = '#f00'; }
      if (document.getElementById('radioGastro18c').checked) { document.getElementById('labelGastro18c').style.color = '#f00'; }
      if (document.getElementById('radioGastro18d').checked) { document.getElementById('labelGastro18d').style.color = '#f00'; }
      if (document.getElementById('radioGastro18e').checked) { document.getElementById('labelGastro18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro19d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro19a').checked) { document.getElementById('labelGastro19a').style.color = '#f00'; }
      if (document.getElementById('radioGastro19b').checked) { document.getElementById('labelGastro19b').style.color = '#f00'; }
      if (document.getElementById('radioGastro19c').checked) { document.getElementById('labelGastro19c').style.color = '#f00'; }
      //if (document.getElementById('radioGastro19d').checked) { document.getElementById('labelGastro19d').style.color = '#f00'; }
      if (document.getElementById('radioGastro19e').checked) { document.getElementById('labelGastro19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioGastro20a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioGastro20a').checked) { document.getElementById('labelGastro20a').style.color = '#f00'; }
      if (document.getElementById('radioGastro20b').checked) { document.getElementById('labelGastro20b').style.color = '#f00'; }
      if (document.getElementById('radioGastro20c').checked) { document.getElementById('labelGastro20c').style.color = '#f00'; }
      if (document.getElementById('radioGastro20d').checked) { document.getElementById('labelGastro20d').style.color = '#f00'; }
      if (document.getElementById('radioGastro20e').checked) { document.getElementById('labelGastro20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolGastro() {

      document.getElementById('labelGastro1a').style.color = '#fff';
      document.getElementById('labelGastro1b').style.color = '#fff';
      //document.getElementById('labelGastro1c').style.color = '#fff';
      document.getElementById('labelGastro1d').style.color = '#fff';
      document.getElementById('labelGastro1e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro2a').style.color = '#fff';
      document.getElementById('labelGastro2b').style.color = '#fff';
      document.getElementById('labelGastro2c').style.color = '#fff';
      document.getElementById('labelGastro2d').style.color = '#fff';
      //document.getElementById('labelGastro2e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro3a').style.color = '#fff';
      document.getElementById('labelGastro3b').style.color = '#fff';
      document.getElementById('labelGastro3c').style.color = '#fff';
      //document.getElementById('labelGastro3d').style.color = '#fff';
      document.getElementById('labelGastro3e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro4a').style.color = '#fff';
      document.getElementById('labelGastro4b').style.color = '#fff';
      //document.getElementById('labelGastro4c').style.color = '#fff';
      document.getElementById('labelGastro4d').style.color = '#fff';
      document.getElementById('labelGastro4e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro5a').style.color = '#fff';
      document.getElementById('labelGastro5b').style.color = '#fff';
      document.getElementById('labelGastro5c').style.color = '#fff';
      document.getElementById('labelGastro5d').style.color = '#fff';
      document.getElementById('labelGastro5e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro6a').style.color = '#fff';
      //document.getElementById('labelGastro6b').style.color = '#fff';
      document.getElementById('labelGastro6c').style.color = '#fff';
      document.getElementById('labelGastro6d').style.color = '#fff';
      document.getElementById('labelGastro6e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro7a').style.color = '#fff';
      document.getElementById('labelGastro7b').style.color = '#fff';
      //document.getElementById('labelGastro7c').style.color = '#fff';
      document.getElementById('labelGastro7d').style.color = '#fff';
      document.getElementById('labelGastro7e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro8a').style.color = '#fff';
      //document.getElementById('labelGastro8b').style.color = '#fff';
      document.getElementById('labelGastro8c').style.color = '#fff';
      document.getElementById('labelGastro8d').style.color = '#fff';
      document.getElementById('labelGastro8e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro9a').style.color = '#fff';
      document.getElementById('labelGastro9b').style.color = '#fff';
      document.getElementById('labelGastro9c').style.color = '#fff';
      document.getElementById('labelGastro9d').style.color = '#fff';
      document.getElementById('labelGastro9e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro10a').style.color = '#fff';
      document.getElementById('labelGastro10b').style.color = '#fff';
      //document.getElementById('labelGastro10c').style.color = '#fff';
      document.getElementById('labelGastro10d').style.color = '#fff';
      document.getElementById('labelGastro10e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro11a').style.color = '#fff';
      document.getElementById('labelGastro11b').style.color = '#fff';
      //document.getElementById('labelGastro11c').style.color = '#fff';
      document.getElementById('labelGastro11d').style.color = '#fff';
      document.getElementById('labelGastro11e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro12a').style.color = '#fff';
      document.getElementById('labelGastro12b').style.color = '#fff';
      document.getElementById('labelGastro12c').style.color = '#fff';
      document.getElementById('labelGastro12d').style.color = '#fff';
      //document.getElementById('labelGastro12e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro13a').style.color = '#fff';
      document.getElementById('labelGastro13b').style.color = '#fff';
      document.getElementById('labelGastro13c').style.color = '#fff';
      document.getElementById('labelGastro13d').style.color = '#fff';
      document.getElementById('labelGastro13e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro14a').style.color = '#fff';
      document.getElementById('labelGastro14b').style.color = '#fff';
      //document.getElementById('labelGastro14c').style.color = '#fff';
      document.getElementById('labelGastro14d').style.color = '#fff';
      document.getElementById('labelGastro14e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro15a').style.color = '#fff';
      document.getElementById('labelGastro15b').style.color = '#fff';
      document.getElementById('labelGastro15c').style.color = '#fff';
      document.getElementById('labelGastro15d').style.color = '#fff';
      document.getElementById('labelGastro15e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro16a').style.color = '#fff';
      document.getElementById('labelGastro16b').style.color = '#fff';
      document.getElementById('labelGastro16c').style.color = '#fff';
      document.getElementById('labelGastro16d').style.color = '#fff';
      document.getElementById('labelGastro16e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro17a').style.color = '#fff';
      document.getElementById('labelGastro17b').style.color = '#fff';
      document.getElementById('labelGastro17c').style.color = '#fff';
      document.getElementById('labelGastro17d').style.color = '#fff';
      //document.getElementById('labelGastro17e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro18a').style.color = '#fff';
      document.getElementById('labelGastro18b').style.color = '#fff';
      document.getElementById('labelGastro18c').style.color = '#fff';
      document.getElementById('labelGastro18d').style.color = '#fff';
      document.getElementById('labelGastro18e').style.color = '#fff';
      //-------/

      document.getElementById('labelGastro19a').style.color = '#fff';
      document.getElementById('labelGastro19b').style.color = '#fff';
      document.getElementById('labelGastro19c').style.color = '#fff';
      //document.getElementById('labelGastro19d').style.color = '#fff';
      document.getElementById('labelGastro19e').style.color = '#fff';
      //-------/

      //document.getElementById('labelGastro20a').style.color = '#fff';
      document.getElementById('labelGastro20b').style.color = '#fff';
      document.getElementById('labelGastro20c').style.color = '#fff';
      document.getElementById('labelGastro20d').style.color = '#fff';
      document.getElementById('labelGastro20e').style.color = '#fff';
      //-------/
}

function calificarInfe() {
    var form = document.getElementById('formInfe');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioInfe1b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe1a').checked) { document.getElementById('labelInfe1a').style.color = '#f00'; }
      //if (document.getElementById('radioInfe1b').checked) { document.getElementById('labelInfe1b').style.color = '#f00'; }
      if (document.getElementById('radioInfe1c').checked) { document.getElementById('labelInfe1c').style.color = '#f00'; }
      if (document.getElementById('radioInfe1d').checked) { document.getElementById('labelInfe1d').style.color = '#f00'; }
      if (document.getElementById('radioInfe1e').checked) { document.getElementById('labelInfe1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe2c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe2a').checked) { document.getElementById('labelInfe2a').style.color = '#f00'; }
      if (document.getElementById('radioInfe2b').checked) { document.getElementById('labelInfe2b').style.color = '#f00'; }
      //if (document.getElementById('radioInfe2c').checked) { document.getElementById('labelInfe2c').style.color = '#f00'; }
      if (document.getElementById('radioInfe2d').checked) { document.getElementById('labelInfe2d').style.color = '#f00'; }
      if (document.getElementById('radioInfe2e').checked) { document.getElementById('labelInfe2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe3d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe3a').checked) { document.getElementById('labelInfe3a').style.color = '#f00'; }
      if (document.getElementById('radioInfe3b').checked) { document.getElementById('labelInfe3b').style.color = '#f00'; }
      if (document.getElementById('radioInfe3c').checked) { document.getElementById('labelInfe3c').style.color = '#f00'; }
      //if (document.getElementById('radioInfe3d').checked) { document.getElementById('labelInfe3d').style.color = '#f00'; }
      if (document.getElementById('radioInfe3e').checked) { document.getElementById('labelInfe3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe4c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe4a').checked) { document.getElementById('labelInfe4a').style.color = '#f00'; }
      if (document.getElementById('radioInfe4b').checked) { document.getElementById('labelInfe4b').style.color = '#f00'; }
      //if (document.getElementById('radioInfe4c').checked) { document.getElementById('labelInfe4c').style.color = '#f00'; }
      if (document.getElementById('radioInfe4d').checked) { document.getElementById('labelInfe4d').style.color = '#f00'; }
      if (document.getElementById('radioInfe4e').checked) { document.getElementById('labelInfe4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe5c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe5a').checked) { document.getElementById('labelInfe5a').style.color = '#f00'; }
      if (document.getElementById('radioInfe5b').checked) { document.getElementById('labelInfe5b').style.color = '#f00'; }
      //if (document.getElementById('radioInfe5c').checked) { document.getElementById('labelInfe5c').style.color = '#f00'; }
      if (document.getElementById('radioInfe5d').checked) { document.getElementById('labelInfe5d').style.color = '#f00'; }
      if (document.getElementById('radioInfe5e').checked) { document.getElementById('labelInfe5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe6a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioInfe6a').checked) { document.getElementById('labelInfe6a').style.color = '#f00'; }
      if (document.getElementById('radioInfe6b').checked) { document.getElementById('labelInfe6b').style.color = '#f00'; }
      if (document.getElementById('radioInfe6c').checked) { document.getElementById('labelInfe6c').style.color = '#f00'; }
      if (document.getElementById('radioInfe6d').checked) { document.getElementById('labelInfe6d').style.color = '#f00'; }
      if (document.getElementById('radioInfe6e').checked) { document.getElementById('labelInfe6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe7b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe7a').checked) { document.getElementById('labelInfe7a').style.color = '#f00'; }
      //if (document.getElementById('radioInfe7b').checked) { document.getElementById('labelInfe7b').style.color = '#f00'; }
      if (document.getElementById('radioInfe7c').checked) { document.getElementById('labelInfe7c').style.color = '#f00'; }
      if (document.getElementById('radioInfe7d').checked) { document.getElementById('labelInfe7d').style.color = '#f00'; }
      if (document.getElementById('radioInfe7e').checked) { document.getElementById('labelInfe7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe8b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe8a').checked) { document.getElementById('labelInfe8a').style.color = '#f00'; }
      //if (document.getElementById('radioInfe8b').checked) { document.getElementById('labelInfe8b').style.color = '#f00'; }
      if (document.getElementById('radioInfe8c').checked) { document.getElementById('labelInfe8c').style.color = '#f00'; }
      if (document.getElementById('radioInfe8d').checked) { document.getElementById('labelInfe8d').style.color = '#f00'; }
      if (document.getElementById('radioInfe8e').checked) { document.getElementById('labelInfe8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe9a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioInfe9a').checked) { document.getElementById('labelInfe9a').style.color = '#f00'; }
      if (document.getElementById('radioInfe9b').checked) { document.getElementById('labelInfe9b').style.color = '#f00'; }
      if (document.getElementById('radioInfe9c').checked) { document.getElementById('labelInfe9c').style.color = '#f00'; }
      if (document.getElementById('radioInfe9d').checked) { document.getElementById('labelInfe9d').style.color = '#f00'; }
      if (document.getElementById('radioInfe9e').checked) { document.getElementById('labelInfe9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe10a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioInfe10a').checked) { document.getElementById('labelInfe10a').style.color = '#f00'; }
      if (document.getElementById('radioInfe10b').checked) { document.getElementById('labelInfe10b').style.color = '#f00'; }
      if (document.getElementById('radioInfe10c').checked) { document.getElementById('labelInfe10c').style.color = '#f00'; }
      if (document.getElementById('radioInfe10d').checked) { document.getElementById('labelInfe10d').style.color = '#f00'; }
      if (document.getElementById('radioInfe10e').checked) { document.getElementById('labelInfe10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe11b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe11a').checked) { document.getElementById('labelInfe11a').style.color = '#f00'; }
      //if (document.getElementById('radioInfe11b').checked) { document.getElementById('labelInfe11b').style.color = '#f00'; }
      if (document.getElementById('radioInfe11c').checked) { document.getElementById('labelInfe11c').style.color = '#f00'; }
      if (document.getElementById('radioInfe11d').checked) { document.getElementById('labelInfe11d').style.color = '#f00'; }
      if (document.getElementById('radioInfe11e').checked) { document.getElementById('labelInfe11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe12a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioInfe12a').checked) { document.getElementById('labelInfe12a').style.color = '#f00'; }
      if (document.getElementById('radioInfe12b').checked) { document.getElementById('labelInfe12b').style.color = '#f00'; }
      if (document.getElementById('radioInfe12c').checked) { document.getElementById('labelInfe12c').style.color = '#f00'; }
      if (document.getElementById('radioInfe12d').checked) { document.getElementById('labelInfe12d').style.color = '#f00'; }
      if (document.getElementById('radioInfe12e').checked) { document.getElementById('labelInfe12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe13d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe13a').checked) { document.getElementById('labelInfe13a').style.color = '#f00'; }
      if (document.getElementById('radioInfe13b').checked) { document.getElementById('labelInfe13b').style.color = '#f00'; }
      if (document.getElementById('radioInfe13c').checked) { document.getElementById('labelInfe13c').style.color = '#f00'; }
      //if (document.getElementById('radioInfe13d').checked) { document.getElementById('labelInfe13d').style.color = '#f00'; }
      if (document.getElementById('radioInfe13e').checked) { document.getElementById('labelInfe13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe14b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe14a').checked) { document.getElementById('labelInfe14a').style.color = '#f00'; }
      //if (document.getElementById('radioInfe14b').checked) { document.getElementById('labelInfe14b').style.color = '#f00'; }
      if (document.getElementById('radioInfe14c').checked) { document.getElementById('labelInfe14c').style.color = '#f00'; }
      if (document.getElementById('radioInfe14d').checked) { document.getElementById('labelInfe14d').style.color = '#f00'; }
      if (document.getElementById('radioInfe14e').checked) { document.getElementById('labelInfe14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe15d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe15a').checked) { document.getElementById('labelInfe15a').style.color = '#f00'; }
      if (document.getElementById('radioInfe15b').checked) { document.getElementById('labelInfe15b').style.color = '#f00'; }
      if (document.getElementById('radioInfe15c').checked) { document.getElementById('labelInfe15c').style.color = '#f00'; }
      //if (document.getElementById('radioInfe15d').checked) { document.getElementById('labelInfe15d').style.color = '#f00'; }
      if (document.getElementById('radioInfe15e').checked) { document.getElementById('labelInfe15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe16b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe16a').checked) { document.getElementById('labelInfe16a').style.color = '#f00'; }
      //if (document.getElementById('radioInfe16b').checked) { document.getElementById('labelInfe16b').style.color = '#f00'; }
      if (document.getElementById('radioInfe16c').checked) { document.getElementById('labelInfe16c').style.color = '#f00'; }
      if (document.getElementById('radioInfe16d').checked) { document.getElementById('labelInfe16d').style.color = '#f00'; }
      if (document.getElementById('radioInfe16e').checked) { document.getElementById('labelInfe16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe17e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe17a').checked) { document.getElementById('labelInfe17a').style.color = '#f00'; }
      if (document.getElementById('radioInfe17b').checked) { document.getElementById('labelInfe17b').style.color = '#f00'; }
      if (document.getElementById('radioInfe17c').checked) { document.getElementById('labelInfe17c').style.color = '#f00'; }
      if (document.getElementById('radioInfe17d').checked) { document.getElementById('labelInfe17d').style.color = '#f00'; }
      //if (document.getElementById('radioInfe17e').checked) { document.getElementById('labelInfe17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe18c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe18a').checked) { document.getElementById('labelInfe18a').style.color = '#f00'; }
      if (document.getElementById('radioInfe18b').checked) { document.getElementById('labelInfe18b').style.color = '#f00'; }
      //if (document.getElementById('radioInfe18c').checked) { document.getElementById('labelInfe18c').style.color = '#f00'; }
      if (document.getElementById('radioInfe18d').checked) { document.getElementById('labelInfe18d').style.color = '#f00'; }
      if (document.getElementById('radioInfe18e').checked) { document.getElementById('labelInfe18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe19c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe19a').checked) { document.getElementById('labelInfe19a').style.color = '#f00'; }
      if (document.getElementById('radioInfe19b').checked) { document.getElementById('labelInfe19b').style.color = '#f00'; }
      //if (document.getElementById('radioInfe19c').checked) { document.getElementById('labelInfe19c').style.color = '#f00'; }
      if (document.getElementById('radioInfe19d').checked) { document.getElementById('labelInfe19d').style.color = '#f00'; }
      if (document.getElementById('radioInfe19e').checked) { document.getElementById('labelInfe19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioInfe20e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe20a').checked) { document.getElementById('labelInfe20a').style.color = '#f00'; }
      if (document.getElementById('radioInfe20b').checked) { document.getElementById('labelInfe20b').style.color = '#f00'; }
      if (document.getElementById('radioInfe20c').checked) { document.getElementById('labelInfe20c').style.color = '#f00'; }
      if (document.getElementById('radioInfe20d').checked) { document.getElementById('labelInfe20d').style.color = '#f00'; }
      //if (document.getElementById('radioInfe20e').checked) { document.getElementById('labelInfe20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolInfe() {

      document.getElementById('labelInfe1a').style.color = '#fff';
      //document.getElementById('labelInfe1b').style.color = '#fff';
      document.getElementById('labelInfe1c').style.color = '#fff';
      document.getElementById('labelInfe1d').style.color = '#fff';
      document.getElementById('labelInfe1e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe2a').style.color = '#fff';
      document.getElementById('labelInfe2b').style.color = '#fff';
      //document.getElementById('labelInfe2c').style.color = '#fff';
      document.getElementById('labelInfe2d').style.color = '#fff';
      document.getElementById('labelInfe2e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe3a').style.color = '#fff';
      document.getElementById('labelInfe3b').style.color = '#fff';
      document.getElementById('labelInfe3c').style.color = '#fff';
      //document.getElementById('labelInfe3d').style.color = '#fff';
      document.getElementById('labelInfe3e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe4a').style.color = '#fff';
      document.getElementById('labelInfe4b').style.color = '#fff';
      //document.getElementById('labelInfe4c').style.color = '#fff';
      document.getElementById('labelInfe4d').style.color = '#fff';
      document.getElementById('labelInfe4e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe5a').style.color = '#fff';
      document.getElementById('labelInfe5b').style.color = '#fff';
      //document.getElementById('labelInfe5c').style.color = '#fff';
      document.getElementById('labelInfe5d').style.color = '#fff';
      document.getElementById('labelInfe5e').style.color = '#fff';
      //-------/

      //document.getElementById('labelInfe6a').style.color = '#fff';
      document.getElementById('labelInfe6b').style.color = '#fff';
      document.getElementById('labelInfe6c').style.color = '#fff';
      document.getElementById('labelInfe6d').style.color = '#fff';
      document.getElementById('labelInfe6e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe7a').style.color = '#fff';
      //document.getElementById('labelInfe7b').style.color = '#fff';
      document.getElementById('labelInfe7c').style.color = '#fff';
      document.getElementById('labelInfe7d').style.color = '#fff';
      document.getElementById('labelInfe7e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe8a').style.color = '#fff';
      //document.getElementById('labelInfe8b').style.color = '#fff';
      document.getElementById('labelInfe8c').style.color = '#fff';
      document.getElementById('labelInfe8d').style.color = '#fff';
      document.getElementById('labelInfe8e').style.color = '#fff';
      //-------/

      //document.getElementById('labelInfe9a').style.color = '#fff';
      document.getElementById('labelInfe9b').style.color = '#fff';
      document.getElementById('labelInfe9c').style.color = '#fff';
      document.getElementById('labelInfe9d').style.color = '#fff';
      document.getElementById('labelInfe9e').style.color = '#fff';
      //-------/

      //document.getElementById('labelInfe10a').style.color = '#fff';
      document.getElementById('labelInfe10b').style.color = '#fff';
      document.getElementById('labelInfe10c').style.color = '#fff';
      document.getElementById('labelInfe10d').style.color = '#fff';
      document.getElementById('labelInfe10e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe11a').style.color = '#fff';
      //document.getElementById('labelInfe11b').style.color = '#fff';
      document.getElementById('labelInfe11c').style.color = '#fff';
      document.getElementById('labelInfe11d').style.color = '#fff';
      document.getElementById('labelInfe11e').style.color = '#fff';
      //-------/

      //document.getElementById('labelInfe12a').style.color = '#fff';
      document.getElementById('labelInfe12b').style.color = '#fff';
      document.getElementById('labelInfe12c').style.color = '#fff';
      document.getElementById('labelInfe12d').style.color = '#fff';
      document.getElementById('labelInfe12e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe13a').style.color = '#fff';
      document.getElementById('labelInfe13b').style.color = '#fff';
      document.getElementById('labelInfe13c').style.color = '#fff';
      //document.getElementById('labelInfe13d').style.color = '#fff';
      document.getElementById('labelInfe13e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe14a').style.color = '#fff';
      //document.getElementById('labelInfe14b').style.color = '#fff';
      document.getElementById('labelInfe14c').style.color = '#fff';
      document.getElementById('labelInfe14d').style.color = '#fff';
      document.getElementById('labelInfe14e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe15a').style.color = '#fff';
      document.getElementById('labelInfe15b').style.color = '#fff';
      document.getElementById('labelInfe15c').style.color = '#fff';
      //document.getElementById('labelInfe15d').style.color = '#fff';
      document.getElementById('labelInfe15e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe16a').style.color = '#fff';
      //document.getElementById('labelInfe16b').style.color = '#fff';
      document.getElementById('labelInfe16c').style.color = '#fff';
      document.getElementById('labelInfe16d').style.color = '#fff';
      document.getElementById('labelInfe16e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe17a').style.color = '#fff';
      document.getElementById('labelInfe17b').style.color = '#fff';
      document.getElementById('labelInfe17c').style.color = '#fff';
      document.getElementById('labelInfe17d').style.color = '#fff';
      //document.getElementById('labelInfe17e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe18a').style.color = '#fff';
      document.getElementById('labelInfe18b').style.color = '#fff';
      //document.getElementById('labelInfe18c').style.color = '#fff';
      document.getElementById('labelInfe18d').style.color = '#fff';
      document.getElementById('labelInfe18e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe19a').style.color = '#fff';
      document.getElementById('labelInfe19b').style.color = '#fff';
      //document.getElementById('labelInfe19c').style.color = '#fff';
      document.getElementById('labelInfe19d').style.color = '#fff';
      document.getElementById('labelInfe19e').style.color = '#fff';
      //-------/

      document.getElementById('labelInfe20a').style.color = '#fff';
      document.getElementById('labelInfe20b').style.color = '#fff';
      document.getElementById('labelInfe20c').style.color = '#fff';
      document.getElementById('labelInfe20d').style.color = '#fff';
      //document.getElementById('labelInfe20e').style.color = '#fff';
      //-------/
}

function calificarNeumo() {
    var form = document.getElementById('formNeumo');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioNeumo1c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo1a').checked) { document.getElementById('labelNeumo1a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo1b').checked) { document.getElementById('labelNeumo1b').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo1c').checked) { document.getElementById('labelNeumo1c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo1d').checked) { document.getElementById('labelNeumo1d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo1e').checked) { document.getElementById('labelNeumo1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo2a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo2a').checked) { document.getElementById('labelNeumo2a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo2b').checked) { document.getElementById('labelNeumo2b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo2c').checked) { document.getElementById('labelNeumo2c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo2d').checked) { document.getElementById('labelNeumo2d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo2e').checked) { document.getElementById('labelNeumo2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo3b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo3a').checked) { document.getElementById('labelNeumo3a').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo3b').checked) { document.getElementById('labelNeumo3b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo3c').checked) { document.getElementById('labelNeumo3c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo3d').checked) { document.getElementById('labelNeumo3d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo3e').checked) { document.getElementById('labelNeumo3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo4e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo4a').checked) { document.getElementById('labelNeumo4a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo4b').checked) { document.getElementById('labelNeumo4b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo4c').checked) { document.getElementById('labelNeumo4c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo4d').checked) { document.getElementById('labelNeumo4d').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo4e').checked) { document.getElementById('labelNeumo4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo5b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo5a').checked) { document.getElementById('labelNeumo5a').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo5b').checked) { document.getElementById('labelNeumo5b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo5c').checked) { document.getElementById('labelNeumo5c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo5d').checked) { document.getElementById('labelNeumo5d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo5e').checked) { document.getElementById('labelNeumo5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo6a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo6a').checked) { document.getElementById('labelNeumo6a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo6b').checked) { document.getElementById('labelNeumo6b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo6c').checked) { document.getElementById('labelNeumo6c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo6d').checked) { document.getElementById('labelNeumo6d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo6e').checked) { document.getElementById('labelNeumo6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo7a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo7a').checked) { document.getElementById('labelNeumo7a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo7b').checked) { document.getElementById('labelNeumo7b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo7c').checked) { document.getElementById('labelNeumo7c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo7d').checked) { document.getElementById('labelNeumo7d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo7e').checked) { document.getElementById('labelNeumo7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo8d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo8a').checked) { document.getElementById('labelNeumo8a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo8b').checked) { document.getElementById('labelNeumo8b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo8c').checked) { document.getElementById('labelNeumo8c').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo8d').checked) { document.getElementById('labelNeumo8d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo8e').checked) { document.getElementById('labelNeumo8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo9b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo9a').checked) { document.getElementById('labelNeumo9a').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo9b').checked) { document.getElementById('labelNeumo9b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo9c').checked) { document.getElementById('labelNeumo9c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo9d').checked) { document.getElementById('labelNeumo9d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo9e').checked) { document.getElementById('labelNeumo9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo10c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo10a').checked) { document.getElementById('labelNeumo10a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo10b').checked) { document.getElementById('labelNeumo10b').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo10c').checked) { document.getElementById('labelNeumo10c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo10d').checked) { document.getElementById('labelNeumo10d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo10e').checked) { document.getElementById('labelNeumo10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo11c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo11a').checked) { document.getElementById('labelNeumo11a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo11b').checked) { document.getElementById('labelNeumo11b').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo11c').checked) { document.getElementById('labelNeumo11c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo11d').checked) { document.getElementById('labelNeumo11d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo11e').checked) { document.getElementById('labelNeumo11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo12a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo12a').checked) { document.getElementById('labelNeumo12a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo12b').checked) { document.getElementById('labelNeumo12b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo12c').checked) { document.getElementById('labelNeumo12c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo12d').checked) { document.getElementById('labelNeumo12d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo12e').checked) { document.getElementById('labelNeumo12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo13c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo13a').checked) { document.getElementById('labelNeumo13a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo13b').checked) { document.getElementById('labelNeumo13b').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo13c').checked) { document.getElementById('labelNeumo13c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo13d').checked) { document.getElementById('labelNeumo13d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo13e').checked) { document.getElementById('labelNeumo13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo14a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo14a').checked) { document.getElementById('labelNeumo14a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo14b').checked) { document.getElementById('labelNeumo14b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo14c').checked) { document.getElementById('labelNeumo14c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo14d').checked) { document.getElementById('labelNeumo14d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo14e').checked) { document.getElementById('labelNeumo14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo15a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo15a').checked) { document.getElementById('labelNeumo15a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo15b').checked) { document.getElementById('labelNeumo15b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo15c').checked) { document.getElementById('labelNeumo15c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo15d').checked) { document.getElementById('labelNeumo15d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo15e').checked) { document.getElementById('labelNeumo15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo16d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo16a').checked) { document.getElementById('labelNeumo16a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo16b').checked) { document.getElementById('labelNeumo16b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo16c').checked) { document.getElementById('labelNeumo16c').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo16d').checked) { document.getElementById('labelNeumo16d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo16e').checked) { document.getElementById('labelNeumo16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo17a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNeumo17a').checked) { document.getElementById('labelNeumo17a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo17b').checked) { document.getElementById('labelNeumo17b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo17c').checked) { document.getElementById('labelNeumo17c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo17d').checked) { document.getElementById('labelNeumo17d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo17e').checked) { document.getElementById('labelNeumo17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo18e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo18a').checked) { document.getElementById('labelNeumo18a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo18b').checked) { document.getElementById('labelNeumo18b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo18c').checked) { document.getElementById('labelNeumo18c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo18d').checked) { document.getElementById('labelNeumo18d').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo18e').checked) { document.getElementById('labelNeumo18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo19c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo19a').checked) { document.getElementById('labelNeumo19a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo19b').checked) { document.getElementById('labelNeumo19b').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo19c').checked) { document.getElementById('labelNeumo19c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo19d').checked) { document.getElementById('labelNeumo19d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo19e').checked) { document.getElementById('labelNeumo19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNeumo20e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo20a').checked) { document.getElementById('labelNeumo20a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo20b').checked) { document.getElementById('labelNeumo20b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo20c').checked) { document.getElementById('labelNeumo20c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo20d').checked) { document.getElementById('labelNeumo20d').style.color = '#f00'; }
      //if (document.getElementById('radioNeumo20e').checked) { document.getElementById('labelNeumo20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolNeumo() {

      document.getElementById('labelNeumo1a').style.color = '#fff';
      document.getElementById('labelNeumo1b').style.color = '#fff';
      //document.getElementById('labelNeumo1c').style.color = '#fff';
      document.getElementById('labelNeumo1d').style.color = '#fff';
      document.getElementById('labelNeumo1e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo2a').style.color = '#fff';
      document.getElementById('labelNeumo2b').style.color = '#fff';
      document.getElementById('labelNeumo2c').style.color = '#fff';
      document.getElementById('labelNeumo2d').style.color = '#fff';
      document.getElementById('labelNeumo2e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo3a').style.color = '#fff';
      //document.getElementById('labelNeumo3b').style.color = '#fff';
      document.getElementById('labelNeumo3c').style.color = '#fff';
      document.getElementById('labelNeumo3d').style.color = '#fff';
      document.getElementById('labelNeumo3e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo4a').style.color = '#fff';
      document.getElementById('labelNeumo4b').style.color = '#fff';
      document.getElementById('labelNeumo4c').style.color = '#fff';
      document.getElementById('labelNeumo4d').style.color = '#fff';
      //document.getElementById('labelNeumo4e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo5a').style.color = '#fff';
      document.getElementById('labelNeumo5b').style.color = '#fff';
      document.getElementById('labelNeumo5c').style.color = '#fff';
      document.getElementById('labelNeumo5d').style.color = '#fff';
      //document.getElementById('labelNeumo5e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo6a').style.color = '#fff';
      document.getElementById('labelNeumo6b').style.color = '#fff';
      document.getElementById('labelNeumo6c').style.color = '#fff';
      document.getElementById('labelNeumo6d').style.color = '#fff';
      document.getElementById('labelNeumo6e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo7a').style.color = '#fff';
      document.getElementById('labelNeumo7b').style.color = '#fff';
      document.getElementById('labelNeumo7c').style.color = '#fff';
      document.getElementById('labelNeumo7d').style.color = '#fff';
      document.getElementById('labelNeumo7e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo8a').style.color = '#fff';
      document.getElementById('labelNeumo8b').style.color = '#fff';
      document.getElementById('labelNeumo8c').style.color = '#fff';
      //document.getElementById('labelNeumo8d').style.color = '#fff';
      document.getElementById('labelNeumo8e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo9a').style.color = '#fff';
      //document.getElementById('labelNeumo9b').style.color = '#fff';
      document.getElementById('labelNeumo9c').style.color = '#fff';
      document.getElementById('labelNeumo9d').style.color = '#fff';
      document.getElementById('labelNeumo9e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo10a').style.color = '#fff';
      document.getElementById('labelNeumo10b').style.color = '#fff';
      //document.getElementById('labelNeumo10c').style.color = '#fff';
      document.getElementById('labelNeumo10d').style.color = '#fff';
      document.getElementById('labelNeumo10e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo11a').style.color = '#fff';
      document.getElementById('labelNeumo11b').style.color = '#fff';
      //document.getElementById('labelNeumo11c').style.color = '#fff';
      document.getElementById('labelNeumo11d').style.color = '#fff';
      document.getElementById('labelNeumo11e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo12a').style.color = '#fff';
      document.getElementById('labelNeumo12b').style.color = '#fff';
      document.getElementById('labelNeumo12c').style.color = '#fff';
      document.getElementById('labelNeumo12d').style.color = '#fff';
      document.getElementById('labelNeumo12e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo13a').style.color = '#fff';
      document.getElementById('labelNeumo13b').style.color = '#fff';
      //document.getElementById('labelNeumo13c').style.color = '#fff';
      document.getElementById('labelNeumo13d').style.color = '#fff';
      document.getElementById('labelNeumo13e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo14a').style.color = '#fff';
      document.getElementById('labelNeumo14b').style.color = '#fff';
      document.getElementById('labelNeumo14c').style.color = '#fff';
      document.getElementById('labelNeumo14d').style.color = '#fff';
      document.getElementById('labelNeumo14e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo15a').style.color = '#fff';
      document.getElementById('labelNeumo15b').style.color = '#fff';
      document.getElementById('labelNeumo15c').style.color = '#fff';
      document.getElementById('labelNeumo15d').style.color = '#fff';
      document.getElementById('labelNeumo15e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo16a').style.color = '#fff';
      document.getElementById('labelNeumo16b').style.color = '#fff';
      document.getElementById('labelNeumo16c').style.color = '#fff';
      //document.getElementById('labelNeumo16d').style.color = '#fff';
      document.getElementById('labelNeumo16e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNeumo17a').style.color = '#fff';
      document.getElementById('labelNeumo17b').style.color = '#fff';
      document.getElementById('labelNeumo17c').style.color = '#fff';
      document.getElementById('labelNeumo17d').style.color = '#fff';
      document.getElementById('labelNeumo17e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo18a').style.color = '#fff';
      document.getElementById('labelNeumo18b').style.color = '#fff';
      document.getElementById('labelNeumo18c').style.color = '#fff';
      document.getElementById('labelNeumo18d').style.color = '#fff';
      //document.getElementById('labelNeumo18e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo19a').style.color = '#fff';
      document.getElementById('labelNeumo19b').style.color = '#fff';
      //document.getElementById('labelNeumo19c').style.color = '#fff';
      document.getElementById('labelNeumo19d').style.color = '#fff';
      document.getElementById('labelNeumo19e').style.color = '#fff';
      //-------/

      document.getElementById('labelNeumo20a').style.color = '#fff';
      document.getElementById('labelNeumo20b').style.color = '#fff';
      document.getElementById('labelNeumo20c').style.color = '#fff';
      document.getElementById('labelNeumo20d').style.color = '#fff';
      //document.getElementById('labelNeumo20e').style.color = '#fff';
      //-------/
}

function calificarNefro() {
    var form = document.getElementById('formNefro');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioNefro1c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro1a').checked) { document.getElementById('labelNefro1a').style.color = '#f00'; }
      if (document.getElementById('radioNefro1b').checked) { document.getElementById('labelNefro1b').style.color = '#f00'; }
      //if (document.getElementById('radioNefro1c').checked) { document.getElementById('labelNefro1c').style.color = '#f00'; }
      if (document.getElementById('radioNefro1d').checked) { document.getElementById('labelNefro1d').style.color = '#f00'; }
      if (document.getElementById('radioNefro1e').checked) { document.getElementById('labelNefro1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro2c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro2a').checked) { document.getElementById('labelNefro2a').style.color = '#f00'; }
      if (document.getElementById('radioNefro2b').checked) { document.getElementById('labelNefro2b').style.color = '#f00'; }
      //if (document.getElementById('radioNefro2c').checked) { document.getElementById('labelNefro2c').style.color = '#f00'; }
      if (document.getElementById('radioNefro2d').checked) { document.getElementById('labelNefro2d').style.color = '#f00'; }
      if (document.getElementById('radioNefro2e').checked) { document.getElementById('labelNefro2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro3e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro3a').checked) { document.getElementById('labelNefro3a').style.color = '#f00'; }
      if (document.getElementById('radioNefro3b').checked) { document.getElementById('labelNefro3b').style.color = '#f00'; }
      if (document.getElementById('radioNefro3c').checked) { document.getElementById('labelNefro3c').style.color = '#f00'; }
      if (document.getElementById('radioNefro3d').checked) { document.getElementById('labelNefro3d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro3e').checked) { document.getElementById('labelNefro3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro4e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro4a').checked) { document.getElementById('labelNefro4a').style.color = '#f00'; }
      if (document.getElementById('radioNefro4b').checked) { document.getElementById('labelNefro4b').style.color = '#f00'; }
      if (document.getElementById('radioNefro4c').checked) { document.getElementById('labelNefro4c').style.color = '#f00'; }
      if (document.getElementById('radioNefro4d').checked) { document.getElementById('labelNefro4d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro4e').checked) { document.getElementById('labelNefro4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro5a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNefro5a').checked) { document.getElementById('labelNefro5a').style.color = '#f00'; }
      if (document.getElementById('radioNefro5b').checked) { document.getElementById('labelNefro5b').style.color = '#f00'; }
      if (document.getElementById('radioNefro5c').checked) { document.getElementById('labelNefro5c').style.color = '#f00'; }
      if (document.getElementById('radioNefro5d').checked) { document.getElementById('labelNefro5d').style.color = '#f00'; }
      if (document.getElementById('radioNefro5e').checked) { document.getElementById('labelNefro5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro6e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro6a').checked) { document.getElementById('labelNefro6a').style.color = '#f00'; }
      if (document.getElementById('radioNefro6b').checked) { document.getElementById('labelNefro6b').style.color = '#f00'; }
      if (document.getElementById('radioNefro6c').checked) { document.getElementById('labelNefro6c').style.color = '#f00'; }
      if (document.getElementById('radioNefro6d').checked) { document.getElementById('labelNefro6d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro6e').checked) { document.getElementById('labelNefro6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro7d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro7a').checked) { document.getElementById('labelNefro7a').style.color = '#f00'; }
      if (document.getElementById('radioNefro7b').checked) { document.getElementById('labelNefro7b').style.color = '#f00'; }
      if (document.getElementById('radioNefro7c').checked) { document.getElementById('labelNefro7c').style.color = '#f00'; }
      //if (document.getElementById('radioNefro7d').checked) { document.getElementById('labelNefro7d').style.color = '#f00'; }
      if (document.getElementById('radioNefro7e').checked) { document.getElementById('labelNefro7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro8c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro8a').checked) { document.getElementById('labelNefro8a').style.color = '#f00'; }
      if (document.getElementById('radioNefro8b').checked) { document.getElementById('labelNefro8b').style.color = '#f00'; }
      //if (document.getElementById('radioNefro8c').checked) { document.getElementById('labelNefro8c').style.color = '#f00'; }
      if (document.getElementById('radioNefro8d').checked) { document.getElementById('labelNefro8d').style.color = '#f00'; }
      if (document.getElementById('radioNefro8e').checked) { document.getElementById('labelNefro8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro9b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro9a').checked) { document.getElementById('labelNefro9a').style.color = '#f00'; }
      //if (document.getElementById('radioNefro9b').checked) { document.getElementById('labelNefro9b').style.color = '#f00'; }
      if (document.getElementById('radioNefro9c').checked) { document.getElementById('labelNefro9c').style.color = '#f00'; }
      if (document.getElementById('radioNefro9d').checked) { document.getElementById('labelNefro9d').style.color = '#f00'; }
      if (document.getElementById('radioNefro9e').checked) { document.getElementById('labelNefro9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro10c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro10a').checked) { document.getElementById('labelNefro10a').style.color = '#f00'; }
      if (document.getElementById('radioNefro10b').checked) { document.getElementById('labelNefro10b').style.color = '#f00'; }
      //if (document.getElementById('radioNefro10c').checked) { document.getElementById('labelNefro10c').style.color = '#f00'; }
      if (document.getElementById('radioNefro10d').checked) { document.getElementById('labelNefro10d').style.color = '#f00'; }
      if (document.getElementById('radioNefro10e').checked) { document.getElementById('labelNefro10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro11c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro11a').checked) { document.getElementById('labelNefro11a').style.color = '#f00'; }
      if (document.getElementById('radioNefro11b').checked) { document.getElementById('labelNefro11b').style.color = '#f00'; }
      //if (document.getElementById('radioNefro11c').checked) { document.getElementById('labelNefro11c').style.color = '#f00'; }
      if (document.getElementById('radioNefro11d').checked) { document.getElementById('labelNefro11d').style.color = '#f00'; }
      if (document.getElementById('radioNefro11e').checked) { document.getElementById('labelNefro11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro12e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro12a').checked) { document.getElementById('labelNefro12a').style.color = '#f00'; }
      if (document.getElementById('radioNefro12b').checked) { document.getElementById('labelNefro12b').style.color = '#f00'; }
      if (document.getElementById('radioNefro12c').checked) { document.getElementById('labelNefro12c').style.color = '#f00'; }
      if (document.getElementById('radioNefro12d').checked) { document.getElementById('labelNefro12d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro12e').checked) { document.getElementById('labelNefro12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro13d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro13a').checked) { document.getElementById('labelNefro13a').style.color = '#f00'; }
      if (document.getElementById('radioNefro13b').checked) { document.getElementById('labelNefro13b').style.color = '#f00'; }
      if (document.getElementById('radioNefro13c').checked) { document.getElementById('labelNefro13c').style.color = '#f00'; }
      //if (document.getElementById('radioNefro13d').checked) { document.getElementById('labelNefro13d').style.color = '#f00'; }
      if (document.getElementById('radioNefro13e').checked) { document.getElementById('labelNefro13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro14e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro14a').checked) { document.getElementById('labelNefro14a').style.color = '#f00'; }
      if (document.getElementById('radioNefro14b').checked) { document.getElementById('labelNefro14b').style.color = '#f00'; }
      if (document.getElementById('radioNefro14c').checked) { document.getElementById('labelNefro14c').style.color = '#f00'; }
      if (document.getElementById('radioNefro14d').checked) { document.getElementById('labelNefro14d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro14e').checked) { document.getElementById('labelNefro14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro15d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro15a').checked) { document.getElementById('labelNefro15a').style.color = '#f00'; }
      if (document.getElementById('radioNefro15b').checked) { document.getElementById('labelNefro15b').style.color = '#f00'; }
      if (document.getElementById('radioNefro15c').checked) { document.getElementById('labelNefro15c').style.color = '#f00'; }
      //if (document.getElementById('radioNefro15d').checked) { document.getElementById('labelNefro15d').style.color = '#f00'; }
      if (document.getElementById('radioNefro15e').checked) { document.getElementById('labelNefro15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro16e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro16a').checked) { document.getElementById('labelNefro16a').style.color = '#f00'; }
      if (document.getElementById('radioNefro16b').checked) { document.getElementById('labelNefro16b').style.color = '#f00'; }
      if (document.getElementById('radioNefro16c').checked) { document.getElementById('labelNefro16c').style.color = '#f00'; }
      if (document.getElementById('radioNefro16d').checked) { document.getElementById('labelNefro16d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro16e').checked) { document.getElementById('labelNefro16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro17a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNefro17a').checked) { document.getElementById('labelNefro17a').style.color = '#f00'; }
      if (document.getElementById('radioNefro17b').checked) { document.getElementById('labelNefro17b').style.color = '#f00'; }
      if (document.getElementById('radioNefro17c').checked) { document.getElementById('labelNefro17c').style.color = '#f00'; }
      if (document.getElementById('radioNefro17d').checked) { document.getElementById('labelNefro17d').style.color = '#f00'; }
      if (document.getElementById('radioNefro17e').checked) { document.getElementById('labelNefro17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro18a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNefro18a').checked) { document.getElementById('labelNefro18a').style.color = '#f00'; }
      if (document.getElementById('radioNefro18b').checked) { document.getElementById('labelNefro18b').style.color = '#f00'; }
      if (document.getElementById('radioNefro18c').checked) { document.getElementById('labelNefro18c').style.color = '#f00'; }
      if (document.getElementById('radioNefro18d').checked) { document.getElementById('labelNefro18d').style.color = '#f00'; }
      if (document.getElementById('radioNefro18e').checked) { document.getElementById('labelNefro18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro19a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioNefro19a').checked) { document.getElementById('labelNefro19a').style.color = '#f00'; }
      if (document.getElementById('radioNefro19b').checked) { document.getElementById('labelNefro19b').style.color = '#f00'; }
      if (document.getElementById('radioNefro19c').checked) { document.getElementById('labelNefro19c').style.color = '#f00'; }
      if (document.getElementById('radioNefro19d').checked) { document.getElementById('labelNefro19d').style.color = '#f00'; }
      if (document.getElementById('radioNefro19e').checked) { document.getElementById('labelNefro19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioNefro20e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro20a').checked) { document.getElementById('labelNefro20a').style.color = '#f00'; }
      if (document.getElementById('radioNefro20b').checked) { document.getElementById('labelNefro20b').style.color = '#f00'; }
      if (document.getElementById('radioNefro20c').checked) { document.getElementById('labelNefro20c').style.color = '#f00'; }
      if (document.getElementById('radioNefro20d').checked) { document.getElementById('labelNefro20d').style.color = '#f00'; }
      //if (document.getElementById('radioNefro20e').checked) { document.getElementById('labelNefro20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolNefro() {

      document.getElementById('labelNefro1a').style.color = '#fff';
      document.getElementById('labelNefro1b').style.color = '#fff';
      //document.getElementById('labelNefro1c').style.color = '#fff';
      document.getElementById('labelNefro1d').style.color = '#fff';
      document.getElementById('labelNefro1e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro2a').style.color = '#fff';
      document.getElementById('labelNefro2b').style.color = '#fff';
      //document.getElementById('labelNefro2c').style.color = '#fff';
      document.getElementById('labelNefro2d').style.color = '#fff';
      document.getElementById('labelNefro2e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro3a').style.color = '#fff';
      document.getElementById('labelNefro3b').style.color = '#fff';
      document.getElementById('labelNefro3c').style.color = '#fff';
      document.getElementById('labelNefro3d').style.color = '#fff';
      //document.getElementById('labelNefro3e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro4a').style.color = '#fff';
      document.getElementById('labelNefro4b').style.color = '#fff';
      document.getElementById('labelNefro4c').style.color = '#fff';
      document.getElementById('labelNefro4d').style.color = '#fff';
      //document.getElementById('labelNefro4e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNefro5a').style.color = '#fff';
      document.getElementById('labelNefro5b').style.color = '#fff';
      document.getElementById('labelNefro5c').style.color = '#fff';
      document.getElementById('labelNefro5d').style.color = '#fff';
      document.getElementById('labelNefro5e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro6a').style.color = '#fff';
      document.getElementById('labelNefro6b').style.color = '#fff';
      document.getElementById('labelNefro6c').style.color = '#fff';
      document.getElementById('labelNefro6d').style.color = '#fff';
      //document.getElementById('labelNefro6e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro7a').style.color = '#fff';
      document.getElementById('labelNefro7b').style.color = '#fff';
      document.getElementById('labelNefro7c').style.color = '#fff';
      //document.getElementById('labelNefro7d').style.color = '#fff';
      document.getElementById('labelNefro7e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro8a').style.color = '#fff';
      document.getElementById('labelNefro8b').style.color = '#fff';
      //document.getElementById('labelNefro8c').style.color = '#fff';
      document.getElementById('labelNefro8d').style.color = '#fff';
      document.getElementById('labelNefro8e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro9a').style.color = '#fff';
      //document.getElementById('labelNefro9b').style.color = '#fff';
      document.getElementById('labelNefro9c').style.color = '#fff';
      document.getElementById('labelNefro9d').style.color = '#fff';
      document.getElementById('labelNefro9e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro10a').style.color = '#fff';
      document.getElementById('labelNefro10b').style.color = '#fff';
      //document.getElementById('labelNefro10c').style.color = '#fff';
      document.getElementById('labelNefro10d').style.color = '#fff';
      document.getElementById('labelNefro10e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro11a').style.color = '#fff';
      document.getElementById('labelNefro11b').style.color = '#fff';
      //document.getElementById('labelNefro11c').style.color = '#fff';
      document.getElementById('labelNefro11d').style.color = '#fff';
      document.getElementById('labelNefro11e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro12a').style.color = '#fff';
      document.getElementById('labelNefro12b').style.color = '#fff';
      document.getElementById('labelNefro12c').style.color = '#fff';
      document.getElementById('labelNefro12d').style.color = '#fff';
      //document.getElementById('labelNefro12e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro13a').style.color = '#fff';
      document.getElementById('labelNefro13b').style.color = '#fff';
      document.getElementById('labelNefro13c').style.color = '#fff';
      //document.getElementById('labelNefro13d').style.color = '#fff';
      document.getElementById('labelNefro13e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro14a').style.color = '#fff';
      document.getElementById('labelNefro14b').style.color = '#fff';
      document.getElementById('labelNefro14c').style.color = '#fff';
      document.getElementById('labelNefro14d').style.color = '#fff';
      //document.getElementById('labelNefro14e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro15a').style.color = '#fff';
      document.getElementById('labelNefro15b').style.color = '#fff';
      document.getElementById('labelNefro15c').style.color = '#fff';
      //document.getElementById('labelNefro15d').style.color = '#fff';
      document.getElementById('labelNefro15e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro16a').style.color = '#fff';
      document.getElementById('labelNefro16b').style.color = '#fff';
      document.getElementById('labelNefro16c').style.color = '#fff';
      document.getElementById('labelNefro16d').style.color = '#fff';
      //document.getElementById('labelNefro16e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNefro17a').style.color = '#fff';
      document.getElementById('labelNefro17b').style.color = '#fff';
      document.getElementById('labelNefro17c').style.color = '#fff';
      document.getElementById('labelNefro17d').style.color = '#fff';
      document.getElementById('labelNefro17e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNefro18a').style.color = '#fff';
      document.getElementById('labelNefro18b').style.color = '#fff';
      document.getElementById('labelNefro18c').style.color = '#fff';
      document.getElementById('labelNefro18d').style.color = '#fff';
      document.getElementById('labelNefro18e').style.color = '#fff';
      //-------/

      //document.getElementById('labelNefro19a').style.color = '#fff';
      document.getElementById('labelNefro19b').style.color = '#fff';
      document.getElementById('labelNefro19c').style.color = '#fff';
      document.getElementById('labelNefro19d').style.color = '#fff';
      document.getElementById('labelNefro19e').style.color = '#fff';
      //-------/

      document.getElementById('labelNefro20a').style.color = '#fff';
      //document.getElementById('labelNefro20b').style.color = '#fff';
      document.getElementById('labelNefro20c').style.color = '#fff';
      document.getElementById('labelNefro20d').style.color = '#fff';
      document.getElementById('labelNefro20e').style.color = '#fff';
      //-------/
}

function calificarPedi() {
    var form = document.getElementById('formPedi');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioPedi1b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi1a').checked) { document.getElementById('labelPedi1a').style.color = '#f00'; }
      //if (document.getElementById('radioPedi1b').checked) { document.getElementById('labelPedi1b').style.color = '#f00'; }
      if (document.getElementById('radioPedi1c').checked) { document.getElementById('labelPedi1c').style.color = '#f00'; }
      if (document.getElementById('radioPedi1d').checked) { document.getElementById('labelPedi1d').style.color = '#f00'; }
      if (document.getElementById('radioPedi1e').checked) { document.getElementById('labelPedi1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi2a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioPedi2a').checked) { document.getElementById('labelPedi2a').style.color = '#f00'; }
      if (document.getElementById('radioPedi2b').checked) { document.getElementById('labelPedi2b').style.color = '#f00'; }
      if (document.getElementById('radioPedi2c').checked) { document.getElementById('labelPedi2c').style.color = '#f00'; }
      if (document.getElementById('radioPedi2d').checked) { document.getElementById('labelPedi2d').style.color = '#f00'; }
      if (document.getElementById('radioPedi2e').checked) { document.getElementById('labelPedi2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi3c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi3a').checked) { document.getElementById('labelPedi3a').style.color = '#f00'; }
      if (document.getElementById('radioPedi3b').checked) { document.getElementById('labelPedi3b').style.color = '#f00'; }
      //if (document.getElementById('radioPedi3c').checked) { document.getElementById('labelPedi3c').style.color = '#f00'; }
      if (document.getElementById('radioPedi3d').checked) { document.getElementById('labelPedi3d').style.color = '#f00'; }
      if (document.getElementById('radioPedi3e').checked) { document.getElementById('labelPedi3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi4a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioPedi4a').checked) { document.getElementById('labelPedi4a').style.color = '#f00'; }
      if (document.getElementById('radioPedi4b').checked) { document.getElementById('labelPedi4b').style.color = '#f00'; }
      if (document.getElementById('radioPedi4c').checked) { document.getElementById('labelPedi4c').style.color = '#f00'; }
      if (document.getElementById('radioPedi4d').checked) { document.getElementById('labelPedi4d').style.color = '#f00'; }
      if (document.getElementById('radioPedi4e').checked) { document.getElementById('labelPedi4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi5d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi5a').checked) { document.getElementById('labelPedi5a').style.color = '#f00'; }
      if (document.getElementById('radioPedi5b').checked) { document.getElementById('labelPedi5b').style.color = '#f00'; }
      if (document.getElementById('radioPedi5c').checked) { document.getElementById('labelPedi5c').style.color = '#f00'; }
      //if (document.getElementById('radioPedi5d').checked) { document.getElementById('labelPedi5d').style.color = '#f00'; }
      if (document.getElementById('radioPedi5e').checked) { document.getElementById('labelPedi5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi6b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi6a').checked) { document.getElementById('labelPedi6a').style.color = '#f00'; }
      //if (document.getElementById('radioPedi6b').checked) { document.getElementById('labelPedi6b').style.color = '#f00'; }
      if (document.getElementById('radioPedi6c').checked) { document.getElementById('labelPedi6c').style.color = '#f00'; }
      if (document.getElementById('radioPedi6d').checked) { document.getElementById('labelPedi6d').style.color = '#f00'; }
      if (document.getElementById('radioPedi6e').checked) { document.getElementById('labelPedi6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi7d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi7a').checked) { document.getElementById('labelPedi7a').style.color = '#f00'; }
      if (document.getElementById('radioPedi7b').checked) { document.getElementById('labelPedi7b').style.color = '#f00'; }
      if (document.getElementById('radioPedi7c').checked) { document.getElementById('labelPedi7c').style.color = '#f00'; }
      //if (document.getElementById('radioPedi7d').checked) { document.getElementById('labelPedi7d').style.color = '#f00'; }
      if (document.getElementById('radioPedi7e').checked) { document.getElementById('labelPedi7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi8e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi8a').checked) { document.getElementById('labelPedi8a').style.color = '#f00'; }
      if (document.getElementById('radioPedi8b').checked) { document.getElementById('labelPedi8b').style.color = '#f00'; }
      if (document.getElementById('radioPedi8c').checked) { document.getElementById('labelPedi8c').style.color = '#f00'; }
      if (document.getElementById('radioPedi8d').checked) { document.getElementById('labelPedi8d').style.color = '#f00'; }
      //if (document.getElementById('radioPedi8e').checked) { document.getElementById('labelPedi8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi9a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioPedi9a').checked) { document.getElementById('labelPedi9a').style.color = '#f00'; }
      if (document.getElementById('radioPedi9b').checked) { document.getElementById('labelPedi9b').style.color = '#f00'; }
      if (document.getElementById('radioPedi9c').checked) { document.getElementById('labelPedi9c').style.color = '#f00'; }
      if (document.getElementById('radioPedi9d').checked) { document.getElementById('labelPedi9d').style.color = '#f00'; }
      if (document.getElementById('radioPedi9e').checked) { document.getElementById('labelPedi9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi10e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi10a').checked) { document.getElementById('labelPedi10a').style.color = '#f00'; }
      if (document.getElementById('radioPedi10b').checked) { document.getElementById('labelPedi10b').style.color = '#f00'; }
      if (document.getElementById('radioPedi10c').checked) { document.getElementById('labelPedi10c').style.color = '#f00'; }
      if (document.getElementById('radioPedi10d').checked) { document.getElementById('labelPedi10d').style.color = '#f00'; }
      //if (document.getElementById('radioPedi10e').checked) { document.getElementById('labelPedi10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi11d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi11a').checked) { document.getElementById('labelPedi11a').style.color = '#f00'; }
      if (document.getElementById('radioPedi11b').checked) { document.getElementById('labelPedi11b').style.color = '#f00'; }
      if (document.getElementById('radioPedi11c').checked) { document.getElementById('labelPedi11c').style.color = '#f00'; }
      //if (document.getElementById('radioPedi11d').checked) { document.getElementById('labelPedi11d').style.color = '#f00'; }
      if (document.getElementById('radioPedi11e').checked) { document.getElementById('labelPedi11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi12e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi12a').checked) { document.getElementById('labelPedi12a').style.color = '#f00'; }
      if (document.getElementById('radioPedi12b').checked) { document.getElementById('labelPedi12b').style.color = '#f00'; }
      if (document.getElementById('radioPedi12c').checked) { document.getElementById('labelPedi12c').style.color = '#f00'; }
      if (document.getElementById('radioPedi12d').checked) { document.getElementById('labelPedi12d').style.color = '#f00'; }
      //if (document.getElementById('radioPedi12e').checked) { document.getElementById('labelPedi12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi13b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi13a').checked) { document.getElementById('labelPedi13a').style.color = '#f00'; }
      //if (document.getElementById('radioPedi13b').checked) { document.getElementById('labelPedi13b').style.color = '#f00'; }
      if (document.getElementById('radioPedi13c').checked) { document.getElementById('labelPedi13c').style.color = '#f00'; }
      if (document.getElementById('radioPedi13d').checked) { document.getElementById('labelPedi13d').style.color = '#f00'; }
      if (document.getElementById('radioPedi13e').checked) { document.getElementById('labelPedi13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi14d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi14a').checked) { document.getElementById('labelPedi14a').style.color = '#f00'; }
      if (document.getElementById('radioPedi14b').checked) { document.getElementById('labelPedi14b').style.color = '#f00'; }
      if (document.getElementById('radioPedi14c').checked) { document.getElementById('labelPedi14c').style.color = '#f00'; }
      //if (document.getElementById('radioPedi14d').checked) { document.getElementById('labelPedi14d').style.color = '#f00'; }
      if (document.getElementById('radioPedi14e').checked) { document.getElementById('labelPedi14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi15c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi15a').checked) { document.getElementById('labelPedi15a').style.color = '#f00'; }
      if (document.getElementById('radioPedi15b').checked) { document.getElementById('labelPedi15b').style.color = '#f00'; }
      //if (document.getElementById('radioPedi15c').checked) { document.getElementById('labelPedi15c').style.color = '#f00'; }
      if (document.getElementById('radioPedi15d').checked) { document.getElementById('labelPedi15d').style.color = '#f00'; }
      if (document.getElementById('radioPedi15e').checked) { document.getElementById('labelPedi15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi16a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioPedi16a').checked) { document.getElementById('labelPedi16a').style.color = '#f00'; }
      if (document.getElementById('radioPedi16b').checked) { document.getElementById('labelPedi16b').style.color = '#f00'; }
      if (document.getElementById('radioPedi16c').checked) { document.getElementById('labelPedi16c').style.color = '#f00'; }
      if (document.getElementById('radioPedi16d').checked) { document.getElementById('labelPedi16d').style.color = '#f00'; }
      if (document.getElementById('radioPedi16e').checked) { document.getElementById('labelPedi16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi17d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi17a').checked) { document.getElementById('labelPedi17a').style.color = '#f00'; }
      if (document.getElementById('radioPedi17b').checked) { document.getElementById('labelPedi17b').style.color = '#f00'; }
      if (document.getElementById('radioPedi17c').checked) { document.getElementById('labelPedi17c').style.color = '#f00'; }
      //if (document.getElementById('radioPedi17d').checked) { document.getElementById('labelPedi17d').style.color = '#f00'; }
      if (document.getElementById('radioPedi17e').checked) { document.getElementById('labelPedi17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi18e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi18a').checked) { document.getElementById('labelPedi18a').style.color = '#f00'; }
      if (document.getElementById('radioPedi18b').checked) { document.getElementById('labelPedi18b').style.color = '#f00'; }
      if (document.getElementById('radioPedi18c').checked) { document.getElementById('labelPedi18c').style.color = '#f00'; }
      if (document.getElementById('radioPedi18d').checked) { document.getElementById('labelPedi18d').style.color = '#f00'; }
      //if (document.getElementById('radioPedi18e').checked) { document.getElementById('labelPedi18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi19c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi19a').checked) { document.getElementById('labelPedi19a').style.color = '#f00'; }
      if (document.getElementById('radioPedi19b').checked) { document.getElementById('labelPedi19b').style.color = '#f00'; }
      //if (document.getElementById('radioPedi19c').checked) { document.getElementById('labelPedi19c').style.color = '#f00'; }
      if (document.getElementById('radioPedi19d').checked) { document.getElementById('labelPedi19d').style.color = '#f00'; }
      if (document.getElementById('radioPedi19e').checked) { document.getElementById('labelPedi19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioPedi20e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi20a').checked) { document.getElementById('labelPedi20a').style.color = '#f00'; }
      if (document.getElementById('radioPedi20b').checked) { document.getElementById('labelPedi20b').style.color = '#f00'; }
      if (document.getElementById('radioPedi20c').checked) { document.getElementById('labelPedi20c').style.color = '#f00'; }
      if (document.getElementById('radioPedi20d').checked) { document.getElementById('labelPedi20d').style.color = '#f00'; }
      //if (document.getElementById('radioPedi20e').checked) { document.getElementById('labelPedi20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolPedi() {

      document.getElementById('labelPedi1a').style.color = '#fff';
      //document.getElementById('labelPedi1b').style.color = '#fff';
      document.getElementById('labelPedi1c').style.color = '#fff';
      document.getElementById('labelPedi1d').style.color = '#fff';
      document.getElementById('labelPedi1e').style.color = '#fff';
      //-------/

      //document.getElementById('labelPedi2a').style.color = '#fff';
      document.getElementById('labelPedi2b').style.color = '#fff';
      document.getElementById('labelPedi2c').style.color = '#fff';
      document.getElementById('labelPedi2d').style.color = '#fff';
      document.getElementById('labelPedi2e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi3a').style.color = '#fff';
      document.getElementById('labelPedi3b').style.color = '#fff';
      //document.getElementById('labelPedi3c').style.color = '#fff';
      document.getElementById('labelPedi3d').style.color = '#fff';
      document.getElementById('labelPedi3e').style.color = '#fff';
      //-------/

      //document.getElementById('labelPedi4a').style.color = '#fff';
      document.getElementById('labelPedi4b').style.color = '#fff';
      document.getElementById('labelPedi4c').style.color = '#fff';
      document.getElementById('labelPedi4d').style.color = '#fff';
      document.getElementById('labelPedi4e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi5a').style.color = '#fff';
      document.getElementById('labelPedi5b').style.color = '#fff';
      document.getElementById('labelPedi5c').style.color = '#fff';
      //document.getElementById('labelPedi5d').style.color = '#fff';
      document.getElementById('labelPedi5e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi6a').style.color = '#fff';
      //document.getElementById('labelPedi6b').style.color = '#fff';
      document.getElementById('labelPedi6c').style.color = '#fff';
      document.getElementById('labelPedi6d').style.color = '#fff';
      document.getElementById('labelPedi6e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi7a').style.color = '#fff';
      document.getElementById('labelPedi7b').style.color = '#fff';
      document.getElementById('labelPedi7c').style.color = '#fff';
      //document.getElementById('labelPedi7d').style.color = '#fff';
      document.getElementById('labelPedi7e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi8a').style.color = '#fff';
      document.getElementById('labelPedi8b').style.color = '#fff';
      document.getElementById('labelPedi8c').style.color = '#fff';
      document.getElementById('labelPedi8d').style.color = '#fff';
      //document.getElementById('labelPedi8e').style.color = '#fff';
      //-------/

      //document.getElementById('labelPedi9a').style.color = '#fff';
      document.getElementById('labelPedi9b').style.color = '#fff';
      document.getElementById('labelPedi9c').style.color = '#fff';
      document.getElementById('labelPedi9d').style.color = '#fff';
      document.getElementById('labelPedi9e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi10a').style.color = '#fff';
      document.getElementById('labelPedi10b').style.color = '#fff';
      document.getElementById('labelPedi10c').style.color = '#fff';
      document.getElementById('labelPedi10d').style.color = '#fff';
      //document.getElementById('labelPedi10e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi11a').style.color = '#fff';
      document.getElementById('labelPedi11b').style.color = '#fff';
      document.getElementById('labelPedi11c').style.color = '#fff';
      //document.getElementById('labelPedi11d').style.color = '#fff';
      document.getElementById('labelPedi11e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi12a').style.color = '#fff';
      document.getElementById('labelPedi12b').style.color = '#fff';
      document.getElementById('labelPedi12c').style.color = '#fff';
      document.getElementById('labelPedi12d').style.color = '#fff';
      //document.getElementById('labelPedi12e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi13a').style.color = '#fff';
      //document.getElementById('labelPedi13b').style.color = '#fff';
      document.getElementById('labelPedi13c').style.color = '#fff';
      document.getElementById('labelPedi13d').style.color = '#fff';
      document.getElementById('labelPedi13e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi14a').style.color = '#fff';
      document.getElementById('labelPedi14b').style.color = '#fff';
      document.getElementById('labelPedi14c').style.color = '#fff';
      //document.getElementById('labelPedi14d').style.color = '#fff';
      document.getElementById('labelPedi14e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi15a').style.color = '#fff';
      document.getElementById('labelPedi15b').style.color = '#fff';
      //document.getElementById('labelPedi15c').style.color = '#fff';
      document.getElementById('labelPedi15d').style.color = '#fff';
      document.getElementById('labelPedi15e').style.color = '#fff';
      //-------/

      //document.getElementById('labelPedi16a').style.color = '#fff';
      document.getElementById('labelPedi16b').style.color = '#fff';
      document.getElementById('labelPedi16c').style.color = '#fff';
      document.getElementById('labelPedi16d').style.color = '#fff';
      document.getElementById('labelPedi16e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi17a').style.color = '#fff';
      document.getElementById('labelPedi17b').style.color = '#fff';
      document.getElementById('labelPedi17c').style.color = '#fff';
      //document.getElementById('labelPedi17d').style.color = '#fff';
      document.getElementById('labelPedi17e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi18a').style.color = '#fff';
      document.getElementById('labelPedi18b').style.color = '#fff';
      document.getElementById('labelPedi18c').style.color = '#fff';
      document.getElementById('labelPedi18d').style.color = '#fff';
      //document.getElementById('labelPedi18e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi19a').style.color = '#fff';
      document.getElementById('labelPedi19b').style.color = '#fff';
      //document.getElementById('labelPedi19c').style.color = '#fff';
      document.getElementById('labelPedi19d').style.color = '#fff';
      document.getElementById('labelPedi19e').style.color = '#fff';
      //-------/

      document.getElementById('labelPedi20a').style.color = '#fff';
      document.getElementById('labelPedi20b').style.color = '#fff';
      document.getElementById('labelPedi20c').style.color = '#fff';
      document.getElementById('labelPedi20d').style.color = '#fff';
      //document.getElementById('labelPedi20e').style.color = '#fff';
      //-------/
}

function calificarTrauma() {
    var form = document.getElementById('formTrauma');
    var nombre = form.medico.value;
    var a = 0;//aciertos
    var e = 0;//errores

    if (document.getElementById('radioTrauma1b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma1a').checked) { document.getElementById('labelTrauma1a').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma1b').checked) { document.getElementById('labelTrauma1b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma1c').checked) { document.getElementById('labelTrauma1c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma1d').checked) { document.getElementById('labelTrauma1d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma1e').checked) { document.getElementById('labelTrauma1e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma2a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioTrauma2a').checked) { document.getElementById('labelTrauma2a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma2b').checked) { document.getElementById('labelTrauma2b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma2c').checked) { document.getElementById('labelTrauma2c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma2d').checked) { document.getElementById('labelTrauma2d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma2e').checked) { document.getElementById('labelTrauma2e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma3e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma3a').checked) { document.getElementById('labelTrauma3a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma3b').checked) { document.getElementById('labelTrauma3b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma3c').checked) { document.getElementById('labelTrauma3c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma3d').checked) { document.getElementById('labelTrauma3d').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma3e').checked) { document.getElementById('labelTrauma3e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma4e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma4a').checked) { document.getElementById('labelTrauma4a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma4b').checked) { document.getElementById('labelTrauma4b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma4c').checked) { document.getElementById('labelTrauma4c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma4d').checked) { document.getElementById('labelTrauma4d').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma4e').checked) { document.getElementById('labelTrauma4e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma5d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma5a').checked) { document.getElementById('labelTrauma5a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma5b').checked) { document.getElementById('labelTrauma5b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma5c').checked) { document.getElementById('labelTrauma5c').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma5d').checked) { document.getElementById('labelTrauma5d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma5e').checked) { document.getElementById('labelTrauma5e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma6d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma6a').checked) { document.getElementById('labelTrauma6a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma6b').checked) { document.getElementById('labelTrauma6b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma6c').checked) { document.getElementById('labelTrauma6c').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma6d').checked) { document.getElementById('labelTrauma6d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma6e').checked) { document.getElementById('labelTrauma6e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma7e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma7a').checked) { document.getElementById('labelTrauma7a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma7b').checked) { document.getElementById('labelTrauma7b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma7c').checked) { document.getElementById('labelTrauma7c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma7d').checked) { document.getElementById('labelTrauma7d').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma7e').checked) { document.getElementById('labelTrauma7e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma8c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma8a').checked) { document.getElementById('labelTrauma8a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma8b').checked) { document.getElementById('labelTrauma8b').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma8c').checked) { document.getElementById('labelTrauma8c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma8d').checked) { document.getElementById('labelTrauma8d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma8e').checked) { document.getElementById('labelTrauma8e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma9b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma9a').checked) { document.getElementById('labelTrauma9a').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma9b').checked) { document.getElementById('labelTrauma9b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma9c').checked) { document.getElementById('labelTrauma9c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma9d').checked) { document.getElementById('labelTrauma9d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma9e').checked) { document.getElementById('labelTrauma9e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma10b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma10a').checked) { document.getElementById('labelTrauma10a').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma10b').checked) { document.getElementById('labelTrauma10b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma10c').checked) { document.getElementById('labelTrauma10c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma10d').checked) { document.getElementById('labelTrauma10d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma10e').checked) { document.getElementById('labelTrauma10e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma11c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma11a').checked) { document.getElementById('labelTrauma11a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma11b').checked) { document.getElementById('labelTrauma11b').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma11c').checked) { document.getElementById('labelTrauma11c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma11d').checked) { document.getElementById('labelTrauma11d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma11e').checked) { document.getElementById('labelTrauma11e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma12a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioTrauma12a').checked) { document.getElementById('labelTrauma12a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma12b').checked) { document.getElementById('labelTrauma12b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma12c').checked) { document.getElementById('labelTrauma12c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma12d').checked) { document.getElementById('labelTrauma12d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma12e').checked) { document.getElementById('labelTrauma12e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma13d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma13a').checked) { document.getElementById('labelTrauma13a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma13b').checked) { document.getElementById('labelTrauma13b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma13c').checked) { document.getElementById('labelTrauma13c').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma13d').checked) { document.getElementById('labelTrauma13d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma13e').checked) { document.getElementById('labelTrauma13e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma14b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma14a').checked) { document.getElementById('labelTrauma14a').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma14b').checked) { document.getElementById('labelTrauma14b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma14c').checked) { document.getElementById('labelTrauma14c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma14d').checked) { document.getElementById('labelTrauma14d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma14e').checked) { document.getElementById('labelTrauma14e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma15a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioTrauma15a').checked) { document.getElementById('labelTrauma15a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma15b').checked) { document.getElementById('labelTrauma15b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma15c').checked) { document.getElementById('labelTrauma15c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma15d').checked) { document.getElementById('labelTrauma15d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma15e').checked) { document.getElementById('labelTrauma15e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma16b').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma16a').checked) { document.getElementById('labelTrauma16a').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma16b').checked) { document.getElementById('labelTrauma16b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma16c').checked) { document.getElementById('labelTrauma16c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma16d').checked) { document.getElementById('labelTrauma16d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma16e').checked) { document.getElementById('labelTrauma16e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma17c').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma17a').checked) { document.getElementById('labelTrauma17a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma17b').checked) { document.getElementById('labelTrauma17b').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma17c').checked) { document.getElementById('labelTrauma17c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma17d').checked) { document.getElementById('labelTrauma17d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma17e').checked) { document.getElementById('labelTrauma17e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma18d').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma18a').checked) { document.getElementById('labelTrauma18a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma18b').checked) { document.getElementById('labelTrauma18b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma18c').checked) { document.getElementById('labelTrauma18c').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma18d').checked) { document.getElementById('labelTrauma18d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma18e').checked) { document.getElementById('labelTrauma18e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma19e').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma19a').checked) { document.getElementById('labelTrauma19a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma19b').checked) { document.getElementById('labelTrauma19b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma19c').checked) { document.getElementById('labelTrauma19c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma19d').checked) { document.getElementById('labelTrauma19d').style.color = '#f00'; }
      //if (document.getElementById('radioTrauma19e').checked) { document.getElementById('labelTrauma19e').style.color = '#f00'; }
    }
    if (document.getElementById('radioTrauma20a').checked) {
    a++; 
    } else {
      e++;
      //if (document.getElementById('radioTrauma20a').checked) { document.getElementById('labelTrauma20a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma20b').checked) { document.getElementById('labelTrauma20b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma20c').checked) { document.getElementById('labelTrauma20c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma20d').checked) { document.getElementById('labelTrauma20d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma20e').checked) { document.getElementById('labelTrauma20e').style.color = '#f00'; }
    }

    alert('Sr. '+nombre+'\nSu calificación es:\nNumero de aciertos: '+a+'\nNúmero de errores: '+e);
    return false;
}

function restoreFormSolTrauma() {

      document.getElementById('labelTrauma1a').style.color = '#fff';
      //document.getElementById('labelTrauma1b').style.color = '#fff';
      document.getElementById('labelTrauma1c').style.color = '#fff';
      document.getElementById('labelTrauma1d').style.color = '#fff';
      document.getElementById('labelTrauma1e').style.color = '#fff';
      //-------/

      //document.getElementById('labelTrauma2a').style.color = '#fff';
      document.getElementById('labelTrauma2b').style.color = '#fff';
      document.getElementById('labelTrauma2c').style.color = '#fff';
      document.getElementById('labelTrauma2d').style.color = '#fff';
      document.getElementById('labelTrauma2e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma3a').style.color = '#fff';
      document.getElementById('labelTrauma3b').style.color = '#fff';
      document.getElementById('labelTrauma3c').style.color = '#fff';
      document.getElementById('labelTrauma3d').style.color = '#fff';
      //document.getElementById('labelTrauma3e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma4a').style.color = '#fff';
      document.getElementById('labelTrauma4b').style.color = '#fff';
      document.getElementById('labelTrauma4c').style.color = '#fff';
      document.getElementById('labelTrauma4d').style.color = '#fff';
      //document.getElementById('labelTrauma4e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma5a').style.color = '#fff';
      document.getElementById('labelTrauma5b').style.color = '#fff';
      document.getElementById('labelTrauma5c').style.color = '#fff';
      //document.getElementById('labelTrauma5d').style.color = '#fff';
      document.getElementById('labelTrauma5e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma6a').style.color = '#fff';
      document.getElementById('labelTrauma6b').style.color = '#fff';
      document.getElementById('labelTrauma6c').style.color = '#fff';
      //document.getElementById('labelTrauma6d').style.color = '#fff';
      document.getElementById('labelTrauma6e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma7a').style.color = '#fff';
      document.getElementById('labelTrauma7b').style.color = '#fff';
      document.getElementById('labelTrauma7c').style.color = '#fff';
      document.getElementById('labelTrauma7d').style.color = '#fff';
      //document.getElementById('labelTrauma7e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma8a').style.color = '#fff';
      document.getElementById('labelTrauma8b').style.color = '#fff';
      //document.getElementById('labelTrauma8c').style.color = '#fff';
      document.getElementById('labelTrauma8d').style.color = '#fff';
      document.getElementById('labelTrauma8e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma9a').style.color = '#fff';
      //document.getElementById('labelTrauma9b').style.color = '#fff';
      document.getElementById('labelTrauma9c').style.color = '#fff';
      document.getElementById('labelTrauma9d').style.color = '#fff';
      document.getElementById('labelTrauma9e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma10a').style.color = '#fff';
      //document.getElementById('labelTrauma10b').style.color = '#fff';
      document.getElementById('labelTrauma10c').style.color = '#fff';
      document.getElementById('labelTrauma10d').style.color = '#fff';
      document.getElementById('labelTrauma10e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma11a').style.color = '#fff';
      document.getElementById('labelTrauma11b').style.color = '#fff';
      //document.getElementById('labelTrauma11c').style.color = '#fff';
      document.getElementById('labelTrauma11d').style.color = '#fff';
      document.getElementById('labelTrauma11e').style.color = '#fff';
      //-------/

      //document.getElementById('labelTrauma12a').style.color = '#fff';
      document.getElementById('labelTrauma12b').style.color = '#fff';
      document.getElementById('labelTrauma12c').style.color = '#fff';
      document.getElementById('labelTrauma12d').style.color = '#fff';
      document.getElementById('labelTrauma12e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma13a').style.color = '#fff';
      document.getElementById('labelTrauma13b').style.color = '#fff';
      document.getElementById('labelTrauma13c').style.color = '#fff';
      //document.getElementById('labelTrauma13d').style.color = '#fff';
      document.getElementById('labelTrauma13e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma14a').style.color = '#fff';
      //document.getElementById('labelTrauma14b').style.color = '#fff';
      document.getElementById('labelTrauma14c').style.color = '#fff';
      document.getElementById('labelTrauma14d').style.color = '#fff';
      document.getElementById('labelTrauma14e').style.color = '#fff';
      //-------/

      //document.getElementById('labelTrauma15a').style.color = '#fff';
      document.getElementById('labelTrauma15b').style.color = '#fff';
      document.getElementById('labelTrauma15c').style.color = '#fff';
      document.getElementById('labelTrauma15d').style.color = '#fff';
      document.getElementById('labelTrauma15e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma16a').style.color = '#fff';
      //document.getElementById('labelTrauma16b').style.color = '#fff';
      document.getElementById('labelTrauma16c').style.color = '#fff';
      document.getElementById('labelTrauma16d').style.color = '#fff';
      document.getElementById('labelTrauma16e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma17a').style.color = '#fff';
      document.getElementById('labelTrauma17b').style.color = '#fff';
      //document.getElementById('labelTrauma17c').style.color = '#fff';
      document.getElementById('labelTrauma17d').style.color = '#fff';
      document.getElementById('labelTrauma17e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma18a').style.color = '#fff';
      document.getElementById('labelTrauma18b').style.color = '#fff';
      document.getElementById('labelTrauma18c').style.color = '#fff';
      //document.getElementById('labelTrauma18d').style.color = '#fff';
      document.getElementById('labelTrauma18e').style.color = '#fff';
      //-------/

      document.getElementById('labelTrauma19a').style.color = '#fff';
      document.getElementById('labelTrauma19b').style.color = '#fff';
      document.getElementById('labelTrauma19c').style.color = '#fff';
      document.getElementById('labelTrauma19d').style.color = '#fff';
      //document.getElementById('labelTrauma19e').style.color = '#fff';
      //-------/

      //document.getElementById('labelTrauma20a').style.color = '#fff';
      document.getElementById('labelTrauma20b').style.color = '#fff';
      document.getElementById('labelTrauma20c').style.color = '#fff';
      document.getElementById('labelTrauma20d').style.color = '#fff';
      document.getElementById('labelTrauma20e').style.color = '#fff';
      //-------/

}

























