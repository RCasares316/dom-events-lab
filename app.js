const buttons = document.querySelectorAll(".button");
const displayEl = document.querySelector(".display");
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const buttonText = clickedButton.innerText;
    // This log is for testing purposes to verify we're getting the correct value
    if (event.target.classList.contains("number")) {
      // Do something with a number
      handleNumberClick(buttonText);
    }

    // Example
    if (
      buttonText === "+" ||
      buttonText === "*" ||
      buttonText === "-" ||
      buttonText === "/"
    ) {
      handleOperatorClick(buttonText);
    } else if (buttonText === "C") {
      clearCalculator();
    } else if (buttonText === "="){
        handleEqualClick()
    }
    // Do something with this operator
  });
});

function updateDisplay(text) {
  displayEl.innerText = text;
}
function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
  updateDisplay("0");
}
function handleNumberClick(numberText) {
  if (!firstNumber) {
    firstNumber = numberText;
    updateDisplay(firstNumber);
  } else {
    secondNumber = numberText;
    updateDisplay(secondNumber);
  }
}
function handleOperatorClick(operatorText) {
  if (firstNumber === "") {
    return;
  }
  //   if (currentOperator !== null
  //  && secondNumber !== ""
  // ) {
  // const result = calculate(firstNumber, secondNumber, currentOperator);
  // firstNumber = String(result);
  // secondNumber = "";
  // updateDisplay(firstNumber);
  //   }
  currentOperator = operatorText;
}
function handleEqualClick() {
  console.log(firstNumber, secondNumber, currentOperator);
  if (firstNumber === "" || currentOperator === null || secondNumber === "") {
    return;
  }
  const result = calculate(firstNumber, secondNumber, currentOperator);
  updateDisplay(String(result));
  firstNumber = String(result);
  secondNumber = "";
  currentOperator = null;
}

function calculate(firstNumber, secondNumber, operator) {
  const first = parseFloat(firstNumber);
  const second = parseFloat(secondNumber);
  let result = 0;
  if (operator === "+") {
    result = first + second;
  } else if (operator === "-") {
    result = first - second;
  } else if (operator === "*") {
    result = first * second;
  } else if (operator === "/") {
    result = first / second;
  }
  return result;
}
updateDisplay("0");
