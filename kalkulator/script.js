let currentExpression = '0';
let shouldResetDisplay = false;
let history = '';

// Ganti Tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.setAttribute('data-theme',
        themeToggle.checked ? 'dark' : 'light');
});

function updateDisplay() {
    document.getElementById('result').textContent = currentExpression;
    document.getElementById('history').textContent = history;
}

function appendNumber(number) {
    if (currentExpression === '0' || shouldResetDisplay) {
        currentExpression = number;
        shouldResetDisplay = false;
    } else {
        currentExpression += number;
    }
    updateDisplay();
}

function appendOperation(op) {
    if (currentExpression.slice(-1).match(/[+\-*/]/)) {
        currentExpression = currentExpression.slice(0, -1) + op;
    } else {
        currentExpression += op;
    }
    shouldResetDisplay = false;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '0';
    history = '';
    updateDisplay();
}

function clearEntry() {
    if (currentExpression.slice(-1).match(/[+\-*/]/)) {
        currentExpression = currentExpression.slice(0, -1);
    } else {
        currentExpression = '0';
    }
    updateDisplay();
}

function backspace() {
    if (currentExpression.length > 1) {
        currentExpression = currentExpression.slice(0, -1);
    } else {
        currentExpression = '0';
    }
    updateDisplay();
}

function toggleSign() {
    if (currentExpression === '0') return;
    
    const regex = /(-?\d*\.?\d+)$/;
    const match = currentExpression.match(regex);
    
    if (match) {
        const lastNumber = match[0];
        const toggledNumber = parseFloat(lastNumber) * -1;
        currentExpression = currentExpression.slice(0, -lastNumber.length) + toggledNumber;
        updateDisplay();
    }
}

function calculate() {
    try {
        history = currentExpression + ' =';
        const expression = currentExpression.replace(/×/g, '*');
        currentExpression = eval(expression).toString();
        shouldResetDisplay = true;
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        shouldResetDisplay = true;
        updateDisplay();
    }
}

updateDisplay();
