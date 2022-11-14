"use strict"


/*Thread of Execution means pieces of running your code or how to 
run code in pieces behind the scenes*/


console.log("---------------------------------------Thread of Execution")

const num = 3;

function multiplyBy2(inputNumber) {

    const result = inputNumber * 2;

    return result;
}

// the output

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

console.log(`${output},${newOutput}`)
console.log(output + newOutput);



console.log("-------------------We can generalize the function to make it reusable")

function squareNum(num) {

    return num * num;
}

console.log(squareNum(5))//25
console.log(squareNum(10))//100
console.log(squareNum(9))//81
console.log(squareNum(7))//49


console.log("---------------------Repeating Functionality");


function copyArrayAndMultiplyBy2(array) {

    const output = [];

    for(let i = 0; i < array.length; i++) {

        output.push(array[i] / 2);
    }

    return output;
}


const createArray = [1,2,3,4,5];


const callArray = copyArrayAndMultiplyBy2(createArray);

console.log(callArray)


console.log("----------------------------Higher Order Functions")


function callBackFn(array, instructions)  {

    const emptyArr  = [];


    for(let i = 0; i < array.length; i++) {

        emptyArr.push(instructions(array[i]));
    }

    return emptyArr;
}

const arrayList = [2,3,4,5]

// function multiplyBy2(item) {
//     return item * 2
// }

// const totalResult = callBackFn(arrayList, function multiplyBy2(item) {
//     return item * 2
// });

// const totalResult = callBackFn(arrayList, multiplyBy2)
const totalResult = callBackFn(arrayList, item => item * 2)

console.log(totalResult)

// use an example of callBack Functions

// const render = document.querySelector('render');

// function callBackRenderFn(callBack) {
//     const createELementOfH1 = document.createElement('p');

//     createELementOfH1.textContent = callBack;

//     return createELementOfH1;
// }


// render.appendChild(callBackRenderFn("source"))



// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
//   }
//   // get the ul#menu
//   const menu = document.querySelector('#menu');
//   // add menu item
//   menu.appendChild(createMenuItem('Home'));
//   menu.appendChild(createMenuItem('Services'));
//   menu.appendChild(createMenuItem('About Us'));




function callBackFn(item, callBack) {


    var sides = []

    for(let i = 0; i < item.length; i++) {
      sides.push(callBack(item[i]));
    }

    return sides
}

function callBack(name) {
   return name * 2
}


const result = callBackFn([1,2], callBack);

console.log(result);

// var list = [2,3,4,5,6,7,8,9,0];

// function sizeUp() {
// list.reduce(function(name,  arr) {
    
//     let arrList = [];

//     for(let i = 0; i < name.length; i++) {
//         arrList.push(arr(name[i]))
//     }

//     return arrList;

// })

// }

// // console.log(sizeUp)

// function multiplyBy5(items) {

//     return items * 5;
// }

// console.log(sizeUp(list, multiplyBy5))







const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

console.log("--------------------------closure")
function createFunction() {

    function multiplyBy2(num) {

        return num * 2;
    }

    return multiplyBy2;
}


const view = createFunction();

console.log(view(5))

function outer() {
    let counter = 0;

    function incrementCounter() {
        return counter++
    }

    return incrementCounter;
}

const myNewFunction = outer();
const anotherNewFunction = outer();

console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());

console.log("----------------------different calling functions")

console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());
console.log(anotherNewFunction());




// closure

console.log("--------------------------------------------Module closure")
function givingToAccess(x, y) {

    // var items = 0;

    function incrementOfItems(arr, instructions) {
        var emptyArr = [];

        for(let i = 0; i < arr.length; i++) {
          
            emptyArr.push(instructions(arr[i]))
        }

        return emptyArr;
    }

    function multiplyBy3(num) {

        return x * num;
    }

    function multiplyBy5(num2) {
        
        return y * num2
    }

    let callFn = {

        incrementFn: incrementOfItems,
        multiplyBy3: multiplyBy3,
        multiplyBy5: multiplyBy5
    }

    return callFn;
}

var items = 2
var countArr = [1,2,3,4,5,6,7,8,9]

function callBackFn(packages) {

  return  packages += items;
}


const generalCallFn = givingToAccess(20, 15);

const secondCallFn = generalCallFn.incrementFn(countArr, callBackFn);
const thirdCallFn = generalCallFn.multiplyBy3(20);
const fourthCallFn = generalCallFn.multiplyBy3(5)

console.log(secondCallFn);
console.log(thirdCallFn);
console.log(fourthCallFn);

console.log("---------------------------------------------Asynchronous javascript")

const number = 3;

