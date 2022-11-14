// immediately invoked function Expressions(IIFEs)
// 'use strict'
(function express(x) {
    console.log(x)
})(10)

var x = (function clones() {//assign to variables
    return 30
})()

console.log(x)

"use strict"
// closure
console.log('--------------------closure')
function makeAdder(x) {

    function add(y) {
        return y * x

    }
    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);
var plusTwelve = makeAdder(12);
var plusFive = makeAdder(5);

console.log(plusOne(3))
console.log(plusOne(41))
console.log(plusTen(13))
console.log(plusTwelve(12))
console.log(plusFive(120))


console.log('---------------------------------------modules closure')

function user() {
    var userName, password;

    function doLogin(user, pw) {
        userName = user;
        password = pw;

        console.log(userName, password)
    }

    var publicAPI = {
        login: doLogin,
        login2: doLogin,
        login3: doLogin,
        login4: doLogin,
        login5: doLogin,
    }

    return publicAPI;
}

var fred = user();

console.log(fred.login('fred', '12345')) 
console.log(fred.login2('divine', '12e334'))
console.log(fred.login3('albert', '767190821'))
console.log(fred.login4('happy', '878e809-e 1'))

console.log('---------------------------------------this keyword')

var love = 'name'

function foo() {
   console.log(this.love)
}


let science = {
    name: 'fraud',
    school: 'university',
    img: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

    clone() {
       console.log(this.name, this.school)
    }
}

science.clone()


foo()

// var clone = {
//     a: 42
// };

// var bar = object.create(clone)

// console.log(bar.a)


console.log("-----------------------------javascript scope and closure")
function lookUp(a) {
    var b = a;
    return a + b;
}


const sizeDown = lookUp(5);
console.log(sizeDown)
console.log("-----------------------------Lexical scopes")

function express(a) {
    var b = a * 2;

    function solve(c) {
        console.log(a, b, c)
    }

    return solve
    
}

const makeUp =  express(20)
const makeUp2 =  express(10)

console.log(makeUp(a * 2))
console.log(makeUp2(a * 7))

console.log(makeUp(a * 2))

console.log("-----------------------------cheating Lexical scopes")

function flow(str, a) {
    "use strict"
    eval(str)

    console.log(a, b)

}

var b = 2

const views = flow("b = 3", 2)

console.log(views)


console.log("-----------------------------------hiding plain scope")


function doSomething(a) {


    var b;

    function doSomethingElse(c) {
        return a + c
    }

     

    b = doSomethingElse(a * 5) + a

    console.log(b * 3)
}

console.log(doSomething(2))


var c = 2;

(function forward(glow) {
   var c = 20;

   console.log(c)
   console.log(glow.c)
})(window)


var p = 2;

(function source(def) {
    def(window)
})(function def(global) {

    var p = 3;
    console.log(p)
    console.log(global.p)
})


var seconds = (function(x = 30) {
    return x

})(function scroll(y) {
    console.log(y + x)
})(50)

// const height = seconds(30)

// console.log(height(50))


// var flock = true;


// if(foo) {
//     {
//     var bar = foo * 2;
//     bar = (bar);
//     console.log(bar)

//     }

// }

// console.log()

console.log("----------------------------------------------let")

// var food = 50;

function process(data) {
//    var food = 50;
//    console.log(food)
}

{
    let someReallyBigDate = {
        firstName: 'Divine',
        surName: 'Ajaegbu'
    }
        process( someReallyBigDate.firstName )
    
}

let food = ["rice", "beans", "cassava"]

var btn = document.getElementById('btn');

btn.addEventListener('click', function click(evt) {
    console.log('click me here!')
})

for(let i = 0; i <= food.length; i++) {
    console.log(food[i])
}

{
    // let i
    for(let i = 0; i < food.length; i++) {
        console.log(food[i])
    }
}


var foo = true, baz = 10;

if(foo) {
    let bar = 3;

    if(baz > bar) {
        console.log(baz)
    }
}


console.log("---------------------------------------Hoisting")

af = 2;
var af;

console.log(af)

console.log(vh)

var vh = 3


slow();

function slow() {
    var a = 2;

    console.log(a)
}


// fruits()

// var fruits;
  

// var aw = true;

// if(aw) {
//   function fruits() {
//        console.log("This is me")
//    }
// }else{
//     function fruits() {
//         console.log("how far")
//     }
// }

// fruits()
// fruits()
// snow()

console.log("--------------------------------------------closure scope")

function hence() {

    var a = 2;

    function bar() {
        console.log(a)
    }

    bar()
}

hence();


function lonelySky(x, y) {


  function lonelySkyChild(p) {
      return x + y + p
  }

  return lonelySkyChild
}


const sourceHope = lonelySky(20, 30);
const sourceHope2 = lonelySky(10, 5);
const sourceHope3 = lonelySky(29, 30);
const sourceHope4 = lonelySky(90, 0);
const sourceHope5 = lonelySky(120, 50);
console.log(sourceHope(12))
console.log(sourceHope2(7))
console.log(sourceHope3(20))
console.log(sourceHope4(2))
console.log(sourceHope5(17 * 7))


