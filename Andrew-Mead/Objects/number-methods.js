var num = 105.951

console.log(num.toFixed(1))

//Math round method

console.log(Math.round(num))


// Math floor method
console.log(Math.floor(num))

// Math ceil method(rounding up)
console.log(Math.ceil(num))


// Math random method

var min = 10
var max = 20

var random = Math.random()

console.log(random)
console.log(Math.floor(random) + Math.round(num))

console.log(Math.floor(Math.random() * (max - min + 1))) + min
console.log(Math.floor(Math.random() * (min + 1))) + min


// Challenge area

console.log("-------------------------------Challenge area")

// 1-5 if is correct otherwise


function makeGuess(max, min) {
    emptyStr = ""

    if ((
        Math.floor(Math.random() * (max - min + 1)) + min === 1
        || Math.floor(Math.random() * (max - min + 1)) + min === 5
    )) {
        emptyStr = true
    } else {
        emptyStr = false
    }

    return emptyStr

}


console.log(makeGuess(10, 5))


// Andrew Mead

console.log("----------------------------------Andrew Mead")

function makeGuesses(guess) {

    var min = 10
    var max = 20
    var randomResult = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomResult

}

console.log(makeGuesses(1))
