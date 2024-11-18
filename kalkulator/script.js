let currentNumber = '0';
let previousNumber = '';
let operation = null;
let shouldResetDisplay = false;
let history = '';

// Ganti Tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.setAttribute('data-theme',
        themeToggle.checked ? 'dark': 'light');
});

function updateDisplay() {
    document.getElementById('result').textContent = currentNumber;
    document.getElementById('history').textContent = history;
}

function appendNumber(number) {
    if (currentNumber === '0' || shouldResetDisplay) {
        currentNumber = number;
        shouldResetDisplay = false;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operation = null;
    history = '';
    updateDisplay();
}

function clearEntry() {
    currentNumber = '0';
    updateDisplay();
}

function backspace() {
    if (currentNumber.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
    } else {
        currentNumber = '0';
    }
    updateDisplay();
}

function toggleSign() {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null) {
        calculate();
    }
    previousNumber = currentNumber;
    operation = op;
    history = `${previousNumber} ${op}`;
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate() {
    if (operation === null || shouldResetDisplay) {
        return;
    }

    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    history = `${prev} ${operation} ${current} =`;

    let result;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
        }

        currentNumber = result.toString();
        operation = null;
        updateDisplay();
    }

    updateDisplay();