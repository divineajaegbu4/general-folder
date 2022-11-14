// const list = require("surge/lib/middleware/list")

console.log("-------------------------Array")

var a = [1, 2, [3]]

console.log(a)
console.log("length:", a.length)
console.log(a[1], + a[2])
console.log(a[2][0] === 3)


var b = [];

b[0] = "Divine";
b[1] = "Albert";
b[2] = "Prestige";
b[3] = "444";
b["footer"] = 3
b["59"] = 3

console.log(b)
console.log("using string adding one on it::", b.length)

var c = {};

c.firstName = "John";
c.secondName = "Leo";
c.lastName = "Clue";

console.log(c)


console.log("------------------------------------Array Likes")


function sliceUp() {
    var createArr = Array.prototype.slice.call(arguments);
    createArr.push("man", "woman")

    return createArr;
}


console.log(sliceUp("sister", "brother"))

function joinDown() {
    // var createJoinArr = Array.prototype.join.call(arguments)
    var createJoinArr = Array.from(arguments)

    // createJoinArr.push("/")

    return createJoinArr
}

console.log(joinDown("Albert my love*****", '', "failing in love with Albert +++++//"))

console.log("----------------------------------------Strings")

var q = [1, 2];

var name = "Albert Divine";


console.log(a.indexOf(1))
console.log(a.indexOf(2))

//*************************** */

console.log("non-Proliferated strings:", name.split(' '))
console.log("Proliferated strings:", name.split(''))

//***************************** */

console.log(q.concat(name))

//***************************** */

console.log(name.toUpperCase())
console.log(q.push(name, "!"))
console.log(q)

//***************************** */

var p = Array.from(name, function (v) {
    console.log(v.toUpperCase()) + "."
}).join("")

//***************************** */

var c = Array.prototype.join.call(name, "-");
// var e = Array.prototype.reverse.call(name);

// e.push("line", "height")

//***************************** */

console.log(c)
// console.log(e)


console.log("----------------------------------Numbers")

var n = 2.457680078;

console.log(n.toFixed(0))//23
console.log(n.toFixed(1))//23.5
console.log(n.toFixed(2))//23.46
console.log(n.toFixed(3))//23.458
console.log(n.toFixed(4))//23.4577
console.log(n.toFixed(5))//23.45668
console.log(n.toFixed(6))//23.457680
console.log(n.toFixed(7))//23.4576801
console.log(n.toFixed(8))//23.45768008

//***************************** */

console.log("------------------------")

// console.log(n.toPrecision(0))
console.log(n.toPrecision(1))
console.log(n.toPrecision(2))
console.log(n.toPrecision(3))
console.log(n.toPrecision(4))
console.log(n.toPrecision(5))
console.log(n.toPrecision(6))
console.log(n.toPrecision(7))
console.log(n.toPrecision(8))

console.log("------------------------Number.Epsilon")

function twoNumbersToCompare(n1, n2) {

    return Math.abs(n1 - n2) <= Number.EPSILON;
}


var a = 0.1 + 0.2;
var b = 0.3;


console.log(twoNumbersToCompare(a, b))

console.log("------------------------Testing for Integers")

// function testingForIntegers(x, y) {

//     if(isInteger) {

//         return Math.abs(x + y)  >= Number.EPSILON;
//     }
// }

// console.log(testingForIntegers.isInteger(400, 1234000))

// var isNum = 39

console.log(Number.isInteger(42))
console.log(Number.isSafeInteger(.43))

// console.log(Math.pow("90")

console.log("---------------------------Null and Undefined")


var py = 34
console.log(void py, py)


// if(!Number.isNaN) {

//     Number.isNaN = function(n ) {

//         return (
//             typeof n === Number && window.isNaN(n)
//         )
//     }
// }

var a = 2 / "foo"
var b = "foo"

var el = 1 / 0

console.log(isNaN(a))
console.log(isNaN(b))

console.log(el)

console.log("---------------------------")

// function isNegZero(n) {

//     n = Number(n);

//     return (n === 0) && (1/n === -infinity)
// }

