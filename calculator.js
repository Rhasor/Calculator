let firstNumber = '';
let operator = '';
let secondNumber = '';

function populateDisplay(value) {
  document.getElementById('display').innerText = value;
}

function clearDisplay() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  populateDisplay('0');
}

function backspace() {
  let displayValue = document.getElementById('display').innerText;
  displayValue = displayValue.slice(0, -1);
  populateDisplay(displayValue === '' ? '0' : displayValue);
}

function operate(selectedOperator) {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    calculate();
  }
  firstNumber = document.getElementById('display').innerText;
  operator = selectedOperator;
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    firstNumber = String(parseFloat(firstNumber));
    secondNumber = String(parseFloat(secondNumber));

    switch (operator) {
      case '+':
        populateDisplay(String(parseFloat(firstNumber) + parseFloat(secondNumber)));
        break;
      case '-':
        populateDisplay(String(parseFloat(firstNumber) - parseFloat(secondNumber)));
        break;
      case '*':
        populateDisplay(String(parseFloat(firstNumber) * parseFloat(secondNumber)));
        break;
      case '/':
        if (secondNumber === '0') {
          populateDisplay('Error');
        } else {
          populateDisplay(String(parseFloat(firstNumber) / parseFloat(secondNumber)));
        }
        break;
      default:
        break;
    }

    firstNumber = document.getElementById('display').innerText; // Update to keep the current display value
    operator = '';
    secondNumber = '';
  }
}

function equals() {
  if (firstNumber !== '' && operator !== '') {
    secondNumber = document.getElementById('display').innerText;
    calculate();
    firstNumber = '';
    operator = '';
  }
}

// Additional: Decimal button
function inputDecimal() {
  let displayValue = document.getElementById('display').innerText;

  if (!displayValue.includes('.')) {
    displayValue += '.';
    populateDisplay(displayValue);
  }
}

// Additional: Keyboard support
document.addEventListener('keydown', function (event) {
  handleKeyPress(event.key);
});

function handleKeyPress(key) {
  // Implement logic to handle the key press (e.g., calling the respective functions)
  switch (key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      populateDisplay(key);
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      operate(key);
      break;
    case 'Enter':
      equals();
      break;
    case '.':
      inputDecimal();
      break;
    case 'Backspace':
      backspace();
      break;
    case 'c':
      clearDisplay();
      break;
    default:
      break;
  }
}
