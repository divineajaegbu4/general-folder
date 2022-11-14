console.log("-------------------------------------var variables");

let a = 10;

function g() {
  console.log(a);
}

// console.log(a)

g();

let b = 30;

function declared() {
  b = 20;
  console.log(b);
}

declared();

console.log(b);

console.log("-------------------------------------let variables");

let c = 5;

function f() {
  let p = 3;
  console.log(p);
  console.log(c);
}

f();

console.log("-------------------------------------prototypical inheritance");

// let clones = {
//     talk: 'Number',
//     g() {
//         return 'am coming'
//     },
// }

// let clause = {
//     look: 'awesome',
//     v() {
//         return 'Hi, baby'
//     }
// }

// console.log(clones.look)

// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };

// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps );

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk

let ugly = {
  name: "y",
  sites() {
    return "Hi";
  },
};

let choice = {
  answer: "true",
  // __proto__: ugly
};

choice.__proto__ = ugly;

console.log(choice.name);

console.log(
  "------------------------------------------prototype chain can be longer"
);

let freedom = {
  firstName: "divine",
  generalName() {
    console.log(this.firstName);
  },
};

let freedom2 = {
  secondName: "Albert",
  generalName2() {
    console.log(this.secondName);
    // return this.secondName
  },
  __proto__: freedom,
};

let freedom3 = {
  lastName: "happiness",
  generalName3() {
    console.log(this.lastName);
  },
  // __proto__: freedom2
};

freedom3.__proto__ = freedom2;

console.log(freedom3.secondName);
console.log(freedom3.generalName2());

console.log(freedom2.firstName);
console.log(freedom2.generalName());

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split("");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  // isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected

// queue

//   generalQueue() {
//     this.enqueue(element);
//     this.dequeue()
//   }

//   enqueue(element) {
//     for(let roles of element) {
//       this.popUp.push(roles)
//     }

//     return this.popUp
//   }

// dequeue() {
//    let
// }

// const clones = new queue();

// console.log(clones.enqueue(["1", "2", "3"]))
// console.log(clones.dequeue())

("use strict");
class Queue {
  constructor() {
    this.items = [];
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getFront() {
    if (this.items.length != 0) {
      return this.items[0];
    } else return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length == 0) {
      return null;
    } else {
      return this.items.shift();
    }
  }
}

const rules = new Queue();
console.log(rules.dequeue());

// window.addEventListener("load", event => {
//   var image = document.querySelector('img');
//   var isLoaded = image.complete && image.naturalHeight !== 0;
//   console.log(isLoaded);
// });

// const img = document.querySelector('img');

// img.addEventListener('load',function() {
//   if(onload) {
//     console.log(true)
//   }else {
//     console.log(false)
//   }

// })

console.log(
  "------------------------------------------------------call() method"
);
function values() {
  let score = {
    first: "score1",
    second: "score2",

    total: function answer(part1, part2) {
      return `${this.first} and ${this.second} and ${part1} and ${part2}`;
    },
  };

  let score2 = {
    first: "natural",
    second: "artificial",
  };

  let proper = score.total.apply(score2, ["teachers", "lovers"]);
  console.log(proper);

  let proper2 = score.total.call(score2, "teachers", "lovers");
  console.log(proper2);
}

values();

var flip = document.querySelector(".btn");

function sensitive() {
  let add = {
    firstName: "Divine",
    lastName: "Albert",
    email: "divineajaegbu@gmail.com",

    general: function fish(one, two) {
      return `${this.maritalStatus} and ${this.complexion} ${one} and ${two}`;
    },
  };

  let add2 = {
    maritalStatus: "single",
    complexion: "fair",
    // __proto__: add
  };

  var x = add.general.call(add2, "view", "source");
  console.log(x);

  var y = add.general.apply(add2, ["look", "sourcesjijiow"]);

  // flip.addEventListener('click', function() {
  //   flip.innerHTML = x;
  //   flip.innerHTML = y;
  // })

  // var x = add.general.apply(add2, ["view", "source"]);

  // console.log(x)
  // console.log(document.querySelector(".btn").innerHTML = x);
}