// console.log(isNegZero(-0))
// console.log(isNegZero(0/-3))
// console.log(isNegZero(0))

console.log("----------------------void")

void setTimeout(doSomething, 100)

function doSomething() {

    var result = 60;

    var totalResult = 90;

    console.log(totalResult - result);
}

var things = [1, 23];

console.log(void things, things)


console.log("----------------------NaN and isNaN")

var a = 2 / "divine";

var b = "What's up"

console.log(a)//NaN
console.log(Number.isNaN(a))//true is a NaN.

console.log(Number.isNaN(b)) // false is not a NaN.

console.log("--------------------------")

function AboutNaN() {

    var c = 20 - "Albert";

    if (Number.isNaN(c)) {
        return true
    } else if (NaN !== NaN) {
        return "yes is true"
    } else {
        return false
    }
}

if (!Number.isNaN()) {

    Number.isNaN = function (n) {

        return void n !== n
    }
}

console.log(AboutNaN())

console.log(Number.isNaN())

console.log("-------------------------------Infinity")

var a = Number.MAX_VALUE;

console.log(a)
console.log(a + a)//infinity

var b = JSON.stringify(0 / -3);//converting it to a string
console.log(b)
console.log(typeof (b), (b))
console.log(isNaN(b))
console.log(b === NaN)

var c = JSON.parse("0") // converting it to a number.

console.log(typeof (c), c)

console.log("--------------------------Special Equality")

if (!Object.is) {

    Object.is = function (v1, v2) {

        if (v1 === 0 && v2 === 0) {

            return 1 / v1 === 1 / v2;
        }

        if (v1 !== v2) {

            return v1 !== v2;
        }

        return v1 === v2 //else
    }
}

console.log(Object.is(NaN, NaN))

console.log("--------------------------Value versus")

var a = [1, 2, 3, 4]

var n = 4;
var b = a;

console.log(n === NaN)
console.log(a);

console.log("------------------------------")

function reference(x) {

    x.push(5, 6)

    return `${x} and ${x.length}`;
}

var a = [1, 2, 3, 4]

console.log(reference(a.slice()))

console.log("----------------------------------")


function foo(wrapper) {

    return wrapper.a = 42;
}


let obj = {
    a: 2
}

// console.log(foo(obj))
console.log(foo(obj))

console.log("----------------------------------")

function sites(viewSites) {

    return viewSites++
}

var a = 123;

var b = new Number(a);

console.log(sites(b))








console.log("---------------------------------------Closure types and ")

function typesValues() {// array

    var a = [];

    a[0] = "Apple";
    a[1] = "Banana";
    a[2] = "Orange";
    a[4] = "watermelon";
    a[5] = "pineapple";

    a.forEach(function (item) {
        return item
    })


    function typesNumber() {//Number

        var b = 234.789;
        return `toFixed: ${b.toFixed(2)} toPrecision: ${b.toPrecision(4)}`;//234.79, 234.8
    }

    function typesString() {//String

        var c = Array.from(a)//["Apple", "Banana", "Orange", "watermelon", "pineapple"]

        return c;
    }

    function typesVoid() {//void

        if (!Object.is) {

            Object.is = function (x, y) {

                if (x === 0 && y === 0) {
                    return void (x === 0) && (y === 0)
                }
                else {
                    return void x === x
                }
            }
        }

        console.log(Object.is(0, 0));//true
        console.log(Object.is(4, 5));//false
        console.log(Object.is(3, 4));//false
        console.log(Object.is(5, 5));//true
    }

    function typesReferenceVariables(x, y) {//value versus

        x.c = 10;
        y.n = 100;

        return y.n - x.c //90

    }


    function typesIsNaN() {

        var num = 70;

        var numString = "Divine";

        if (Number.isNaN(num / numString)) {

            return num / numString;//NaN
        }

        if (NaN !== NaN) {
            return true;  //true
        }
    }



    let callFn = {
        firstTypes: typesNumber,
        secondTypes: typesString,
        thirdTypes: typesVoid,
        fourthTypes: typesReferenceVariables,
        fifthTypes: typesIsNaN
    }

    return callFn;


}

