gsap.to("h1", { opacity: 1, duration: 0.5, ease:'power1.in'})
gsap.to(".container", { opacity: 1, duration: 0.5, ease:'power1.in', delay: 0.5})


const movie = document.querySelector(".movie");
const modalCardMovie = document.querySelector("#modalCardMovie");
const closeModal = document.querySelector("#closeModal");
const heading = document.querySelector("#heading");
const trailer = document.querySelector("#trailer");
   
    movie.addEventListener('click', ()=> {
        gsap.to("#modalCardMovie", { opacity: 1, duration: 0.5, ease:'power1.in'})
        modalCardMovie.style.display = "flex";
        heading.textContent = "Дом у озера";
        trailer.setAttribute("src", "https://www.youtube.com/embed/l6qW-zaYvFM?si=Jqhw2SSSzcowGQs-&amp;controls=0" )
    })


    closeModal.addEventListener('click', () => {
        trailer.setAttribute("src", "" );
        gsap.to("#modalCardMovie", { opacity: 0, duration: 0.5, ease:'power1', onComplete:() => {
        modalCardMovie.style.display = "none";
    }})
    });




const charracters = [
    
    {
        nameChar: "Алекс Уайлер",
        thenPhoto: "KianuThan.jpg",
        nowPhoto: "Kianu.jpg",
        actName: "Киану Чарльз Ривз <br>(Keanu Charles Reeves)",
        occup: "2 сентября, 1964 • Дева • 59 лет",
        actHeight: "1.86 м",
        birthDay:  "2 сентября, 1964 • Дева • 59 лет",
        birthPlace: "Бейрут, Ливан",
        genres: "Драма, комедия, боевик",
        films: "251, 1981 — 2024",
        descr: "Канадский актер, режиссер, продюсер и музыкант. Широкую известность приобрел участием в таких популярных фильмах, как «На гребне волны» (1991), «Дракула» (1992), «Скорость» (1994), «Адвокат дьявола» (1997), а также кинотрилогиях «Матрица» и «Джон Уик»."
    },
    
    {
        nameChar: "Кейт Форстер",
        thenPhoto: "SanrdsThan.jpg",
        nowPhoto: "SandraNow.jpg",
        actName: `Сандра Аннетт Буллок <br>(Sandra Annette Bullock)`,
        occup: "Актриса, Продюсер, Режиссер, Сценарист",
        actHeight: "1.71 м",
        birthDay:  "26 июля, 1964 • Лев • 59 лет",
        birthPlace: "Арлингтон, Виргиния, США",
        genres: "Драма, комедия, мелодрама",
        films: "205, 1987 — 2022",
        descr: "Aмериканская киноактриса и продюсер, обладательница премий «Оскар» и «Золотой глобус» за лучшую женскую роль в фильме «Невидимая сторона» (2010). Широкую известность Сандре принесло участие в фильмах «Разрушитель» (1993), «Скорость» (1994), «Время убивать» (1996), «Мисс Конгениальность» (2000), «Дом у озера» (2006), «Невидимая сторона» (2010) и «Гравитация» (2013)."
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