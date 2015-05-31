<?php
//genera calificadores A
/*for ($i=1;$i<=100;$i++)
{
    print "if (form.checkboxA".(string)$i."x.checked) {
    a++; 
    } else {
      e++;
      if (form.checkboxA".(string)$i."a.checked) { document.getElementById('labelA".(string)$i."a').style.color = '#f00'; }
      if (form.checkboxA".(string)$i."b.checked) { document.getElementById('labelA".(string)$i."b').style.color = '#f00'; }
      if (form.checkboxA".(string)$i."c.checked) { document.getElementById('labelA".(string)$i."c').style.color = '#f00'; }
      if (form.checkboxA".(string)$i."d.checked) { document.getElementById('labelA".(string)$i."d').style.color = '#f00'; }
      if (form.checkboxA".(string)$i."e.checked) { document.getElementById('labelA".(string)$i."e').style.color = '#f00'; }
    }\n";
  
}*/

//genera reseteador de etiquetas de formulario A
/*for ($i=1;$i<=100;$i++)
{
    print "
      document.getElementById('labelA".(string)$i."a').style.color = '#fff';
      document.getElementById('labelA".(string)$i."b').style.color = '#fff';
      document.getElementById('labelA".(string)$i."c').style.color = '#fff';
      document.getElementById('labelA".(string)$i."d').style.color = '#fff';
      document.getElementById('labelA".(string)$i."e').style.color = '#fff';\n";
  
}*/

//generador para tema b
/*for ($i=1;$i<=100;$i++)
{
    print '
		<div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="false">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;Cu&aacute;l de las siguientes determinaciones es m&aacute;s &uacute;til para el diagn&oacute;stico inicial del hipotiroidismo primario&#63;</legend>

                      <input type="radio" name="radioB'.$i.'" id="radioB'.$i.'a" class="custom" />
                      <label for="radioB'.$i.'a">A) P1.</label>

                      <input type="radio" name="radioB'.$i.'" id="radioB'.$i.'b" class="custom" />
                      <label for="radioB'.$i.'b">B) P2.</label>

                      <input type="radio" name="radioB'.$i.'" id="radioB'.$i.'c" class="custom" />
                      <label for="radioB'.$i.'c">C) P3.</label>

                      <input type="radio" name="radioB'.$i.'" id="radioB'.$i.'d" class="custom" />
                      <label for="radioB'.$i.'d">D) P4.</label>

                      <input type="radio" name="radioB'.$i.'" id="radioB'.$i.'e" class="custom" />
                      <label for="radioB'.$i.'e">E) P5.</label>
                    </fieldset>
                </div>
      ';
  
}*/


//genera calificadores B

/*for ($i=1;$i<=100;$i++)
{
    print "  if (document.getElementById('radioB".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioB".(string)$i."a').checked) { document.getElementById('labelB".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioB".(string)$i."b').checked) { document.getElementById('labelB".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioB".(string)$i."c').checked) { document.getElementById('labelB".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioB".(string)$i."d').checked) { document.getElementById('labelB".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioB".(string)$i."e').checked) { document.getElementById('labelB".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario B
/*for ($i=1;$i<=100;$i++)
{
    print "
      document.getElementById('labelB".(string)$i."a').style.color = '#fff';
      document.getElementById('labelB".(string)$i."b').style.color = '#fff';
      document.getElementById('labelB".(string)$i."c').style.color = '#fff';
      document.getElementById('labelB".(string)$i."d').style.color = '#fff';
      document.getElementById('labelB".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/


//generador para cuestionario antivioticos
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioAnti'.$i.'" id="radioAnti'.$i.'a" class="custom" />
                      <label for="radioAnti'.$i.'a" id="labelAnti'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioAnti'.$i.'" id="radioAnti'.$i.'b" class="custom" />
                      <label for="radioAnti'.$i.'b" id="labelAnti'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioAnti'.$i.'" id="radioAnti'.$i.'c" class="custom" />
                      <label for="radioAnti'.$i.'c" id="labelAnti'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioAnti'.$i.'" id="radioAnti'.$i.'d" class="custom" />
                      <label for="radioAnti'.$i.'d" id="labelAnti'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioAnti'.$i.'" id="radioAnti'.$i.'e" class="custom" />
                      <label for="radioAnti'.$i.'e" id="labelAnti'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/
  
//genera calificadores formulario antibioticos

/*for ($i=1;$i<=20;$i++)
{
    print "  if (document.getElementById('radioAnti".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioAnti".(string)$i."a').checked) { document.getElementById('labelAnti".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioAnti".(string)$i."b').checked) { document.getElementById('labelAnti".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioAnti".(string)$i."c').checked) { document.getElementById('labelAnti".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioAnti".(string)$i."d').checked) { document.getElementById('labelAnti".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioAnti".(string)$i."e').checked) { document.getElementById('labelAnti".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario sonlucion antibioticos
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelAnti".(string)$i."a').style.color = '#fff';
      document.getElementById('labelAnti".(string)$i."b').style.color = '#fff';
      document.getElementById('labelAnti".(string)$i."c').style.color = '#fff';
      document.getElementById('labelAnti".(string)$i."d').style.color = '#fff';
      document.getElementById('labelAnti".(string)$i."e').style.color = '#fff';
      //-------/
      \n"; 
}*/

