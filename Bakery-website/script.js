AOS.init();

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    })


const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", onMenuLinkClick)
});
const menuLinksFooter = document.querySelectorAll(".footer__menu__link[data-goto]");
menuLinksFooter.forEach(menuLink =>{
    menuLink.addEventListener("click", onMenuLinkClick)
});

function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;
        
        if(iconMenu.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
        }
        
        window.scrollTo({
            top: gotoBlockValue,
        });

        e.preventDefault();
    }
}


const tabs = document.querySelectorAll("._tab");
const cards = document.querySelectorAll(".card");
const productImg = document.querySelectorAll(".productImg");
const cardName = document.querySelectorAll(".card-name");
const cardDescription = document.querySelectorAll(".description");
const cardsInfo = [
    [
        {
            imgSource: "photo/4.png",
            cardName: "Пралине",
            description: "Фирменный шоколадный бисквит с добавлением черного шоколада, прослоен шоколадно-молочным муссом в сочетании с прослойкой орехового пралине и вафельной крошки."
        },
        {
            imgSource: "photo/7.png",
            cardName: "Банановый рай",
            description: "Шоколадный бисквит на основе сметаны, который прослаивается сливочным кремом, а затем покрывается легким изысканным чизкейком. Поверх чизкейка идет прослойка из свежих бананов, которые в свою очередь, обливаются нежным шоколадом."
        },
        {
            imgSource: "photo/8.png",
            cardName: "Три шоколада",
            description: "Знаменитый торт три шоколада мы создаем для истинных гурманов. Деликатная бисквитная основа переплетается с муссом на основе трех шоколадов (белого, молочного и горького). Порадуйте своих близких очень вкусным тортом."
        },
        {
            imgSource: "photo/13.png",
            cardName: "Карамель&Шоколад",
            description: "Это начинка завоевала популярность не просто так. Шоколадные бисквиты, с домашней солёной карамелью и цельным арахисом! Вкус который знаком нам с детства!"
        },
        {
            imgSource: "photo/14.png",
            cardName: "Морковный",
            description: "Мягкий нежный бисквит с добавлением оранжевого кладезя витаминов, изюма и грецкого ореха. А между коржами этого интересного сочетания ингредиентов - слой потрясающего нежного крема на основе сыра маскарпоне ."
        },
        {
            imgSource: "photo/15.png",
            cardName: "Йогуртовый с клубникой",
            description: "Начинка воздушная и лёгкая, она не только отличается ненавязчивым вкусом, но и низкой калорийностью. В ее основе лежит нежнейший шифоновый бисквит с ванильным ароматом и воздушный мусс на основе обезжиренного йогурта, который мы сочетаем со  кули из свежей клубникой. "
        }
    ],
    [
        {
            imgSource: "photo/cupcake.jpg",
            cardName: "Кекс",
            description: "Капкейк - это полноценный мини - торт, заслуживающий отменного декора. Поэтому и украшать надо под стать настоящему крупному десерту.  "
        },
        {
            imgSource: "photo/crois.jpg",
            cardName: "Круассан",
            description: "Классический круассан: легкий и воздушный, щедро пропитанный сливочным маслом, с чуть хрустящей при надломе корочкой. Тонкая ручная работа, выполненная по настоящему французскому рецепту."
        },
        {
            imgSource: "photo/cookies.jpg",
            cardName: "Печенье",
            description: "Песочное печенье с кусочками темного шоколада – идеальное сочетание потрясающих вкусов. Ванильная сладость балансирует с терпкостью добавки: это делает наше печенье прекрасным дополнением чаепитию."
        },
        {
            imgSource: "photo/gingerbread.jpg",
            cardName: "Пряники",
            description: "Пряничный человек с рождественскими украшениями, милой мордашкой и традиционным медовым ароматом невероятно порадует в канун Нового года и Рождества."
        },
        {
            imgSource: "photo/bread.jpg",
            cardName: "Хлеб",
            description: "Французский ржаной хлеб отличается темным цветом и ярким кисловатым вкусом, более выраженным, чем у пшеничного. Имеет умеренную хрустящую корочку, пористую мякоть и яркий аромат. "
        },
        {
            imgSource: "photo/donuts.png",
            cardName: "Пончики",
            description: "Этот набор пончиков сделан с любовью и творческим подходом, чтобы каждый из вас мог насладиться незабываемым вкусом и получить настоящее удовольствие от каждого пончика."
        }
    ],
    [
        {
            imgSource: "photo/truf.jpg",
            cardName: "Трюфель Ореховый",
            description: "рюфель Ореховый - это конфета из молочного шоколада, фундука, вафельной крошки, орехового ликера и ничего больше. "
        },
        {
            imgSource: "photo/pop.jpg",
            cardName: "Кейк-попсы",
            description: "Кейк-попсы – это небольшие круглые пирожные на палочке или без. Как правило, они готовятся из бисквитного теста и различаются друг от друга начинкой и оформлением. "
        },
        {
            imgSource: "photo/nuts.jpg",
            cardName: "Шоколадные с орехом",
            description: "Шоколадные конфеты ручной работы с идеальным составом, с ярко выраженным вкусом настоящего шоколада и свежайшего грецкого ореха."
        },
        {
            imgSource: "photo/candy.jpg",
            cardName: "Кедровый грильяж",
            description: "Кедровые орешки, обжаренные вручную до золотистой корочки, в сочетании с  натуральным мёдом, покрытые шоколадом, в начинке сибирские кедровые орехи без добавления других видов орехов."
        },
        {
            imgSource: "photo/figu.jpg",
            cardName: "Новогодние фигурки",
            description: `Набор новогодний из бельгийского шоколада "Новогодние фигурки" состоит из 25 вкусных конфет. Шоколад новогодний, подарочный, фигурный набор – отличный подарок`
        },
        {
            imgSource: "photo/popsik.jpg",
            cardName: "Лолипопс",
            description: `«Лолипопс» - модное лакомство для детей и взрослых. Эти леденцы премиум класса мелькают в популярных видеоклипах и фотосессиях кинозвезд.`
        }
    ]
]
const colorsOfCards = ["#FFDDCC", "#FFCCCC", "#FEBBCC"];

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            console.log("йопс")
            cardsInfo[index].forEach((card, num) => {
                productImg[num].src = cardsInfo[index][num].imgSource;
                cardName[num].innerHTML = cardsInfo[index][num].cardName;
                cardDescription[num].innerHTML = cardsInfo[index][num].description;
                cards[num].style.backgroundColor = colorsOfCards[index];

            })

        })
    });

    function salesCountDown() {
        const newYearDate = new Date("March 1, 2024 00:00");
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
        }
    }
    let timerId = setInterval(salesCountDown, 1000);



    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

const windowInnerWidth = window.innerWidth;
if(windowInnerWidth > 881){
    gsap.from(".header", { y:-100, duration: 1.5, ease:"bounce.out"})
    gsap.from(".menu__link", { opacity: 0, duration: 0.5, ease:'power1.in', delay: 1, stagger: 0.3})
}

gsap.from(".page__video_text", { opacity: 0, duration: 0.5, ease:'power1.in', delay: 1.5})

