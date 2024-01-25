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
      populateDisplay('0');
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

        firstNumber = '';
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
    