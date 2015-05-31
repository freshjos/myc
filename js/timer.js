// 20  mins
var myVar;
var t = 1200;
function myTimer() {
    t = t-1;
    var min = Math.floor(t/60);
    var seg = t % 60;
    document.getElementById('tiempo').innerHTML = '<a id="tiempo" data-role="button" data-icon="flat-time">'+min+':'+seg+'</a>';
    if (t == 0){
      stopTimer();
      calificarSimu();
      window.location.replace('#exam-sol-page');
    }
}

function startTimer() {
  myVar = setInterval(function () {myTimer()}, 1000);
}

function stopTimer() {
    clearTimeout(myVar);
}

function resett() {
  t = 1200;
}


//funciones de tiempo para 2 horas A

var myVarA;
var ta = 7200;

function myTimerA() {
    ta = ta-1;
    var hora = Math.floor(ta/3600);
    var mina = Math.floor((ta%3600)/60);
    var sega = ta % 60;
    document.getElementById('tiempoA').innerHTML = '<a id="tiempoA" data-role="button" data-icon="flat-time">'+hora+':'+mina+':'+sega+'</a>';
    if (ta == 0){
      stopTimerA();
      calificarSimuA();
      window.location.replace('#simulacroSolA');
    }
}

function startTimerA() {
  myVarA = setInterval(function () {myTimerA()}, 1000);
}

function stopTimerA() {
    clearTimeout(myVarA);
}

function resetta() {
  ta = 7200;
}

//funciones de tiempo para 2 horas B

var myVarB;
var tb = 7200;
function myTimerB() {
    tb = tb-1;
    var horb = Math.floor(tb/3600);
    var minb = Math.floor((tb%3600)/60);
    var segb = tb % 60;
    document.getElementById('tiempoB').innerHTML = '<a id="tiempoB" data-role="button" data-icon="flat-time">'+horb+':'+minb+':'+segb+'</a>';
    if (tb == 0){
      stopTimerB();
      calificarSimuB();
      window.location.replace('#simulacroSolB');
    }
}

function startTimerB() {
  myVarB = setInterval(function () {myTimerB()}, 1000);
}

function stopTimerB() {
    clearTimeout(myVarB);
}

function resettb() {
  tb = 7200;
}