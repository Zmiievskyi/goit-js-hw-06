const myForm = document.querySelector(".login-form");
myForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const obj = {};
  if (!formElements.email.value || !formElements.password.value) {
    alert("все поля должны быть заполнены");
  } else {
    obj.email = formElements.email.value;
  }
  console.log(obj);
  myForm.reset();
  return obj
}
