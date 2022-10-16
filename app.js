let displayNumber = "";
let currentOperator = "";
let firstNumber = "";
let secondNumber = "";
let requiresScreenReset = false;

const mainResultDiv = document.querySelector(".mainresult");
const subResultDiv = document.querySelector(".subresult");
const btn = document.querySelectorAll(".btn-number");
const addBtn = document.querySelector(".btn-add");
const subtractBtn = document.querySelector(".btn-subtract");
const multiplyBtn = document.querySelector(".btn-multiply");
const divideBtn = document.querySelector(".btn-divide");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");
const deleteBtn = document.querySelector(".btn-delete");

btn.forEach(elem => elem.addEventListener("click", () => {
    getNumberInput(elem.textContent);
    updateDisplay();
}));

addBtn.addEventListener("click", () => {
   setOperator("+");
});

subtractBtn.addEventListener("click", () => {
    setOperator("-");
});

multiplyBtn.addEventListener("click", () => {
    setOperator("x");
});

divideBtn.addEventListener("click", () => {
    setOperator("/");
});

clearBtn.addEventListener("click", clear);

deleteBtn.addEventListener("click", () => {
   
})

equalBtn.addEventListener("click", evaluate);

function evaluate() {
    if(requiresScreenReset) return;
    secondNumber = displayNumber;
    displayNumber = operate(currentOperator, firstNumber, secondNumber);
    updateDisplay();
    requiresScreenReset = true;
    currentOperator = "";
}

function setOperator(operator) {
    if(currentOperator) evaluate();

    currentOperator = operator;
    firstNumber = displayNumber;
    requiresScreenReset = true;
}

function getNumberInput(number) {
    if(requiresScreenReset) {
        displayNumber = 0;
        updateDisplay();
        requiresScreenReset = false;
    }
    displayNumber = parseInt("" + displayNumber + number);
}

function updateDisplay() {
    mainResultDiv.textContent = displayNumber;
    // subResultDiv.textContent = `${firstOperand ? firstOperand : ""} ${currentOperator ? currentOperator : ""} ${secondOperand ? secondOperand : ""}`;
}

function clear() {
    displayNumber = "";
    currentOperator = "";
    firstNumber = "";
    secondNumber = "";
    updateDisplay();
}

function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "x") return multiply(a, b);
    if (operator === "/") return divide(a, b);
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
    if (b === 0) return "ERROR";
    return a / b;
}
