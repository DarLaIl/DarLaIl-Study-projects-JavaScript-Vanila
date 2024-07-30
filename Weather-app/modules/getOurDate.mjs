import wallPaper from "./wallPaper.mjs"


function getOurDate(result) {
    const myDate = new Date();
    const days = [
        "Воскресенье", 
        "Понедельник", 
        "Вторник", 
        "Среда", 
        "Четверг", 
        "Пятница", 
        "Суббота"
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
        "Декабря"
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

export default getOurDate