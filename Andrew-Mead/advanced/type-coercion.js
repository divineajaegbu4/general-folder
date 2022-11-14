
//When you add boolean and number, True is one(1) and false is zero(0)
//loose equality(==) allow coercion, While strict equality(===) disallows corecion but is only where the two number are the same.

console.log(Number('5') == 5)

const value = true + 23
const value2 = false + 23
const divide = 10 / (true + true)
const bigInts = 1238n

const type = typeof (value)


console.log(type)

console.log(value)
console.log(value2)
console.log(divide)

console.log(typeof (bigInts))