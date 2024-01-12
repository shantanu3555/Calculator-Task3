let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.innerText = displayValue.length > 10 ? 'Error' : displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = number.toString();
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (operator !== '' && firstOperand !== null) {
        calculateResult();
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
}

function calculateResult() {
    const secondOperand = parseFloat(displayValue);
    switch (operator) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand !== 0) {
                displayValue = (firstOperand / secondOperand).toString();
            } else {
                displayValue = 'Error';
            }
            break;
    }
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

updateDisplay();
