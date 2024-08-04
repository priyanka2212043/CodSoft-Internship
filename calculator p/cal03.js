let display = document.getElementById('display');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (display.value === '' || shouldResetDisplay) {
        resetDisplay();
    }
    display.value += number;
}

function resetDisplay() {
    display.value = '';
    shouldResetDisplay = false;
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function chooseOperation(operation) {
    if (currentOperation !== null) {
        compute();
    }
    firstOperand = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function compute() {
    if (currentOperation === null || shouldResetDisplay) return;
    if (currentOperation === '/' && display.value === '0') {
        alert("Cannot divide by zero");
        clearDisplay();
        return;
    }
    secondOperand = display.value;
    display.value = operate(currentOperation, firstOperand, secondOperand);
    currentOperation = null;
}

function operate(operation, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}
