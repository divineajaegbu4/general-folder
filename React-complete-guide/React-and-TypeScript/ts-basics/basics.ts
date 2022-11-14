//primitives types: number string boolean
//more complex types: arrays object
//function types: parameters

//primitives

let age: number;
age = 12;

let username: string | string[];
username = "Divine";

let isInstructor: boolean;
isInstructor = true;

//more complex
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//Type alias

type Person = {
  name: string;
  age: number;
};

let person: Person;

// person = {
//   name: "Divine",
//   age: 19,
// };

// person = {
//   isEmployee: true,
// };

let people: Person[];

//Type inference and union type
let course: string | number = "Divine is learning react!";
course = 25;

//Functions & types
function source(a: number, b: number): number | string {
  return a + b;
}

function print(value: any): void {
  //return void;
  // void means null or undefined
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3, 4];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3,4]
const stringArray = insertAtBeginning(["Albert", "Divine"], "Loveth");
