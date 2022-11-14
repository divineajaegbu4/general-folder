// "use strict";
// const _ = require("lodash");
// let log = "console.log";
console.log("------------------------------------------property Access(objects)");
let form = {
    nameValue: "divine"
}
console.log(form.nameValue);

let newBooks = {
    name: ["clue", "the power of being of a woman"],
    firstName: "Albert",
    lastName: "Divine",

    locations: {
        status: "married",
        school: "university",
        occupation: "software engineer",
        site() { //properties or methods
            console.log(`${this.status} ${this.school} and ${this.occupation}`)
        }
    },

    printValues() {
        this.name.forEach(function(names, index) {
            console.log(index, names);
        })
        console.log(`${this.firstName}, ${this.lastName}`);
    }



}

console.log(newBooks.printValues());
console.log(newBooks.locations);

console.log("-----------------------------------------Primitive types/value");
let primitiveTypes = ["string", "number", "boolean", "undefined", "null", "symbol"]

primitiveTypes.forEach(function(name, index) {
    console.log(index, name);
})
console.log(`primitive values or types get pass by reference`);


console.log("----------------------------------------non-Primitive types/value");
let nonPrimitiveTypes = ["function", "object", "array", "class", "string"];

nonPrimitiveTypes.forEach(function(name, index) {
    console.log(index, name);
})

console.log(`non-primitive values or types get pass by value`);

console.log("-------------------------------------------------Arrays");
let person = [];

person.name = "John";
console.log(`${person.name}`);
console.log(`Array are just like objects but the little bit of difference is that Arrays
has methods or property like (Array.push, Array.pop, Array.shift, Array.length etc)`);

console.log("-------------------------------------------------Bracket Notation");
let news = ["class", "hello", "world", "friends"]

console.log(`${news[0]} and ${news[3]}`);

let emptyArray = []
emptyArray.previous = "heading towards ibafo!";
emptyArray["clone"] = "This is me!"

console.log(emptyArray.previous);
console.log(emptyArray["clone"]);

console.log("-------------------------------------------------Non-Valid character");
let x = {};
x["free"] = "this is true"
x["name"] = "Albert"
x["num"] = 10
console.log(x);

// let age = prompt("Write your age here!")
// console.log(age);

console.log("-------------------------------------------Object Game Characters Solution Exercise");
let persons = {};

persons.slideOut = "heading towards";

persons.status = [
    "Albert",
    "Divine",
    "Justine"
]

// persons.push("persons")
console.log(persons);

let pupils = {};

pupils["firstName"] = "Faraday's law";

pupils.lastName = "Doe";

console.log(pupils);
console.log(pupils.lastName)

console.log("-------------------------------------------Array Game Characters Solution Exercise");

let personsValue = []
personsValue.name = "Albert";

personsValue.focus = {
    status: "married",
    Age: 35,
    school: "university"

}



console.log(personsValue);
console.log(personsValue.focus);



console.log("-------------------------------------------Array ES6 Destructuring");

// let = [a, b, c] = [10, 20, ];

// console.log(a);
// console.log(c);

//Another example
// let friends = [name, school, age] = ["Divine", "Justine", "50"];


// let = [a, b, c] = friends;
// console.log(a);
// console.log(c);

//parsing an array returned from a function
console.log("---------------------------parsing an array returned from a function");

function X() {
    return [10, 20]
}

[c, y] = X();
console.log(c);
console.log(y);


console.log("-------------------------------------------Object ES6 Destructuring");

let person1 = { firstName, lastName } = { firstName: "Divine", lastName: "Albert" };

console.log(person1);

let person2 = { age, complexion } = { age: 29, complexion: "fair" };
let person3 = { book, school } = person2;
console.log(person3);
console.log('destructuring is a Javascript expression that makes it possible to unpack values from Array, object');

console.log("-------------------------------------------Exercise of Object ES6 Destructuring");
let clue = { name, room } = { "name": "Rusty", "room": "Kitchen", "weapon": "CandleStick" };
let clueValue = { school, lastName, court } = clue;

console.log(clueValue);
console.log(name);

