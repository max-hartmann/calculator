let displayValue = 0;

let currentOperator = "";
let firstOperand = 0;
let secondOperand = 0;

const mainResultDiv = document.querySelector(".mainresult");
const subResultDiv = document.querySelector(".subresult");
const btn = document.querySelectorAll(".btn-number");
const addBtn = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");

btn.forEach(elem => elem.addEventListener("click", () => {
    getNumberInput(elem.textContent);
}));

addBtn.addEventListener("click", () => {
    firstOperand = displayValue;
    currentOperator = "add";
    clear();
    updateDisplay();
});

clearBtn.addEventListener("click", clear);
equalBtn.addEventListener("click", () => {
    operate(currentOperator, firstOperand, displayValue);
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
    if(operator === "add") displayValue = add(a,b);
    if(operator === "subtract") return subtract(a,b);
    if(operator === "multiply") return multiply(a,b);
    if(operator === "divide") return divide(a,b);
}

function getNumberInput(number) {
    let displayValueString = "" + displayValue + number;
    displayValue = parseInt(displayValueString);

    updateDisplay();
}

function updateDisplay() {
    mainResultDiv.textContent = displayValue;
    subResultDiv.textContent = firstOperand + currentOperator;
}

function clear() {
    displayValue = 0;
    updateDisplay();
}