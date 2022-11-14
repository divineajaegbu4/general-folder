var appends = document.getElementById('append');
appends.innerText = "Albert is heading towards London now!"

// var age = prompt("What's your age?")

// console.log(age)



// for Numbers
var num1 = 20
num1++

var num2 = 10
num2--
console.log(num1)
console.log(num2)

console.log("--------------------------------AppendChilds")


function countAppends(list) {
    var add = document.createElement('li')
    add.innerText = list
    add.style.listStyle = "none"
    add.style.backgroundColor = "crimson"
    add.style.textAlign = "center"
    add.style.color = "rgb(255, 255, 255)"

    return add
}

function callFn() {
    appends.appendChild(countAppends("Divine"))
    appends.appendChild(countAppends("Divine"))
    appends.appendChild(countAppends("Divine"))
    appends.appendChild(countAppends(`Divine is ${num2} years old`))
    appends.appendChild(countAppends(`${num1} years old`))
}




// function create() {
//     var name = prompt("What's your name?")
//     alert(name)
// }


function setNumbers(num1, num2) {
    var result = Number(num1 + num2)
    console.log(typeof (result))
    console.log(result)
}


// Working with while loop
// function whileFn() {
//     var num = 20
//     while (num > 5) {
//         num -= 1
//         console.log(num)
//     }

// }


// function forFn() {
//     var num = 20
//     for (let i = 0; i <= num.length; i++) {
//         console.log(num[i])
//     }
// }


// Data types
console.log("--------------------------------Data types")


var named = "Divine,\nAlbert is heading towards my house right now!";
var age = 10;
var bools = true;
var names;
var nameObject = { "first": 1, "first": 1, "first": 1, "first": 1, "first": 1 };
var nameArray = [1, 2, 3, 4, 5];
var nameInt = 22222222222222222n;

console.log(`${typeof (named)} ${typeof (age)} ${typeof (bools)} ${typeof (names)} ${typeof (nameObject)} ${typeof (nameArray)} ${typeof (nameInt)}`)

// Strings in javaScript
console.log("--------------------------------Strings")

console.log(nameArray.indexOf(4))
console.log(named.indexOf("ne"))
console.log(named.slice(2, 5))
console.log(named.toUpperCase())
console.log(named.toLowerCase())
console.log(named.split(",")) //split by comma
console.log(named.split("")) //split by characters
console.log(named[3])

// for loop in javaScript
console.log("--------------------------------For loop")

function forFn() {
    var num = "Divine"
    for (let i = 0; i <= num.length; i++) {
        console.log(num[i])
    }
}

// Arrays in javaScript
console.log("--------------------------------Arrays")
fruits = ["Oranges", "Watermelon", "Pineapple", "Apple", "Pear"]
persons = ["Divine", "Prestige", "Loveth", "Happiness", "Albertm"]
console.log(fruits)
fruits[0] = "Gova"

// use for loop
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i])
}

console.log("--------------------------------Arrays methods")
console.log(fruits.pop()) // remove last array
console.log(fruits.shift()) // remove first array
console.log(fruits.unshift("mylove")) // add first array
console.log(fruits.join("*")) // join array
console.log(fruits.toString()) // gives horizontal and comma array
console.log(fruits.push("Divine", "Albert")) // appends array
console.log(fruits.reverse()) // reverse array
var concateArr = fruits.concat(persons)
console.log(concateArr) // combine two arrays
console.log(fruits.slice(3, 5)) // slice is for minus array
console.log(fruits[fruits.length] = "Lime") // same as push

// source = [1, 2, 3]

// console.log(source.sort(function (a, b, c) {
//     return a - b + c
// }))

// console.log(source)

console.log(fruits) // remove first array



// Objects in javaScript
console.log("------------------------------Objects")
let classStudent = {
    firstName: "Divine",
    secondName: "Happiness",
    thirdName: "Albert",
    fourthName: "Ukaegbu",
    fifthName: "clones",
    sixthName: "Albert my love",
    myInfo: function () {
        //using OOP here
        return this.firstName + "\n" + this.thirdName + "\n" + this.fourthName
    },
    age: 19,
};

console.log(classStudent)
console.log(classStudent.love = "Alberto")
console.log(classStudent.myInfo())

console.log("--------------------------IF STATEMENTS")
if ((classStudent.age < 30) && (classStudent.age > 10)) {
    text = "Hello, Albert"
    console.log(text)
} else {
    console.log("Don't worry")
}

console.log("--------------------------SWITCH STATEMENTS")
switch ((classStudent.age)) {
    case 20:
        console.log("What's up, my dear")
        break;
    case 10:
        console.log("What's up, my heart")
        break;
    default:
        console.log("What's up, my love")
        break;
}


switch (6, 5, 7) {
    case 1:
        console.log("Hi 1")
        break;
    case 2:
        console.log("Hi 2")
        break;
    case 3:
        console.log("Hi 3")
        break;
    case 6 && 5 && 7:
        console.log("Hi 6")
        break;
    default:
        console.log("Hi nothing")
        break;
}


// JSON(javaScript Object Notation)
console.log("---------------------javaScript Object Notation")
let pupils = `[
    {
        "name": "Divine",
        "class": 1
    },
    {
        "name": "Albert",
        "class": 2
    },
    {
        "name": "Chidimma",
        "class": 3
    },
    {
        "name": "Loveth",
        "class": 4
    },
    {
        "name": "Clones",
        "class": 5
    }
]`

// console.log(pupils)
console.log(JSON.parse(pupils))


function generalFn() {
    callFn()
    // create()
    setNumbers("10", "10")
    // whileFn()
    forFn()
}


generalFn()