sensitive();

function purity(x) {
  function source(y) {
    return `${this.firstName} ${this.secondName} ${this.view}  and ${x + y}`;
  }

  let name = {
    firstName: "Divine",
    secondName: "Albert",
    view: "ViewSource",
  };

  function lone(v) {
    return `${this.secondName} and ${x * v}`;
  }

  let like = {
    first: source.apply(name, [50]),
    second: lone.call(name, 30),
  };

  return like;
}

// console.log(purity(10));
let previous = purity(10);
console.log(previous);

// previous.source(30)

console.log(
  "-------------------------------------------------Event Delegation"
);

// const realize = document.createElemenvar myWorker = new Worker('worker.js');

// first.onchange = function() {
//   myWorker.postMessage([first.value, second.value]);
//   console.log('Message posted to worker');
// }

// second.onchange = function() {
//   myWorker.postMessage([first.value, second.value]);
//   console.log('Message posted to worker');
// }

// onmessage = function(e) {
//   console.log('Message received from main script');
//   var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//   console.log('Posting message back to main script');
//   postMessage(workerResult);
// }

// myWorker.onmessage = function(e) {
//   result.textContent = e.data;
//   console.log('Message received from worker');
// }
// myWorker.terminate();

// var myWorker = new Worker('worker.js');

// first.onchange = function() {
//   myWorker.postMessage([first.value,second.value]);
//   console.log('Message posted to worker');
// }t("ul")

// for(var i = 0; i <= 50; i++) {
//   const newElement = document.createElement("li");
//   newElement.textContent = "This is me" + i;

//   newElement.addEventListener('click', function () {
//     console.log("call me back")
//   })

//   realize.appendChild(newElement)
// }

// const customUI = document.createElement('ul');

// function realize() {
// for (var i = 1; i <= 10; i++) {
//     const newElement = document.createElement('li');
//     newElement.textContent = "This is line " + i;
//     newElement.addEventListener('click', () => {
//         console.log('Responding')
//     })
//     customUI.appendChild(newElement);
// }
// }

// realize()

// const customUI = document.createElement('ul');

// function responding() {
//     console.log('Responding')
// }

// for (var i = 1; i <= 10; i++) {
//     const newElement = document.createElement('li');
//     newElement.textContent = "This is line " + i;
//     newElement.addEventListener('click', responding)
//     customUI.appendChild(newElement);
// }

// const customUI = document.createElement('ul');

// function responding(evt) {
//     if (evt.target.nodeName === 'li')
//         console.log('Responding')
// }

// for (var i = 1; i <= 10; i++) {
//     const newElement = document.createElement('li');
//     newElement.textContent = "This is line " + i;
//     customUI.appendChild(newElement);
// }

// console.log(customUI.addEventListener('click', responding));

// // use querySelector 5 million times and time it
// function querySelectorLoop() {
//   let t0 = console.time("querySelector");
//   for (let i = 0; i < 5000000; i++) {
//      document.querySelector("#div1");
//   }
//   let t1 = console.timeEnd("querySelector");
// }

// // use getElementById 5 million times and time it
// function getByIdLoop() {
//   let t0 = console.time("getElementById");
//   for (let i = 0; i < 70; i++) {
//     const query = document.getElementById("div1");
//   }
//   let t1 = console.timeEnd("getElementById");
// }

// querySelectorLoop();
// // => querySelector: 653.566162109375 ms

// getByIdLoop();
// // => getElementById: 567.281005859375 ms

// for(var i = 0; i <= 10000000; i++) {
//   console.timeEnd(i)
// }

// const div = document.createElement("div");
// let p;
// // Create 5,000 new <p></p> elements with class="p" and append them to a div.
//   for (let i = 0; i < 50000; i++) {
//     p = document.createElement("p");

