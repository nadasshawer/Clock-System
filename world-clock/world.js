/*WORLD CLOCK FUNCTIONALITY*/

/*VARIABLES*/
const allzone = document.getElementById("allzone"),
  currentTime = document.getElementById("currentTime");

currentTime.innerText = new Date().toLocaleString("en-us", {
  timeStyle: "full",
});

/*FETCHING TIME FROM JSON FILE*/
fetch("world.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((e) => {
      const option = document.createElement("option");
      option.innerText = e.timezone;
      allzone.appendChild(option);
    });
  })
  .catch((err) => console.log(err));

allzone.oninput = () => setInterval(() => time(), 1000);

/*TIME FUNCTION*/
function time() {
  const ctime = new Data().toLocaleString("en-us", {
    timezone: allzone.value,
    timeStyle: "full",
  });

  currentTime.innerText = ctime;
}
