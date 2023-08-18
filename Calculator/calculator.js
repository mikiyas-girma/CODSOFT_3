
// The implementation behind 

const inputScreen = document.querySelector('.input-screen');
const resultScreen = document.querySelector('.result-screen');
const item = document.querySelector('.board');


item.addEventListener('click', function (e) {
  let input = [];
  if(e.target.className === "item item") {
    input = e.target.textContent;
    inputScreen.textContent += input;
    console.log(input);

  }
});


