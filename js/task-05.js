const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const nameRef = document.querySelector("#name-output");
console.log(nameRef);

inputRef.addEventListener("input", (event) => {
  nameRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameRef.textContent = "Anonymous";
  }
});
