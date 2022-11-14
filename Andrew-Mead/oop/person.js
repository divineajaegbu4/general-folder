class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    generalName() {
        return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
    }
}


const callPerson = new Person("Ajaegbu", "Divine", 19)
console.log(callPerson.generalName())
callPerson.generalName = function (names) {
    return names.toUpperCase()
}

console.log(callPerson.generalName('Albert is heading towards office right now!'))

console.log(callPerson.lastName)

// const Person = function (firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
// }


// const me = new Person("Divne", "Albert", 34)

// console.log(me.lastName)