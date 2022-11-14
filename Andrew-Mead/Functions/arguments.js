//Multiple arguments

let add = function (a, b, c) {
    return a + b + c
}


let resultAdd = add(10, 1, 5)

console.log(resultAdd)

// Default arguments

// if there is no argument in callstack that is when it will use the default argument, otherwise.

let getScoreText = function (name = "Andrew", score = 0) {

    // return "Name:" + " " + name + ", Score:" + " " + score

    return `Name: ${name}, Score: ${score}`



}


let result1 = getScoreText(undefined, 50)
let result2 = getScoreText("Divine", 19)

// console.log(result1, ",", "Default argument")
// console.log(result2, ",", "callstack argument")

console.log(`${result1} , Default argument`)
console.log(`${result2} , callStack argument`)


//Challenge area

console.log("------------------Challenge area")

let viewResult = function (total = .2, tipPercent) {
    var tip = tipPercent * 100
    var total = total * tipPercent

    return `\n TipPercent: $${tip}\n Total: $${total}`
}

var output = viewResult(undefined, 100)
console.log(output)

let guyName = "viewSob"

console.log(`The guy name of my classmate is ${guyName} `)