console.log("-----------------------------------------------------Spread Operator/Spread syntax");
let student = [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(c);


console.log("-----------------------------------------------------Swapping Values");

let num1 = 10,
    num2 = 20;

[num1, num2] = [num2, num1];

console.log(`num1 = ${num1}, num2 = ${num2}`);

//OR
let num3 = 30,
    num4 = 40;

let temp;
temp = num3;
num3 = num4;
num4 = temp;
console.log(`num3 = ${num3}, num4 = ${num4}`);

console.log("Swapping values is all about exchanging values");



console.log("---------------------------------------------- List Transformation");

const cars = {}

const names = []

cars.name = {
    firstName: "jeep",
    secondName: "Toyota"
};

cars.names = {
    firstName: "camry",
    secondName: "japan"
}

console.log(cars);

console.log("------------------------------------------------List Transformation and looping exercise");


const brands = {
    "section": [

        {
            school: "University",
            name: "Toyota",
            occupation: "Engineer"
        },

        {
            maritalStatus: "married",
            Books: "novel",
            phone: "iphone"
        },

        {
            container: [
                "plant",
                "fruits",
                "generosity",
                "procrastination"
            ]
        },


    ],

    "general": [


        {
            gender: "female",
            class: "ss1"
        },

        {
            history: [
                "nursery",
                "primary",
                "secondary",
                "university",
                "job",
                "married"
            ]
        },

    ]

}

containerFn = () => {
    foo();
    count();
}


function foo() {
    brands["section"].forEach(function(name, index) {
        console.log(index, name);
    })
}

function count() {
    // brands["general"].forEach(function(site, index) {
    //     console.log(index, site);
    // })

    // for (let i = 0; i < brands.general.length; i++) {
    //     console.log(brands.general[i]);
    // }

    // for (let key of brands.general) {
    //     console.log(key);
    // }

    // for (let key in brands.general) {
    //     console.log(key);
    // }

    for (let i = 0; i < brands.section.length; i++) {
        console.log("Is this the real Albert");
        for (let operands in brands.section[i]) {
            console.log("This is Divine");
            if (brands.section[i][operands] === "University") {
                console.log("How far?");
            } else {
                console.log("me");
            }
        }
    }
}

containerFn();

console.log("------------------------------Print the one you want ");
let [color1, color2] = [brands.section[0].name, brands.section[1].phone];
let [red, yellow] = [color1, color2]
console.log([red, yellow]);


console.log("------------------------------------------Using functions");
runningTotal = (form) => {
    return {
        firstName: firstName,
        age: age,
        speak() {
            console.log(form);
        }
    }
}

let fullName = ["Albert", "Divine", 29, "software Engineer", "handle"];

// fullName.push("Albert", "Divine", 29, "software Engineer", "handle");
console.log(runningTotal(fullName));

let suspicious = [];
for (let i = 0; i < suspicious.length; i++) {
    console.log(suspicious.push(fullName)[i]);
}

// console.log(brands);
// // console.log([brands."section"]);
// console.log(brands["section"])
// console.log(brands["general"]);

console.log("---------------------");
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);


const clone = 'The dog was killed by the man';

const success = clone.split(' ')[3]
const successValue = clone.split(', ')
console.log(success);
console.log(successValue);


console.log("-----------------------------------------forEach and _.each");

let students = [];
students.push(["class", "student", "peoples", "courageous"]);
// console.log(students);

// students.forEach(function(name, index) {
//     console.log(index, name);
// })


_.each(students, function(name, index, students) {
    console.log(index, name, students);
})

let child = ["name", "age", "location", "cj", 5];

_.each(child, function(name, index, clone) {
    console.log(index, name, clone);
})


// _.each = function(list, callBack) {
//     if (Array.isArray(list)) {
//         callBack(list[i], i, list);
//     } else {
//         for (let key in list) {
//             callBack(list[key], i, key);
//         }
//     }
// }

_.each(["sally", "bob", "clock"], function(name, index, clone) {
    console.log(index, name, clone);
})


console.log("-------------------------------------------Map");

let num = [1, 2, 3, 4, 5];
let numValue = [];

