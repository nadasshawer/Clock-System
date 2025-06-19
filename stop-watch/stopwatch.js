/*STOPWATCH FUNCTIONALITY*/

let hr = (min = sec = ms = "0" + 0),
  startTimer;

/*START, STOP, AND RESET BUTTONS*/
const startButton = document.querySelector(".start"),
  stopButton = document.querySelector(".stop"),
  resetButton = document.querySelector(".reset");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

/*HOURS, MINUTES, SECONDS COUNTDOWNS*/
function start() {
  startButton.classList.add("active");
  stopButton.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }
    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    putValue();
  }, 10); //1000ms = 1s
}

//Stop button
function stop() {
  startButton.classList.remove("active");
  stopButton.classList.add("stopActive");
  clearInterval(startTimer);
}

//Reset button
function reset() {
  startButton.classList.remove("active");
  stopButton.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putValue();
}

//Values
function putValue() {
  document.querySelector(".milliseconds").innerText = ms;
  document.querySelector(".seconds").innerText = sec;
  document.querySelector(".minutes").innerText = min;
  document.querySelector(".hours").innerText = hr;
}
