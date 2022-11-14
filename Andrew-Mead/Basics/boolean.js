// === - equality operator(strict equality)
// !== - not equal to operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

var temp = 31

var isFreezing1 = temp !== 32 // true
var isFreezing2 = temp === 32 // false
var isFreezing3 = temp == 60 // false
var isFreezing4 = temp < 32 // true
var isFreezing5 = temp > 29 // true
var isFreezing6 = temp <= 31 // true
var isFreezing7 = temp >= 31 // true

var totalOperator = `${isFreezing1}\n ${isFreezing2}\n ${isFreezing2}\n ${isFreezing4}\n ${isFreezing5}\n ${isFreezing6}\n ${isFreezing7}`

console.log(totalOperator)

console.log("------------------------------Challenge area")
// Challenge area

// Create age set to your age
let divineAge = 19

// Calculate is child - if they are 7 or under
let isChild = divineAge === 19

// Calculate is senior - if they are 65 or older
let isSenior = divineAge > 10
// print both values
let totalAge = `${isChild} \n ${isSenior}`

console.log(totalAge)


// Challenge area
console.log("----------------------------------Challenge area if statements age")

// if 7 or under print message about child pricing

if (isChild) {
    console.log("True age")
}


// if 65 or older print message about senior discount

if (isSenior) {
    console.log("Exact age")
}

if (divineAge < 20) {
    console.log("The same")
}


console.log("----------------------------------if statements freezing")

if (isFreezing1) {
    console.log("it is freezing outside")
}


if (isFreezing2) {
    console.log("it is false freezing")
}

if (isFreezing3) {
    console.log("it is the same false")
}


if (isFreezing4) {
    console.log("it is true freezing")
}


if (isFreezing5) {
    console.log("it is way of true")
}


if (isFreezing6) {
    console.log("That's true freezing")
}
if (isFreezing7) {
    console.log("true freezing conclusion")
} 