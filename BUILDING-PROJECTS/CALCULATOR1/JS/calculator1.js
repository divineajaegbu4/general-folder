const calcButtons = document.querySelector('.calc-buttons')
const screen = document.querySelector('.screen')

let runningTotal = 0
let buffer = '0'
let previousOperator

function clickButtons() {
    calcButtons.addEventListener('click', function(e) {
        buttonClick(e.target.innerText)
    })
}

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    // screen function
    screenShow()
}

function handleNumber(value) {
    if (buffer === '0') {
        buffer = value
    } else {
        buffer += value
    }
}

function screenShow() {
    screen.innerText = buffer
}

function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = '0'
            runningTotal = 0
            previousOperator
            break
        case '←':
            if (buffer.length === 1) {
                buffer = '0'
            } else {
                buffer = buffer.slice(-0, buffer.length - 1)
            }
            break

        case '=':
            if (previousOperator === null) {
                // need two numbers to do math
                return
            }
            totalAnswer(parseInt(buffer))
            previousOperator = null
            buffer = +runningTotal
            runningTotal = 0
            break

        default:
            handleMath(value)
            break;
    }
}

function handleMath(value) {
    if (buffer === '0') {
        return
    }
    const intBuffer = parseInt(buffer)
    if (runningTotal === 0) {
        runningTotal = intBuffer
    } else {
        totalAnswer(intBuffer)
    }

    previousOperator = value

    buffer = '0'
}

function totalAnswer(intBuffer) {
    if (previousOperator === '×') {
        runningTotal *= intBuffer
    } else if (previousOperator === '+') {
        runningTotal += intBuffer
    } else if (previousOperator === '₋') {
        runningTotal += intBuffer
    } else {
        runningTotal /= intBuffer
    }
}

clickButtons()