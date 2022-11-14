const products = []
const product = [0]

const p =

    console.log(typeof (products))

console.log(products !== undefined ? "AN" : "CV")


if ((products === undefined)) {
    console.log("A")
} else {
    console.log("B")
}


//Falsy and Truthy

console.log("-----------------------------Falsy and Truthy")

//This is truthy values
const Truthy = "testing" ? "Page found" : "Page not found"
const Truthy2 = Number ? "Number found" : "Dosen't"
const Truthy3 = Boolean ? "Divine" : "Nothing"


//This is falsy values

const false1 = undefined ? "Good" : "Wrong"

const false2 = null ? "Null values" : "Hardest"

const false3 = "" ? "Stringe Values" : "none"

const false4 = {} ? "EmptyObjects" : "Viewers"

const false5 = NaN ? "Invalid number" : "Valid number"

const sellProducts = !p ? "true" : "false"

console.log(Truthy)
console.log(Truthy2)
console.log(Truthy3)
console.log(false1)
console.log(false2)
console.log(false3)
console.log(false4)
console.log(false5)

console.log(sellProducts)