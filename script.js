var startTime, elapsedTime = 0;
var timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").textContent = formatTime(elapsedTime);
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    var hours = Math.floor(milliseconds / 3600000);
    var minutes = Math.floor((milliseconds % 3600000) / 60000);
    var seconds = Math.floor((milliseconds % 60000) / 1000);
    var milliseconds = Math.floor((milliseconds % 1000) / 10);

    return (
        padZero(hours) +
        ":" +
        padZero(minutes) +
        ":" +
        padZero(seconds) +
        "." +
        padZero(milliseconds)
    );
}

function padZero(value) {
    return value.toString().padStart(2, "0");
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