// var myWorker = new Worker('worker.js');

// first.onchange = function() {
//   myWorker.postMessage([first.value, second.value]);
//   console.log('Message posted to worker');
// }

// second.onchange = function() {
//   myWorker.postMessage([first.value, second.value]);
//   console.log('Message posted to worker');
// }

// onmessage = function(e) {
//   console.log('Message received from main script');
//   var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//   console.log('Posting message back to main script');
//   postMessage(workerResult);
// }

// myWorker.onmessage = function(e) {
//   result.textContent = e.data;
//   console.log('Message received from worker');
// }var myWorker = new Worker('worker.js');

// first.onchange = function() {
//   myWorker.postMessage([first.value, second.value]);
//   console.log('Message posted to worker');
// }

// second.onchange = function() {
//   myWorker.postMessage([first.value, second.value]);
//   console.log('Message posted to worker');
// }

// onmessage = function(e) {
//   console.log('Message received from main script');
//   var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//   console.log('Posting message back to main script');
//   postMessage(workerResult);
// }

// myWorker.onmessage = function(e) {
//   result.textContent = e.data;
//   console.log('Message received from worker');
// }
// myWorker.terminate();

// var myWorker = new Worker('worker.js');

// first.onchange = function() {
//   myWorker.postMessage([first.value,second.value]);
//   console.log('Message posted to worker');
// }
// myWorker.terminate();

// var myWorker = new Worker('worker.js');

// first.onchange = function() {
//   myWorker.postMessage([first.value,second.value]);
//   console.log('Message posted to worker');
// }

let ac = 50;
console.time("ac");
console.timeEnd("ac");
// console.log(ac)

console.log(
  "---------------------------------------------------------------------Algorithm and Big O Notation"
);
/*Algorithm is another name for a function, a set of instructions
  and is used for solving problems. 
  
           And

  Big O Notation  is a computer science used to analyze the performance of algorithms
*/

// let start = 0;

// let end = 20

// for(let i = 1; i <= end; i++) {
//   console.log(start =+ i);
// }

// console.log(start = performance.now())

// O(1)

// function looping(arr) {

//   var newArr = [];

//   // for(let i =  arr.length-1; i >= 0; i--) {

//   //   newArr.push(arr[i])
//   // }

//   for(let int in arr) {
//     newArr.push(int)
//   }

//   return newArr;
// }

// var suspicious = looping([1,2,3,4,5,6]);
// var suspicious2 = looping([1,2,3,4,5,6,7,8,9,10]);

// console.log(suspicious);
// console.log(suspicious2);

// let house = {
//   firstHouse: "green",
//   secondHouse: "blue"
// }

// for(let houses in house) {
//   console.log(houses)
// }

// var pupils = new Map([["a", 1], ["b", 2], ["c", 3]]);

// for(let keys of pupils) {
//   console.log(keys)
// }

// pupils.forEach(function(name, index, key) {
//   console.log(name, index, key)
// })

// var scienceStudent = new Set([1,1,2,2,3,3,4,4,4,4,5,6,6,5,99,99]);

// for(let setUp of scienceStudent) {
//   console.log(setUp)
// }

// var callBack = "Added"

// for(let proliferatedVariable of callBack) {
//   console.log(proliferatedVariable)
// }

// var size = new Uint8Array([0x00, 0xff]);

// for(const valuesSize of size) {
//   console.log(valuesSize)
// }

// console.log("--------------------------------Big O")

// function arrUnit(arr1, arr2,arr3) {

//   var newArr1 = [];
//   var newArr2 = [];
//   var newArr3 = [];

//   for(let i = 0; i <= arr1.length; i++) {
//     for(let j = 0; j <= arr2.length; i++) {
//       for(let k = 0; k <= 0; i++) {
//       //  console.log(newArr1.push(arr1[i]) + newArr2.push(arr2[j]) + newArr3.push(arr3[k]))
//       }
//     }
//   }

