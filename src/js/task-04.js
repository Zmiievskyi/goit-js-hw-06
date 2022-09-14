const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const counterRef = document.querySelector("#value");
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

decrementRef.addEventListener("click", function () {
  counterValue.decrement();
  counterRef.textContent = counterValue.value;
});

incrementRef.addEventListener("click", function () {
  counterValue.increment();
  counterRef.textContent = counterValue.value;
});
