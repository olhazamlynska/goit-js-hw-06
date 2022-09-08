function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
console.log(bodyRef);

const btnChangeRef = document.querySelector(".change-color");
console.log(btnChangeRef);

const coloNumberRef = document.querySelector(".color");
console.log(coloNumberRef);

const handleChangeColor = (event) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  coloNumberRef.textContent = getRandomHexColor();
};

btnChangeRef.addEventListener("click", handleChangeColor);