let operatorTypes = {

    c: 3,
    n: 45
}


var callTotalFn = typesValues();

console.log(callTotalFn.firstTypes());
console.log(callTotalFn.secondTypes());
console.log(callTotalFn.thirdTypes());
console.log(callTotalFn.fourthTypes(operatorTypes, operatorTypes));
console.log(callTotalFn.fifthTypes());








console.log("-----------------------------------Natives")

var s = new String("Hello, world!");

console.log(typeof (s), s.toString());

console.log(Object.prototype.toString.call("elegant websites"));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call({ firstName: "divine", secondName: "Divine" }));
console.log(Object.prototype.toString.call([1, 2, 3]));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(function (x) {
    return x * x;
}));
console.log(Object.prototype.toString.call(234));
console.log(s instanceof String)

var result = "Divine";

console.log(result.length);


console.log("----------------------------------------ValueOf");

var a = new String("name");//object wrapper
var b = new Boolean(false);//object wrapper
var c = new Number(234);//object wrapper
var d = new Array([1, 2, 3, 4, 5, 6, 7]);//object wrapper

var sites = "what's up?"

console.log(a.valueOf(), String(a.valueOf()), typeof (a));
console.log(b.valueOf());
console.log(c.valueOf());
console.log(d.valueOf());
console.log(sites.valueOf());

console.log("--------------------------------")

function fakeJoin(arr, constructor) {

    var str = "";

    for (let i = 0; i < arr.length; i++) {

        if (i > 0) {
            return str += constructor
        }

        if (arr[i] !== undefined) {
            return str += arr[i]
        }
    }

    return str;
}

var a = new Array(3);

console.log(fakeJoin(a, "--"))

var emptyObj = {};

emptyObj.a = "like";
emptyObj.b = 50;

console.log(emptyObj);

var regularExp = new RegExp(emptyObj + fakeJoin(a, "--") + sites)

console.log(regularExp);

var convert = Symbol("like most")
var convert2 = RegExp("like most")

console.log(convert)
console.log(convert2)
console.log(Object.getOwnPropertySymbols(convert2));

console.log("------------------------")

if (!Date.now) {
    Date.now = function () {

        return (new Date()).getTime();
    }
}

console.log(Date.now())

// function errorCatch(x) {

//     if(!x) {
//         throw new Error("unknown x")
//     }

//     return x;
// }

// console.log(errorCatch())



console.log("-----------------------------Coercion")

console.log("the process of converting a value from one type to another is called (type casting or type conversion)")

//implicit coercion
var a = String(79);

var b = a + "";

var c = a



console.log(b, typeof (b));

// Explicit coercion

console.log((c), typeof (c))


//Practical coercion

var n = Math.abs(parseFloat("567"));

var x = "Divine Favour";

var y = true;



// console.log(void n, void x, void y, n + " ", x + " ", y) //implicit coercion

console.log(`${void n}, ${void x}, ${void y}, ${n}, ${x} and ${y}`)

console.log(typeof (n), typeof (x), typeof (y), isNaN(n))// Number String and Boolean


console.log("----------------------------------JSON-Stringify or JSON-Safe");

var R;

console.log(JSON.stringify(undefined))
console.log(JSON.stringify(Object))

let lock = {}

lock.x = 1;
lock.y = 10;
lock.n = 14;
lock.p = 16;

console.log(JSON.stringify(lock));
console.log(JSON.stringify(lock, function (n, z) {

    if (n !== lock.p) {

        return z
    }
}));


let forms = {

    maritalStatus: "single",
    age: 19
}

var newObject = Object.create(forms);

newObject.firstName = "Divine";
newObject.lastName = "Prestige";



console.log(newObject.age, newObject.maritalStatus);

console.log("-----------------------------------------")

var a = {

    valueOf: function () {

        return "42"
    }

};

var b = {

    toString: function () {
        return "42"
    }
};

var c = [1, 2, 3];

c.toString = function () {
    return this.join("");
}