function flow() {

    var a = 2;

    function bulk() {
        console.log(a)
    }

    return bulk
}

var baz = flow()

baz()

// function split() {

//     var a = 2;

//     function baz() {
//         console.log(a)
//     }

//     bar(baz)
// }

// function bar(fn) {
//     fn()
// }

var fn;

function split(x) {
    // var a = 2;

    function baz(y) {
        console.log(x+y)
    }

    return fn = baz;
}

function bar() {
    fn(5)
    fn(10)
    fn(20)
    fn(50)
    // fn(8)
    // fn(12)
    // fn(6)
}

split(20);
split(30);
split(40);
split(50);
// split(60);
// split(70);
// split(80);
bar();

// function wait(message) {


//     setTimeout(timer, 3000);

//     function timer(num) {
//       console.log(message);
//     }

//     return timer()
// //     setTimeout(function timer() {
// //      console.log(message);
// //     }, 1000)
  
// //     return timer()
    
// }

// const printMessage = wait("This is the delivery message i got from my friend justine");
// const printMessage2 = wait("This is the delivery message i got from my friend justine");

// console.log(printMessage(5))
// console.log(printMessage2(10))


// function anonymousValues(selector, clones) {

//     function appendScope() {
//         // console.log(selector, clones)
//         selector.addEventListener('click', function() {
//             console.log(clones)
//         })
//     }

//    return appendScope;
// }


// const person1 = anonymousValues("Albert");

// console.log(person1)
// console.log("----------------------------------------------first example of closure")

// for(var i = 0; i <= 50; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i*1000)
// };

// console.log("----------------------------------------------second example of closure")

// for(let i = 0; i <= 100; i++) {
//     (function (j) {
//         var j = i;
//         setTimeout(function timers() {
//             console.log(j)
//         }, j *1000)
//     })()
// }



// for(let i = 0; i <= 10; i++) {
//     // (function (j) {
//         // var j = i;
//         setTimeout(function timers() {
//             console.log(i)
//         }, 1000)
// }
// scrollUp(i)

// // console.log("----------------------------------------------third example of closure")


// for(var i = 1; i <= 30; i++) {
//     (function() {
//         // var j = i
//         setTimeout(function timers() {
//             console.log(i)
//         }, i*1000)
//     })()
// }

// // console.log("----------------------------------------------fourth example of closure")
// for(var i = 1; i <= 30; i++) {
//     (function(j) {
//         // var j = i
//         setTimeout(function timers() {
//             console.log(j)
//         }, j*1000)
//     })(i)
// }

console.log("--------------------------------------------------Modules closure")


function perspectiveCode() {
    var anotherThing = [1,2,3,4,5];
    let somethingImportant = {
        firstName: "Divine",
        lastName: "Favor",
        password: "123e303",
        email: "divineajaegbu4@gmail.com",
        maritalStatus: "single",
        etc: "..........."
    }

    function doSomethingRelevant() {
        console.log(somethingImportant.firstName)
    }

    // return doSomethingRelevant

    function previousRelevant(num) {
        console.log(`${anotherThing} and ${num} + ${somethingImportant.password}`)
    }

    // return previousRelevant
    return {
        first: doSomethingRelevant,
        second: previousRelevant
    }
}


const properWayOfHandlingClosure = perspectiveCode();

// console.log(properWayOfHandlingClosure(20));

properWayOfHandlingClosure.first();
properWayOfHandlingClosure.second(50)



function sauce() {
    var something = "cool";
    var another = [1,2,3];

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join("!"))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
}

var stopUp = sauce();

stopUp.doSomething()
stopUp.doAnother()


function thirdClosure(x, y) {
    
    
    var a = 20 * 10


    function solveThirdClosure(v) {
        console.log(x + v)
    }



    function solveAnotherClosure(c) {
        console.log(y * c)
    }

    function solveTheOtherClosure() {
        let junior = {
            first: "learning",
            second: "practicing",
            third: "solving",
            fourth: "carefully"
        }


        console.log(`${a} and ${junior.first.toUpperCase()}`)
        console.log(`${a} and ${junior.second}`)
    }

    
    
    let totalReturnFn = {
        firstReturn: solveThirdClosure,
        secondReturn: solveAnotherClosure,
        thirdReturn: solveTheOtherClosure
    }

    return totalReturnFn;
} 



var totalCallBackFn = thirdClosure(10, 12);
var totalCallBackFn2 = thirdClosure(1, 7);

totalCallBackFn.firstReturn(12);
totalCallBackFn2.firstReturn(10);
totalCallBackFn.secondReturn(15);
totalCallBackFn2.secondReturn(15);
totalCallBackFn.thirdReturn()
totalCallBackFn2.thirdReturn();


// Another module closure
console.log("-------------------------------------------Another modules scope closure")

var logIn = "sites"


