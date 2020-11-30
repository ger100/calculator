const buttons = document.querySelectorAll('.btn, .btn-op')
const display = document.querySelector('.display')
let calcOnDisplay = "";

buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-value');  
    calcOnDisplay += buttonValue;
    display.textContent = calcOnDisplay;
  })
})


const btnClear = document.querySelector('.clear')
btnClear.addEventListener('click', () => { 
    calcOnDisplay = "";
    display.textContent = calcOnDisplay;
  })

const btnEqual = document.querySelector('.button2--equal')
btnEqual.addEventListener('click', () => { 
    
    
    display.textContent = calcOnDisplay
})