console.log(Number(a))
console.log(Number(b))
console.log(Number(c))
console.log(Number([]))
console.log(Number({}))
console.log(Number(""))


console.log("----------------------------------------Truthy and Falsy values")

var a = new Boolean("")//object wrapper
var b = new Boolean([]);//object wrapper
var c = new Boolean(0);//object wrapper
var d = new Boolean(-0);//object wrapper
var e = new Boolean(null);//object wrapper
var h = new Boolean(NaN);//object wrapper
var f = !!(undefined);
var g = !!({})

console.log(typeof (a), a)
console.log(typeof (b), b)
console.log(typeof (c), c)
console.log(typeof (d), d)
console.log(typeof (e), e)
console.log(typeof (f), f)
console.log(typeof (g), g)
console.log(typeof (h), h)


var p = 90;

var r = p.toString();

console.log(typeof (r), r)


console.log("-----------------------------------------")

var listItem = ["father", "mother", "sister"];

if (listItem.indexOf("father") === 0) {

    listItem.forEach(function (name) {
        console.log(name)
    })

}

console.log("-----------------------------------------")

var a = [1, 2];
var b = [2, 3];

console.log(a + b)

console.log(a + "");


var a = "42";
var b = "abc";
var c = null;

console.log(a || b);
console.log(a && b);
console.log(c || b);
console.log(c && b);


//********************************* */

function evaluate(a, b) {

    a = a || "hello";
    b = b || "world";

    console.log(a + " " + b)
}

evaluate("foo", "foo")
evaluate();

var a = 60;
var b = null;
var c = "lookUp";


function decipherCode() {

    if (a && (c || b)) {

        return true;
    } else {
        return false;
    }
}

console.log(decipherCode())


var s1 = Symbol("sites");


String(s1)

console.log(typeof s1)


if (typeof s1 == "symbol") {
    console.log(true);
} else {
    console.log(false);
}

var p = Boolean("65");
var x = true;
console.log(p == x)

console.log("--------------------------Symbol")

var s1 = Symbol('cool')
console.log(typeof String(s1))

console.log("--------------------------Comparing Strings and Numbers")

var a = 42;
var b = '42'

function corecionFn() {
    return a == b ? 'A' : a === b ? 'B' : 'C'
}

console.log(corecionFn())

var a;
var x = '43';
var y = true;
var zero = 0
var falseZero = false

function booleanFn() {
    // return x === y ? 'Expected' : x == y ? "Yes, expected!" : "None"
    return zero === falseZero ? false : zero == falseZero ? true : 'ignore'
    // if (!!a) {
    //     return "Divine"
    // }
}

console.log(booleanFn())

console.log("--------------------------Comparing Null and Undefined")



function emptiness() {
    var a = null;
    var b;
    return a == b
}

console.log(emptiness())

function evaluate() {
    var a = doSomething()

    return a
}


console.log(evaluate())


console.log("--------------------------Comparing Objects and nonObjects")

function objectFn() {
    var a = 42;
    var b = [42]

    return a == b
}

console.log(objectFn())



function objectFn2() {
    var a = 10
    var b = Object(a)

    return a == b
}

console.log(objectFn2())

console.log("--------------------------Edge Cases")
Number.prototype.valueOf = function (num) {
    return num * num
}


const executeCallStack = new Number(5)

console.log(executeCallStack)

let person = {
    reName: "Albert"
}

console.log(person.valueOf('Albert'))

console.log("--------------------------Falsy comparison")

var i = '0'

var newArr = ['Divine', 'Albert', 'Ajaegbu', 'Ukaegbu']

console.log(newArr.toString())

function comparisonFn() {
    return i == !'\n'
}

console.log(comparisonFn())


function toValuesP() {
    // return typeof (i) == 'function'

    var a = ['0']
    var b = [1]
    // return b < a ? true : a < b ? false : undefined
    return b > a
}

console.log(toValuesP())

function reasonableFn() {
    var a = [0, 2, 3, 45, 6]
    var b = [2, 3, 1]

    return a > b
}

console.log(reasonableFn())

