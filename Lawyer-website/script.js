const ham = document.querySelector("#ham");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector("#menu").cloneNode(1);

ham.addEventListener("click", hamHandler);

function hamHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  ham.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  ham.classList.remove("active");
  body.classList.remove("noscroll");
}