
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
    let rem = inputs.join("").toString().slice(0 , -1);
      inputs =[rem];
      calculate(inputs);
      console.log(inputs);
    }

    else if (button.textContent === "=") {
      if (operators.includes(last)) {
        inputs.pop();
         calculate(inputs);
        inputScreen.textContent = "";

      } 
         inputs = [output];
        calculate(inputs);
        inputScreen.textContent = "";
      
    }

    else if(button.textContent === "π") {
      if(inputs.length >= 1)
      inputs.push('*');
      if(operators.includes(last))
      inputs.pop();
      inputs.push('3.142');
      calculate(inputs);
    }

    else if (inputs.includes(".")) {

       if(operators.includes(last) && !operators.includes(button.textContent)) {
        // inputs.push(button.textContent);
        calculate(inputs);
      }

      if(!operators.includes(last) && operators.includes(button.textContent)) {
        if(last === ".")
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
      }

      if(last === "." && !operators.includes(button.textContent)) {
        if(button.textContent === ".")
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
      }

      if(operators.includes(last) && operators.includes(button.textContent)) {
        if(button.textContent !== "-") {
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
      }
      if(!operators.includes(inputs[inputs.length - 2]) && button.textContent === "-") {
        inputs.push(button.textContent);
        calculate(inputs);
      }
      }


      if (last === "." && button.textContent === ".") {
        inputs.pop();
        inputs.push(button.textContent);
      }

      if(operators.includes(last) && operators.includes(inputs[inputs.length - 2]) && operators.includes(button.textContent) && button.textContent !== "-") {
        inputs.pop();
        calculate(inputs);
      } 

      if(lastIndexOfOperator >= res.toString().lastIndexOf(".")) {
        if( button.textContent !== "-" && !operators.includes(button.textContent)) {
          inputs.push(button.textContent);
          calculate(inputs);
          }
      }

      else if ((operators.includes(last) && operators.includes(button.textContent) && button.textContent !== ".") ) {

        if( button.textContent !== "-") {
        inputs.pop();
        inputs.push(button.textContent);
        calculate(inputs);
        }
        else {
          if(!operators.includes(button.textContent))
            inputs.push(button.textContent);
            calculate(inputs);
          
        }
      }

      else if (lastIndexOfOperator <= res.toString().lastIndexOf(".") && !operators.includes(button.textContent) && last !== "." && button.textContent !== ".") {

        inputs.push(button.textContent);
        calculate(inputs);
      }



    }
      

    else if(operators.includes(last) && operators.includes(inputs[inputs.length - 2]) && operators.includes(button.textContent) && button.textContent !== "-") {
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

      if(userInputs.length > 16) {
        inputScreen.style.fontSize = "22px";
        resultScreen.style.fontSize = "22px";
      }

  if(!operators.includes(last)) {
    try {

      if(last === "0" && userInputs[userInputs.length - 2] === "/" ) {
        resultScreen.textContent = 'not allowed';
        resultScreen.style.color = "red";
      } 
      else {
        output = eval(expression.replace("%", "/100"));
        formattedResult = Number(output).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 5 });
        resultScreen.textContent = formattedResult;
      }
      
    } catch (error) {
      if(last !== "." && inputs.length > 1){
        resultScreen.textContent = 'FORMAT ERROR';
        resultScreen.style.color = "red";
      }
    }
  } 
}

function clear() {
  inputScreen.textContent = "";
  resultScreen.textContent = "";
  inputs = [];
  output = "";
}


