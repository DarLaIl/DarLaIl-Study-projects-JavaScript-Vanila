import weatherData from './weatherData.mjs';
import displayResult from './display.mjs';

async function startPage() {
  const res = await fetch(
    `${
      weatherData.api.endpoint
    }weather?q=${'Санкт Петербург'}&units=metric&lang=ru&appID=${
      weatherData.api.key
    }`
  );
  const result = await res.json();

  displayResult(result);
}

export default startPage;