(function() {
    numValue = _.map(num, function(value, index, item) {
        // item[index] = item[index] * 3;
        // return value * 2;
        for (let i = 1; i < 5; i++) {
            let str = "This is me";
            `${str += i}  ${str += item} ${str += value}`
            // str += i;
            // str += item
            // str += value;
            return (str)
        }
    })
})()



console.log(num);
console.log(numValue);

console.log("-------------------------------------------Another Map");
let weapon = ['candleStick', 'lead pipe', 'revolver'];
let weaponValue = []

weaponValue = _.map(weapon, function(index, value, item) {
    return item

})

// console.log(weapon);
console.log(weaponValue);

console.log("-------------------------------------------Third Another Map");

// let storage = [1, 2, 3];
let callBack = [];

callBack = _.map([1, 2, 3], function(item) {
    return item + 1
})

// console.log(storage);
console.log(callBack);

console.log("-------------------------------------------fourth example of  Map");

let voltage = {
    current: [


        {
            name: "current1",
            count: 30
        },

        {
            name: "current1",
            count: 30
        },

        {
            name: "current1",
            count: 30
        }
    ]
}

let totalVoltage = voltage.current.map(function(voltage) {
    return voltage.name
})

console.log(totalVoltage);

console.log("-------------------------------------------fifth example of  Map");

// _.map(function(list, callBack) {
//     let equipments = [];

//     // for (let i = 0; i < list.length; i++) {
//     //     equipments.push(callBack(list[i], i, list))
//     // }

//     _.each(equipments, function(item, key, arr) {
//         equipments[item, key, arr]
//     })


//     return equipments;
// })

// _.map([1, 2, 3, 4, 5, 6], function(val) {
//     return val + 2;
// })



// _.map(function(list, callBack) {
//     let storage = [];

//     // for (let i = 0; i < list.length; i++) {
//     //     storage.push(callBack(list[i], i, list))
//     // }

//     _.each([1, 2, 3, 4, 5], function(item, index, value) {
//         storage.push(callBack(value));
//     })

//     return storage;
// })


// _.map([1, 2, 3, ], function(val) {
//     return val + 1;
// })

// console.log(callBack);


// let val = [1,2,3,4,5];

// let storage = [];

// storage = _.map([1, 2, 3, 4], function(list, key, value) {
//     return storage.push(list[key] = list[key]) + 1;
// })

// console.log(storage);

let storage = [];

_.each([1, 2, 3, 4, 5], function(item, index, value) {
    storage.push(item);
})

console.log(storage);

console.log("------------------------------------------filter");

let arr = [1, -2, 3, -4, 5, -7, 0];

// const filtered = arr.filter(v => v >= 0);
// console.log(filtered);

const filtered = arr.filter(function(value) {
    return value >= 0;
})

console.log(filtered);

console.log("------------------------------------------Another filter");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let output = [];

output = _.filter(numbers, function(val) {
    if (val >= 0) {
        return val;
    }
});

console.log(output);

console.log("------------------------------------------find");
let numberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input = [];

input = _.find(numberValue, function(val) {
    if (val >= 0) {
        return val;
    }
});

console.log(input);



console.log("------------------------------Anatomy of functions");

function constValue(num, value) {
    return num + value;
}


const constValues = constValue(10, 5);

console.log(constValues);

console.log(`num,value is the (parameters), {} is the (Definition or
    Declaration), num + value is (paraobjectmeters), return is return,
    constValue() is the invocation or Call-time, and constValue(10, 5)
    is the arguments and constValue is the (name of function)`);

console.log("----------------------------practice");
let storageArr = ["divine", "bekee", "boolean"]

// outputArr = _.each(storageArr, function(value, index, arr) {
//     output.push(arr[value] = arr[value]);
// })

// console.log(storage);
// // console.log(output);

// outputArr = _.map(storageArr, function(val) {
//     return val;
// })

// console.log(storageArr);
// let outputArr = [];
// _.map(function(list, callTime) {