function outputs(inputNumber) {

    const result = inputNumber * 2;

    return result;
}

const callOutput = outputs(3);//6
const callOutput2 = outputs(10)// 20

console.log(callOutput)
console.log(callOutput2)


// const tweet = getTweets("http://twitter.com/will/1");

// displayTweets(tweet);

// console.log("want to run now!!!!")

function printHello() {
    console.log("Hello")
}

setTimeout(printHello, 0);
console.log("run first");


function printHello2() {
    console.log("Hello2")
}

function block1Sec() {
    console.log("1sec")
}

setTimeout(printHello, 0);
// console.log(block1Sec())
block1Sec()
console.log("me first again")


console.log("--------------------------------Promises")

// function display() {
//     console.log(200 * 2)
// }

const futureData = fetch("http://127.0.0.1:5500/wilie-sentance/html/index.html");

// futureData.then(function clones(num) {
//     console.log(num)
// }).catch(function(error) {
//     console.log(error)
   
// }) 
    // console.log(error)

    futureData.then(function clones(display) {
        console.log(display)
    })


console.log("this is me")

//Another example

const futurePromise = new Promise(function(receives) {
    receives(fetch("http://127.0.0.1:5500/wilie-sentance/html/index.html"))
})

futurePromise.then(function(received) {
    console.log(`status: ${received.status}, url: ${received.url}, type: ${received.type}, time: ${received.time}`)
}).catch(function(error) {
    console.log("Syntax error", error)
})

console.log("Print me first of all before the delay Network Request ");


console.log("-----------------------------------------proto");

let animals = {
    firstAnimal: "Rabbits",
    secondAnimal: "Goats",
    thirdAnimal: "Dog",
    fourthAnimal: "Horse",
    fifthAnimal: "sheep",
    sixthAnimal: "Elephant",

    general: function() {
        console.log(this.firstAnimal + " " ,this.sixthAnimal)
    }
}


let colors = {
    firstColor: "Green",
    secondColor: "Blue",
    thirdColor: "Yellow",
    fourthColor: "WhiteSmoke",
    fifthColor: "Crimson",
    sixthColor: "lime",
    __proto__: animals

}


// colors . _proto_ = animals


console.log(colors.general())
console.log(colors.sixthAnimal)


let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk


// let incrementObject = {
//     name: "Divine",
//     score: 0,

//     increment: function() {
//         console.log(this.score++)
//     }
// }

// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()
// incrementObject.increment()


let emptyObject = Object.create(null);

emptyObject.name = "Albert";
emptyObject.class = "subject";
emptyObject.score = 100;
emptyObject.decrement = function() {
    console.log(emptyObject.score--)
}

console.log(emptyObject.decrement())
console.log(emptyObject.decrement())
console.log(emptyObject.decrement())
console.log(emptyObject.decrement())
console.log(emptyObject.decrement())
console.log(emptyObject.decrement())

console.log("----------------------------------Another Objects")

function animalsName(name, score) {

    const emptyObject = Object.create(createTheNewObjects);

    emptyObject.name = name;
    emptyObject.score = score;
    emptyObject.color = "yellow";

    return emptyObject;
}



let createTheNewObjects = {

    increment: function(x) {
        console.log(`${this.score+=x} and ${this.name}`)
    },

    decrement: function(y) {
        console.log(`${this.score-=y} and ${this.name} with ${this.color}`)
    }
}


const callFn = new animalsName("Dog", 0);
const callFn2 = new animalsName("Elephant", 10);


callFn.increment(1)
callFn.increment(1)
callFn2.decrement(2)
callFn2.decrement(2)

callFn.hasOwnProperty("color")


// callFn.increment(1);
// callFn2.decrement(2);
// callFn2.decrement(2);


const createMe = {};

createMe.name = "Albert";
createMe.age = 28;

console.log(createMe.hasOwnProperty("name"));
console.log(createMe.hasOwnProperty("names"));


console.log("-----------------------------Another Example")
function multiplyBy2(num) {
    return num*2;
}

multiplyBy2.stored = 5;

console.log(multiplyBy2(3));


console.log(multiplyBy2.stored);
multiplyBy2.prototype;

console.log("---------------------------------Prototype");

class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        return this.score++
    }

    login() {
        console.log("Login in")
    }
}


const callBackFns = new UserCreator("Albert", 28);

console.log(callBackFns.increment())

// function userCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }


// userCreator.prototype.increment = function() {
 
//    return this.score++
// }

// userCreator.prototype.login = function() {
//     console.log("Login in")
// }

// const usage = new userCreator("Divine", 19);

// console.log(usage.increment())
// console.log(usage.increment())
// console.log(usage.increment())






