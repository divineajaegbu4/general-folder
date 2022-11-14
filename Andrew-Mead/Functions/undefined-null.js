// undefined for variable

let firstName

firstName = "Divine"

if ((firstName === undefined)) {
    console.log("Please provide a name")
} else {
    console.log(firstName)
}

// undefined for function argument
// undefined as function return default value
let square = function (num) {
    console.log(num)
}

square()

let result = square()
console.log(result)


// null as assigned value
let age = 37

age = null

console.log(age)