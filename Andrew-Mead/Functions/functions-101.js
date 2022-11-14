//Functions-input(argument), code, output(return value)


let greetUser = function () {
    console.log("Welcome User!")
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log("\n", value, "\n", otherValue)


// Challenge area
console.log("----------------------------Challenge area")

// 1. ConvertFahreheitToCelsius

// 2. Call a couple of times (32 -> 0)(68 -> 20)

// 3. Print the converted values


let convertFahreheitToCelsius = function (fahreheit) {
    let result = (fahreheit - 32) * 5 / 9

    return result
}


let totalConvertion1 = convertFahreheitToCelsius(68)
let totalConvertion2 = convertFahreheitToCelsius(32)

console.log(totalConvertion2)
console.log(totalConvertion1)
