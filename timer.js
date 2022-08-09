let countDownDate = new Date("Aug 30, 2022 16:37:52").getTime();
// Run myfunc every second

let myfunc = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  // Result is output to the specific element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // Display 0 message when countdown is ended.
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("mins").innerHTML = "0";
    document.getElementById("secs").innerHTML = "0";
  }
}, 1000);
