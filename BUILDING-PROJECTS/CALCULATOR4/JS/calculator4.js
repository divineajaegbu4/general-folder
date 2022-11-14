const display = document.querySelector(".display");
const calcButtons = document.querySelector(".calc-button");

//declare variables goes here
let expression = "0";
let expressionTotal = 0;
let declaration;

//value is the (e.target.innerText)

buttonClick = () => {
    calcButtons.addEventListener("click", function(e) {
        generalFn(e.target.innerText);
    })
}

generalFn = (value) => {
    if (isNaN(parseInt(value))) {
        handleSymbols(value)
    } else {
        handleNumbers(value)
    }
    //screen function
    screen();
}

// handleSymbols goes here
handleSymbols = (value) => {
    switch (value) { //bundle of if statements
        case "C":
            expression = "0";
            expressionTotal = 0;
            declaration = null;
            break; //statement
        case "←":
            if (expression.length === 1) {
                expression = "0"
                expressionTotal = 0;
                declaration = null;
            } else {
                expression = expression.substring(0, expression.length - 1)
            }
            break;
        case "=":
            if (expressionTotal === 0) {
                return value; //return e.target.innerText;
            } else {
                totalAnswerMath(parseInt(expression))
                expression = +expressionTotal
                declaration = null;
            }
            break;

        default: //means else
            handleMath(value) //handleMath(e.target.innerText)
            break;
    }
}

handleMath = (value) => {
    if (expression === "0") {
        return value //return e.target.innerText
    }
    const resultMath = parseInt(expression)
    if (expressionTotal === 0) {
        expressionTotal = resultMath; //expressionTotal is redeclare to expression
    } else {
        totalAnswerMath(resultMath)
    }

    declaration = value;
    expression = "0";
}

totalAnswerMath = (resultMath) => {
    if (declaration === "×") {
        expressionTotal *= resultMath;
    } else if (declaration === "÷") {
        expressionTotal /= resultMath;
    } else if (declaration === "+") {
        expressionTotal += resultMath;
    } else {
        expressionTotal -= resultMath;
    }

}

//handleNumber goes here
handleNumbers = (value) => {
    if (expression === "0") {
        expression = value; //expression = e.target.innerText;
    } else {
        expression += value;
        //expression is now (e.target.innerText) e.target.innerText + e.target.innerText;   
    }
}

screen = () => {
    display.innerText = expression;
}




buttonClick();