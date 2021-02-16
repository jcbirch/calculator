let currentValue = [];
let operator;
let firstNumber = [];
let secondNumber = [];
let finalValue;
populateDisplay();
clearDisplay();
getFirstNumber();
getSecondNumber();
assignOperator();
getFinalValue(firstNumber, secondNumber);

function populateDisplay() {
    document.getElementById('display').innerHTML = 0; 
}

function getFirstNumber() {
    document.querySelectorAll('.number').forEach(item => {
        item.addEventListener('click', event => {
            if (currentValue[0] === "0") {
                clearDisplay();
            } else {
                currentValue.push(item.value);
                document.getElementById('display').innerHTML = currentValue.join("");
                firstNumber = [...currentValue];
                firstNumber = firstNumber.join("");
                firstNumber = parseInt(firstNumber); 
            }
        })
    })
}

function getSecondNumber() {
    document.querySelectorAll('.number').forEach(item => {
        item.addEventListener('click', event => {
            currentValue = [];
            populateDisplay();
            if (currentValue[0] === "0") {
                clearDisplay();
            } else {
                currentValue.push(item.value);
                document.getElementById('display').innerHTML = currentValue.join("");
                secondNumber = [...currentValue];
                secondNumber = secondNumber.join("");
                secondNumber = parseInt(secondNumber);
                
            }

        })
    })
}

function clearDisplay() {
    document.querySelectorAll('.ac').forEach(item => {
        item.addEventListener('click', event => {
            currentValue = [];
            firstNumber = [];
            secondNumber = [];
            finalValue = 0;
            populateDisplay();
        })
    })
}

function assignOperator() {
    document.querySelectorAll('.operator').forEach(item => {
        item.addEventListener('click', event => {
            
            if (firstNumber == 0) {
                assignOperator();
                clearDisplay();
            }   
            if (item.value == "/") {
                operator = item.value;

                getSecondNumber();
            } else if (item.value == "*") {
                operator = item.value;

                getSecondNumber();
            } else if (item.value == "-") {
                operator = item.value;

                getSecondNumber();
            } else if (item.value == "+") {
                operator = item.value;

                getSecondNumber();
            }

        })
    })
}

function getFinalValue(a, b) {
    document.querySelector('.equals').addEventListener('click', event => {
            currentValue = [];
            if (operator == "/") {
                finalValue = divideNumbers(firstNumber, secondNumber);
                document.getElementById('display').innerHTML = finalValue;
            } else if (operator == "*") {
                finalValue = multiplyNumbers(firstNumber, secondNumber);
                document.getElementById('display').innerHTML = finalValue;
            } else if (operator == "-") {
                finalValue = subtractNumbers(firstNumber, secondNumber);
                document.getElementById('display').innerHTML = finalValue;
            } else if (operator == "+") {
                finalValue = addNumbers(firstNumber, secondNumber);
                document.getElementById('display').innerHTML = finalValue;
            }

        })
   
}

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}