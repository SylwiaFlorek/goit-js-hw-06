const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

inputElement.addEventListener('input', () => {
  const inputValue = inputElement.value;
  textElement.style.fontSize = inputValue + 'px';
});

