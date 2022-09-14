const refs = {
  inp: document.querySelector("#name-input"),
  spn: document.querySelector("#name-output"),
};

refs.inp.addEventListener("input", onInput);
const bodyEl = document.querySelector('body');
bodyEl.addEventListener("click", () => (refs.spn.textContent = "Anonymous"));

function onInput(event) {
refs.spn.textContent = event.currentTarget.value.trim();
}
