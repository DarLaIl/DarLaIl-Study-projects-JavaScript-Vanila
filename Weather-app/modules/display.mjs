import getOurDate from "./getOurDate.mjs";


function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate(result);
      
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = 
        "По ощущениям: " + 
        `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].description}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = 
        "Мин: " + 
        `${Math.round(result.main.temp_min)}<span>°</span>` +
        " Макс: " + 
        `${Math.round(result.main.temp_max)}<span>°</span>`;
}

export default displayResult