function scopeLogIn(viewAdd) {
    var slice = viewAdd;

    function scopeSubtract(y) {
        return slice - y
    }

    function scopeAddition(x) {
        return slice + x
    }

    function scopeMultiplication() {
        var listFoods = ["rice", "beans", "gndomie", "yam", "Potatoes"];
        var emptyListFoods = [];
        
        listFoods.forEach(function(item, index) {
            emptyListFoods.push(item) ;
            // emptyListFoods.join("q")e........................
        })

        return emptyListFoods;
    }

    function  scopeDivision(v) {
        return slice / v;
    }
 
    // call all the functions with an Object

    let callBackScopeList = {
        firstCall: scopeSubtract,
        secondCall: scopeAddition,
        thirdCall: scopeMultiplication,
        fourthCall: scopeDivision
    }

    return callBackScopeList;
} 


var callBackContainerFn = scopeLogIn(150);

console.log(callBackContainerFn.firstCall(50));
console.log(callBackContainerFn.secondCall(26));
console.log(callBackContainerFn.thirdCall());
console.log(callBackContainerFn.fourthCall(40))

// using IIFE with module scope closure

var students = (function coolModule() {
    var something = "cool";
    var another = [1,2,3];

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join("!"))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
})();

students.doSomething();
students.doAnother();

var foo = (function coolModule(id) {
    function change() {
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log(id)
    }

    function identify2() {
        console.log(id.toUpperCase() );
    }

    let publicAPI = {
        change: change,
        identify: identify1,
        identify2: identify2
    };

    return  publicAPI;
})("foo module");

foo.identify();
foo.identify2();
foo.change()//not showing on the clg


console.log("----------------------------------------Modern Modules")

var myModules = (function manager() {
    var module = [];


    function define(name, deps, impl) {
        for(var i = 0; i < deps.length; i++) {
            deps[i] = module[deps[i]]
        }

        module[name] = impl.apply(impl, deps)
    }

    function get(name) {
        return  module[name]
    }

    return  {
        define: define,
        get: get
    };
})();

myModules.define("bar", [], function() {
    function hello(who) {
        return  "Let me introduce" + who;
    }

    return {
        hello: hello
    }
});
myModules.define("foo", ["bar"], function(bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});

var bar = myModules.get("bar");
var foo = myModules.get("foo");

console.log(bar.hello("hippo"));

foo.awesome()



// simple code for the modern modules

function primary() {
    var lowerCase = "Let me introduce hippo";
    var upperCase = "let me introduce hippo";

    function secondary1() {
        console.log(lowerCase);
    }

    function secondary2() {
        console.log(upperCase.toUpperCase())
    }

    let totalClassP = {
        secondary1: secondary1,
        secondary2: secondary2
    }

    return totalClassP;
};

var success = primary();

success.secondary1();
success.secondary2();


console.log("--------------------------------------Dynamic scope")

function clause() {
    console.log(a)
}

function root() {
    var c = 3;
    // return c
    clause()
}

var c = 2;


console.log(root());

function roots() {
    var p = 40;
    var name2 = "ruth"


    let freedom = {
      one: "free1",
      two: "free2",
      freeHouse: function slice() {
          console.log("look around")
      },

      live: function pickUp() {
          return `${block.p}`
      }
    }

    let block = {
        p: 10,
        like: "free",
        _proto_: freedom
    }

    console.log(block.freeHouse)
    // console.log(block.one)


    function fruit(x) {
        return p * x;
    }

    function size(name) {
        var aName = name;
        return `${aName} and ${name2}: ${block.freeHouse}: ${freedom.live.call(block)}`
    }

    let scrollUp = {
        firstCall: fruit,
        secondCall: size
    }

    return scrollUp;
}



var flow = roots();

console.log(flow.secondCall("Divine"));
console.log(flow.firstCall(70))


function callDown() {
    console.log(a)
}

function bark() {
    var  ac = 3;
    // console.log()
    callDown()
}

var ac = 2;

bark()


// ES3

{
    try {
      throw undefined
    } catch (a) {
        a = 20;
        console.log(a)   
    }
}

console.log(a)

// ES6

{
 let a = 15;
 console.log(a)
}

console.log(a)



var obj = {
  id: "awesome",
  cool: function coolFn() {
      console.log(this.id)
  }
};

var id = "not awesome";

obj.cool();

setTimeout( obj.cool, 100 )


var objStunted = {
    count: 0,
    coolUp: function coolFn() {
        var self = this;

        if(self.count < 1) {
            setTimeout(function timer() {
                self.count++;
                console.log("awesome")
            }.bind (this
            ), 1000)
        }
    }
}


objStunted.coolUp();


// function hello(who) {
//     return "let me introduce" + who;
// }

// "export" hello;

// import hello from "bar";

// var hungry = "hippo";

// function awesome() {
//     console.log(hello(hungry).toUpperCase())
// };

// "export" awesome;

// module foo from "foo";
// module bar from "bar";

// console.log(bar.hello(hippo));

// foo.awesome()