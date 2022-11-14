const classNumber = 20;
const totalNumber = classNumber * 20;

console.log(totalNumber, typeof totalNumber);


// Types: Boolean, Number, String!
console.log("-----------------------Types");
const sentenceNumber = 30;
const sentenceBoolean = true;
const sentenceString = "class";

const combinationSentence = "Hello" + " " + sentenceNumber + " " + sentenceString + " " + sentenceBoolean;
const sentenceWithTemplate = `the sentenceNumber is ${sentenceNumber},  the sentenceString is ${sentenceString} and  sentenceBoolean is ${sentenceBoolean}`;
console.log(sentenceWithTemplate);
console.log(combinationSentence);

console.log("-----------------------first if statement");

// Control Flow: if, else if, else!
const studentIsDeliberate = false;
// Boolean if statement
if (studentIsDeliberate) {
    console.log("this is the true answer!")
} else {
    console.log("it is not true!");
}

// Number if statement
console.log("-------------------------------second if statement");
const Books = 50;

if (Books <= 50) {
    console.log("Print it out!");
} else if (Books > 50) {
    console.log("Endeavour to print it out!");
} else {
    console.log("it is not printing!");
}

// String if statement!
console.log("-----------------------------------third if statement");
const names = "Divine";

if (names === "Albert") {
    console.log("Try to print");
} else if (names <= "Divine") {
    console.log("Trust you guy!");
} else {
    console.log("Experimentation of printing!");
}

// LOOPS: While loop and For loop!

// for loops
console.log("-----------------------------first for loop");
let scope = 10
for (let i = 0; i < 10; i++) {
    if (2 + 2 === 4) {
        console.log("loops", i)
    } else {
        console.log("Hello!", i)
    }
}

let namesClass = ['divine', 'student', 'albert', 'bob', 'clone', 'students', 'skipped'];
console.log("---------------------------second for loop")
for (let name of namesClass) {
    console.log(namesClass);
    if (list = "class") {
        console.log("class");
        break;
    }
}

// OR
console.log("----------------------------third for loop");
for (let i = 0; i < namesClass.length; i++) {
    console.log(namesClass[i]);
}

console.log("----------------------------fourth for loop");

let value = 0;

for (let i = 0; i <= 10; i++) {
    value++;
    console.log(value, i);
}

console.log("---------------------------- while loop");

// while loops
let countLess = 0;

while (countLess < 200) {
    countLess++;
    console.log(countLess);
}

console.log("------------------------+=");
let count = 0;
for (i = 0; i <= 10; i++) {
    count += 1;
    console.log(count);
}

console.log("------------------------Exercise");


let character = "f";
let timesToRepeat = 5;
let answer = " ";

for (let i = 0; i < timesToRepeat; i++) {
    answer += character;
    console.log(answer);
}

console.log("------------------------Function and Scope");

function addThree(number, string) {
    let totalReturn = number + string + (2 * 2);
    return totalReturn;
}

const finalAnswer = addThree(3, 5);
console.log(finalAnswer);
console.log(addThree(20, 10));

console.log("------------------------Array Function");

function containerNames(firstName, lastName) {
    let sentenceNames = `my name is ${firstName} ${lastName}`;
    return sentenceNames;

}

let printing = (containerNames("divine", "ajaegbu"));
console.log(printing);

console.log("------------------------String Function");
let student = 30;
let age = 10;
let country = "Nigeria";
let gender = "Female";

function totalForm(city, status, address) {
    let totalFormPrint = `That's my country ${city} ${status} ${address}`;
    console.log(totalFormPrint);
}


let outSidePrint = totalForm(student, age, "mgbuke village");
console.log(outSidePrint);

console.log("------------------------First Scope");
let global = "string";
let numbers = 20;
let totalScore = "";

function semantics() {
    if (true) {
        for (let i = 0; i < numbers; i++) {
            totalScore += global;
        }
        console.log(totalScore);
    }
}

semantics();

console.log("------------------------Second Scope");

let A = "A";
const P = "P";

function alphaBet(B) {
    if (2 + 2 === 4) {
        const C = "C";
        A = "The woman is heading towards ibafo!"
    }

    console.log(A);
    // console.log(C);
}

alphaBet();

console.log("------------------------Scope Chain");

let a = 12;

let addNumber = function (num) {
    let C = 12;
    console.log(num + C + a); //Answer equals to 44;

    function add2(sites) {
        let length = 2;
        console.log(sites + length * a); //Answer equals to 26;
    }

    add2(2);

    function add10(timeOut) {
        let a = true;
        let X = "";
        let y = 0;
        if (a) {
            for (let i = 0; i <= 10; i++) {
                y++;
                X += a;
                console.log(X, i);
                console.log(y);
            }
        }
    }
    add10(3);
}

addNumber(20);




console.log("--------------------------------ARRAY AND OBJECT");

console.log("-------------------------------First Object");
let formVariable = true;
let num = 5;

const form = {
    firstName: "Divine",
    lastName: "Eziwanne",
    Gender: "Female",
    maritalStatus: "single",
    address: {
        street: "1234",
        place: "123-lagos"
    }
}