//generador para cuestionario Cardiologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioCardio'.$i.'" id="radioCardio'.$i.'a" class="custom" />
                      <label for="radioCardio'.$i.'a" id="labelCardio'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioCardio'.$i.'" id="radioCardio'.$i.'b" class="custom" />
                      <label for="radioCardio'.$i.'b" id="labelCardio'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioCardio'.$i.'" id="radioCardio'.$i.'c" class="custom" />
                      <label for="radioCardio'.$i.'c" id="labelCardio'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioCardio'.$i.'" id="radioCardio'.$i.'d" class="custom" />
                      <label for="radioCardio'.$i.'d" id="labelCardio'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioCardio'.$i.'" id="radioCardio'.$i.'e" class="custom" />
                      <label for="radioCardio'.$i.'e" id="labelCardio'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario cardiologia

/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioCardio".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCardio".(string)$i."a').checked) { document.getElementById('labelCardio".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioCardio".(string)$i."b').checked) { document.getElementById('labelCardio".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioCardio".(string)$i."c').checked) { document.getElementById('labelCardio".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioCardio".(string)$i."d').checked) { document.getElementById('labelCardio".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioCardio".(string)$i."e').checked) { document.getElementById('labelCardio".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario Cardiologia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelCardio".(string)$i."a').style.color = '#fff';
      document.getElementById('labelCardio".(string)$i."b').style.color = '#fff';
      document.getElementById('labelCardio".(string)$i."c').style.color = '#fff';
      document.getElementById('labelCardio".(string)$i."d').style.color = '#fff';
      document.getElementById('labelCardio".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/

//generador para cuestionario Cirugia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioCiru'.$i.'" id="radioCiru'.$i.'a" class="custom" />
                      <label for="radioCiru'.$i.'a" id="labelCiru'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioCiru'.$i.'" id="radioCiru'.$i.'b" class="custom" />
                      <label for="radioCiru'.$i.'b" id="labelCiru'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioCiru'.$i.'" id="radioCiru'.$i.'c" class="custom" />
                      <label for="radioCiru'.$i.'c" id="labelCiru'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioCiru'.$i.'" id="radioCiru'.$i.'d" class="custom" />
                      <label for="radioCiru'.$i.'d" id="labelCiru'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioCiru'.$i.'" id="radioCiru'.$i.'e" class="custom" />
                      <label for="radioCiru'.$i.'e" id="labelCiru'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario cirugia

/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioCiru".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioCiru".(string)$i."a').checked) { document.getElementById('labelCiru".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioCiru".(string)$i."b').checked) { document.getElementById('labelCiru".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioCiru".(string)$i."c').checked) { document.getElementById('labelCiru".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioCiru".(string)$i."d').checked) { document.getElementById('labelCiru".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioCiru".(string)$i."e').checked) { document.getElementById('labelCiru".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario Cirugia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelCiru".(string)$i."a').style.color = '#fff';
      document.getElementById('labelCiru".(string)$i."b').style.color = '#fff';
      document.getElementById('labelCiru".(string)$i."c').style.color = '#fff';
      document.getElementById('labelCiru".(string)$i."d').style.color = '#fff';
      document.getElementById('labelCiru".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/

//generador para cuestionario Dermatologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioDerma'.$i.'" id="radioDerma'.$i.'a" class="custom" />
                      <label for="radioDerma'.$i.'a" id="labelDerma'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioDerma'.$i.'" id="radioDerma'.$i.'b" class="custom" />
                      <label for="radioDerma'.$i.'b" id="labelDerma'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioDerma'.$i.'" id="radioDerma'.$i.'c" class="custom" />
                      <label for="radioDerma'.$i.'c" id="labelDerma'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioDerma'.$i.'" id="radioDerma'.$i.'d" class="custom" />
                      <label for="radioDerma'.$i.'d" id="labelDerma'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioDerma'.$i.'" id="radioDerma'.$i.'e" class="custom" />
                      <label for="radioDerma'.$i.'e" id="labelDerma'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/
//genera calificadores formulario dermatologia

/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioDerma".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioDerma".(string)$i."a').checked) { document.getElementById('labelDerma".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioDerma".(string)$i."b').checked) { document.getElementById('labelDerma".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioDerma".(string)$i."c').checked) { document.getElementById('labelDerma".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioDerma".(string)$i."d').checked) { document.getElementById('labelDerma".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioDerma".(string)$i."e').checked) { document.getElementById('labelDerma".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario Cirugia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelDerma".(string)$i."a').style.color = '#fff';
      document.getElementById('labelDerma".(string)$i."b').style.color = '#fff';
      document.getElementById('labelDerma".(string)$i."c').style.color = '#fff';
      document.getElementById('labelDerma".(string)$i."d').style.color = '#fff';
      document.getElementById('labelDerma".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/

//generador para cuestionario Gastroenterologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioGastro'.$i.'" id="radioGastro'.$i.'a" class="custom" />
                      <label for="radioGastro'.$i.'a" id="labelGastro'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioGastro'.$i.'" id="radioGastro'.$i.'b" class="custom" />
                      <label for="radioGastro'.$i.'b" id="labelGastro'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioGastro'.$i.'" id="radioGastro'.$i.'c" class="custom" />
                      <label for="radioGastro'.$i.'c" id="labelGastro'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioGastro'.$i.'" id="radioGastro'.$i.'d" class="custom" />
                      <label for="radioGastro'.$i.'d" id="labelGastro'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioGastro'.$i.'" id="radioGastro'.$i.'e" class="custom" />
                      <label for="radioGastro'.$i.'e" id="labelGastro'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario gastroenterologia

/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioGastro".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioGastro".(string)$i."a').checked) { document.getElementById('labelGastro".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioGastro".(string)$i."b').checked) { document.getElementById('labelGastro".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioGastro".(string)$i."c').checked) { document.getElementById('labelGastro".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioGastro".(string)$i."d').checked) { document.getElementById('labelGastro".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioGastro".(string)$i."e').checked) { document.getElementById('labelGastro".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario gastroenterologia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelGastro".(string)$i."a').style.color = '#fff';
      document.getElementById('labelGastro".(string)$i."b').style.color = '#fff';
      document.getElementById('labelGastro".(string)$i."c').style.color = '#fff';
      document.getElementById('labelGastro".(string)$i."d').style.color = '#fff';
      document.getElementById('labelGastro".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/

//generador para cuestionario Infectologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioInfe'.$i.'" id="radioInfe'.$i.'a" class="custom" />
                      <label for="radioInfe'.$i.'a" id="labelInfe'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioInfe'.$i.'" id="radioInfe'.$i.'b" class="custom" />
                      <label for="radioInfe'.$i.'b" id="labelInfe'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioInfe'.$i.'" id="radioInfe'.$i.'c" class="custom" />
                      <label for="radioInfe'.$i.'c" id="labelInfe'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioInfe'.$i.'" id="radioInfe'.$i.'d" class="custom" />
                      <label for="radioInfe'.$i.'d" id="labelInfe'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioInfe'.$i.'" id="radioInfe'.$i.'e" class="custom" />
                      <label for="radioInfe'.$i.'e" id="labelInfe'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario infectologia

/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioInfe".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioInfe".(string)$i."a').checked) { document.getElementById('labelInfe".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioInfe".(string)$i."b').checked) { document.getElementById('labelInfe".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioInfe".(string)$i."c').checked) { document.getElementById('labelInfe".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioInfe".(string)$i."d').checked) { document.getElementById('labelInfe".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioInfe".(string)$i."e').checked) { document.getElementById('labelInfe".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario gastroenterologia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelInfe".(string)$i."a').style.color = '#fff';
      document.getElementById('labelInfe".(string)$i."b').style.color = '#fff';
      document.getElementById('labelInfe".(string)$i."c').style.color = '#fff';
      document.getElementById('labelInfe".(string)$i."d').style.color = '#fff';
      document.getElementById('labelInfe".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/

//generador para cuestionario neumologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioNeumo'.$i.'" id="radioNeumo'.$i.'a" class="custom" />
                      <label for="radioNeumo'.$i.'a" id="labelNeumo'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioNeumo'.$i.'" id="radioNeumo'.$i.'b" class="custom" />
                      <label for="radioNeumo'.$i.'b" id="labelNeumo'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioNeumo'.$i.'" id="radioNeumo'.$i.'c" class="custom" />
                      <label for="radioNeumo'.$i.'c" id="labelNeumo'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioNeumo'.$i.'" id="radioNeumo'.$i.'d" class="custom" />
                      <label for="radioNeumo'.$i.'d" id="labelNeumo'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioNeumo'.$i.'" id="radioNeumo'.$i.'e" class="custom" />
                      <label for="radioNeumo'.$i.'e" id="labelNeumo'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario neumologia

/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioNeumo".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNeumo".(string)$i."a').checked) { document.getElementById('labelNeumo".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioNeumo".(string)$i."b').checked) { document.getElementById('labelNeumo".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioNeumo".(string)$i."c').checked) { document.getElementById('labelNeumo".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioNeumo".(string)$i."d').checked) { document.getElementById('labelNeumo".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioNeumo".(string)$i."e').checked) { document.getElementById('labelNeumo".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario neumologia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelNeumo".(string)$i."a').style.color = '#fff';
      document.getElementById('labelNeumo".(string)$i."b').style.color = '#fff';
      document.getElementById('labelNeumo".(string)$i."c').style.color = '#fff';
      document.getElementById('labelNeumo".(string)$i."d').style.color = '#fff';
      document.getElementById('labelNeumo".(string)$i."e').style.color = '#fff';
      //-------/\n";
  
}*/

//generador para cuestionario nefrologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioNefro'.$i.'" id="radioNefro'.$i.'a" class="custom" />
                      <label for="radioNefro'.$i.'a" id="labelNefro'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioNefro'.$i.'" id="radioNefro'.$i.'b" class="custom" />
                      <label for="radioNefro'.$i.'b" id="labelNefro'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioNefro'.$i.'" id="radioNefro'.$i.'c" class="custom" />
                      <label for="radioNefro'.$i.'c" id="labelNefro'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioNefro'.$i.'" id="radioNefro'.$i.'d" class="custom" />
                      <label for="radioNefro'.$i.'d" id="labelNefro'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioNefro'.$i.'" id="radioNefro'.$i.'e" class="custom" />
                      <label for="radioNefro'.$i.'e" id="labelNefro'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/


//genera calificadores formulario nefrologia
/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioNefro".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioNefro".(string)$i."a').checked) { document.getElementById('labelNefro".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioNefro".(string)$i."b').checked) { document.getElementById('labelNefro".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioNefro".(string)$i."c').checked) { document.getElementById('labelNefro".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioNefro".(string)$i."d').checked) { document.getElementById('labelNefro".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioNefro".(string)$i."e').checked) { document.getElementById('labelNefro".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario nefrologia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelNefro".(string)$i."a').style.color = '#fff';
      document.getElementById('labelNefro".(string)$i."b').style.color = '#fff';
      document.getElementById('labelNefro".(string)$i."c').style.color = '#fff';
      document.getElementById('labelNefro".(string)$i."d').style.color = '#fff';
      document.getElementById('labelNefro".(string)$i."e').style.color = '#fff';
      //-------/\n";
}*/

//generador para cuestionario pediatria
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioPedi'.$i.'" id="radioPedi'.$i.'a" class="custom" />
                      <label for="radioPedi'.$i.'a" id="labelPedi'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioPedi'.$i.'" id="radioPedi'.$i.'b" class="custom" />
                      <label for="radioPedi'.$i.'b" id="labelPedi'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioPedi'.$i.'" id="radioPedi'.$i.'c" class="custom" />
                      <label for="radioPedi'.$i.'c" id="labelPedi'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioPedi'.$i.'" id="radioPedi'.$i.'d" class="custom" />
                      <label for="radioPedi'.$i.'d" id="labelPedi'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioPedi'.$i.'" id="radioPedi'.$i.'e" class="custom" />
                      <label for="radioPedi'.$i.'e" id="labelPedi'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario nefrologia
/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioPedi".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioPedi".(string)$i."a').checked) { document.getElementById('labelPedi".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioPedi".(string)$i."b').checked) { document.getElementById('labelPedi".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioPedi".(string)$i."c').checked) { document.getElementById('labelPedi".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioPedi".(string)$i."d').checked) { document.getElementById('labelPedi".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioPedi".(string)$i."e').checked) { document.getElementById('labelPedi".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario nefrologia
/*for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelPedi".(string)$i."a').style.color = '#fff';
      document.getElementById('labelPedi".(string)$i."b').style.color = '#fff';
      document.getElementById('labelPedi".(string)$i."c').style.color = '#fff';
      document.getElementById('labelPedi".(string)$i."d').style.color = '#fff';
      document.getElementById('labelPedi".(string)$i."e').style.color = '#fff';
      //-------/\n";
}*/

//generador para cuestionario Traumatologia
/*for ($i=1;$i<=20;$i++)
{
    print '
                <div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="true">
                  <h3>Pregunta '.$i.'</h3>
                    <fieldset data-role="controlgroup" data-mini="true">
                      <legend>&iquest;&#63;</legend>

                      <input type="radio" name="radioTrauma'.$i.'" id="radioTrauma'.$i.'a" class="custom" />
                      <label for="radioTrauma'.$i.'a" id="labelTrauma'.$i.'x">A) P1.</label>

                      <input type="radio" name="radioTrauma'.$i.'" id="radioTrauma'.$i.'b" class="custom" />
                      <label for="radioTrauma'.$i.'b" id="labelTrauma'.$i.'x">B) P2.</label>

                      <input type="radio" name="radioTrauma'.$i.'" id="radioTrauma'.$i.'c" class="custom" />
                      <label for="radioTrauma'.$i.'c" id="labelTrauma'.$i.'x">C) P3.</label>

                      <input type="radio" name="radioTrauma'.$i.'" id="radioTrauma'.$i.'d" class="custom" />
                      <label for="radioTrauma'.$i.'d" id="labelTrauma'.$i.'x">D) P4.</label>

                      <input type="radio" name="radioTrauma'.$i.'" id="radioTrauma'.$i.'e" class="custom" />
                      <label for="radioTrauma'.$i.'e" id="labelTrauma'.$i.'x">E) P5.</label>
                    </fieldset>
                </div>
      '; 
}*/

//genera calificadores formulario traumatologia
/*for ($i=1;$i<=20;$i++)
{
    print "    if (document.getElementById('radioTrauma".(string)$i."x').checked) {
    a++; 
    } else {
      e++;
      if (document.getElementById('radioTrauma".(string)$i."a').checked) { document.getElementById('labelTrauma".(string)$i."a').style.color = '#f00'; }
      if (document.getElementById('radioTrauma".(string)$i."b').checked) { document.getElementById('labelTrauma".(string)$i."b').style.color = '#f00'; }
      if (document.getElementById('radioTrauma".(string)$i."c').checked) { document.getElementById('labelTrauma".(string)$i."c').style.color = '#f00'; }
      if (document.getElementById('radioTrauma".(string)$i."d').checked) { document.getElementById('labelTrauma".(string)$i."d').style.color = '#f00'; }
      if (document.getElementById('radioTrauma".(string)$i."e').checked) { document.getElementById('labelTrauma".(string)$i."e').style.color = '#f00'; }
    }\n"; 
}*/

//genera reseteador de etiquetas de formulario nefrologia
for ($i=1;$i<=20;$i++)
{
    print "
      document.getElementById('labelTrauma".(string)$i."a').style.color = '#fff';
      document.getElementById('labelTrauma".(string)$i."b').style.color = '#fff';
      document.getElementById('labelTrauma".(string)$i."c').style.color = '#fff';
      document.getElementById('labelTrauma".(string)$i."d').style.color = '#fff';
      document.getElementById('labelTrauma".(string)$i."e').style.color = '#fff';
      //-------/\n";
}
?>
























