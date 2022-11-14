// "use strict"
// console.log("-----------------------------------first class");
// class Form {
//     constructor() {
//         this.firstName = "Divine";
//         this.lastName = "Albert";
//         this.gender = "female"
//     }

// const { object } = require("underscore");

// const { object } = require("underscore");

//     printMyName() {
//         console.log(`my name is ${this.firstName} ${this.lastName},
//          i am a ${this.gender}`);
//     }
// }


// const form = new Form();
// form.printMyName();

// console.log("-----------------------------------second class");
// const showValue = document.querySelector(".show");
// const button = document.querySelector(".click");


// class Method {
//     constructor() {
//         this.showValue;
//         this.button;
//         clickMe();
//     }

//     area() {
//         return this.callBack()
//     }

//     callBack() {
//         return this.showValue, this.button;
//     }
// }
// const clickMe = () => {
//     button.addEventListener("click", () => {
//         showValue.classList.toggle("active");
//     })
// }

// const property = new Method();
// property.area;

// console.log("-----------------------------------prototype class");

// class storage {
//     constructor(height, width, length) {
//         this.main1 = height;
//         this.main2 = width;
//         this.main3 = length
//     }

//     returnCalc() {
//         return this.totalCalc()
//     }

//     totalCalc() {
//         return this.main1 * this.main2 + this.main3;
//     }
// }

// let callCalc = new storage(100, 200, 4);
// console.log(callCalc.returnCalc());

// console.log("-----------------------------------Generator class");

// class vibrant {
//     constructor(...side) {
//         this.side = side;
//     }

//     *
//     clone() {
//         for (let values of this.side) {
//             yield values
//         }
//     }
// }

// let vibrants = new vibrant(1, 2, 3, 4, 5, 6);
// console.log([...vibrants.clone()]);

// // class Polygon {
// //     constructor(...sides) {
// //             this.sides = sides;
// //         }
// //         // Method
// //         *
// //         getSides() {
// //             for (const side of this.sides) {
// //                 yield side;
// //             }
// //         }
// // }

// // const pentagon = new Polygon(1, 2, 3, 4, 5);

// // console.log([...pentagon.getSides()]);

// console.log("-----------------------------------static class");

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static valley(a, b) {
//         const drone = a.x + b.x;
//         const drone2 = b.y + a.y

//         return (drone, drone2);
//     }
// }

// let breastFeed = new Point(10, 6)
// let breastFeed2 = new Point(40, 30);

// console.log(Point.valley(breastFeed, breastFeed2));
// // console.log(breastFeed2.valley());

// class Car {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//     }

//     static getCars(car1, car2) {
//         return car1.x - car2.y
//     }

//     // colors() {
//     //     return this.color;
//     // }
// }

// const car1T = new Car(5, 10);
// const car2T = new Car(20, 10);

// console.log(Car.getCars(car1T, car2T));
// // console.log(Car.colors());

// console.log("-----------------------------------Extends and super class");

// class Animals {
//     constructor(dog) {
//         this.dog = dog
//     }

//     static robbery(ground) {
//         return `This is the main num of ${ground.dog}`
//     }
// }

// class roll extends Animals {
//     constructor(rollSide) {
//         super(rollSide);
//     }

//     static property(name) {
//         return `property is the good ${super.property(name)}`
//     }
// }

// const newName = new roll(300);

// console.log(roll.property(newName));


// let accessUser = function(height, width) {
//     return height * width;
// }

// console.log(accessUser(10, 10));

console.log("-------------------------------Regular function to class");
class accessUser { //declaration expression
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    resume() {
        return this.callBack()
    }

    callBack() {
        return this.height * this.width;
    }
}

const nameClass = new accessUser(10, 10);
console.log(nameClass.resume());

console.log("-----------------------map to class");


class groove {
    constructor(list, cb, initial) {
        this.list = list;
        this.cb = cb;
        this.initial = initial;
        this.memo;
    }

    memoValue() {
        this.memo = this.initial;
        for (let i = 0; i < this.list.length; i++) {
            if (i === list.length) {
                this.memo = this.list[0];
            } else {
                this.memo = this.cb(this.list[i], this.memo)
            }
        }

        return this.memo;
    }
}

const roll = new groove(1, 2, 3, 4, 5, 6);



// const groove = function(list, cb, initial) {

//     let memo = initial;
//     for (let i = 0; i < list.length; i++) {

//         if (i === list.length) {
//             memo = list[0];
//         } else {
//             memo = cb(list[i], memo)
//         }
//     }

//     console.log(memo);
// }
// groove([1, 2, 3, 4], function(v, sum) {
//     return sum + v
// }, 0)



console.log("----------------------------------------Generator methods");

class Polygon {
    constructor(...sides) {
        this.sides = sides
    }


    *
    getSides() {
        for (const valuesIn of this.sides) {
            yield valuesIn
        }
    }
}

const optional = new Polygon(1, 2, 3, 4, 5, 6);

console.log([...optional.getSides()]);


let figure = function*() {
    yield 10;
    yield 20;

}

// let property = figure(); 
for (let value of figure()) {
    console.log(value);
}

console.log("----------------------------------------static methods");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a) {
        const dx = a.x + a.y;
        // const dy = b.y + b.y;

        return dx
    }
}

const arrogant = new Point(5, 5);
// const arrogant2 = new Point(20, 20);

console.log(Point.distance(arrogant));
console.log("--------------------------extends and super in javascript");
//Another example for static methods
class names {
    "use strict";
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.firstName = "Divine";
    }

    static color(color1, color2) {
        const colors = `${color1.first} ${color1.last}`
        const result = `${color2.first}  and  ${color2.last}  with  ${color2.firstName}`

        return (colors, result);
    }

}


class Dog extends names {
    constructor(first, last) {
        super(first, last);
    }

    static color(color1, color2) {

        const colors = `${color1.first} ${color1.last}`
        const result = `${color2.first}  and  ${color2.last}  and  ${color2.firstName}`;


        return (colors, result);

    }
}



const hyper = new Dog("yellow", "blue");
const hyper2 = new Dog("red", "orange");


console.log(Dog.color(hyper, hyper2));


//Third example
// Refactor the class 

const Person1 = function(name, age) {
    this.name = name;
    this.age = age;

    Person1.prototype.describe = function() {
        return `${this.name} and ${this.age}`;
    }
}

const Person2 = function(name, age, occupation) {
    Person1.call(this, name, age, occupation); //super
    this.occupation = occupation;
}

Object.setPrototypeOf(Person1.prototype, Person2); //extends

Person2.prototype.explain = function() {
    return `${this.name}:: ${this.age} :: ${this.occupation}`
}

const p1 = new Person1("ho", 19);
const p2 = new Person2("John", 30, "software engineer")

console.log(p1.describe());
console.log(p2.explain());


// class Person1 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     describe() {
//         console.log(`this is the ${this.name} and ${this.age}`);
//     }
// }

// class Person2 extends Person1 {
//     constructor(name, age, occupation) {
//         super(name, age);
//         this.occupation = occupation
//     }

//     explain() {
//         return `${this.occupation}`
//     }
// }

// const p1 = new Person1("Divine", 19);
// const p2 = new Person2("Albert", 27, "software engineer");

// console.log(p1, p2);



console.log("----------------------------------------object.prototypeof");
class Animals {
    constructor(name) {
        this.name = name;
    }
}

const obj = {
    speak() {
        console.log(`${this.name} and that's is all!`);
    }
}

Object.setPrototypeOf(Animals.prototype, obj);

let d = new Animals("Divine");
console.log(d.speak());