const refs = {
  inp: document.querySelector("#name-input"),
  spn: document.querySelector("#name-output"),
};

refs.inp.addEventListener("input", onInput);

function onInput(event) {
  refs.spn.textContent = event.currentTarget.value.trim();
}
