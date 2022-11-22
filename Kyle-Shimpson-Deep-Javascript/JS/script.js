"use strict";

var x = 40;

console.log(++x);

console.log("------------------------First function");

function plusPlus(original) {
  var originalIncrement = original;
  x = originalIncrement + 1;

  return originalIncrement;
}

var x = 5;
console.log(plusPlus(x));
console.log(x);

// console.log(x = x+1)

console.log("-----------------------------Bigint");

const bigNumber = BigInt(
  "22222222222222222222222222222222222222222222222222222"
);
console.log(bigNumber);

console.log("----------------------------------typeof operator");
var a;
a = true;
console.log(typeof a); //boolean

a = 1;
console.log(typeof a); //number

a = "Divine";
console.log(typeof a); //string

a = BigInt("33333333333333333333"); //bigint
console.log(typeof a);

a = [1, 2, 3, 4];
console.log(typeof a); //object

a = { name: 1, name2: 4 };
console.log(typeof a); //object

a = null;
console.log(typeof a); //object

a = NaN;
console.log(typeof a);

var g;
console.log(typeof g); //undefined

// var p =
// console.log(typeof(p))//symbol

console.log("-------------------------isNaN");

console.log(isNaN("4567"));
console.log(isNaN("1not3"));
console.log(isNaN("4567"));
console.log(isNaN("34"));
console.log(Number("459"));
console.log(Number("459"));
console.log("----------------");
console.log(isNaN(NaN));
console.log(isNaN(null));
console.log(isNaN(undefined));

console.log("-----------------------");
console.log(Number("459"));
console.log(Number("boy-girl"));

console.log("--------------------------");
console.log(isNaN(parseInt("+")));
console.log(isNaN(parseInt("-")));

console.log("-----------------------Negative of Zero");

var negativeOfZero = -0;

console.log(negativeOfZero === -0);

console.log(Object.is(negativeOfZero, -0));
console.log(negativeOfZero.toString());

console.log(Math.sign(-3));
console.log(Math.sign(-10));
console.log(Math.sign(-3));
console.log(Math.sign(0));

function sign(v) {
  if (v > 0 || Object.is(v, -0)) {
    console.log("👆");
  } else {
    console.log("👇");
  }

  return `${Math.abs(v)}`;
}

console.log(sign(-0));
console.log(sign(-90));

console.log(Math.abs(Number(parseFloat("-70"))));

console.log(Object.is(32, 32));
console.log(Object.is(undefined, undefined));
console.log(Object.is(undefined, undefined));
console.log(Object.is(40, "40"));

//******************************** */

if (!Object.is || true) {
  Object.is = function (x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else {
      return x === y;
    }
  };

  //*********************************** */

  function isItNegZero(v) {
    return v == 0 && 1 / v == -Infinity;
  }

  function isItNaN(v) {
    return v !== v;
  }
}

console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is("false", "false") === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(0, -0) === false);
console.log(Object.is(null, 0) === false);
console.log(Object.is(2, 45) === false);
console.log(Object.is(undefined, 0) === false);
console.log(Object.is("generous", "succeed") === false);
console.log(Object.is(true, false) === false);
console.log(Object.is(54, 90) === false);
console.log(Object.is(3, 4) === false);

console.log("-------------------Coercion(type conversion)");

var num = Number("10");

console.log(typeof num, +num);

console.log("---------------------------------ToString");

var firstNum = String(890);

console.log(typeof firstNum, firstNum);

console.log("---------------------------------ToNumber");

var arr = Number([""]);

var arr2 = Number([null]);

var arr3 = Number([1, 2, 3]);

var arr4 = Number([undefined]);

var arr5 = Number({ firstName: 50 });

console.log(typeof arr, arr);
console.log(typeof arr, arr);
console.log(typeof arr3, arr3);
console.log(typeof arr4, arr4);
console.log(typeof arr5, arr5);

console.log("---------------------------------ToBoolean");
//converting string to a boolean so that when you do typeof it will turns to boolean and is one of the natives
var rows = Boolean("like");
var rows2 = Boolean(45);
var rows3 = Boolean([""]);
var rows4 = Boolean({ firstName: "Albert" });
var rows5 = Boolean({});

