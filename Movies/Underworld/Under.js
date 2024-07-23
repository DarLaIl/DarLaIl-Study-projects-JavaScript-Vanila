const back = document.querySelector('#back');
const next = document.querySelector('#next');
const boxes = document.querySelectorAll(".box");
gsap.to("h1", { opacity: 1, duration: 0.5, ease:'power1.in'})
gsap.to(".container", { opacity: 1, duration: 0.5, ease:'power1.in', delay: 0.5})
let i = 0;

next.addEventListener('click', () => {
    i++
    if (i === boxes.length-1) {
       next.style.display = "none"

    }
    back.style.display = "block"
    boxes[i].style.display = "flex";
    gsap.to(boxes[i], { opacity: 1, duration: 0.5, ease:'power1.in'})
    gsap.to(boxes[i-1], { opacity: 0})
    boxes[i-1].style.display = "none";
})
back.addEventListener('click', () => {
    i--
    if (i === 0) {
        back.style.display = "none"
    }
    next.style.display = "block"
    boxes[i].style.display = "flex";
    gsap.to(boxes[i], { opacity: 1, duration: 0.5, ease:'power1.in'})
    gsap.to(boxes[i+1], { opacity: 0})
    boxes[i+1].style.display = "none";
})


const movies = document.querySelectorAll(".movie");
const modalCardMovie = document.querySelector("#modalCardMovie");
const closeModal = document.querySelector("#closeModal");
const heading = document.querySelector("#heading");
const description = document.querySelector("#description");
const trailer = document.querySelector("#trailer");

const movieModalContent = [
    {
        modalHeaders: "Другой мир (2003)",
        modalText: "Столетиями властители царства мрака, вампиры и оборотни ведут беспощадную войну, невидимую человеческому взору. Бесстрашная Селин, воин-вампир, каждую ночь истребляет оборотней, влекомая неутолимой жаждой мести. Ее клан уверен, что вампирам удалось одержать верх над заклятыми врагами, но Селина подозревает, что у оборотней есть тайный план, сулящий гибель ее роду. В центре этого плана – смертный парень Майкл. Его генетический код – ключ к созданию сверхсущества, которое будет бессмертно и неуязвимо. Теперь Селина должна любой ценой первой добраться до него, чтобы определить исход вечного противостояния двух могущественных рас, которых люди до сих пор считали мифом...",
        modalVideo: "https://www.youtube.com/embed/fKS3ZSDmSAM?si=-R07rUlhZJ8SS7cv&amp;controls=0",
    },
    {
        modalHeaders: "Другой мир: Эволюция (2006)",
        modalText: "В мире, недоступном простым смертным, идет борьба между вампирами и оборотнями. События фильма повествуют об истоках этой вражды, ставшей для вампира Селин и Майкла, полуоборотня, проклятьем. Сражаясь с врагами из обоих кланов, они познают тайну своего происхождения. Их ждет великая битва, которая покончит с вечным противостоянием.",
        modalVideo: "https://www.youtube.com/embed/c2yafTtgLco?si=0S0D2q9M0IGlNtK6&amp;controls=0",
    },
    {
        modalHeaders: "Другой мир: Восстание ликанов (2009)",
        modalText: "История, прослеживающая происхождение вековой кровной борьбы между аристократичными вампирами и их рабами, ликанами. Люциан — лидер, который сплотит их против Виктора, жестокого старейшины вампиров. К Люциану присоединяется дочь Виктора, Соня, и помогает ему в борьбе за свободу.",
        modalVideo: "https://www.youtube.com/embed/YkR6Wbnu1Mo?si=pfGgWTmCmHRxOFvw&amp;controls=0",
    },
    {
        modalHeaders: "Другой мир: Пробуждение (2012)",
        modalText: "Человечество обнаружило существование вампиров и ликанов и начинает войну, чтобы уничтожить эти расы. Селин прорывается к пирсу, где её ждет Майкл для того чтобы вместе отплыть на корабле и скрыться ото всех. Но у пирса их ждет засада. Взрыв гранаты разбрасывает Селин и Майкла в разные стороны. 12 лет спустя Селин просыпается от криогенного сна в лаборатории и узнает о существовании родной дочери Евы — гибрида вампира и ликана. Теперь Селин нужно защитить Еву от ликанов, которые намерены использовать ее, чтобы устранить у своего вида уязвимость от серебра...",
        modalVideo: "https://www.youtube.com/embed/3xubGZGWgDk?si=_OthntPI0VrgFFTs&amp;controls=0",
    },
    {
        modalHeaders: "Другой мир: Войны крови (2016)",
        modalText: "Воительница-вампир Селин присоединяется к решающему бою между ликанами и кланом вампиров, который её предал. Она должна остановить бесконечную войну, даже если ей придётся пойти на самую большую жертву.",
        modalVideo: "https://www.youtube.com/embed/F9-2-X6bVSw?si=w4nx3cT6jE-U8n7q&amp;controls=0",
    }
]


