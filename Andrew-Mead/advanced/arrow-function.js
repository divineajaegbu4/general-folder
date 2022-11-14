const square = (num) => {
    return num * num
}

const square1 = num => num + num


let people = [
    {
        name: 'Albert',
        age: 29
    },
    {
        name: 'Divine',
        age: 19
    },
    {
        name: 'Bekee',
        age: 2
    },
]

// const notUp20 = people.filter(function (person) {
//     return person.age < 20
// })
const notUp20 = people.filter(person => person.age < 20)

const ageMates = people.find(age => age.age === 19)



console.log(square(5))
console.log(square1(5))
console.log(notUp20)
console.log(ageMates.name)
console.log(people[0].name)