//     // for (let i = 0; i < list.length; i++) {
//     //     outputArr.push(callTime[list[i]], i, arr)
//     // }
//     _.each(outputArr, function(value, key, arr) {
//         outputArr.push(value, key, arr);
//     })

//     return outputArr;
// })

// _.map([1, 2, 3, 4, 5], function(val) {
//     console.log(val * 2);
// })

// let outputArr = [];
// _.map([1, 2, 3, 4, 5], function(val) {
//     console.log(val * 2);
// })

let outputArr = [1, 2, 3, -4, -3];

_.find(outputArr, function(arr) {
    arr > 0 ? console.log(arr) : "";


})


console.log("---------------------------------------------spread operator");

const jungle = (a, b, c, d, e) => {
    return [
        [a, b],
        [c, d, e]
    ];
}

let customize = jungle("This", "is", "the", "woman", "that", "cried", "aloud");
console.log(customize);
// console.log(arguments);

console.log("---------------------------------------------ES5 to ES6");

const defaultP = (a, b = 2) => a + b;

console.log(defaultP(4));

console.log("---------------------------------------------object like Array");

const myFunc = function() {
    console.log(arguments);
}

myFunc(1, 2, "divine", { name: "Albert" }, [{ age: "23years" }]);

console.log("--------------------------------------------Array.from");

let youngName = "dominic";
let depend = ["divine", "shedrack", "cloud"]

const structure = Array.from(depend);
const structures = Array.from(youngName, function(arr) {
    return arr.toUpperCase();
});


console.log(structure);
console.log(structures);


// const from = arr => {
//     console.log(Array.prototype.slice.call(arr));
// }

//OR

// let mySet;

// function set() {
//     mySet.push("clone");

//     for (const value of mySet) {
//         console.log(value);
//     }
// }
// set();

let sloop = [1, 2, 3, 4, "divine"];
let outCome;
// debugger;
outCome = _.map(sloop, function(val, i) {
    return val
})

console.log(outCome);

console.log("--------------------------------------------_.from");

// let inputVal = ["divine", "justine", "arrogant"];
// let outComeVal;

// outComeVal = _.from(inputVal, function(val) {
//     return val;
// })

// console.log(outComeVal);

console.log("--------------------------------------------Block scope");

var name = "divine";

{
    var name = "Albert";
}


console.log(name);

console.log("--------------------------------------------Global and local scope");


let sum = 10;

function group() {
    sum = 30;
    console.log(sum);
}

console.log(sum);
group();

console.log("--------------------------------------------Advanced scope(closure)");

let execute = "outer"

function execution() {
    let name = "Inner";

    function groupValue() {
        console.log(`${execute} and ${name}`);
    }

    return groupValue();
}

console.log(execution());

console.log("--------------------------------------------Second Advanced scope(closure)");

function arith(x) {
    "use strict";
    return function(y) {
        return x + y
    }
}

const add5 = arith(5);
// const add10 = arith(10);

console.log(add5(5));
// console.log(add10(3));

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// const button = document.querySelector(".class-val");

// function makeAdder(size) {
//     "use strict"
//     return function() {
//         button.addEventListener("click", function() {
//             alert(`num ${size}`);
//         })
//     }
// }

// const row1 = makeAdder(10);
// const row2 = makeAdder(14);
// const row3 = makeAdder(18);
// const row4 = makeAdder(24);

// document.getElementById('class-val').onclick = size12;
// document.getElementById('class-val1').onclick = size14;
// document.getElementById('class-val2').onclick = size16;

const val1 = document.getElementById('#class-val');
const val2 = document.getElementById('#class-val1');
const val3 = document.getElementById('#class-val2');


const buttons = function() {
    val1.addEventListener("click", function() {
            size12
        })
        // debugger;
}



const makeSizer = function(size) {
    // debugger;
    return function() {
        document.body.style.fontSize = size + 'px';
    };


}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

console.log("-------------------------------when to use var and let");
// console.log(p);
"use strict"
// var y = 5;
// console.log(y);

var peoples = "nation";

{
    let peoples = "few";
}

console.log(peoples);

console.log("-------------------------------Higher-Order functions and CallBacks");

