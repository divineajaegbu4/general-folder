console.log('--------------------------------First Variable')
let firstName = 'Divine'
let lastName = 'Albert'
let age = 27

let user = function(myName, myLast, myAge) {
    let returnValue = `my name is ${myName} ${myLast} and i ame ${myAge}`
    return returnValue
}

let totalUser = user(firstName, lastName, age)
console.log(totalUser)

console.log('--------------------------------Second Variable')
var ageValue = 50

ageValue++

ageValue += 5

console.log(ageValue)

console.log('--------------------------------Values')
let clone = 'stuff'
let scroll = 'position'

console.log(`stuff and position are the values ${clone} and ${scroll}`)

console.log('--------------------------------Operations')

let num = 30
let operand = 50

function operations(numValue, scopeValue) {
    let calcScore = numValue + scopeValue
    return calcScore
}

let totalScore = operations(num, operand)
console.log(`the operators are: =, +, *, !==, !, ==, ===, =,<, ++, +=(etc)
<, <=, >=. and the operands are ${num} and ${operand}. the operators is +. 
the total calcScore is ${totalScore}`)

console.log('--------------------------------Types')
console.log(typeof 10)
console.log(typeof true)
console.log(typeof 'clone')
console.log(typeof studentIsDeliberate)
console.log(typeof null)
console.log(typeof undefined)
console.log(
    '----------------------------------Difference blw null and undefined',
)
console.log(`null and undefined means emptiness but the two difference is that:
undefined: You have declare a variable but you have not assign it anything but
null: means 0 (nothing)`)

console.log('--------------------------------Expression and Statement')

function expression() {
    let value = 10
    return (value = 5 * (value + 10))
}

let result = expression()
console.log(result)

console.log(`The answer: 100. The two difference blw expression and statement is that
Statement: it ends with semicolon, while Expression is like phrase(A word that is not meaningful). 
so the expression
and statement of this variables are: value = 10, value = 5 * (value = 10) 
are expressions while the sentence that ends with semicolon are Statement.`)

console.log('--------------------------------Decisions or Conditionals')

let isEnrolled = true

if (isEnrolled) {
    console.log(isEnrolled)
} else if (!isEnrolled) {
    console.log('clone')
} else {
    console.log(`${isEnrolled } is the best`)
}

console.log(`Decisions or Conditionals are the if(statements), and the comparison
are <, >, <=, >=`)

console.log('--------------------------------Loops')

console.log('--------------------------------For Loops')

let students = ['class', 'people', 'doctor', 'nurse']

for (let i = 0; i < students.length; i++) {
    let greetStudent = students[i]
    console.log(greetStudent)
}

for (let student of students) {
    let greetStudent = students
    console.log(greetStudent)
}

console.log('--------------------------------While Loops')
let n = 3
let x = 2

while (n <= 20) {
    let numScroll = n++
        let scroll = (x *= n)
    console.log(`Answer: ${scroll}`)
    console.log(numScroll)
}

console.log('---------------------------------Function')

let number = ['school', 'student', 'touch', 'university']

function listStudents(value) {
    return number.length * 5
        // return value * 5;
}

let totalCalc = listStudents(10)
console.log(totalCalc)

console.log('--------------------------------------Includes')

let classValue = ['cat', 'dog', 'fish']

let catName = 'cat'
let dogName = 'sheep'
let fishName = 'fish'

function getClassValue() {
    let hasCatName = classValue.includes(catName)
    let hasDogName = classValue.includes(dogName)
    let hasFishName = classValue.includes(fishName)

    console.log(hasCatName)
    console.log(hasDogName)
    console.log(hasFishName)
}

getClassValue()

console.log('--------------------------------------Second Includes')

let animals = ['goat', 'elephant', 'fowl', 'birds']

console.log(animals.includes('goat'))

console.log('--------------------------------Programming premier Exercise')

let favoriteBooks = []

function addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName)
    }
}

