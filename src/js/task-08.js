const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const email = formElement.elements.email.value;
  const password = formElement.elements.password.value;

  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  const loginData = { email, password };
  console.log(loginData);
  formElement.reset();
});
