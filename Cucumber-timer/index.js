const timerDisplay = document.querySelector('.timer_display-left');
const buttonStart = document.querySelector('#start');
const buttonRestart = document.querySelector('#restart');
const timerSettings = document.querySelector('.timerSettings');
const beep = document.querySelector("#beep");
let nowRounds = document.querySelector('#nowRounds');

let period = 'work';
let timer_working = false;
let timerId = null;
let getValue = [];
let now_times = 1;
let amountTime;

  
const selectedTimeWork = document.querySelector('.selectedTimeWork');
selectedTimeWork.addEventListener('change', function(){  
    getValue[0] = +selectedTimeWork.value
    amountTime = getValue[0];
});

const selectedTimeRest = document.querySelector('.selectedTimeRest');
selectedTimeRest.addEventListener('change', function(){  
    getValue[1]  = +selectedTimeRest.value
});

const amountTimeRounds = document.querySelector('#rounds');
amountTimeRounds.addEventListener('keyup', function(){  
    getValue[2]  = +amountTimeRounds.value;
        if (isNaN(getValue[2])) {
            Swal.fire({
                icon: "error",
                text: "Введите число",
            });
        }

})

function startTimer() {
    if (getValue[2] == undefined) {
        Swal.fire({
            icon: "error",
            text: "Введите количество периодов работы",
        });
    return;
    }
    timerDisplay.style.display = "block";
    timer_working = true; 
    timerId = setInterval(calculateTime, 1000);
    buttonStart.innerHTML = 'Пауза';
    timerSettings.style.display = "none";
    buttonRestart.style.display = "none";
}

function pauseTimer() {
    timer_working = false;
    clearInterval(timerId);
    buttonRestart.style.display = "block";
    buttonStart.innerHTML = `Старт`;
}

buttonStart.addEventListener('click', () => {
    timer_working ? pauseTimer() : startTimer()

});


buttonRestart.addEventListener('click', () => {
    clearInterval(timerId);
    amountTime = 0;
    location.reload();
    buttonStart.innerHTML = `Старт`;
})

function calculateTime() {
    amountTime--;
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let display = `${minutes}:${seconds}`
    timerDisplay.textContent = display;
    nowRounds.textContent = `${now_times} / ${getValue[2]} `;
    document.title = display;

    if (period === 'work' && amountTime === 0) {
        clearInterval(timerId);
        amountTime = 0;
        beep.play();
        period = 'rest';
        amountTime = getValue[1];
        timerId = setInterval(calculateTime, 1000);
    } 

    else if (period == 'rest' && amountTime === 0) {
        clearInterval(timerId);
        amountTime = 0;
        beep.play();
        now_times++;
        amountTime = getValue[0];
        period = 'work';
        timerId = setInterval(calculateTime, 1000);        
        
        if(now_times > getValue[2]) {
            clearInterval(timerId);
            beep.play();
            amountTime = 0;
            now_times.textContent = 1;
            location.reload();
        }
    }
}

const button = document.querySelector("#myBtn");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.classList.toggle("pause");
    }
    else {
        audio.pause();
        button.classList.toggle("pause");
    }
})

 


