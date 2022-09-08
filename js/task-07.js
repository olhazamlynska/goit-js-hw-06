const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);
const textRef = document.querySelector("#text");
console.log(textRef);

textRef.style.fontSize = inputRef.value + "px";

const handleGhangeFontSize = (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputRef.addEventListener("input", handleGhangeFontSize);
