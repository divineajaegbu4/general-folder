"use strict";

class calculator {
    constructor(display, button) {
        this.display = display;
        this.button = button;
        this.buffer = "0";
        this.runningTotal = 0;
        this.previousOperator;
        callBack();
    }

    generalFn(value) {
        if (isNaN(parseFloat(value))) {
            this.handleSymbol(value)
        } else {
            this.handleNumber(value)
        }

        this.screen()
    }

    handleNumber(value) {
        if (this.buffer === "0") {
            this.buffer = value
        } else {
            this.buffer += value;
        }

    }

    screen() {
        this.display.innerText = this.buffer;
    }

    handleSymbol(value) {
        switch (value) {
            case "C":
                this.buffer = "0";
                this.runningTotal = 0;
                this.previousOperator = null;
                break;


            case "←":
                if (this.buffer.length === 1) {
                    this.buffer = "0"
                } else {
                    this.buffer = this.buffer.substring(0, this.buffer.length - 1)
                    this.runningTotal = 0;
                    this.previousOperator = null;
                }
                break;


            case "=":
                if (this.previousOperator === null) {
                    return value;
                } else {
                    this.totalAnswerMath(parseFloat(this.buffer));
                    this.buffer = +this.runningTotal;
                    this.previousOperator = null
                }
                break;



            case ".":
                this.buffer += value;
                break;



            default:
                this.handleMath(value);
                break;
        }
    }

    handleMath(value) {
        if (this.buffer === "0") {
            return value;
        }

        const intBuffer = parseFloat(this.buffer)

        if (this.runningTotal === 0) {
            this.runningTotal = intBuffer
        } else {
            this.totalAnswerMath(intBuffer)
        }

        this.previousOperator = value;
        this.buffer = "0"
    }


    totalAnswerMath(intBuffer) {
        if (this.previousOperator === "×") {
            this.runningTotal *= intBuffer
        } else if (this.previousOperator === "+") {
            this.runningTotal += intBuffer;
        } else if (this.previousOperator === "₋") {
            this.runningTotal -= intBuffer
        } else {
            this.runningTotal /= intBuffer
        }
    }
}




const display = document.querySelector(".display");
const button = document.querySelector(".calc-button");

const callBack = () => {
    button.addEventListener("click", function(e) {
        calculators.generalFn(e.target.innerText)
    })
}

const calculators = new calculator(display, button)