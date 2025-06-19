/*ALARM CLOCK FUNCTIONALITY*/

const currentTime = document.querySelector("h1"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmButton = document.querySelector("button");

let alarmTime,
  isAlarmSet = false,
  ringtone = new Audio("ringtone.mp3"); //Alarm Ringtone

/*1-12 TIME VALUES FOR HOUR OPTIONS*/
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

/*1-59 TIME VALUES FOR MINUTE OPTIONS*/
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

/*AM/PM OPTIONS*/
for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

/*GETTING HOURS, MINUTES, AND SECONDS*/
setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  //If the hour value is 0, set it to 12
  h = h == 0 ? (h = 12) : h;

  //If the hour, minute, or second value is less than 10, add 0 before it
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Sets the header to the current time
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  //Alarm will ring when time comes
  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

/*SETTING THE ALARM TIME*/
function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmButton.innerText = "Set ALarm";
    return (isAlarmSet = false);
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  /*ALERTING THE USER IF THEY ENETR AN EMPTY ALARM*/
  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please select a valid time for alarm.");
  }

  isAlarmSet = true;
  alarmTime = time;
  content.classList.add("disable");
  setAlarmButton.innerText = "Clear ALarm";
}

/*ALARM BUTTON*/
setAlarmButton.addEventListener("click", setAlarm);
