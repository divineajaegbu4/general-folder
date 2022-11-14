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

// Destructuring


const todo = {
   name: "beans",
   text: "Beans gives protein and also makes us healthy",
   completed: true,
   country: 'Nigeria'
}

const { name, text, completed: notCompleted, details = {
   firstName: 'Divine',
   lastName: 'Albert',
   maritalStatus: 'single',
   overview: function () {
      return `firstName: ${this.firstName}, lastName: ${this.lastName}, maritalStatus: ${this.maritalStatus}`
   }
} } = todo
console.log(name)
console.log(text)
console.log("overrideSelection:", notCompleted)
console.log(details.overview())

//For Arrays

const age = [1, 56, 32]

const [firstAge, ...others] = age

console.log(firstAge)
console.log(others)

//function destructuring

const printItems = (todo) => {
   console.log(`${todo.text}, ${todo.completed}`)
}

const printItems2 = ({ text, name }) => {
   console.log(`${text}, ${name}`)
}
const printItems3 = ([firstAge, lastAge]) => {
   console.log(`${firstAge}, ${lastAge}`)
}


printItems(todo)
printItems2(todo)
printItems3(age)