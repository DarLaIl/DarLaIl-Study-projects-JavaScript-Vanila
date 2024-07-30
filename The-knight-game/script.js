const mainCont = document.querySelector("#container");
const question = document.querySelector("#question");
const logo = document.querySelector("#logo");
const bigLogo = document.querySelector("#bigLogo");
const chat = document.querySelector("#chat");
const text = document.querySelector("#text");
const boxOne = document.querySelector("#boxOne");
const boxTwo = document.querySelector("#boxTwo");
const container = document.querySelector("#btn-container");
const startTheGame = document.querySelector("#startTheGame");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const artefact = document.querySelector("#artefact");
let input = document.createElement("input");

let quizAnswer;


let answers = [
    "И отправился рыцарь в путь. Шел долго по главной дороге. Шел лесами, полями, через высокие горы. И повстречалась ему на пути развилка. Влево дорога уходила в чащу темную, куда не пробивался солнечный свет сквозь плотную крону деревьев. Вправо дорога уходила на болота, с глубокими топями и звонкими лягушками. По середине камень указательный.<br> И написано на нем: «Левая дорога приведет тебя к погибели. Правая дорога еще страшней»", 
    "Дорога через чащу привела рыцаря к домику Ведьмы Ингрид. Встретила его Ингрид не приветливо. <br>Ингрид: - Зачем ты меня потревожил рыцарь? Разве ты не знаешь, что из моей чащи нельзя выйти живым? Но тебе повезло, сегодня у меня исключительно хорошее настроение. Что ты мне можешь предложить, чтобы я тебя отпустила?", 
    "Рыцарь: -Прими от меня скромный дар в знак уважения к тебе, Могущественная Ингрид. <br>Рыцарь отдал Ведьме мешочек с золотом. <br>Ингрид: - Как интересно. Твоя лесть и твой дар мне понравились. Я, так уж и быть, отпущу тебя. Я знаю, что ты идешь к дракону. У меня с ним свои старые счеты. Возьми это зелье, оно тебе понадобится.", 
    "Рыцарь разозлился на ведьму, выхватил свой острый меч, замахнулся. <br>Ингрид: - Как смеешь ты глупый рыцарь угрожать мне, могущественной Ингрид! Да я тебя сейчас уничтожу! <br> Ведьма взмахнула рукой, выкрикнула непонятные слова и сожгла глупого рыцаря дотла. Конец.",
    "Дорога привела рыцаря к большой пещере на краю болота. На шум вышел большой и зеленый Орк, у которого никогда не было имени. Орк настороженно рассматривал незваного гостя, решая, что ему с ним делать. Рыцарь решил обдумать: подкупить ли ему Орка или ударить мечом?",
    "Рыцарь решил сразить Орка своим острым мечом. Завязалась битва. Бились не на жизнь, а на смерть. С помощью своего мастерства Рыцарь победил Орка. Заглянул в его пещеру, но нашел только морковь. Что ж, забрал с собой.",
    "Рыцарь решил откупиться от Орка. Кинул в Орка мешочек с деньгами. Попал в голову. Глупый Орк не знал, что такое деньги и подумал, что рыцарь напал на него. Орк впал в ярость и кинулся на рыцаря! Рыцарь не успел достать свой острый меч, и Орк его съел.",
    "Вышел рыцарь из чащи к бурлящей реке. И увидел он большое дерево, которое растет прямо у единственного моста. Дерево это не простое, а волшебное. У дерева было лицо, большие ветки-руки и мощные корни.<br>Дерево: -Здравствуй путник. Чтобы перейти через реку, тебе нужно отгадать мою загадку! Не сможешь отгадать- сгинешь в реке, как и многие до тебя!<br><br><i>Загадка: Каких камней не бывает в речке?<i>",
    "Дерево: Да ты умен! Ты разгадал мою загадку! Можешь проходить. Только загляни под мост, найдешь там морковь. Возьми, тебе пригодится.",
    "Дерево: Ох, ты не отгадал мою загадку. <br> И взмахнуло дерево резко своей ветвью, и снесло рыцаря в воду. Его доспехи были так тяжелы, что опустился рыцарь на самое дно.",
    "Прямо за пещерой Орка обнаружилась тропинка в лес. И пошел рыцарь дальше и шел он пол дня, пока не встретилась ему на тропинке Девушка-Эльф Амеда, на плече у нее были лук и стрелы. <br> Амеда: - Здравствуй рыцарь. Что ты делаешь в моем лесу? Разве Орк не предупредил тебя, что людям соваться в леса эльфов запрещено! Что ты можешь мне предложить, чтобы я сделала вид что тебя не видела?",
    "Амеда: -Да ты издеваешься видно надо мной! <br> Рассердилась Эльфийка. Выстрелила из своего лука и попала точно в лоб рыцарю.",
    "Амеда: - О, монеты. Это мне нравится. Хорошо, проходи. Я знаю, ты идешь к дракону, так что возьми этот свиток. Заклинание из него поможет победить дракона, и использовать его может даже такой простолюдин как ты.",
    "И пошел рыцарь дальше. Шел не долго, повстречался ему удивительной красоты Единорог. Белоснежный, с серебристой гривой и длинным светящимся рогом. Но вот незадача. Стоит он прямо на тропинке. ",
    "Единорогу так понравилась морковь, что вызвался он проводить рыцаря к замку кротчайшей дорогой.",
    "Только блеснула на солнце сталь меча, Единорог проткнул Рыцаря своим рогом.",
    "У вот Единорог привел рыцаря к замку. У входа их уже встречал разъяренный дракон. <br> Дракон: - Как смеешь ты тревожить меня! Ты пришел за принцессой, я никогда не отдам тебе ее!",
    "Увернувшись от удара хвоста разъяренного дракона, рыцарь улучил момент и кинул в Дракона зелье, дарованное Ведьмой. Разбившись о шкуру Дракона зелье зашипело, заискрило и пошел густой дым. Когда дым рассеялся, оказалось, что Дракон превратился в маленькую букашку! <br> <br> <b>Путь к замку свободен!</b>",
    "Увернувшись от удара хвоста разъяренного дракона, рыцарь улучил момент и выкрикнул заклинание, дарованное Эльфом. Дракон вдруг широко зевнул, и тут же заснул. Раздался громкий храп. <br> <br> <b>Путь к замку свободен!</b>",
    "Рыцарь выхватил свой острый меч, но дракон только посмеялся. Взлетев над землей, Дракон выпустил столб яркого пламени. Увы, рыцари так быстро не бегают.",
    "Принцесса: - Дорогой Рыцарь! Я так благодарна тебе за свое спасение! <br> И жили все долго и счастливо! <br> КОНЕЦ!"
]

