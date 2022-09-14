const inpRef = document.querySelector("#validation-input");
console.dir(inpRef);
inpRef.addEventListener("blur", (event) => {
  inpRef.classList.add("invalid")
  if (event.currentTarget.value.length === inpRef.nextSibling.length) {
     inpRef.classList.toggle("invalid")
     inpRef.classList.add("valid")}
  });
