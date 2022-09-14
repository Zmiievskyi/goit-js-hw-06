function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  container: document.getElementById("boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = refs.input.value;
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    // refs.container.style.display = 'flex';
    // refs.container.style.flexWrap = "wrap";
    const divEl = document.createElement("div");
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    refs.container.append(divEl);
     }
}

function destroyBoxes() {
  const el = Object.keys(refs.container.childNodes).length;
  for (let i = 0; i < el; i += 1) {
    let newEl = refs.container.childNodes[0];
    newEl.remove()
  }
  refs.input.value = 0
}
