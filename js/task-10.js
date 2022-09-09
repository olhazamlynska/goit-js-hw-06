function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector("input");
console.log(inputRef);
const createBtnRef = document.querySelector("[data-create]");
console.log(createBtnRef);
const destroyBtnRef = document.querySelector("[data-destroy]");
console.log(destroyBtnRef);
const boxesRef = document.querySelector("#boxes");
console.log(boxesRef);

function createBoxes(amount) {
  const markup = [];

  for (let i = 0; i <= amount - 1; i += 1) {
    const boxesRefs = document.createElement("div");
    const currentWidth = 30 + i * 10;
    const currentHeight = 30 + i * 10;
    boxesRefs.style.width = `${currentWidth}px`;
    boxesRefs.style.height = `${currentHeight}px`;
    boxesRefs.style.backgroundColor = getRandomHexColor();

    markup.push(boxesRefs);
  }
  boxesRef.append(...markup);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}

function onCreateBtnClick() {
  createBoxes(inputRef.value);
}

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", destroyBoxes);