console.log(typeof rows, rows);
console.log(typeof rows2, rows2);
console.log(typeof rows3, rows3);
console.log(typeof rows4, rows4);
console.log(typeof rows5, rows5);

function addAStudent(numStudents) {
  return numStudents + 1;
}

var increaseStudent = 70;

console.log(
  `increase the student count by ${String(
    addAStudent(increaseStudent)
  )}, and typeof ${typeof addAStudent(increaseStudent)}`
);

console.log(4 > 2 > 1);

console.log("----------------------------------Coercion Exercise");

function isValidName(name) {
  if (Boolean(typeof (name == "string" && name.trim().length >= 3))) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidName(Boolean("myName")));
console.log(isValidName(Boolean(1)));

console.log("--------------------------------");
function hoursAttended(attended, length) {
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended); //using Explicit coercion
  }

  if (typeof length == "string" && length.trim() !== "") {
    length = Number(length);
  }

  //check the parameters

  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    length >= 0 &&
    attended <= length
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(hoursAttended(10, 10));
console.log(hoursAttended(10, 0));
console.log(hoursAttended(1, 10));
console.log(hoursAttended("6", 6));
// console.log(hoursAttended("Divine", "Albert"))

var name = "  divine  ";
console.log(name);
console.log(name.trim());

console.log("----------------------------Equality");

var a = 10;

var b = a;

var c = 90;

var d = c;

var e = "Divine";

function compare() {
  // if(b === a && d === c ) {
  //     return true;
  // }

  if (b == a && d == c) {
    return b == a && d == c;
  } else {
    return false;
  }
}

console.log(compare());

console.log(b == true);
console.log(b === a);
console.log(typeof b);
console.log(d === c);
// console.log(a === 90)
console.log(typeof a == "number");

// var teacher = "String";
// var newStudent = 23;
// var truthStudent = true;

// function testEquality() {
// if(teacher == truthStudent) {
//     return true;
// }else {
//     return false;
// }

// }

// console.log(testEquality());

console.log(
  "---------------------------------------------Double Equality Tests"
);

// function findAll(matches, arr) {

//     var added = [];

//     for(let v in arr) {

//         if(Object.is(matches, v)) {

//             added.push(v)
//         }else if(typeof matches == "string" && matches.trim() != "" && typeof v ==
//         "string" && v.trim() != "") {
//             added.push(v)
//         }else if(typeof matches == "string" && typeof v == "string") {
//             added.push(v)
//         }else if(typeof matches == null && typeof v == undefined) {
//             if(matches === v) {
//                 added.push(v)
//             }
//         }else if (typeof matches == "boolean" && typeof v == "boolean") {
//             if(matches === v) {
//                 added.push(v)
//             }
//         }else if(
//             !Object.is(matches, "infinity")&&
//             !Object.is(matches, "-infinity")&&
//             !Object.is(matches, NaN)&&
//             typeof matches == "number" &&
//             typeof v == "string"

//         )
//         {
//             added.push(v);
//         }
//     }

//     return added;

// }

function findAll(match, arr) {
  var ret = [];
  for (let v of arr) {
    if (Object.is(match, v)) {
      ret.push(v);
    } else if (match == null && v == null) {
      if (match === v) {
        ret.push(v);
      }
    } else if (typeof match == "boolean" && typeof v == "boolean") {
      if (match === v) {
        ret.push(v);
      }
    } else if (
      typeof match == "string" &&
      !match.trim() == "" &&
      typeof v == "number" &&
      !Object.is(v, -0)
    ) {
      if (match == v) {
        ret.push(v);
      }
    } else if (
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      !Object.is(match, 0) &&
      !Object.is(match, -0) &&
      !Object.is(match, NaN) &&
      typeof match == "string" &&
      typeof v == "string" &&
      v.trim() != ""
    ) {
      if (match === v) {
        ret.push(v);
      }
    }
  }

  return ret;
}

function setsMatch(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    for (let v of arr1) {
      if (!arr2.includes(v)) {
        return false;
      } else {
        return true;
      }
    }
  }
}

var values = [null, undefined, -0, 0, ""];

// console.log(setsMatch(findAll((true, "true", [true, "true"]) === false)))
console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

console.log("-------------------------------------------TypeScript and Flow");

// type studennt = {name: string}
