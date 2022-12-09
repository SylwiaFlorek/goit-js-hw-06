const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', () => {
  const inputValue = inputElement.value;
  const length = inputElement.getAttribute('data-length');

  if (inputValue.length === Number(length)) {

    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
});

