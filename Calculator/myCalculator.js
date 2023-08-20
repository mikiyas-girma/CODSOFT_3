
const inputScreen = document.querySelector('.input-screen');
const resultScreen = document.querySelector('.result-screen');
const AC = document.querySelector('.clearAll');
const del = document.querySelector('.delete');
const buttons = document.querySelectorAll('.item');
const operators = ["$", "+", "÷", "×", "="];
let output = "";

// event listener for buttons

let inputs = [];
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    inputs.push(button.textContent);
    calculate(inputs);
    // console.log(button.textContent);
  });
});

AC.addEventListener('click', clear);
del.addEventListener('click', delInput)



function calculate(value) {
console.log(value);
}


function delInput() {

}

function clear() {
  inputScreen = "";
  resultScreen = "";
  output = "";
}