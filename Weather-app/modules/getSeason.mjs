function getSeason(result, month) {
    if (month === "Декабря" || month === "Января" || month === "Февраля") {
        
        if (result.coord.lat > 0) return "winter";
        else return "summer";

    } else if (month === "Марта" || month === "Апреля" || month === "Мая") {
        
        if (result.coord.lat > 0) return "spring";
        else return "autumn";

    } else if (month === "Июня" || month === "Июля" || month === "Августа") {
       
        if (result.coord.lat > 0) return "summer";
        else return "winter";
    
    } else {

        if (result.coord.lat > 0) return "autumn";
        else return "spring";
    }
}

export default getSeason