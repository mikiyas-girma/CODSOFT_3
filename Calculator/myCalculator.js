
const inputScreen = document.querySelector('.input-screen');
const resultScreen = document.querySelector('.result-screen');
const AC = document.querySelector('.clearAll');
const del = document.querySelector('.delete');
const buttons = document.querySelectorAll('.item');
const operators = ["-", "+", "÷", "*", "="];
let output = "";

// event listener for buttons

let inputs = [];
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if(button.textContent === "AC") {
      clear();
    } else if(button.textContent === "␡") {
      console.log('deleted');
     } else {
      inputs.push(button.textContent);
      calculate(inputs);
    }
    // console.log(button.textContent);
  });
});
del.addEventListener('click', delInput)



function calculate(value) {
  inputScreen.textContent = value.join("");
  console.log(value);
}


function delInput() {

}

function clear() {
  inputScreen.textContent = "";
  resultScreen.textContent = "";
  inputs = [];
  output = "";
}