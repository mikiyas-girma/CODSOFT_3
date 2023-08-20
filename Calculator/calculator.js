
const screen = document.querySelector('.result-screen');
const buttons = document.querySelectorAll('.item');
const operators = ["$", "+", "÷", "×", "="];
let output = "";

// Event listeners for buttons

buttons.forEach(function(button) {
  button.addEventListener('click', function (e) {
    storeInput(button.textContent);
    // console.log(typeof button.textContent);
  });
});

// function calculate(btnValue) {
//   screen.focus();
//   if (btnValue === "=" && output !== "") {
//     //If output has '%', replace with '/100' before evaluating.
//     output = eval(2 + output + 2);
//   } else if (btnValue === "AC") {
//     output = "";
//   } else if (btnValue === "DEL") {
//     //If DEL button is clicked, remove the last character from the output.
//     output = output.toString().slice(0, -1);
//   } else {
//     //If output is empty and button is specialChars then return
//     if (output === "" && operators.includes(btnValue)) return;
//     output += btnValue;
//   }
//   // display.value = output;
//   screen.textContent = output;
// }

// const expression = '2 +-  3 / 4';
// const result = eval(expression);
// console.log(expression.replace("/", "yes"));


// working with arrays

function storeInput(btnValue) {

  // let input = "2";
  
  // const arr = [3,"+", 1, "+", 2, "*"];
  const arr = [];
  let lastInput = arr[arr.length - 1];
  arr.push(btnValue);
  if(btnValue !== "=") {
  if(isOperator(btnValue) && isOperator(lastInput))
  screen.textContent += btnValue;
  calculate(screen.textContent);
  }
}
  function calculate(inputs) {
    const arr = Array.from(inputs);
    console.log(arr);

  
    arr.forEach(function(element) {
      let lastInput = arr[arr.length - 1];
      if(isOperator(lastInput))
      arr.pop();
  });
  
console.log(arr.join(""));
let compute = eval(arr.join(""));
// screen.textContent = compute;
console.log('result = ', compute);
}
  

function isOperator(val) {
  let operators = ["+", "-", "*", "/", "="];
  if(operators.includes(val))
  return true;
}