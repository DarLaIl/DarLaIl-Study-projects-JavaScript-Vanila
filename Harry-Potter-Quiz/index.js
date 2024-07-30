gsap.to('h1', {
  y: 10,
  opacity: 1,
  duration: 1,
  ease: 'power1.in',
  delay: 0.5,
});
gsap.to('.audioBox', {
  y: 10,
  opacity: 1,
  duration: 1,
  ease: 'power1.in',
  delay: 0.5,
});
gsap.to('.blockTwo', {
  opacity: 1,
  duration: 1,
  ease: 'power1.in',
  delay: 0.5,
});

const back = document.querySelector('#back');
const next = document.querySelector('#next');
const submit = document.querySelector('#btn');
const reset = document.querySelector('.reset');

const questions = Array.from(document.querySelectorAll('.questions'));

let i = 0;

next.addEventListener('click', () => {
  i++;

  if (i === questions.length) {
    next.style.display = 'none';
    reset.style.display = 'block';
    back.style.display = 'none';
  }

  if (i <= questions.length) {
    questions[i - 1].style.display = 'none';
  }

  if (i < questions.length) {
    questions[i].style.display = 'block';
    back.style.display = 'block';
  }
});
back.addEventListener('click', () => {
  i--;
  if (i < 1) {
    i = 0;
    back.style.display = 'none';
  }
  questions[i].style.display = 'block';
  reset.style.display = 'none';
  next.style.display = 'block';
  if (i < questions.length - 1) {
    questions[i + 1].style.display = 'none';
  }
});

submit.addEventListener('click', result);
const answers = document.querySelectorAll('.answer');

function result(e) {
  e.preventDefault();
  back.style.display = 'none';
  let points = 0;

  answers.forEach((answer) => {
    if (answer.checked) points++;
  });
  if (points < 2) {
    Swal.fire({
      title: 'Ваши балы: ' + points + '.',
      text: 'Подготовьтесь еще немного и все получится!',
      imageUrl:
        'https://n1s1.hsmedia.ru/21/9a/f6/219af6be8b1be063d8b8fff4a5831bab/1668x1668_0xac120003_14211738171596113184.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'harry',
    });
  } else if (points >= 2 && points <= 4) {
    Swal.fire({
      title: 'Ваши балы: ' + points + '.',
      text: 'Почти получилось!',
      imageUrl:
        'https://ic.pics.livejournal.com/dubikvit/65747770/1707454/1707454_900.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'harry',
    });
  } else {
    Swal.fire({
      title: 'Ваши балы: ' + points + '.',
      text: 'Вы настоящий фанат! После стольких лет...Всегда!',
      imageUrl:
        'https://s0.rbk.ru/v6_top_pics/media/img/6/59/756397511355596.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'harry',
    });
  }
}
reset.addEventListener('click', () => {
  location.reload();
});
const musicButton = document.querySelector('.audioBox');
const audio = document.querySelector('#myAudio');

musicButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
