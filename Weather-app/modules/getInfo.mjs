import weatherData from './weatherData.mjs';
import displayResult from './display.mjs';

async function getInfo(data) {
  try {
    const res = await fetch(
      `${weatherData.api.endpoint}weather?q=${data}&units=metric&lang=ru&appID=${weatherData.api.key}`
    );
    const result = await res.json();
    displayResult(result);
  } catch (error) {
    Swal.fire('Упс!Ошибочка...');
  }
}

export default getInfo;
