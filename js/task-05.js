const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const nameRef = document.querySelector("#name-output");
console.log(nameRef);
const handleText = (event) => {
  nameRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameRef.textContent = "Anonymous";
  }
};
inputRef.addEventListener("input", handleText);
