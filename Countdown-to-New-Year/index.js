function newYearCountDown() {
    const newYearDate = new Date("January 1, 2025 00:00");
    const now = new Date();
    const diff = newYearDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

   
    const convertWord = function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles [(number%100>4 && number%100<20) ? 2 : cases [(number%10<5) ? number%10:5]]
    }
    const displayDay = Math.floor(diff / msInDay);
    const dayInRussiaDisplay = convertWord (displayDay, ['День', 'Дня', 'Дней']);
    document.querySelector(".days").innerHTML = `${displayDay} <br> <br> ${dayInRussiaDisplay}`;

    
    const displayHour = Math.floor((diff % msInDay) / msInHour);
    const hoursInRussiaDisplay = convertWord (displayHour, ['Час', 'Часа', 'Часов']);
    document.querySelector(".hours").innerHTML = `${displayHour} <br> <br> ${hoursInRussiaDisplay}`;

    
    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    const minutesInRussiaDisplay = convertWord (displayMinute, ['Минута', 'Минуты', 'Минут']);
    document.querySelector(".minutes").innerHTML = `${displayMinute} <br> <br> ${minutesInRussiaDisplay}`;

    
    const displaySecond = Math.floor((diff % msInMinute) /msInSecond);
    const secondsInRussiaDisplay = convertWord (displaySecond, ['Секунда', 'Секунды', 'Секунд']);
    document.querySelector(".seconds").innerHTML = `${displaySecond} <br> <br> ${secondsInRussiaDisplay}`;
    
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerId);
        happyNewYear();
    }
}
let timerId = setInterval(newYearCountDown, 1000);

function happyNewYear() {
    const heading = document.querySelector("h1");
    heading.textContent = "С НОВЫМ ГОДОМ!";
    heading.classList.add("new");
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



const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase();
    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})

//!!Снежинки

let snowmax = 40;
let snowcolor = new Array("#F0F0F0","#DAFFFB","#EFF5F5","#FFFFFF","#F9F9F9");
let snowtype = new Array("Times");
let snowletter = "&#10052;";
let sinkspeed = 0.4;
let snowmaxsize = 30;
let snowminsize = 5;
let snowingzone = 1;

 
let snow = new Array();
let marginbottom;
let marginright;
let timer;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
function randommaker(range) {
    rand = Math.floor(range*Math.random());
    return rand;
}
function initsnow() {
    marginbottom = document.documentElement.clientHeight+50;
    marginright = document.body.clientWidth-15;
    let snowsizerange = snowmaxsize-snowminsize;
    for (i=0;i<=snowmax;i++) {
        crds[i] = 0;
        lftrght[i] = Math.random()*15;
        x_mv[i] = 0.03 + Math.random()/10;
        snow[i] = document.getElementById("s"+i);
        snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
        snow[i].size = randommaker(snowsizerange) + snowminsize;
        snow[i].style.fontSize = snow[i].size+'px';
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
        snow[i].style.zIndex = 1000;
        snow[i].sink = sinkspeed*snow[i].size/5;
        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)};
        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)};
        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4};
        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2};
        snow[i].posy = randommaker(2*marginbottom-marginbottom-2*snow[i].size);
        snow[i].style.left = snow[i].posx+'px';
        snow[i].style.top = snow[i].posy+'px';
    }
    movesnow()
}
function movesnow() {
    for (i=0; i<=snowmax;i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
        snow[i].style.top = snow[i].posy+'px';
        
        if (snow[i].posy >= marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
            if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)};
            if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)};
            if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4};
            if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2};
            snow[i].posy=0;
        }
    }
    let timer = setTimeout("movesnow()",50);
}
 
for (i=0;i<=snowmax;i++) {
    document.body.insertAdjacentHTML("beforeend", "<span id='s"+i+"' style='pointer-events:none;user-select:none;position:fixed;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
initsnow()