"use strict"

console.log("--------------------------Arrays")


var a = [1, 2, 3, [4]];

console.log(a.length);
console.log(a[0] === 1);
console.log(a[3][0] === 4);
console.log(a[4] = 10);
console.log(["1"])
console.log(a)

console.log("---------------------------for B")
var b = [];

console.log(b[0] = 1);
console.log(b[1] = 2)
console.log(b[2] = 3)
console.log(b[3] = 4)
console.log(b[4] = 5)
console.log(b[5] = [7])
console.log(b[6]);
console.log(b["footer"] = 1);
console.log(b.footer)
console.log(b["29"] = 10)

console.log(b.length)

console.log(b)

console.log("------------------------------indexOf, concat, forEach for Array Likes");

function foo() {
    var arr = Array.from(arguments);
    arr.push("bam");
    console.log(arr)
}

foo("bar", "baz;");

function createArray() {
    var newArr = Array.prototype.slice.call(arguments);

    newArr.push("bam", "clock");

    return newArr;
}


console.log(createArray("boy", "woman", "people"));


console.log("---------------------------------converting strings to arrays");

var strings = "people";
var loops = "styles"

console.log(strings.toUpperCase())
console.log(strings.split(''));
console.log(Array.prototype.join.call(strings, "-"));
console.log(Array.prototype.map.call(strings, function(d) {
    return d.toUpperCase() + Array.prototype.join.call("#")
}));

console.log(strings.concat(loops))
console.log(Array.prototype.indexOf.call(loops));

console.log("---------------------------Numbers")

var c = 5000;
var x = 10;
var y = 9;
var m = 234.5467
console.log(c.toExponential())
console.log(x.toExponential())
console.log(y.toExponential())
console.log(m.toFixed(1))
console.log(m.toFixed(2))
// console.log((59).toFixed(5))
console.log(m.toPrecision(1))
console.log(m.toPrecision(2))

//literal numbers
console.log((59).toFixed(5))
console.log((59).toFixed(5))
console.log(27.59.toFixed(5))

//testing for integers
console.log(Number.isInteger(y));
console.log(Number.isInteger(m));
console.log(Number.isSafeInteger(m));
console.log(Number.isSafeInteger(y));



function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) > Number.EPSILON;
}

console.log(numbersCloseEnoughToEqual(2, 1))

//testing for integers

if(!Number.isSafeInteger) {

    Number.isSafeInteger = function(num) {
        return Number.isInteger(num) && 
        Math.abs(num) <= Number.MAX_SAFE_INTEGER
    }
}

console.log(Number.isSafeInteger(10));


// const fetchPromise = fetch("")

function addition(a)
{
    return a + a
}


addition(10)