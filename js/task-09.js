function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
console.log(bodyRef);

const btnChangeRef = document.querySelector(".change-color");
console.log(btnChangeRef);

const colorNumberRef = document.querySelector(".color");
console.log(colorNumberRef);

const handleChangeColor = (event) => {
  const currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  colorNumberRef.textContent = currentColor;
};

btnChangeRef.addEventListener("click", handleChangeColor);