//   return newArr1 + newArr2 + newArr3
// }

// var callBackArr = arrUnit([1,2,3,4,5], [1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8]);

// console.log(callBackArr)

// var count = 0;

// while(count <= 70) {
//   console.log(count++)
// // }

console.log(
  "----------------------------------------------------------reversing a string"
);

let student =
  "boy girl woman student  class suspicious lookDown download triple classVeterans";

let callOut = student.split(" ", 3);

console.log(callOut);

let execute = "cripple down woman";

let tryLuck = execute.split(" ");

console.log(tryLuck);

let speakOut =
  "THIS IS MY GUY AND HE'S A SOFTWARE ENGINEER, I REALLY PROUD OF HIM BECAUSE HE'S VERY RELEVANT AND SENSITIVE";

let completed = speakOut.toLocaleLowerCase();

console.log(completed);

let color = "wareofme";

let countingOf = "software";

let str = "lonely";

let solution = countingOf.substring(5, 2);
let solution2 = countingOf.substring(countingOf.length - 2, 0);
let solution3 = countingOf.substr(2, 5);

let callColor = color.substring(3, 7);
let callColor2 = color.substr(3, 7);
let callColor3 = color.slice(0, color.length - 1);

let colorLess = str.startsWith("y");

console.log(colorLess);

console.log(callColor);
console.log(callColor2);
console.log(callColor3);

console.log(solution);
//  console.log(solution2)
console.log(solution3);

console.log(solution2);

//  with function

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// const reverseCall = reverse([1,2,3,4,5,6,7,8]);

// console.log(reverseCall)

let reverseStr = ["ada", "obi", "chioma"];

let callReverseStr = reverseStr.reverse();

console.log(callReverseStr);

console.log("------------------------------------------object entries");

// var viewOut = {foo: "bar", name: "lookUp"}

// console.log(object.entries(viewOut))

// array like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

let count = {
  firstName: "divine",
  secondName: "albert",
  thirdName: "ukaegbu",
};

console.log(Object.entries(count));

// var success = ["foo", "red", "black"];
// var success = lone
console.log(Array.from("1234567890"));

console.log(
  "---------------------------------------------isArray returns true or false"
);

let lucky = [1, 2, 3];
let notLucky = { name: 1, name2: 2 };

console.log(Array.isArray(lucky));
console.log(Array.isArray(notLucky));

console.log("--------------------------------------------------filter");
let lineCallBack = ["food1", "food2", "food3", "food4", "food5"];
let lone = [1, 2, 3, 4, 5];

let wordSet = lineCallBack.filter(function (word, index, arr) {
  //  return word.length < 6;
  // arr.pop()
  return word.length < 5;
});

console.log(wordSet);

// function filtered(arr) {
//   return arr.filter(function(el) {
//     el.lineCallBack
//   })
// }

// const likely = filtered();

// consoltryMap.set("a", 1)
// tryMap.set("b", 2)
// tryMap.set("c", 3)
// tryMap.set("d", 4)
// tryMap.set("f", 5);e.log(likely)

// console.log(lone.filter(wordSet))

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

wordSet = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);

// console.log(lineCallBack)

console.log("---------------------------------------------------reduce");

let alberto = [1, 2, 3, 4, 5];

let conclude = alberto.reduce(function (key, index) {
  return key + index;
});

console.log(conclude);

let likely = ["boy", "girl", "woman", "man", "daughter"];

function reducer(key, index, arr) {
  return key + arr;
}

console.log(likely.reduce(reducer));

console.log("---------------------------------------------------concat");

let numbers = [1, 2, 3, 4, 5];
let letters = ["a", "b", "c", "d", "f"];
let names = ["firstName", "secondName", "thirdName", "lastName", "password"];
let colors = ["white", "crimson", "whitesmoke", "yellow", "goldenrod"];

let totalCalc = numbers.concat(letters, names, colors);

