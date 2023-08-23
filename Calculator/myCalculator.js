
const inputScreen = document.querySelector('.input-screen');
const resultScreen = document.querySelector('.result-screen');
const AC = document.querySelector('.clearAll');
const del = document.querySelector('.delete');
const equals = document.querySelector('.equals');
const buttons = document.querySelectorAll('.item');
const operators = ["-", "+", "/", "*"];
let output = "";



let inputs = [];
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    let last = inputs[inputs.length - 1];

    let res =  inputs.join("");
    let indexOfOperators = operators.map(operator => res.toString().lastIndexOf(operator));
    const lastIndexOfOperator = Math.max(...indexOfOperators);

    if(button.textContent === "AC") {
      clear();
    }

    else if(button.textContent === "␡") {
    console.log('deleted');
    }

    else if (button.textContent === "=") {
      if (operators.includes(last)) {
        inputs.pop();
        inputs = [resultScreen.textContent];
        calculate(inputs);
        inputScreen.textContent = "";

      } 
      inputs = [resultScreen.textContent];
        calculate(inputs);
        inputScreen.textContent = "";
      
    }

    else if (inputs.includes(".")) {

       if(operators.includes(last) && !operators.includes(button.textContent)) {
        inputs.push(button.textContent);
        calculate(inputs);
      }

      if(!operators.includes(last) && operators.includes(button.textContent)) {
        inputs.push(button.textContent);
        calculate(inputs);
      }

      if(operators.includes(last) && operators.includes(button.textContent)) {
        if(button.textContent !== "-") {
        inputs.pop();
        inputs.push(button.textContent);
      }
      if(!operators.includes(inputs[inputs.length - 2]) && button.textContent === "-") {
        inputs.push(button.textContent);
        calculate(inputs);
      }
      }


      if (inputs[inputs.length - 1] === "." && button.textContent === ".") {
        inputs.pop();
        inputs.push(button.textContent);
      }

     else if (!operators.includes(inputs[inputs.length - 1]) && button.textContent === "." && lastIndexOfOperator >= res.toString().lastIndexOf(".")) {

        inputs.push(button.textContent);
        calculate(inputs);
      }

      else if ((operators.includes(last) && operators.includes(button.textContent) && button.textContent !== ".")   || lastIndexOfOperator >= res.toString().lastIndexOf(".") ) {

        if( button.textContent !== "-" && !operators.includes(button.textContent)) {
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
        }
        else {
          if(operators.includes(inputs[inputs.length - 1]) && operators.includes(inputs[inputs.length - 2]) && operators.includes(button.textContent) && button.textContent !== "-") {
            inputs.pop();
            calculate(inputs);
          } 
          
            inputs.push();
            calculate(inputs);
          
        }
      }

      else if (lastIndexOfOperator <= res.toString().lastIndexOf(".") && !operators.includes(button.textContent) && last !== "." && button.textContent !== ".") {

        inputs.push(button.textContent);
        calculate(inputs);
      }
      
      else if (last === "." && button.textContent !== ".") {
        if (operators.includes(button.textContent)) {

          // inputs.pop();
        }

        inputs.push(button.textContent);
        calculate(inputs);
      }

      // else if(last !== "." && !operators.includes(last) && button.textContent !== ".") {
        // console.log('hey hey ');
        // inputs.push(button.textContent);
        // calculate(inputs);
      // }

//this

      else if(operators.includes(last) && operators.includes(button.textContent)) {
        if(button.textContent !== "-") {
        inputs.pop();
        }
        inputs.push(button.textContent);
        calculate(inputs);
      }

      else {
        // inputs.push(button.textContent);
        // calculate(inputs);
      }

      // else if ((operators.includes(button.textContent) && operators.includes(last)  && button.textContent !== "." ) || lastIndexOfOperator >= res.toString().lastIndexOf(".")) {

      //     if(last !== "-" && operators.includes(button.textContent)) {
      //     inputs.pop();
      //     inputs.push(button.textContent);
      //     calculate(inputs);
      //   }
      //   else {
      //     if(button.textContent !== ".")
      //     // inputs.push(button.textContent);
      //   calculate(inputs);
      // }
      // if(button.textContent !== ".")
      //   inputs.push(button.textContent);
      //   calculate(inputs);
      // }
      // inputs = [resultScreen.textContent];
    }
      
      // let last = inputs[inputs.length - 1];

    else if(operators.includes(inputs[inputs.length - 1]) && operators.includes(inputs[inputs.length - 2]) && operators.includes(button.textContent) && button.textContent !== "-") {
        inputs.pop();
        calculate(inputs);
      }

    else  if(operators.includes(last) && operators.includes(button.textContent) && button.textContent !== "-" ) {
          inputs.pop();
          inputs.push(button.textContent);
          calculate(inputs);
        
      } 
      else if(last === "-" && button.textContent === "-") {
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
      }

       else {
        if(lastIndexOfOperator >= res.toString().lastIndexOf(".") ){
          inputs.push(button.textContent);
          calculate(inputs);
        }
        else {
          inputs.push(button.textContent);
          calculate(inputs); 
        }
      }

  });
});


// Calculate function
function calculate(value) {
  let userInputs = Array.from(value);
  last = userInputs[userInputs.length - 1];
  let expression = value.join("");
  inputScreen.textContent = expression;
  if(!operators.includes(last)) {
    try {

      if(last === "0" && userInputs[userInputs.length - 2] === "/" ) {
        resultScreen.textContent = 'not allowed';
        resultScreen.style.color = "red";
      } 
      else {
        output = eval(expression.replace("%", "/100"));
        resultScreen.textContent = output;
      
      }
      
    } catch (error) {
      if(last !== "."){
        resultScreen.textContent = 'FORMAT ERROR';
        resultScreen.style.color = "red";
      }
    }
  } 
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
