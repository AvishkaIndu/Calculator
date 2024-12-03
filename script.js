let display = document.getElementById('display');
let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (operator === '%') {
        currentExpression += '/100'; // Convert percentage to fraction
    } else {
        currentExpression += operator;
    }
    updateDisplay();
}

function appendFunction(func) {
    currentExpression += func;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentExpression.replace('^', '**'));
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
        setTimeout(() => clearDisplay(), 2000); // Clear after showing error
    }
}

function updateDisplay() {
    display.textContent = currentExpression || '0';
}

// Toggle Theme
function toggleTheme() {
    const body = document.body;
    const themeText = document.getElementById('themeText');
    body.classList.toggle('light-theme');
    themeText.textContent = body.classList.contains('light-theme') ? 'Light Mode' : 'Dark Mode';
}