let totalCalc2 = numbers.join("*");

console.log(totalCalc);

console.log(totalCalc2);

console.log("---------------------------------------------------map");

let tryMap = new Map([
  ["a", 1],
  ["b", 2],
]);

// tryMap.set("a", 1)
// tryMap.set("b", 2)
tryMap.set("c", 3);
tryMap.set("d", 4);
tryMap.set("f", 5);

// console.log(tryMap.get("a"))
// console.log(tryMap.get("b"))
console.log(tryMap.get("c"));
console.log(tryMap.get("d"));
console.log(tryMap.get("f"));

for (let countCall of tryMap) {
  console.log(countCall);
}
// console.log(tryMap.get("a"))

console.log(
  "---------------------------------------------------Removing duplicate string"
);

class Repeating {
  constructor() {
    // this.arr = arr;
    // this.arrArray = ["boy", "woman", "girl", "suspicious", "veterans"];
    this.newArr = [];
  }

  duplicateString(arr) {
    for (const element of arr) {
      this.newArr.push(element);
    }

    return this.newArr;
  }
}

console.log(
  "-----------------------------------------------------second removing duplicate strings"
);
let arrArray = ["boy", "woman", "girl", "suspicious", "veterans"];

let callBackArr = new Repeating();

console.log(callBackArr.duplicateString(arrArray));

function removeDuplicates(str) {
  const arr = str.split(" ");

  const set = new Set(arr);
  const newString = [...set].join(" ");

  return newString;
}

console.log(
  removeDuplicates(
    "this this is is the the woman woman am am talking talking about"
  )
);

// function duplicateStrings(arr) {
//   var newArr = [];

//   for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }

//   return newArr;
// }

// var arrArray = ["boy", "woman", "girl", "suspicious", "veterans"];

// var callBackArr = duplicateStrings(arrArray);

// console.log(callBackArr)

const arr1 = [
  1,
  2,
  3,
  [4, 5],
  [6, 7, 8, 9],
  ["name", "password", "address"],
  10,
];
const arr2 = [0, 1, 2, 4, [[[5, 6]]]];

console.log(arr2.flat());
console.log(arr1.flat());

function newArr(arr) {
  arr.reduce(function (acc, val) {
    if (Array.isArray(val)) {
      return acc.concat([1, 2, (3)[(4, 5, 6)]]);
    }
  }, []);
}

// var callArr = [1,2,3,4,[5,6,7]];

// console.log(newArr.flat(callArr))

console.log("----------------------------------------------------bind");

let bindLook = {
  x: 20,
  getX: function () {
    return this.x;
  },
};

let callFn = bindLook.getX;
// console.log(callFn.bind(bindLook))
console.log(callFn());

// console.log(callFn.bind(bindLook))

let finalCall = callFn.bind(bindLook);
console.log(finalCall());

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

console.log("--------------------------------------------------debounce");

// Another example
// implement debounce

function debounce(callBack, timeOut) {
  let timer;

  function secondDebounce(...x) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      callBack.apply(this, x);
    }, timeOut);
  }
  //  console.log(returns)

  return secondDebounce;
}

function someFn() {
  console.log("Hello, world");
}

const callAgainFn = debounce(someFn, 3000);

console.log(callAgainFn(20));

const plants = [
  "red",
  "tomato",
  "orange",
  "African star apple",
  "African rosewood plant",
];

console.log(plants.pop());
console.log(plants.indexOf("tomato"));

console.log("----------------------------------------trees");

function reversePath(element, root) {
  const path = [];
  let pointer = element;

  while (pointer.parent) {
    const index = pointer.parent.children.indexOf(pointer);

    path.push(index);

    pointer = pointer.parent;
  }

  for (let paths of path.length) {
    pointer = children[paths.pop()];
    return pointer;
  }

  pointer = root;
  return pointer;
}

console.log(reversePath(10, 15));

console.log("--------------------------------------Rendering");

