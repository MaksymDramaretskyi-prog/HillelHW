let time = 90;

const timerEl = document.getElementById("timer");

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // format 01:05
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerEl.textContent = `${minutes}:${seconds}`;

  time--;

  if (time < 0) {
    clearInterval(interval);
  }
}


updateTimer();
const interval = setInterval(updateTimer, 1000);