"use strict"
// (function lone(c, d) {
//     console.log(c)
    
// })(20, 5)

const operators = 200;


function accessValues(x, y) {
    function addValue(v) {
        return x + v;
    }
    return addValue
}

const add1 = accessValues(5)
    // const add2 = accessValues(10)

console.log(add1(5));


function accessUser() {
    let userName, password;

    function declareUser(user, pwd) {
        userName = user;
        password = pwd;

        console.log(userName, password);
    }

    let PUBLIC_API = {
        login: declareUser
    }
    return PUBLIC_API;
}


const divine = accessUser();
divine.login("Albert", 10229);

console.log("-----------------------------Hoisting");
/*Hoisting is wherever a var appears inside a scope, that declaration is taken 
to belong to the entire scope and accessible everywhere throughout*/

let a = 2;


foo()//function hoisting it is good to use that.
function foo() {
    var a;
    a = 3;
    
    console.log(a)

    

}

console.log(a)

console.log("---------------------Nested scopes")

function clones() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3
            console.log(a, b, c)
        }

        baz() 
        console.log(a, b)
    }

    bar();
    console.log(a)
}

clones()

console.log("--------------roughly scope")

function size() {
    var a = 1;

    if(a >= 1) {
        let b = 2;

    while(b < 5) {
        let c = b * 2;
        b++

        console.log(a + c)
    }
}
}

size()


// (function lone(c, d) {
//     console.log(c)
    
// })(20, 5)
// (function source() {
//     return 20
// })()