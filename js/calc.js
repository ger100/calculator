const buttons = document.querySelectorAll('.btn, .btn-op')
const display = document.querySelector('.display')

let displayData = "";

buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-value');  
    displayData += buttonValue;
    display.textContent = displayData;
  })
})