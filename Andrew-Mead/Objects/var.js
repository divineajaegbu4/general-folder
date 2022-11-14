console.log("---------------------------Var Variable")

// var is a function scope. You can re-declare it and re-assign it.

if ((100 === 100)) {
    var div = "Albert"
}

console.log(div)

console.log("---------------------------Let Variable")

// let is a block scope. You cannot re-declare it but you can re-assign it.

let view = {
    age: 20
}

view = {
    name: "Divine"
}

console.log(view)


console.log("---------------------------Const Variable")
// Const is also a block scope.You cannot re-declare and re-assign it.


const ageMate = {
    age: 20
}

ageMate.age = ageMate.age + 1

console.log(ageMate.age)