function listObject() {
    if (formVariable) {
        for (i = 1; i <= num; i++) {
            formVariable;
            console.log(formVariable, i)
        }
        let totalObject = `my name is ${form.firstName} ${form.lastName},
        i am a ${form.Gender} and i am ${form.maritalStatus}. 
        my address is ${form.address.street} and place is ${form.address.place} Well done!`;
        return totalObject;
    }
}

let summary = listObject();
console.log(summary);


console.log("-------------------------------Second Object: Nested Object");

let secondForm = {
    firstName: "Ajaegbu",
    secondName: "Divine",
    lastName: "Ezinwanne",

    education: {
        ocupation: "software engineer"
    },

    thing: {
        fruit: "Apple",
        anotherFruit: "Orange"
    },

    scope: function () {
        // if (secondForm.thing.fruit === "Orange") {
        //     let A = "A";
        //     let B = 20;
        //     let emptyString = "";

        //     for (let i = 0; i <= B; i++) {
        //         emptyString += A;
        //         console.log(emptyString, i);
        //     }
        // }
        if (secondForm.secondName === "Divine") {
            return `my name is ${secondForm.firstName} ${secondForm.secondName} ${secondForm.lastName}.
              i ame a ${secondForm.education.ocupation}, and i love this fruits called ${secondForm.thing.fruit} and ${secondForm.thing.anotherFruit}. Thanks!`;
        }
    }
};
let examineResult = secondForm.scope();
console.log(examineResult);
console.log(secondForm);


console.log("-------------------------------Third Object");
let y = 30;
const person1 = {
    firstName: "Albert",
    secondName: "Divine"
};

const person2 = {
    school: "University",
    class: "SS2"
}

let container = function (num) {
    if (person2.school === "University") {
        let name = "A";
        let count = 10;
        let countString = "";

        for (i = 0; i <= count; i++) {
            countString += name;
            console.log(countString, i);
        }
    }

    if (person1.firstName === "Albert") {
        let totalReturn = num * y;
        return totalReturn;
    }

}


let totalContainer = container(2);
console.log(totalContainer);


console.log("-------------------------------Fourth Object");
const books = {
    novel: "my one and only",
    novel2: "chioma tears",

    locations: {
        state: "Anambra",
        country: "Nigeria",
        getStateAndCountry() {
            return `${this.state} and ${this.country}`;
        }
    },

    getAddress: function () {
        return `${books.novel} and ${books.novel2}`;
    }
};

console.log(books.locations.getStateAndCountry());
console.log(books.getAddress());
console.log(books);

console.log("-------------------------------First Array");
const myBook = [
    "hospital",
    "House",
    "School",
    "Class",
    "Department"
];

function totalBook() {
    let totalReturnBook = `${myBook[0]}`;
    return totalReturnBook;
}

totalBook();
console.log(myBook[0]);

console.log("-------------------------------Second Array");

let getNum = true;
let experiment = "B";
let experimentString = "";

let numCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numTotal() {
    if (getNum) {
        for (let i = 0; i < numCount.length; i++) {
            getNum;
            console.log(getNum, i)
        }
    }

    function property() {
        if (getNum) {
            for (let i = 0; i < numCount.length; i++) {
                experiment;
                console.log(experiment, i);
                // experiment = "A";
                // experimentString += experiment;
                // console.log(experimentString, i);
            }
        }
    }

    property();
}

numTotal();

console.log("-------------------------------Third Array");

let getBooksVariable = true;
let getBooks = [
    { firstName: "Ajaegbu", secondName: "Divine" },
    { school: "university", country: "Nigeria" },
    { maritalStatus: "single", Gender: "female" }
]

function getBooksForm(num) {
    if (getBooksVariable) {
        let result = getBooks[0];
        getBooks[0] = { firstName: "Albertase", secondName: "couple" };
        getBooks.push({ firstName: "Albert", secondName: "prestige" });
        console.log(getBooks);

        for (let i = 0; i < getBooks.length; i++) {
            const books = getBooks[1];
            console.log(books)

        }
        console.log("-------------------------------Another Third Array");

        for (let i = 0; i < getBooks.length; i++) {
            console.log(getBooks[i]);
        }
        console.log(result)
    }
}

getBooksForm(20)

console.log("-------------------------------ForEach Array");

let number = [
    "Apple",
    "Tomatoes",
    "Orange",
    "Paw Paw"
];

let clone = "C";
let cloneString = "";
number.forEach(function (fruits, index) {
    cloneString += clone;
    console.log(index, fruits.toUpperCase());
    console.log(cloneString);
})

console.log("-------------------------------An array of Arrays");

let colorOfShade = true;
let color = [
    ["red", "blue", "pink"],
    ["orange", "crimson", "limegreen"],
    ["darkblue", "yellow", "purple"]
];

color.forEach(function (colorName, index) {
    let firstColor = color[0];
    color.push(["cyan", "darkblue", "whitesmoke"]);
    console.log(index, colorName);
    console.log(color.join("-"));
});



// console.log(number)