function printFavoriteBooks() {
    for (let i = 0; i <= favoriteBooks.length; i++) {
        let favoriteIncrement = favoriteBooks[i]
        console.log(favoriteIncrement, i)
    }

    for (let slideIn of favoriteBooks) {
        console.log(slideIn)
        console.log(`favoriteBooks: ${favoriteBooks.length}`)
    }
}

addFavoriteBook('this is the Great one')
addFavoriteBook('this is the jungle one')
addFavoriteBook('this is the favorite one')
addFavoriteBook('this is the Great one')
addFavoriteBook('this is the Great one')
addFavoriteBook('this is the jungle one')
addFavoriteBook('this is the favorite one')
addFavoriteBook('this is the Great one')
addFavoriteBook('this is the Great one')
addFavoriteBook('this is the jungle one')
addFavoriteBook('this is the favorite one')
addFavoriteBook('this is the Great one')

printFavoriteBooks()

console.log(
    '--------------------------------Second Programming premier Exercise',
)

let getNames = []

function countNames(firstName, lastName) {
    if (!firstName.includes('Divine')) {
        getNames.push(firstName, lastName)
        console.log(`${firstName} ${lastName}`)
    }
}

function printGetNames() {
    console.log(`getNames: ${getNames.length}`)
}

countNames('Divine', 'Shedrack')
countNames('Prestige', 'Albert')
countNames('Divine', 'Divine')
countNames('Divine', 'Shedrack')
countNames('loop', 'Divine')
countNames('loop', 'Divine')
countNames('loop', 'Shedrack')
countNames('loop', 'Shedrack')
countNames('loop', 'Shedrack')
countNames('loop', 'Shedrack')
countNames('loop', 'Shedrack')

console.log(getNames)

printGetNames()

console.log(
    '--------------------------------Third Programming premier Exercise',
)

let colors = []

function colorsName(name, shadow, beauty) {
    colors.push(name, shadow, beauty)
}

function myArr() {
    console.log(`colors: ${colors.length}`)
}

colorsName('red', 'blue', 'yellow')
colorsName('crimson', 'purple', 'lime')
colorsName('limegreen', 'gray', 'black')
colorsName('cornflowerblue', 'darkblue', 'darkgray')
colorsName('orange', 'pink', 'whitesmoke')
colorsName('white', 'green', 'darkorange')
colorsName('purple', 'red', 'yellow')

myArr()

console.log('--------------------------------NAN(not a number)')

function semantics(x) {
    if (isNaN(x)) {
        return clone;
    }
    return x * 2;
}


console.log(semantics("Is not a number"));
console.log(`${semantics(30)}`);

console.log('--------------------------------new')

function listValue(fruit, car, color) {
    this.fruit = fruit;
    this.car = car;
    this.color = color;
}

let totalListValue = new listValue("Orange", "Toyota", "Red");
let secondTotalListValue = new listValue("Apple", "Camry", "Yellow");
console.log(secondTotalListValue);
console.log(totalListValue.fruit);
console.log(totalListValue);

console.log('--------------------------------Second new')

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);
const car2 = new Car('Elephant', 'Culture', 1997);


console.log(car1);
console.log(car2);
// expected output: "Eagle"

console.log('--------------------------------coercion')

function cars(num, split) {
    return (num + split) * 2;
}

let calcCars = cars(5, 10);
console.log(`converting a string to a number is a coercion or converting
a number to  a string is also called a coercion, so let me print the 
coercion types: ${calcCars}`);

console.log('--------------------------------Function Expression')

let nameColors = function(color) {
    console.log("Anonymous function");
}

let nameColorValue = function nameColorValue(blue) {
    console.log("named function");
}

nameColors("pink");
nameColorValue("yellow");


console.log('----------------------------------Arrow Function')

let skull = (blue) => blue + 2;
console.log(skull(3));


([a, b] = [10, 20]) => a + b; // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

let listValues = [1, 2, 3]

myAge = () => listValues[1];

myAge();
console.log(listValues[1]);