const inpRef = document.querySelector("#validation-input");

inpRef.addEventListener("blur", (event) =>
  event.currentTarget.value.length < 6
    ? inpRef.classList.add("invalid")
    : inpRef.classList.add("valid")
);
