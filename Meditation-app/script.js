const timer = 5;
let amountTime = timer * 60;
const button = document.querySelector("#start");
const countdown = document.querySelector("#countdown");
let timerId;
let music;

button.addEventListener('click', function() {
    countdown.style.display = "block";
    button.style.display = "none";
    timerId = setInterval(calculateTime, 1000);
    music = document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})

function calculateTime() {
    
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10) seconds = "0" + seconds;
    countdown.textContent = `${minutes} : ${seconds} `;
    amountTime --;
    
    if (amountTime < 0) {
        amountTime = 0;
        stopTimer();   
    }
};
function stopTimer() { 
    clearInterval(timerId);
    music = document.querySelector("#player").pause();
    document.querySelector("#beep").play();
}


