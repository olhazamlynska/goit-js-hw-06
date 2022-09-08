const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const lengthRef = Number(inputRef.getAttribute("data-length"));
console.log(lengthRef);

const handleValidation = (event) => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length >= lengthRef) {
    return inputRef.classList.add("valid");
  }
  inputRef.classList.add("invalid");
};
inputRef.addEventListener("blur", handleValidation);
