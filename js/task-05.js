const refs = {
  inp: document.querySelector("#name-input"),
  spn: document.querySelector("#name-output"),
};

refs.inp.addEventListener("keyup", onInput);
const bodyEl = document.querySelector('body');
bodyEl.addEventListener("click", () => (refs.spn.textContent = "Anonymous"));

function onInput(event) {
  if (event.code === 'Enter') {
refs.spn.textContent = event.currentTarget.value.trim();}
}
