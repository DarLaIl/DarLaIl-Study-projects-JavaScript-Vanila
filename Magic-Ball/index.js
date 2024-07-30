const ball = document.querySelector('#container');
const eightContainer = document.querySelector('.eight');
const answer = document.querySelector('.eight__window');
const eight = document.querySelector('.eight__fascia');
const eightNumber = document.querySelector('.eight__number');
const innerText = document.querySelector('#innerText');

const quotes = [
  'Бесспорно',
  'Предрешено',
  'Никаких сомнений',
  'Определённо да',
  'Мне кажется —«да»',
  'Вероятнее всего',
  'Однозначно',
  'Разумеется',
  'Хорошие перспективы',
  'Знаки говорят —«да»',
  'Действуй',
  'Кажется, сработает',
  'Скорее всего',
  'Пока не ясно',
  'Перепроверь',
  'Встряхни ещё раз',
  'Спроси позже',
  'Лучше не рассказывать',
  'Надо подождать',
  'Сейчас нельзя предсказать',
  'Сконцентрируйся',
  'Измени вопрос',
  'Даже не думай',
  'Нет',
  'Плохая идея',
  'Не в этот раз',
  'Мой ответ —«нет» ',
  'Рискованно',
  'По моим данным -«нет» ',
  'Перспективы не очень',
  'Весьма сомнительно',
  'Всё не так просто',
];

function shakeTheBall() {
  ball.classList.add('shakeItAll');
  eightContainer.classList.add('shakeItAll');
}

function turnTheBall() {
  eight.classList.add('turnTheBall');
  answer.classList.add('turnTheBallForAnswer');
}

function reset() {
  ball.classList.remove('shakeItAll');
  eightContainer.classList.remove('shakeItAll');
  eight.classList.remove('turnTheBall');
  answer.classList.remove('turnTheBallForAnswer');
  ball.addEventListener('click', game);
}

function game() {
  shakeTheBall();

  turnTheBall();

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  innerText.textContent = randomQuote;
  ball.removeEventListener('click', game);

  setTimeout(reset, 6000);
}

ball.addEventListener('click', game);
