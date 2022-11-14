let myBook = {
    title: 1984,
    author: "George Orwell",
    pageCount: 1943
}

console.log(`${myBook.title} by ${myBook.author}`)

// modify the title

myBook.title = "Albert"
myBook.author = "Divine"

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

console.log("--------------------------------Challenge area")

// name, age and Location
// Andrew is 27 years old and lives in philadelphia.
// Increase age by 1 and print message again

let mySelf = {
    name: "Andrew",
    age: 27,
    location: "Philadelphia"
}

console.log(`${mySelf.name} is ${mySelf.age} years old and lives in ${mySelf.location}`)

// Modify and Increase age by 1

increment = mySelf.age += 1

console.log(`Increment Age: ${increment} years old`)
