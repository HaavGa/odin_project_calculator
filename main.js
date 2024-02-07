const btn0 = document.getElementById("btn-0");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btnAdd = document.getElementById("btn-add");
const btnSubtract = document.getElementById("btn-subtract");
const btnMultiply = document.getElementById("btn-multiply");
const btnDivide = document.getElementById("btn-divide");
const btnClear = document.getElementById("btn-clear");
const btnEquals = document.getElementById("btn-equals");
const display = document.getElementById("display");

const btns = [
  btn0,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btnAdd,
  btnSubtract,
  btnMultiply,
  btnDivide,
];

let displayValue = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return "Error!";
  return a / b;
};

const Operations = {
  Add: "+",
  Subtract: "-",
  Multiply: "×",
  Divide: "÷",
};

let firstNum = 0;
let secondNum = 0;
let operator = "";

const operate = (num1, num2, op) => {
  switch (op) {
    case Operations.Add:
      return add(num1, num2);
    case Operations.Subtract:
      return subtract(num1, num2);
    case Operations.Multiply:
      return multiply(num1, num2);
    case Operations.Divide:
      return divide(num1, num2);
  }
};

const updateDisplay = input => {
  displayValue += input;
  display.textContent = displayValue;
};

const clearDisplay = () => {
  displayValue = "";
  display.textContent = displayValue;
};

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    updateDisplay(e.target.textContent);
  });
});

btnEquals.addEventListener("click", () => {
  console.log(displayValue);
  const op = displayValue.match(/[+\-*÷×]/)[0];
  let [n1, n2] = displayValue.split(op);
  const num1 = +n1;
  const num2 = +n2;
  let result = operate(num1, num2, op);
  let finalResult = "";
  console.log(typeof result === "number");
  if (typeof result === "number") {
    finalResult = Math.round(result * 1000) / 1000;
  } else {
    finalResult = result.toString();
  }
  clearDisplay();
  updateDisplay(finalResult);
});

btnClear.addEventListener("click", () => {
  clearDisplay();
});
