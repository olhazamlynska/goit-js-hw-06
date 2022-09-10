const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const lengthRef = Number(inputRef.getAttribute("data-length"));
console.log(lengthRef);

const handleValidation = (event) => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length >= lengthRef) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
};
inputRef.addEventListener("blur", handleValidation);
