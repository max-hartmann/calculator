let displayNumber = "";
let currentOperator = "";
let firstNumber = "";
let secondNumber = "";
let requiresScreenReset = false;
let addDecimalWithNextInput = false;

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
const decimalBtn = document.querySelector(".btn-decimal");

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

decimalBtn.addEventListener("click", addDecimalPoint);

clearBtn.addEventListener("click", clear);

deleteBtn.addEventListener("click", () => {
    deleteLastDigit();
    updateDisplay();
})

equalBtn.addEventListener("click", evaluate);

function evaluate() {
    if(requiresScreenReset || !currentOperator) return;
    secondNumber = displayNumber;
 
    displayNumber = operate(currentOperator, firstNumber, secondNumber);
    if(currentOperator==="/" && secondNumber === 0) {
        displayNumber = "Do not divide by 0";
    }

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

    if(addDecimalWithNextInput) {
        displayNumber = parseFloat("" + displayNumber + "." + number);
        addDecimalWithNextInput = false;
    } else {
        displayNumber = parseFloat("" + displayNumber + number);
    }
}

function addDecimalPoint() {
    
    if(displayNumber.toString().includes(".")) return;
    addDecimalWithNextInput = true;

}

function deleteLastDigit() {
    displayNumber = displayNumber.toString().slice(0, -1);
}

function updateDisplay() {
    mainResultDiv.textContent = displayNumber;
    subResultDiv.textContent = `${firstNumber ? firstNumber : ""} ${currentOperator ? currentOperator : ""} ${secondNumber ? secondNumber : ""}`;
}

function clear() {
    displayNumber = "";
    currentOperator = "";
    firstNumber = "";
    secondNumber = "";
    updateDisplay();
}

function round(number) {
    return Math.round(number*100000000000000)/100000000000000;
}

function operate(operator, a, b) {
    if (operator === "+") return round(add(a, b));
    if (operator === "-") return round(subtract(a, b));
    if (operator === "x") return round(multiply(a, b));
    if (operator === "/") return round(divide(a, b));
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
