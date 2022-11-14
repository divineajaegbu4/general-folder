'use strict'

const display = document.querySelector('.display')
const buttons = document.querySelector('.calc-button')

let operationValue = '0'
let expressionTotal = 0
let previousOperator;
// let comma = new Intl.NumberFormat("en-US")

const calcButton = () => {
    buttons.addEventListener('click', function(e) {
        generalFn(e.target.innerText)
    })
}

const generalFn = (value) => {
    if (!isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    screen()
}

const handleNumber = (value) => {
    if (operationValue === '0') {
        operationValue = value
    } else {
        operationValue += value
    }
}


function separator(num) {
    var str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

screen = () => {
    display.innerText = separator(operationValue);
    // addComma()
}

const handleSymbol = (value) => {
    switch (value) {
        case 'C':
            operationValue = '0'
            expressionTotal = 0
            previousOperator = undefined
            break

        case '←':
            if (operationValue.length === 1) {
                operationValues = '0'
            } else {
                operationValue = operationValue.substring(0, operationValue.length - 1)
            }
            break;

        case "=":
            if (previousOperator === null) {
                return value;
            }
            totalAnswerMath(parseInt(operationValue));
            operationValue = +expressionTotal;
            expressionTotal = 0;
            break;


        case ".":
            totalAnswerMath(parseFloat(operationValue));
            operationValue += value;
            // comma.format(operationValue)
            break;

        default:
            handleMath(value)
            break;

    }
}

const handleMath = (value) => {
    if (!operationValue === "0") {
        return value;
    }

    const finalAnswer = parseFloat(operationValue)

    if (expressionTotal === 0) {
        expressionTotal = finalAnswer
    } else {
        totalAnswerMath(finalAnswer)
    }

    previousOperator = value;
    operationValue = "0";
}

const totalAnswerMath = (finalAnswer) => {
    if (previousOperator === "×") {
        expressionTotal *= finalAnswer
    } else if (previousOperator === "+") {
        expressionTotal += finalAnswer
    } else if (previousOperator === "₋") {
        expressionTotal *= finalAnswer
    } else {
        expressionTotal /= finalAnswer
    }
}

calcButton();