const rootElement = document.querySelector(".foods");

const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco",
  },
  {
    id: 2,
    image: "🍔",
    name: "burger",
  },
  {
    id: 3,
    image: "🍆",
    name: "eggplant",
  },
  {
    id: 4,
    image: "🍎",
    name: "apple",
  },
  {
    id: 5,
    image: "🥞",
    name: "pancakes",
  },
];
/* DO NOT MODIFY */

/** YOUR CODE BELOW **/

// class Foods {

//   constructor(el, foodData) {
//     this._root = el;
//     this._data = foodData;
//   }

//   renderList() {
//     this._root.addEventListener('click', event => {
//       const {target} = event;
//       target.remove();
//     });

//     const fragment = document.createDocumentFragment();

//     this._data.forEach(i => {
//       fragment.appendChild(this.createFoodItem(i))
//     });

//     this._root.appendChild(fragment)
//   }

//   createFoodItem(item) {
//     const itemEl = document.createElement('div');
//     itemEl.innerText = item.image;
//     // itemEl.classList.add(item.name);

//     return itemEl;
//   }
// }

// const newsFood = new Foods(rootElement, foodData);

// newsFood.renderList()

// class Foods {
//   constructor(el, foodData) {
//     this.el = el;
//     this.foodData = foodData;
//   }

//   renderList() {
//     this.el.addEventListener('click', event => {
//       const { target } = event;
//       target.remove();

//     });

//     const fragment = document.createDocumentFragment();

//     this.foodData.forEach(i => {
//       fragment.appendChild(this.createFoodItem(i));
//     })

//     this.el.appendChild(fragment)
//   }

//   createFoodItem(item) {
//     const foodCreate = document.createElement('div');
//     foodCreate.innerText = item.image;

//     return foodCreate;
//   }
// }

// const callBackAppend = new Foods (rootElement, foodData);

// callBackAppend.renderList()

class Foods {
  constructor(rootElement, foodData) {
    this.rootElement = rootElement;
    this.foodData = foodData;
  }

  generalRenderList() {
    this.foodData.forEach((i) => {
      this.rootElement.appendChild(this.createImplementItem(i));
    });

    this.rootElement.addEventListener("click", this.clickRemove);
  }

  clickRemove(e) {
    e.target.remove();
  }

  createImplementItem(item) {
    const render = document.createElement("div");
    render.innerText = item.image;

    this.rootElement.style.textAlign = "center";

    document.body.style.backgroundImage =
      "linear-gradient(to right, purple, crimson, transparent)";
    render.style.cursor = "pointer";
    render.style.fontSize = "6.5rem";
    return render;
  }
}

const callBackFoods = new Foods(rootElement, foodData);

callBackFoods.generalRenderList();

let show = {
  firstShow: "this is me",
  secondShow: "this is you",
  lastShow: "this is child",
};

function appendShip(source) {
  const createElementItems = document.createElement("li");
  createElementItems.innerText = source;

  return createElementItems;
}

rootElement.appendChild(appendShip(show.firstShow));
rootElement.appendChild(appendShip(show.secondShow));
rootElement.appendChild(appendShip(show.lastShow));

let fruits = {
  firstName: "chioma",
};

function render(name) {
  let h1 = document.createElement("p");
  h1.textContent = name;

  return h1;
}

const rendering = document.querySelector(".rendering");

rendering.appendChild(render(fruits.firstName));

function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}
// get the ul#menu
const menu = document.querySelector("#menu");
// add menu item
menu.appendChild(createMenuItem("Home"));
menu.appendChild(createMenuItem("Services"));
menu.appendChild(createMenuItem("About Us"));

function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsed = currentTime - start;
    const progress = elapsed / duration;
    const amountToMove = progress * distance;

    element.style.transform = `translateX({ amountToMove }px)`;

    if (amountToMove < distance) {
      requestAnimationFrame(move);
    }
  }

  return requestAnimationFrame(move);
}

