let displayValue = 0;
let currentOperator = "";
let firstOperand = 0;
let secondOperand = 0;

const mainResultDiv = document.querySelector(".mainresult");
const subResultDiv = document.querySelector(".subresult");
const btn = document.querySelectorAll(".btn-number");
const addBtn = document.querySelector(".btn-add");
const subtractBtn = document.querySelector(".btn-subtract");
const multiplyBtn = document.querySelector(".btn-multiply");
const divideBtn = document.querySelector(".btn-divide");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");

btn.forEach(elem => elem.addEventListener("click", () => {
    getNumberInput(elem.textContent);
}));

addBtn.addEventListener("click", () => {
    firstOperand = displayValue;
    currentOperator = "+";
    displayValue = 0;
    updateDisplay();
});

subtractBtn.addEventListener("click", () => {
    firstOperand = displayValue;
    currentOperator = "-";
    displayValue = 0;
    updateDisplay();
});

multiplyBtn.addEventListener("click", () => {
    firstOperand = displayValue;
    currentOperator = "x";
    displayValue = 0;
    updateDisplay();
});

divideBtn.addEventListener("click", () => {
    firstOperand = displayValue;
    currentOperator = "/";
    displayValue = 0;
    updateDisplay();
});

clearBtn.addEventListener("click", clear);

equalBtn.addEventListener("click", () => {
    secondOperand = displayValue;
    operate(currentOperator, firstOperand, secondOperand);
    updateDisplay();
});


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if(b===0) return "ERROR";
    return a/b;
}

function operate(operator, a, b) {
    if(operator === "+") displayValue = add(a,b);
    if(operator === "-") displayValue = subtract(a,b);
    if(operator === "x") displayValue = multiply(a,b);
    if(operator === "/") displayValue = divide(a,b);
}

function getNumberInput(number) {
    let displayValueString = "" + displayValue + number;
    displayValue = parseInt(displayValueString);

    updateDisplay();
}

function updateDisplay() {
    mainResultDiv.textContent = displayValue;
    subResultDiv.textContent = firstOperand + currentOperator + secondOperand;
}

function clear() {
    displayValue = 0;
    firstOperand = 0;
    secondOperand = 0;
    currentOperator = "";

    updateDisplay();
}