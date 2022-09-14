const controlRefs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

controlRefs.range.value = 16;
controlRefs.range.addEventListener("input", () => {
  const { range, text } = controlRefs;
  text.style.fontSize = range.value + "px";
});
