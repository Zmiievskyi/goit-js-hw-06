function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  container: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  btn: document.querySelector("button"),
};

refs.button.addEventListener("click", onChangeBackqroundColor);
refs.container.addEventListener("mouseenter", onChangeContainerColor);
refs.span.textContent = "#ffffff";

function onChangeBackqroundColor() {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onChangeContainerColor() {
  refs.container.style.backgroundColor = getRandomHexColor();
}
