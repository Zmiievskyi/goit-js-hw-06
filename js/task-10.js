// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const getRandomHexColor = () => {
  //const randomColor = Math.round(Math.random(0, 1) * 255);

  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);

  return `rgb(${red},${green},${blue})`;
};

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  container: document.getElementById("boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  const divBox = [];
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    const divEl = document.createElement("div");
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divBox.push(divEl);
  }
  refs.container.append(...divBox);
  refs.input.value = "";
}

function destroyBoxes() {
  refs.input.value = "";
  refs.container.innerHTML = "";
}

refs.input.addEventListener("keydown", onEnterClick);

function onEnterClick(event) {
  if (event.code === "Enter") createBoxes();
  refs.input.addEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") destroyBoxes();
}