function objectFn() {
    var a = {
        b: 42
    }

    var b = {
        b: 43
    }

    return a <= b
}

console.log(objectFn())

function arrFn() {
    var a = [43]
    var b = '043'

    return a > b
}

console.log(arrFn())


console.log("------------------------------------Grammer")
/*
3 * 6 --> Experssion, a = 3* 6; --> Statements
a --> Expression,  b = a; --> Statements, var a 3 * 6  and var b = a--> declaration statements,
a = 3 * 6 and b = a --> assignment expression

the third one (b) is an expression but it also a statements by itself. This is called 
(Expression Statement)
*/
var a = 3 * 6;

var b = a;

console.log(b)

function incrementFn() {
    var a = 42;
    // var b = a++//++a
    var b = (a++, a)

    return `\n A: ${a} \n B: ${b}`
}


console.log(incrementFn())

function deletFn() {
    var a = {
        b: 42
    }

    console.log(delete a.b)
    console.log(a.b)

}

deletFn()


function vowels(str) {
    var matches;

    return matches = str ? str.match(/[aeiou]/g).toString().toUpperCase() : str.split(' ')

    // if ((str && (matches = str.match(/[aeiou]/g).toString().toUpperCase()))) {
    //     return matches
    // }
    // if ((str)) {
    //     matches = str.match(/[aeiou]/g).toString().toUpperCase()
    // }

    // if ((matches)) {
    //     return matches
    // }

}



const callMatches = vowels("Hello,word")

console.log(callMatches)

console.log("---------------------------Label")
// This is called labeled statements because first is a label for the statement voewls()
const names = {
    first: vowels
}

console.log("---------------------------Labeled iteration")


function iterationLabeled() {
    var count = 42
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (j == i) {
                // b = (count++, count)
                b = ++count

                return `COUNT: ${count}, B: ${b} `
            }
        }
    }

    // return `${i} and ${j}`
}

console.log(iterationLabeled())
console.log(iterationLabeled())
console.log(iterationLabeled())


function anotherIteration() {
    foo: for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if ((i * j) >= 3) {
                console.log("Stopping!", i, j)
                break foo
            }

            console.log(i, j)
        }

    }
}


anotherIteration()

function foo() {
    bar: {
        console.log("Hello")
        console.log("Never runs")
        break bar
    }

    console.log("world")
}


foo()


console.log([] + {})
console.log({} + [])

function getData() {
    return {
        a: 42,
        b: 55
    }
}

const callData = getData()

console.log(callData.a)
console.log(callData.b)


function foos({ a, b, c }) {
    var a = a, b = b, c = c

    console.log(a.toFixed(5), b.toUpperCase(), c.toString())
}

foos({
    c: [1, 2, 3, 4],
    a: 42,
    b: 'foo'
})

console.log("----------------------------short ciruiting")

function shortCircuiting() {
    return true && true
}

console.log(shortCircuiting())


function chaining() {
    var a = 10, b = 45, c = 90

    // return (a && b) || c

    return (a && b) || c ? (a || b) : a || (b && c)
}


console.log(chaining())


console.log("-------------------------------ASI(Authomatic Semicolon Insertion)")


function arg(a, v) {
    'use strict'

    if ((!!a)) {
        return arguments
    } else {
        throw error("Syntax error")
    }

}


try {
    console.log(arg(1, 4))
} catch (e) {
    console.log(e.message)
}


function actionIte() {
    for (let i = 0; i <= 10; i++) {
        try {
            continue
        } finally {
            console.log(i)
        }
    }
}

actionIte()

function bites() {
    var a = [1]
    if (Array.prototype.push) {

        a.push(2, 3)

        if ((a[1] === 2 && a[2] === 3)) {
            // a.forEach(function (items) {
            //     return items[0] <= items[2]
            // })

            return `${a[0] <= a[2]} A: ${a}`
        }
    }

}

console.log(bites())


const bodyEl = document.querySelector('body')

function appends() {
    const appendScript = document.createElement('script')

    appendScript.setAttribute('src', '../JS/experiment.js')

    bodyEl.appendChild(appendScript)
}

appends()

