let currentInput = "";
let currentOperator = "";
let firstOperand = "";
let awaitingNextNumber = false;

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
}
