let counterValue = 0;
const decrementBtnRef = document.querySelector("[data-action=decrement]");
console.log(decrementBtnRef);

const incrementBtnRef = document.querySelector("[data-action=increment]");
console.log(incrementBtnRef);
const valueRef = document.querySelector("#value");
console.log(valueRef);

const decreaseNumberClick = (event) => {
  counterValue -= 1;
  console.log(counterValue);
  valueRef.textContent = counterValue;
};

const increaseNumberClick = (event) => {
  counterValue += 1;
  console.log(counterValue);
  valueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener("click", decreaseNumberClick);
incrementBtnRef.addEventListener("click", increaseNumberClick);
