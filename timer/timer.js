/*TIMER FUNCTIONALITY*/

/*VARIABLES*/
var start = document.getElementById("start");
var reset = document.getElementById("reset");

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//REFERENCE STORING
var startTimer = null;

start.addEventListener("click", function () {
  //initialize the variable
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});

/*RESET*/
reset.addEventListener("click", function () {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  //Stop the timer after pressing RESET
  stopInterval();
});

/*TIMER VALUES*/
function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}

//Stops the function
function stopInterval() {
  clearInterval(startTimer);
}