const callBackPerformance = moveElement(50, 20, menu);

// console.log(callBackPerformance)

// const element = document.getElementById('some-element-you-want-to-animate');
// let start, previousTimeStamp;
// let done = false;

// function step(timestamp) {
//   if (start === undefined) {
//     start = timestamp;
//     }
//   const elapsed = timestamp - start;

//   if (previousTimeStamp !== timestamp) {
//     // Math.min() is used here to make sure the element stops at exactly 200px
//     const count = Math.min(0.1 * elapsed, 200);
//     element.style.transform = 'translateX(' + count + 'px)';
//     if (count === 200) done = true;
//   }

//   if (elapsed < 2000) { // Stop the animation after 2 seconds
//     previousTimeStamp = timestamp
//     !done && window.requestAnimationFrame(step);
//   }
// }

// window.requestAnimationFrame(step);

var counter = document.querySelector("#menu");
var number = 0;

var countUp = function () {
  // Increase number by 1
  number++;

  // Update the UI
  counter.textContent = number;

  // if the number is less than or equal to 100,000, run it again

  window.requestAnimationFrame(countUp);
};

// console.log(countUp)
console.log(window.requestAnimationFrame(countUp));

console.log("-----------------------------------------promises");

// var promise = new Promise(function(receives, reject) {

//   if(receives) {
//     receives("this is fulfilled")
//   }else {
//     reject("this is not succeeded")
//   }
// })

// promise.then(function(success) {
//   console.log(success)
// }).catch(function(errorMessage) {
//   console.log(errorMessage)
// })

// var secondPromise = new Promise(function(cb, reject) {

//   cb(reject("success"))
//   // cb("http://127.0.0.1:5500/Jem-Young/html/index.html")
// });

// // var secondPromise = fetch("http://127.0.0.1:5500/Jem-Young/html/index.html")

// secondPromise.then(function(conclude) {
//   if(conclude) {
//     console.log(`printOut the status: ${conclude.status}`)
//   }else {
//     console.log(`printOut the URL: ${conclude.url}`)
//   }
// }).catch(function(error) {
//   console.log(`Some error has occurred: ${error}`)
// })

// async function  secondPrograms() {

//   try {
//     const fetchUrl = await fetch("https://news.google.com/topstories?hl=en-NG&gl=NG&ceid=NG:en")
//     var message = await fetchUrl.message();
//     console.log(`message: ${message.status}`)
//   } catch(error) {
//     console.log(`the error has: ${error}`)
//   }
// }

// secondPrograms()

function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      function cb(result) {
        resolve(result);
      }

      fn.apply(this, args.concat(cb));
    });
  };
}

promisify
  .then(function (resolved) {
    console.log(resolved);
  })
  .catch(function (error) {
    console.log(`Error occurred here: ${error}`);
  });

// async function generalFn() {

//   try {
//     var secondPromise = await fetch("http://127.0.0.1:5500/Jem-Young/html/index.html");

//     var concludes = await secondPromise.concludes();

//     console.log(`this is the status: ${concludes.status}`)
//   }

//   catch(error) {
//     console.log(`my error: ${error}`)
//   }
// }

// const fetchPromises = fetch("'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'");

// console.log(fetchPromises);

// fetchPromises.then(function(response) {
//   console.log(`Received response: ${response.status}`)
// })

// console.log("look up")

// // console.log("-----------------------------------Asynchronous")

// function async(callBackFnAsync, time) {
//   var timerCalc;

//   function closureAsync(x) {

//     if(timerCalc) {
//       clearTimeout(timerCalc)
//     }

//     timerCalc =  setTimeout(function() {
//       callBackFnAsync.call(this, time)
//        return time * x
//     },time)
//   }

//   // return closureAsync;
//   requestAnimationFrame(closureAsync)
// }

// function assigningFn() {
//   console.log("this is me")
// }

// console.log("how far?")

// const lockOut = async(assigningFn, 5000);