// const ifElse = (condition, isTrue, isFalse) => {
//     return condition ? isTrue() : isFalse();
// };

// ifElse(false,
//     () => { console.log(true); },
//     () => { console.log(false); }

// )

const ifElse = (condition, isTrue, isFalse) => {
    return `${condition}, ${isTrue}, and  ${isFalse}`;
}


const printValues = ifElse("decision", "parameter", "arguments");
console.log(printValues);

console.log("-------------------------------Passing Arguments");

// const firstFn = function(n) {
//     return n + 1;
// }

// const secondFn = function(n) {
//     return n * n;
// }

// var totalMath = function(n, func) {
//     return func(n);
// }

// console.log(totalMath(3, secondFn));
// console.log(totalMath(5, firstFn))


const firstFn = n => n + 1 //n + 1 is return
    "use strict"
const secondFn = n => n * n //return

let totalMath = (n, callBack) => callBack(n) //return

console.log(totalMath(5, firstFn));
console.log(totalMath(10, secondFn));

console.log("-------------------------------Default parameters");

"use strict";
const experiments = function(x = [], y = 5, v = 40, z = 10, n = 10) {
    return ((v + z) + y)
}



console.log(experiments());
console.log("--------------------------------loddash underscore.js");
var users = [1, 2, 3, 4];

// Use of _.reduce() method

let gfg = _.reduce(users, function(sum, n) {
    return sum + n;
});

// Printing the output 
console.log(gfg);

//object


let views = ["divine", "albert", "alberto"];

let viewers = _.reduce(views, function(result, pure) {
    console.log(result, pure);
})

// var users = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 28 },
//     { name: "Bill", age: 65 },
//     { name: "Emily", age: 17 },
//     { name: "Jack", age: 30 }
// ]

// var reducedUsers = _.reduce(users, function(result, user) {
//     if (user.age >= 18 && user.age <= 59) {
//         (result[user.age] || (result[user.age] = [])).push(user);
//     }

//     return result;
// }, {});

// console.log(JSON.stringify(reducedUsers));

const groove = function(list, cb, initial) {

    let memo = initial;
    for (let i = 0; i < list.length; i++) {

        if (i === list.length) {
            memo = list[0];
        } else {
            memo = cb(list[i], memo)
        }
    }

    console.log(memo);
}
groove([1, 2, 3, 4], function(v, sum) {
    return sum + v
}, 0)





// console.log(reverse);

// let arrNum = [1, 2, 3, 4];

// const roll = function(result, cb, clone) {
//     let sum = clone;
//     for (let i = 0; i <= result.length; i++) {
//         if (i === 0) {
//             sum = result[0];
//         } else {
//             sum = cb(result[i], sum)
//         }
//     }
// }

//  roll([1, 2, 3, 4], (v, sum) => v + sum, 0);

console.log("----------------------------------------Empty Rooms Exercise");
// const newDevelopment = [{
//         name: 'Miss Scarlet',
//         present: true,
//         rooms: [
//             { kitchen: false },
//             { ballroom: false },
//             { conservatory: true },
//             { 'dining room': true },
//             { 'billiard room': false },
//             { library: true }
//         ]
//     },
//     {
//         name: 'Reverend Green',
//         present: true,
//         rooms: [
//             { kitchen: true },
//             { ballroom: false },
//             { conservatory: false },
//             { 'dining room': false },
//             { 'billiard room': true },
//             { library: false }
//         ]
//     },
//     {
//         name: 'Colonel Mustard',
//         present: true,
//         rooms: [
//             { kitchen: false },
//             { ballroom: false },
//             { conservatory: true },
//             { 'dining room': false },
//             { 'billiard room': true },
//             { library: false }
//         ]
//     },
//     {
//         name: 'Professor Plum',
//         present: true,
//         rooms: [
//             { kitchen: true },
//             { ballroom: false },
//             { conservatory: false },
//             { 'dining room': true },
//             { 'billiard room': false },
//             { library: false }
//         ]
//     }
// ];

// const iron = function(result, instructions) {

//     let memo = result
//     for (let i = 0; i < memo.length; i++) {
//         instructions(memo[i]);
//     }

