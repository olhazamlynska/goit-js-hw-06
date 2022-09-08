const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Попередження! Всі дані повинні бути заповнені");
  }
  const userObj = { email: email.value, password: password.value };
  console.log(userObj);

  event.currentTarget.reset();
}
