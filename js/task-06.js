const inpRef = document.querySelector("#validation-input");
const limit = Number(inpRef.getAttribute("data-length"));
inpRef.addEventListener("blur", (event) => {
  replaceClassList("invalid", "valid");

  if (inpRef.value.length === limit) {
    replaceClassList("valid", "invalid");
  }
  if (inpRef.value.length === 0) {
    removeAllClass("valid", "invalid");
  }
});

const replaceClassList = (add, remove) => {
  inpRef.classList.add(add);
  inpRef.classList.remove(remove);
};

const removeAllClass = (one, two) => {
  inpRef.classList.remove(one);
  inpRef.classList.remove(two);
};
