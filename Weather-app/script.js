import startPage from "./modules/start.mjs";
import getInfo from "./modules/getInfo.mjs";


startPage();

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        let data = input.value.trimEnd()
        getInfo(data);
    }
}









