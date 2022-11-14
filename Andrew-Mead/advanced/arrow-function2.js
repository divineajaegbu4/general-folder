//Arguments only exists in regular functions(means it only works with regular functions)
//Regular functions works for Object or Object methods(but arrow function didn't works)
const add = function (a, b) {
    console.log(arguments)
}

const add2 = function () {
    return arguments[0] + arguments[3]
}

add(1, 33, 6, 88)
console.log(add2(1, 34, 23, 67, 65))


let car = {
    color: 'red',
    name: 'Toyota',
    getSummary() {
        return `The car is ${this.name
            } ${this.color}`
    }
}


console.log(car.getSummary())