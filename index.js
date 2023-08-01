const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeleft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        if (timeleft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeleft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
