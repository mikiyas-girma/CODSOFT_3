
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
      let last = inputs[inputs.length - 1];
      if(operators.includes(last) && operators.includes(button.textContent)) {
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
      } else {
        inputs.push(button.textContent);
        calculate(inputs);
      }
    }
    // console.log(button.textContent);
  });
});



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