movies.forEach((movie, index) => {
    movie.addEventListener('click', ()=> {
        
        gsap.to("#modalCardMovie", { opacity: 1, duration: 0.5, ease:'power1.in'})
        modalCardMovie.style.display = "flex";
        heading.textContent = movieModalContent[index].modalHeaders;
        description.textContent = movieModalContent[index].modalText;
        trailer.setAttribute("src", movieModalContent[index].modalVideo )
    })
})



closeModal.addEventListener('click', () => {
    trailer.setAttribute("src", "" );
    gsap.to("#modalCardMovie", { opacity: 0, duration: 0.5, ease:'power1', onComplete:() => {
    modalCardMovie.style.display = "none";
}})
});




const charracters = [

    {
        nameChar: "Селин",
        thenPhoto: "KateThen.jpg",
        nowPhoto: "KateNow.jpg",
        actName: "Кэтрин Романи (Кейт) Бекинсейл <br>(Kathrin Romany Beckinsale )",
        occup: "Актриса, Продюсер",
        actHeight: "1.70 м",
        birthDay:  "26 июля, 1973 • Лев • 50 лет",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, комедия, триллер",
        films: "135, 1991 — 2023",
        descr: "В 2001-году военная мелодрама Майкла Бэя «Перл-Харбор» приносит Кейт мировую известность. Главная женская роль медсестры Эвелин Джонсон, любовницы героя Бена Аффлека, досталась ей сразу после того, как от работы отказалась Шарлиз Терон. Фильм имел кассовый успех и был номинирован на «Оскар» и «Золотой глобус». Кейт стали поступать новые приглашения («Интуиция» (2001), «Другой мир» (2003)). Переломным стал 2003 год, когда на экраны вышел фантастический триллер «Другой мир» режиссера Лена Уайзмана. Кейт сыграла в нем главную роль. Образ бесстрашной вампирши не принес ей престижных кинонаград, но превратил ее в объект вожделения миллионов поклонников по всему миру."
    },
 
    {
        nameChar: "Майкл",
        thenPhoto: "ScottThen.jpg",
        nowPhoto: "ScottNow.jpg",
        actName: "Роберт Скотт Спидмен <br>(Robert Scott Speedman)",
        occup: "Актер",
        actHeight: "1.8 м",
        birthDay:  "1 сентября, 1975 • Дева • 48 лет",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, триллер, криминал",
        films: "68, 1993 — 2022",
        descr: "Успех на большом экране принесла Скотту Спидману главная роль в картине Лена Уайзмана «Другой мир». Этой работой он заслужил премию Академии научной фантастики, фэнтези и фильмов ужасов за лучшую мужскую роль. В последние годы актер снялся в таких картинах, как «Анаморф», «Обожание», «Незнакомцы», «По версии Барни», «Хорошие соседи», «Дневники Мотылька» и «Эдвин Бойд»."
    },
];
const actors = document.querySelectorAll(".actor");
const modalCardActor = document.querySelector("#modalCardActor");
const headingActor = document.querySelector("#headingActor");
const descriptionActor = document.querySelector("#descriptionActor");
const thenPhoto = document.querySelector("#then");
const nowPhoto = document.querySelector("#now");
const closeModalActor = document.querySelector("#closeModalActor");




actors.forEach((actor, index) => {

    actor.addEventListener('click', ()=> {
        gsap.to("#modalCardActor", { opacity: 1, duration: 0.5, ease:'power1.in'})
        modalCardActor.style.display = "flex";
        thenPhoto.setAttribute("src", charracters[index].thenPhoto);
        nowPhoto.setAttribute("src", charracters[index].nowPhoto);
        headingActor.innerHTML = charracters[index].actName;
        descriptionActor.innerHTML = ` 
        <b>Имя персонажа:</b> ${charracters[index].nameChar}; <br>
        <b>Имя актера:</b> ${charracters[index].actName}; <br>
        <b>Профессия:</b> ${charracters[index].occup}; <br>
        <b>Рост:</b> ${charracters[index].actHeight}; <br>
        <b>Дата рождения:</b> ${charracters[index].birthDay}; <br>
        <b>Место рождения:</b> ${charracters[index].birthPlace}; <br>
        <b>Жанры:</b> ${charracters[index].genres}; <br>
        <b>Фильмы:</b> ${charracters[index].films}; <br>
        <b>Об актере:</b> ${charracters[index].descr} <br>
        `;
    });
})
closeModalActor.addEventListener('click', () => {
    trailer.setAttribute("src", "" );
    gsap.to("#modalCardActor", { opacity: 0, duration: 0.5, ease:'power1', onComplete:() => {
    modalCardActor.style.display = "none";
}})
});