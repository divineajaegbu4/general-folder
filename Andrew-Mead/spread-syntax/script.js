// Array spread syntax
const printItem = (teamNote, coach, ...players) => {
    console.log(`Team: ${teamNote}`)
    console.log(`Coach: ${coach}`)
    console.log(`players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey poem',
    players: ['Merge', 'Aiden', 'Herbert', 'Sherry']
}

printItem(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Bardeaux']
cities = [...cities, 'Divine']
console.log(cities)

// Object spread syntax

const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const updatedUser = { ...user, age: 56 }; // {name: "Alex", address: "15th Park Avenue", age: 56}

console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}


// Challenge area

const person = {
    firstName: "Divine",
    age: 19,
    city: 'Lagos',
    country: 'Nigeria'
}


const viewPerson = {
    location: person.city + ' ' + person.country,
    ...person
}

console.log(person)
console.log(viewPerson)