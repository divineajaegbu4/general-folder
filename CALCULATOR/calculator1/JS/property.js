console.log("--------------------------------------Array of property");

let fruits = ["orange", "pineapple", "banana"];

console.log(fruits.length - 1);

let result = true;

function fruitContainer() {
    if (result) {
        fruits.forEach(function(value, index) {
            console.log(index, value);
        })

    }
}

fruitContainer();

console.log("--------------------------------------Second Array of property");

let food = ["rice", "beans", "moi moi", "yam"];
let items = ["phone", "laptop", "bag", "book"];

let addFood = food.push("chicken"); //add list from the items
let removeFood = food.pop(); //remove list from the items back
let removeFront = food.shift() //remove list from the items front;
let addUnShift = food.unshift("jollof rice", "salad"); //add list from the front
let addItems = food.concat(items); //combine two array items together
console.log(food);
console.log(addItems);

console.log("--------------------------------------Math of property");

function conclusion(value) {
    return Math.floor(Math.random() * value);
}

let results = conclusion(10);
console.log(results);