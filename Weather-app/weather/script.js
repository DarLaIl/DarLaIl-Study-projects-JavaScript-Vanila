const weatherData = {
    api: {
        endpoint: "https://api.openweathermap.org/data/2.5/",
        key: "61ca3f62b0697bf77d691a8b5e176a19",
    },
    wallpapers: {
        winter: [
            "url(https://images.unsplash.com/photo-1643008265603-e7bd40a4dfa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1520084848344-f4c32b3f7b51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1505139229755-18651479b8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        ],
        spring: [
            "url(https://images.unsplash.com/photo-1462524500090-89443873e2b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1489769459544-1b2a788df7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1605488483923-a5b3ac0a1a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1623392962768-a759c255f59a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        ],
        summer: [
            "url(https://images.unsplash.com/photo-1694090057748-3cc8ea8b9ca2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1641158011726-603838915153?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1691265688799-4457dec90cd6?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1605488483923-a5b3ac0a1a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1623392962768-a759c255f59a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        ],
        autumn: [
            "url(https://images.unsplash.com/photo-1621467483263-3b745d609c23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1464054573978-f220a48c764c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1605488483923-a5b3ac0a1a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1623392962768-a759c255f59a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            "url(https://images.unsplash.com/photo-1664439491450-6573596eaba0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        ],
    },
};

async function startPage() {
    const res = await fetch(
        `${
            weatherData.api.endpoint
        }weather?q=${"Санкт Петербург"}&units=metric&lang=ru&appID=${
            weatherData.api.key
        }`
    );
    const result = await res.json();

    displayResult(result);
}
startPage();

const input = document.querySelector("#input");
const colorBg = document.querySelector("#container");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        let data = input.value.trimEnd();
        getInfo(data);
    }
}

async function getInfo(data) {
    try {
        const res = await fetch(
            `${weatherData.api.endpoint}weather?q=${data}&units=metric&lang=ru&appID=${weatherData.api.key}`
        );
        const result = await res.json();
        displayResult(result);
    } catch (error) {
        Swal.fire("Упс!Ошибочка...");
    }
}

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

function getOurDate(result) {
    const myDate = new Date();
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    const months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];

    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    wallPaper(result, month);

    let showDate = document.querySelector("#date");
    showDate.textContent =
        `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;
}

function wallPaper(result, month) {
    const season = getSeason(month);

    if (result.coord.lat > 0) {
        applyWallpaper(season, result);
    } else {
        applyWallpaper(season, result);
    }
}

function applyWallpaper(season, result) {
    const weatherMain = result.weather[0].main;
    const body = document.body;

    const wallpapersForSeason = weatherData.wallpapers[season];

    switch (weatherMain) {
        case "Clear":
            body.style.backgroundImage = wallpapersForSeason[0];
            body.style.backgroundColor = "#5bb1d8";
            break;
        case "Clouds":
            body.style.backgroundImage = wallpapersForSeason[1];
            body.style.backgroundColor = "#a0a19b";
            break;
        case "Drizzle":
            body.style.backgroundImage = wallpapersForSeason[2];
            body.style.backgroundColor = "#4b687c";
            break;
        case "Snow":
            body.style.backgroundImage = wallpapersForSeason[3];
            body.style.backgroundColor = "#25316D";
            break;
        default:
            body.style.backgroundImage =
                "url('https://images.unsplash.com/photo-1549863897-3aa27a8b31da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            // Используй цвет фона по умолчанию или другую логику
            break;
    }
}

function getSeason(month) {
    if (month === "Декабря" || month === "Января" || month === "Февраля") {
        return "winter";
    } else if (month === "Марта" || month === "Апреля" || month === "Мая") {
        return "spring";
    } else if (month === "Июня" || month === "Июля" || month === "Августа") {
        return "summer";
    } else {
        return "autumn";
    }
}
