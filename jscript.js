// select the elements we need
const num1 = document.querySelector('#num1');
const resultLabel = document.querySelector('#result');

// clear the input field
function clearInputs() {
  num1.value = '';
  resultLabel.textContent = 'Result is:';
}

function checkInput() {
  const input = num1.value;
  if (input.includes('"') || input.includes("'")) {
    alert('Error: Invalid Input!');
    clearInputs();
  }
}

function addToInput(value) {
  num1.value += value;
  checkInput();
}

function calculateResult() {
  const input = num1.value;
  if (input.includes('"') || input.includes("'")) {
    alert('Error: Invalid Input!');
    clearInputs();
  } else {
    const result = eval(input);
    resultLabel.textContent = `Result is: ${result}`;
  }
}

function calculateSquare() {
  const input = num1.value;
  if (input.includes('"') || input.includes("'")) {
    alert('Error: Invalid Input!');
    clearInputs();
  } else {
    const number = parseFloat(input);
    const result = number * number;
    resultLabel.textContent = `Result is: ${result}`;
  }
}

function calculateSquareRoot() {
  const input = num1.value;
  if (input.includes('"') || input.includes("'")) {
    alert('Error: Invalid Input!');
    clearInputs();
  } else {
    const number = parseFloat(input);
    const result = Math.sqrt(number);
    resultLabel.textContent = `Result is: ${result}`;
  }
}