// console.log(lockOut);

// // console.log("-------------------------------------------Synchronous");

// // //using closure here;

// function accessValues(x, y, time) {
//   // var assignV;

//      function acceptTheValues(seconds) {
//        return (x * seconds) - time;
//      }

//      function secondAcceptTheValues(minutes) {
//        return y + minutes;
//      }

//      function thirdAcceptTheValues(hours) {
//        return time * hours/y;
//      }

//      //Object goes here!

//      let combineCallFn = {
//        firstAccept: acceptTheValues,
//        secondAccept: secondAcceptTheValues,
//        lastAccept: thirdAcceptTheValues
//      }

//      return combineCallFn;
// }

// const firstBubble = accessValues(20, 15, 300);

// console.log(firstBubble.firstAccept(90))
// console.log(firstBubble.secondAccept(10))
// console.log(firstBubble.lastAccept(50))

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// // fetchPromise
// //   .then( response => {
// //     if (!response.ok) {
// //       throw new Error(`HTTP error: ${response.status}`);
// //     }
// //     return response.json();
// //   })
// //   .then( json => {
// //     console.log(json[0].name);
// //   });

// fetchPromise.then(function(response) {
//   console.log(`this is response: ${response.status}`)
// }).then(function (priority) {
//   console.log("who are you?")
// }).catch(function(error)  {
//   console.log(`error: ${error}`)
// })

// console.log("Albert");

// // console.log("-------------------------------------combining multiple promises");

// // const fetchPromise1 = fetch("https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises");
// // const fetchPromise2 = fetch("https://www.google.com/search?q=asynchronous&oq=asynchron&aqs=chrome.0.0i67i433j69i57j0i67j69i59j0i67i433j0i67l2j69i60.5738j0j7&sourceid=chrome&ie=UTF-8");
// // const fetchPromise3 = fetch("https://frontendmasters.com/courses/interviewing-frontend/promises-exercise/");
// // const fetchPromise4 = fetch("https://www.google.com/search?q=consecutive&oq=consecutive&aqs=chrome..69i57.6894j0j7&sourceid=chrome&ie=UTF-8")

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//    .then(function(response) {
//      console.log(`${response.status}`)
//    })
//    .catch(function(findError) {
//      console.log("Evaluate error: ${findError}")
//    })

//    Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//    .then(function(response) {
//      console.log(`${response.status}`)
//    })
//    .catch(function(findError) {
//      console.log("Evaluate error: ${findError}")
//    })

// const fetchOut = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchOut
//   .then( response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then( json => {
//     console.log(json[0].name);
//   })
//   .catch( error => {
//     console.error(`Could not get products: ${error}`);
//   });

// console.log("----------------------------------async and await");

// // async function fetchPromises() {

// //   try {
// //     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// //     const json = await response.json();

// //      console.log(`${json[0].name} and status ${json.url}`);
// //   }

// //   catch(error) {
// //     console.log(`find the error: ${error}`)
// //   }
// // }

// // fetchPromises();

// function sleep(time) {
//   return new Promise((resolve) => {

//     setTimeout(() => {
//       resolve();
//     }, time)
//   })

// }

// const keyUp = sleep(500)
// console.log(keyUp)

// // Another example of promises

// var promise = new Promise(function(resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks"
//   if(x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });

// console.log(loyalty[0])

// async function fetchProducts() {
//   try {
//     // after this line, our function will wait for the `fetch()` call to be settled
//     // the `fetch()` call will either return a Response or throw an error
//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // after this line, our function will wait for the `response.json()` call to be settled
//     // the `response.json()` call will either return the JSON object or throw an error
//     const json = await response.json();
//     console.log(json[0].name);
//   }
//   catch(error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts();

// async function success() {
//   try {

//     const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json[0].name);
//   }
//   catch(error) {
//     console.error(`Could not get products: ${error}`);
//   }

//  }

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then( response => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request...");
