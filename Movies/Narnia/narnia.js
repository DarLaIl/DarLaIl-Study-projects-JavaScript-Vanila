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
        modalHeaders: "Хроники Нарнии: Лев, колдунья и волшебный шкаф (2005)",
        modalText: "Четверых детей родители отправляют из Лондона в деревню, к старому профессору - другу семьи. В его доме дети обнаруживают таинственный платяной шкаф, посредством которого они попадают в сказочную страну Нарнию, где обитают фантастические люди, животные и существа. Оказывается, что эта мирная страна находится под властью злой Колдуньи, из-за которой там - вечная зима. Дети должны помочь царю Аслану (Великому Льву, который много столетий назад основал Нарнию) победить Колдунью, разрушить заклинания и освободить жителей Нарнии…",
        modalVideo: "https://www.youtube.com/embed/IRHzA5bJKlI?si=ll6qgBcIeDfo6_nt&amp;controls=0",
    },
    {
        modalHeaders: "Хроники Нарнии 2: Принц Каспиан (2008)" ,
        modalText: "Люси, Сьюзен, Эдмунд и Питер Пэванси возвращаются в Нарнию. В Англии прошло совсем немного времени, а в Нарнии – века. Страна находится под гнетом зловещего короля Мираза. Но у волшебного королевства есть надежда – юный принц Каспиан. Чтобы помочь Каспиану отвоевать трон, четверо героев собирают армию мифических существ во главе с Асланом – основателем и покровителем Нарнии...",
        modalVideo: "https://www.youtube.com/embed/KtmU7iDU93w?si=VvQdV_zjN3wm1wSU&amp;controls=0",
    },
    {
        modalHeaders: "Хроники Нарнии 3: Покоритель Зари (2010)",
        modalText: "Эдмунд, Люси, их кузен Юстас и король Каспиан отплывают на корабле «Покоритель Зари» на поиски друзей отца Каспиана - семи лордов: Ревелиана, Берна, Аргоза, Мавроморна, Октезиана, Рестимара и Рупа, изгнанных во время недолгого правления тирана Мираза.",
        modalVideo: "https://www.youtube.com/embed/j8gAjjsKQoM?si=klkqrnA1ErzcElD7&amp;controls=0",
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
    // LucyPevensie: 
    {
        nameChar: "Люси Певенси",
        thenPhoto: "act/LucyThen.jpg",
        nowPhoto: "act/LucyNow.jpg",
        actName: "Джорджи Хелен Хенли <br>(Georgina Helen Henley)",
        occup: "Актриса, Режиссер, Сценарист",
        actHeight: "1.63 м",
        birthDay:  "9 июля, 1995 • Рак • 28 лет",
        birthPlace: "Илкли, Йоркшир, Англия, Великобритания",
        genres: "Драма, короткометражка, фэнтези",
        films: "22, 2005 — 2023",
        descr: "За эту роль юная актриса была удостоена двух крупных кинематографических премий – Phoenix Film Critics Society Award и Young Artist Award. В 2008 и 2009 году вышли экранизации следующих книг знаменитой нарнийской серии (автор Клайв Стейплз Льюс): «Хроники Нарнии: Принц Каспиан» и «Хроники Нарнии: Покоритель зари»."
    },
    // EdmundPevensie: 
    {
        nameChar: "Эдмунд Певенси",
        thenPhoto: "act/EdmuntThen.jpg",
        nowPhoto: "act/EdmuntNow.jpg",
        actName: `Александр Эмин Каспер Кейнс <br>(Alexander Amin Casper "Skandar" Keynes)`,
        occup: "Актер",
        actHeight: "1.73 м",
        birthDay:  "5 сентября, 1991 • Дева • 32 года",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Документальный, фэнтези, приключения",
        films: "5, 2001 — 2010",
        descr: "В 2004 году проходил кастинг для съемок в эпических “Хрониках Нарнии”, экранизации фантастического эпоса Клайва Льюиса, где дети борются с мировым злом. Александр прошел отбор, обойдя 2 тыс. конкурентов. Парню досталась роль младшего брата Эдмунда, чья история особенно драматична, ведь связана с предательством, искуплением и прощением. Актер признавался, что очень любит истории про Нарнию и впервые прочел их в 7 лет. Он считает, что именно персонаж Эдмунда подходит ему по характеру более других.В 2008 году выходит продолжение истории “Хроники Нарнии: Принц Каспиан”, а в 2010-м - заключительная часть трилогии “Хроники Нарнии: Покоритель Зари”. Александр снялся во всех частях фантастической саги, а по окончании съемок принял решение завершить кинокарьеру."
    },
    // PeterPevensie: 
    {
        nameChar: "Питер Певенси",
        thenPhoto: "act/PeterThen.jpg",
        nowPhoto: "act/PeterNow.jpg",
        actName: "Уильям Питер Моусли <br>(William Peter Moseley)",
        occup: "Актер",
        actHeight: "1.78 м",
        birthDay:  "27 апреля, 1987 • Телец • 36 лет",
        birthPlace: "Шипскомб, Глостершир, Англия, Великобритания",
        genres: "Драма, триллер, мелодрама",
        films: "50, 1998 — 2023",
        descr: "Съемки фильма «Хроники Нарнии: Лев, колдунья и платяной шкаф» проходили в Новой Зеландии и длились восемь месяцев. За это время Уильям Моусли сильно отстал от школьной программы и был вынужден повторно изучить часть предметов. Он закончил школу в 2006 году, после чего несколько недель занимался в актерской студии Шейлы Грей в Нью-Йорке. Роль в картине «Хроники Нарнии: Лев, колдунья и платяной шкаф» потребовала от актера немалых физических усилий. Уильяму пришлось много тренироваться: в этом фильме он сражается на мечах и ездит верхом. В 2008 году вышел второй фильм по произведениям Клайва Льюиса «Хроники Нарнии: Принц Каспиан», где Уильям Моусли снова исполнил одну из главных ролей. К сожалению, его герой уже не появится в третьей части («Хроники Нарнии: Покоритель зари»)"
    },
    // SusanPevensie: 
    {
        nameChar: "Сьюзен Певенси",
        thenPhoto: "act/SusanThen.jpg",
        nowPhoto: "act/SusanNow.jpg",
        actName: "Анна Кэтрин Попплуэлл <br>(Anna Katherine Popplewell)",
        occup: "Актриса",
        actHeight: "1.61 м",
        birthDay:  "16 декабря, 1988 • Стрелец • 35 лет",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, мелодрама, комедия",
        films: "28, 1998 — 2023",
        descr: "Карьера актрисы пошла в гору после выхода американо-британской экранизации романа Клайва Льюиса «Хроники Нарнии: Лев, колдунья и волшебный шкаф». Картина оказалась суперхуспешной. Это автоматически сделало Анну Попплуэлл мировой кинозвездой и востребованной голливудской актрисой. Успех первой экранизации Льюиса побудил студию «Disney» приступить к производству сиквела, что означало возвращение Анны в роли Сьюзан Пэвенси. «Хроники Нарнии: Принц Каспиан» вышел в 2008 году и собрал $419 млн. при бюджете в $225 млн. Относительная неудача не помешала снять продолжение «Хроники Нарнии: Покоритель зари» (2010)"
    },
    // PrinceCaspian: 
    {     
        nameChar: "Принц Каспиан",
        thenPhoto: "act/KaspianThen.jpg",
        nowPhoto: "act/KaspianNow.jpg",
        actName: "Бенджамин Томас Барнс <br>(Benjamin Thomas Barnes)",
        occup: "Актер",
        actHeight: "1.85 м",
        birthDay:  "20 августа, 1981 • Лев • 42 года",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, триллер, фэнтези",
        films: "50, 1989 — 2023",
        descr: "Английский актёр и певец, попечитель благотворительного фонда «Загадай желание», занимающегося исполнением желаний тяжелобольных детей, наиболее известный благодаря своим ролям в диснеевской экранизации книг Клайва Стэйплза Льюиса «Хроники Нарнии», а также экранизации романа «Дориан Грей».В 2008 году Барнс получил приглашение на роль принца Каспиана в семейном приключенческом фильме компании Walt Disney Pictures «Хроники Нарнии: Принц Каспиан». Эта лента стала второй частью масштабной высокобюджетной экранизации книг фантаста Клайва Стэйплза Льюиса. Съемки трилогии проходили в целом ряде стран, включая Новую Зеландию, Чехию и Польшу. Режиссер Эндрю Адамс искал актера, который подошел бы на роль принца Каспиана на протяжении трех лет, и задумка увенчалась успехом всего лишь за три недели до запланированного начала съемок. Интересным фактом стало то, что в соответствии с книгой персонажу Бена было всего тринадцать лет. В интерпретации режиссера и сценариста Каспиану в фильме было семнадцать. И все это ничуть не помешало двадцати шестилетнему Барнсу исполнить роль."
    },
    // EustaceScrubb: 
    {
        nameChar: "Юстас Вред",
        thenPhoto: "act/EustThen.jpg",
        nowPhoto: "act/EustNow.jpg",
        actName: "Уильям Джек «Уилл» Поултер <br>(William Jack Poulter)",
        occup: "Актер, Продюсер",
        actHeight: "1.91 м",
        birthDay:  "28 января, 1993 • Водолей • 30 лет",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, комедия, триллер",
        films: "51, 1998 — 2023",
        descr: "Английский актер, известный благодаря роли Ли Картера в комедийной драме Гарта Дженнингса «Сын Рэмбо», Юстэса Вреда в семейном приключенческом фэнтези Майкла Эптеда «Хроники Нарнии: Покоритель зари», а также Кенни в комедии Роусона Маршалла Тербера «Мы – Миллеры».В 2010 году Поултера утвердили на роль Юстэса Вреда в семейном фантастическом фильме Майкла Эптеда «Хроники Нарнии: Покоритель зари». Картина представляет собой экранизацию третьей книги из популярной серии «Хроники Нарнии», созданной крупным представителем Оксфордской литературной группы «Ингликов» Клайвом Стейплзом Льюисом."
    },
    // albusDumbledore: 
    {
        nameChar: "Колдунья",
        thenPhoto: "act/DjadThen.jpg",
        nowPhoto: "act/DjadNow.jpg",
        actName: "Кэтрин Матильда (Тильда) Суинтон <br>(Katherine Matilda Swinton)",
        occup: "Актриса, Продюсер, Сценарист, Режиссер",
        actHeight: "1.79 м",
        birthDay:  "5 ноября, 1960 • Скорпион • 63 года",
        birthPlace: "Лондон, Англия, Великобритания",
        genres: "Драма, комедия, мелодрама",
        films: "181, 1986 — 2023",
        descr: "Наследница древнего англо-шотландского рода, история которого насчитывает более тысячи лет. Суинтон совмещает работу в независимом кино с голливудскими постановками, поэтому ее легко можно увидеть как в джармушевских «Выживут только любовники», так и в марвеловском блокбастере «Доктор Стрэндж». Широкую известность актрисе принесла роль сказочного персонажа — колдуньи Джадис — артистка сыграла в экранизации книги Клайва Льюиса. Фильм получил название «Хроники Нарнии: Лев, колдунья и волшебный шкаф». Джадис с турецкого языка переводится как «смерть», а имя короля Аслана означает «лев». Благодаря натурным съемкам в Новой Зеландии, Чехии и Словении при монтаже не пришлось прибегать к компьютерной графике."
    }
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