startTheGame.addEventListener("click", firstStep);

function firstStep() {
    bigLogo.setAttribute('src', 'img/knight.png');
    logo.setAttribute('src', 'img/knight.png');
    chat.setAttribute("style", "display: none;");
    text.innerHTML = answers[0];
    question.textContent = "Какой путь выберет рыцарь?";
    startTheGame.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: block;");
    btnOne.textContent = "Налево";
    btnTwo.textContent = "Направо";
    btnOne.addEventListener("click", secondStepVerOneWitch);
    btnTwo.addEventListener("click", secondStepVerTwoOrc);
}
function gameOver(){
    location.reload()
}

// Первая ветвь событий

function secondStepVerOneWitch() {
    bigLogo.setAttribute('src', 'img/witch.png');
    logo.setAttribute('src', 'img/witch.png');
    chat.setAttribute("style", "display: block;");
    text.innerHTML = answers[1];
    question.textContent = "Что выберет рыцарь?";
    btnOne.textContent = "Подкупить";
    btnTwo.textContent = "Ударить мечом";
    btnOne.addEventListener("click", secondStepVerOneWitchWin);
    btnTwo.addEventListener("click", secondStepVerOneWitchGameOver);
}
function secondStepVerOneWitchWin() {
    logo.setAttribute('src', 'img/potion.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Награда: зелье";
    text.innerHTML = answers[2];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Далее";
    boxOne.setAttribute('src', 'img/potion.png');
    startTheGame.addEventListener("click", thirdStepVerOne);
}
function secondStepVerOneWitchGameOver() {
    mainCont.classList.add("gameOver");
    bigLogo.setAttribute('src', 'img/magic.png');
    logo.setAttribute('src', 'img/graveyard.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Игра окончена";
    text.innerHTML = answers[3];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    startTheGame.addEventListener("click", gameOver);
}

function thirdStepVerOne () {
    bigLogo.setAttribute('src', 'img/tree.png');
    logo.setAttribute('src', 'img/tree.png');
    chat.setAttribute("style", "display: block;");
    text.innerHTML = answers[7];
    question.textContent = "Каков твой ответ?";
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    input.setAttribute('type', 'text')
    input.className = "quiz"; 
    input.setAttribute("placeholder", "Введи ответ");
    container.appendChild(input); 
    input.addEventListener("keyup", () => {
        quizAnswer = input.value.toLowerCase();
        console.log(quizAnswer);
    });
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Далее";
    startTheGame.addEventListener("click", () => {
        let res = quizAnswer.includes("сух");
        if( res === true){
            thirdStepVerOneMoveforward();
        }
        else {
            thirdStepVerOneGameOver();
        }
    })
}
function thirdStepVerOneMoveforward() {
    input.setAttribute("style", "display: none;");
    logo.setAttribute('src', 'img/carrot.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Награда: морковь";
    text.innerHTML = answers[8];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Далее";
    boxTwo.setAttribute('src', 'img/carrot.png');
    startTheGame.addEventListener("click", fourthStepVerOne);
}
function thirdStepVerOneGameOver() {
    mainCont.classList.add("gameOver");
    input.setAttribute("style", "display: none;");
    bigLogo.setAttribute('src', 'img/waterwave.png');
    logo.setAttribute('src', 'img/graveyard.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Игра окончена";
    text.innerHTML = answers[9];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    startTheGame.addEventListener("click", gameOver);
}

function fourthStepVerOne(){
    bigLogo.setAttribute('src', 'img/unicorn.png');
    logo.setAttribute('src', 'img/unicorn.png');
    chat.setAttribute("style", "display: none;");
    text.innerHTML = answers[13];
    question.textContent = "Что сделает рыцарь?";
    artefact.setAttribute("style", "display: block;");
    boxOne.setAttribute('src', 'img/potion.png');
    boxTwo.setAttribute('src', 'img/carrot.png');
    startTheGame.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: block;");
    btnOne.textContent = "Отдать морковь";
    btnTwo.textContent = "Ударить мечом";
    btnOne.addEventListener("click", fourthStepVerOneMoveForward);
    btnTwo.addEventListener("click", fourthStepGameOver);
}
function fourthStepVerOneMoveForward() {
    logo.setAttribute('src', 'img/interaction.png');
    bigLogo.setAttribute('src', 'img/interaction.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Награда: Проводник!";
    text.innerHTML = answers[14];
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: none;");
    btnOne.textContent = "Далее";
    boxTwo.setAttribute("style", "display: none;");
    btnOne.addEventListener("click", dragonVerOne);
}
function dragonVerOne() {
    bigLogo.setAttribute('src', 'img/monster.png');
    logo.setAttribute('src', 'img/monster.png');
    chat.setAttribute("style", "display: block;");
    text.innerHTML = answers[16];
    question.textContent = "Что сделает рыцарь?";
    artefact.setAttribute("style", "display: block;");
    boxOne.setAttribute('src', 'img/potion.png');
    startTheGame.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: block;");
    btnOne.textContent = "Кинуть зелье";
    btnTwo.textContent = "Ударить мечом";
    btnOne.addEventListener("click", dragonVerOneMoveForward);
    btnTwo.addEventListener("click", dragonGameOver);
}

function dragonVerOneMoveForward() {
    mainCont.classList.add("winWin");
    logo.setAttribute('src', 'img/castle.png');
    bigLogo.setAttribute('src', 'img/bug.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Победил дракона!";
    text.innerHTML = answers[17];
    artefact.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Далее";
    startTheGame.addEventListener("click", winWin);
}
function winWin(){
    logo.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    chat.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    question.textContent = "ПОБЕДА!";
    bigLogo.setAttribute('src', 'img/Princess.png');
    text.innerHTML = answers[20];
    startTheGame.addEventListener("click", gameOver);
}

// Вторая ветвь событий 

function secondStepVerTwoOrc() {
    bigLogo.setAttribute('src', 'img/orc.png');
    logo.setAttribute('src', 'img/orc.png');
    chat.setAttribute("style", "display: block;");
    text.innerHTML = answers[4];
    question.textContent = "Что предпримет рыцарь?";
    btnOne.textContent = "Подкупить";
    btnTwo.textContent = "Ударить мечом";
    btnOne.addEventListener("click", secondStepVerTwoOrcGameOver);
    btnTwo.addEventListener("click", secondStepVerTwoOrchWin);
}
function secondStepVerTwoOrchWin() {
    logo.setAttribute('src', 'img/sword.png');
    bigLogo.setAttribute('src', 'img/sword.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Победил Орка! Награда: морковь";
    text.innerHTML = answers[5];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Далее";
    boxTwo.setAttribute('src', 'img/carrot.png');
    startTheGame.addEventListener("click", thirdStepVerTwo);
}
function secondStepVerTwoOrcGameOver() {
    mainCont.classList.add("gameOver");
    bigLogo.setAttribute('src', 'img/meat.png');
    logo.setAttribute('src', 'img/graveyard.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Игра окончена";
    text.innerHTML = answers[6];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    startTheGame.addEventListener("click", gameOver);
}
function thirdStepVerTwo() {
    bigLogo.setAttribute('src', 'img/elf.png');
    logo.setAttribute('src', 'img/elf.png');
    chat.setAttribute("style", "display: block;");
    text.innerHTML = answers[10];
    question.textContent = "Что выберет рыцарь?";
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Отдать морковь";
    btnOne.textContent = "Подкупить залотом";
    btnTwo.textContent = "Ударить мечом";
    startTheGame.addEventListener("click", thirdStepVerTwoGameOver)
    btnOne.addEventListener("click", thirdStepVerTwoMoveForward);
    btnTwo.addEventListener("click", thirdStepVerTwoGameOver);
}
function thirdStepVerTwoMoveForward() {
    logo.setAttribute('src', 'img/spell.png');
    bigLogo.setAttribute('src', 'img/spell.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Награда: Заклинание!";
    text.innerHTML = answers[12];
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: none;");
    btnOne.textContent = "Далее";
    artefact.setAttribute("style", "display: block;");
    boxOne.setAttribute('src', 'img/spell.png');
    boxTwo.setAttribute('src', 'img/carrot.png');
    btnOne.addEventListener("click", fourthStepVerTwo);
}
function thirdStepVerTwoGameOver() {
    mainCont.classList.add("gameOver");
    bigLogo.setAttribute('src', 'img/arrow.png');
    logo.setAttribute('src', 'img/graveyard.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Игра окончена";
    text.innerHTML = answers[11];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    startTheGame.addEventListener("click", gameOver);
}

function fourthStepVerTwo(){
    bigLogo.setAttribute('src', 'img/unicorn.png');
    logo.setAttribute('src', 'img/unicorn.png');
    chat.setAttribute("style", "display: none;");
    text.innerHTML = answers[13];
    question.textContent = "Что сделает рыцарь?";
    artefact.setAttribute("style", "display: block;");
    boxOne.setAttribute('src', 'img/spell.png');
    boxTwo.setAttribute('src', 'img/carrot.png');
    startTheGame.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: block;");
    btnOne.textContent = "Отдать морковь";
    btnTwo.textContent = "Ударить мечом";
    btnOne.addEventListener("click", fourthStepVerTwoMoveForward);
    btnTwo.addEventListener("click", fourthStepGameOver);
}
function fourthStepVerTwoMoveForward() {
    logo.setAttribute('src', 'img/interaction.png');
    bigLogo.setAttribute('src', 'img/interaction.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Награда: Проводник!";
    text.innerHTML = answers[14];
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: none;");
    btnOne.textContent = "Далее";
    boxTwo.setAttribute("style", "display: none;");
    btnOne.addEventListener("click", dragonVerTwo);
}
function fourthStepGameOver() {
    mainCont.classList.add("gameOver");
    bigLogo.setAttribute('src', 'img/adventure.png');
    logo.setAttribute('src', 'img/graveyard.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Игра окончена";
    text.innerHTML = answers[15];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    startTheGame.addEventListener("click", gameOver);
}
function dragonVerTwo() {
    bigLogo.setAttribute('src', 'img/monster.png');
    logo.setAttribute('src', 'img/monster.png');
    chat.setAttribute("style", "display: block;");
    text.innerHTML = answers[16];
    question.textContent = "Что сделает рыцарь?";
    artefact.setAttribute("style", "display: block;");
    boxOne.setAttribute('src', 'img/spell.png');
    startTheGame.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: block;");
    btnTwo.setAttribute("style", "display: block;");
    btnOne.textContent = "Читать заклинание";
    btnTwo.textContent = "Ударить мечом";
    btnOne.addEventListener("click", dragonVerTwoMoveForward);
    btnTwo.addEventListener("click", dragonGameOver);
}
function dragonVerTwoMoveForward() {
    mainCont.classList.add("winWin");
    logo.setAttribute('src', 'img/castle.png');
    bigLogo.setAttribute('src', 'img/sleep.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Победил дракона!";
    text.innerHTML = answers[18];
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    btnOne.setAttribute("style", "display: block;");
    btnOne.textContent = "Далее";
    btnOne.addEventListener("click", winWin);
};
function dragonGameOver() {
    mainCont.classList.add("gameOver");
    bigLogo.setAttribute('src', 'img/fire.png');
    logo.setAttribute('src', 'img/graveyard.png');
    chat.setAttribute("style", "display: none;");
    question.textContent = "Игра окончена";
    text.innerHTML = answers[19];
    btnOne.setAttribute("style", "display: none;");
    btnTwo.setAttribute("style", "display: none;");
    artefact.setAttribute("style", "display: none;");
    startTheGame.setAttribute("style", "display: block;");
    startTheGame.textContent = "Заново";
    startTheGame.addEventListener("click", gameOver);
};