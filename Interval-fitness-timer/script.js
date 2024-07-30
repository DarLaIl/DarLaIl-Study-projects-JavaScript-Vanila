const IntroMusicPlayButton = document.querySelector('#IntroMusic');
let music = document.querySelector('#player');
music.volume = 0.7;

IntroMusicPlayButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

let interval_type;
let intervalVariable;
let now_seconds = 0;
let now_times = 0;
let seconds_1 = 0;
let timer_basic = {};
let timer_params = {};

let beep = document.querySelector('#beep');
let video = [
  document.querySelector('#myVideoIntro'),
  document.querySelector('#myVideoWorkOut'),
];

const button = document.querySelector('#go');

button.addEventListener('click', () => {
  let input = document.querySelector('.input').value;
  if (isNaN(input)) {
    Swal.fire({
      icon: 'error',
      title: 'Ой!',
      text: 'Нужно ввести число!',
    });
    input.value = '';
  } else {
    document.querySelector('#countdown-container').style.display = 'flex';
    document.querySelector('#header').style.display = 'none';
    music.src =
      'https://cdn.glitch.global/a9f5b1b0-f981-4429-9039-7a2e5225b94a/music.mp3?v=1702236170081';
    music.play();
    video[0].pause();
    video[1].style.display = 'block';
    video[1].play();
    prepare();
    showBasicData();
  }
});

function prepare() {
  const minWork = +document.querySelector('#minWork').value;
  const secWork = +document.querySelector('#secWork').value;
  const minRest = +document.querySelector('#minRest').value;
  const secRest = +document.querySelector('#secRest').value;
  const rounds = +document.querySelector('#roundsAll').value;

  return {
    WorkM: leadZero(minWork),
    WorkS: leadZero(secWork),
    RestM: leadZero(minRest),
    RestS: leadZero(secRest),
    rounds: rounds,
  };
}

function showBasicData() {
  timer_basic = prepare();
  document.querySelector('#timerMinWork').textContent = timer_basic.WorkM;
  document.querySelector('#timerSecWork').textContent = timer_basic.WorkS;
  document.querySelector('#timerMinRest').textContent = timer_basic.RestM;
  document.querySelector('#timerSecRest').textContent = timer_basic.RestS;
  document.querySelector('#allTimes').textContent = timer_basic.rounds;
  interval_type = 'work';
}

const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonRestart = document.querySelector('#restart');
let times = document.querySelector('#times');

function timerTick(type, timer_params) {
  now_seconds++;

  if (interval_type == 'work') {
    if (timer_params.time_work - now_seconds > 0) {
      renderTimerNums(timer_params.time_work - now_seconds);
    } else {
      renderTimerNums(0);
      beep.play();
      now_seconds = 0;
      interval_type = 'rest';
    }
  } else if (interval_type == 'rest') {
    if (timer_params.time_rest - now_seconds > 0) {
      renderTimerNums(timer_params.time_rest - now_seconds);
    } else {
      renderTimerNums(0);
      now_seconds = 0;
      beep.play();
      now_times++;

      if (now_times > timer_params.interval_count) {
        times.textContent = timer_params.interval_count;
        stopTimer();
        now_seconds = 0;
        times.textContent = 1;
      } else {
        times.textContent = now_times;
      }

      interval_type = 'work';
    }
  }
}
buttonStart.addEventListener('click', () => {
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'block';

  beep.play();

  timer_params.time_work = timer_basic.WorkM * 60 + timer_basic.WorkS * 1;
  timer_params.time_rest = timer_basic.RestM * 60 + timer_basic.RestS * 1;
  timer_params.interval_count = timer_basic.rounds * 1;

  now_times = 1;

  if (interval_type == 'work') {
    seconds_1 = timer_params.time_work;
  } else if ((interval_type = 'rest')) {
    seconds_1 = timer_params.time_rest;
  }

  intervalVariable = setInterval(timerTick, 1000, 'interval', timer_params);
});

function secondsToTime(seconds) {
  let h = parseInt((seconds / 3600) % 24);
  let m = parseInt((seconds / 60) % 60);
  let s = parseInt(seconds % 60);
  return { hours: leadZero(h), minutes: leadZero(m), seconds: leadZero(s) };
}

function leadZero(num) {
  let s = '' + num;
  if (s.length < 2) {
    s = '0' + s;
  }
  return s;
}

function renderTimerNums(seconds) {
  let timer_nums = secondsToTime(seconds);
  document.querySelector('#timerMinutes').textContent = timer_nums.minutes;
  document.querySelector('#timerSeconds').textContent = timer_nums.seconds;
}
function stopTimer() {
  buttonStop.style.display = 'none';
  buttonStart.style.display = 'block';
  beep.play();
  clearInterval(intervalVariable);
}

buttonStop.addEventListener('click', stopTimer);

buttonRestart.addEventListener('click', function () {
  location.reload();
});