//     console.log(memo);
// }

// _.map(newDevelopment[0].kitchen, function(value) {
//     console.log(value);
// })



// const notInRoom = suspect => {


//     const emptyRooms = reduce(suspect.rooms, (room, memo) => {
//         if(room === false) memo.push(room)
//         return memo
//     }, [])

//     return emptyRooms;
// };

// notInRooms = _.map(newDevelopment, notInRoom)

// [
//     ["kitchen", "ballroom", "billiard room"],
//     ["kitchen", "ballroom"]

// ]

// _.intersection(...notInRooms);
console.log("------------------------------------------forEach looping");
let height = [1, 2, 3, 4]
    //ForEach
height.forEach(function(item, index, key) {
    console.log(item);
})

console.log("------------------------------------------map looping");

let rope = ["name", "good", "lorry"]

const bundle = rope.map(function(result, i, item) {
    return result
})

console.log(bundle);

console.log("------------------------------------------filter looping");

let scroll = rope.filter(function(item) {
    return item;
})


console.log(scroll);
console.log("------------------------------------------reduce looping");

let numbersPrint = [1, 2, 3, 4, 5, 6];

const lone = numbersPrint.reduce(function(result, item) {
    return result * item;
}, 0)

console.log(lone);

console.log("------------------------------------------find looping");

let object1 = [{ id: "b" }, { id: "c" }, { id: "p" }]

let found = object1.findIndex(function(item) {
    return item.id === "c";
})

console.log(found);

let found2 = object1.find(function(item) {
    return item.id === "c";
})

console.log(found2);


console.log("----------------------------while loop"); //condition and statement

let book1 = 0;
let books = 30;
while (book1 < books) {
    console.log(book1++);
}

console.log("----------------------------do loop"); //statement and condition

let countBooks = 0;
let previous = 70;

do {
    console.log(countBooks++);
} while (countBooks <= previous)

console.log("----------------------------for in loop"); //variable in object: works only for objects

let hyphens = {
    name: "divine",
    name2: "ALbert"
}


for (let meal in hyphens) {
    console.log(`${meal} and ${hyphens[meal]}, it normally used for Object not Array`);
}

console.log("----------------------------for of  loop"); // variable of iterableObject: works only for Arrays, strings, map and set;

let named = "cat"; //string

let namedArray = ["cat", "dog"]

// let group2 = { animal: "dog", animal2: "cat" }

for (let names of named) {
    console.log(names);
}

let phone = new Set([1, 1, 1, 2, 2, 2, 3, 3, 3]); //set

for (let conclude of phone) {
    console.log(conclude);
}

let foam = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

for (let foams of foam) {
    console.log(foams);
}

console.log("----------------------------for loop");

let look = 30;

for (let i = 0; i < look; ++i) {
    console.log(i);
}

console.log("----------------------------forEach loop");

namedArray.forEach(function(item, index, result) {
    console.log(index, item, result);
})

console.log("----------------------------Compose");

const upTo = function(statement) {
    return `this is the new ${statement}`
}

const downTO = function(expression) {
    return ` ${expression.toUpperCase()}`
}

const hope = _.compose(upTo, downTO);

console.log(hope("you"));

console.log("----------------------------Closure");

// const myAlert = () => {
//     let count = 0;

//     const alerter = () => {
//         alert(`${X} and ${++count}`)
//     }

//     const X = "I think is my ball!";
//     return alerter;
// }

// const func1 = myAlert()
// const func2 = myAlert()


// const timer = function() {
//     let elapsed = 0;

//     const result = function() {
//         return elapsed;
//     }

//     const line = function() {
//         return ++elapsed
//     }

//     setInterval(line, 1000)

//     return result;
// }

// const timers = timer();


// const clones = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3]
// ])

let clones = { name: "Albert", name2: "Divine" }
for (let flow in clones) {
    console.log(`${flow}: ${clones[flow]}`);
}


let numFind = [{ a: 1 }, { b: 2 }, { c: 3 }]
let lock = numFind.find(function(item) {
    return item.b === 2
})

console.log(lock);