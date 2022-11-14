"use strict"
console.log("-------------------------------This")

function identify() {
    return this.name
}


function speak() {
    var greeting = `My name is ${identify.call(this)}`

    return greeting
}


function referenceFn(context) {
    return context.name.toUpperCase()
}

function generalFn() {
    var names = `My name is ${referenceFn(you)} and ${referenceFn(me)}`

    console.log(names)
}


const me = {
    name: "Divine"
}

const you = {
    name: "Albert my love"
}

console.log(identify.call(me))
console.log(identify.call(you))
console.log(speak.call(me))
console.log(speak.call(you))
console.log(referenceFn(you))
console.log(referenceFn(me))

setTimeout(generalFn, 2000)


function foo(num) {


    return `FOO: ${num} **** Data: ${data.count += 1} `
}


foo.count = 0;



let data = {
    count: 0
}

var i;

for (i = foo.count; i <= 10; i++) {
    if (i >= 5) {
        console.log(`${foo(i)} **** COUNT: ${foo.count += 1}`)
    }
}

console.log("-------------------------------Implicit Binding")
function foos() {
    console.log(this.firstName)
}
function fnTodos(fun) {
    return fun // Call site
}
let a = {
    firstName: "Divine",
    foo: foos
}

let obj1 = {
    firstName: 5,
    obj: a
}

a.foo()

console.log(obj1.obj)
obj1.obj.foo()


var view = fnTodos(a.foo()) // CallStack(fnTodos(a.foo()))

view // Call site


console.log("-------------------------------Explicit Binding")

let persons = {
    maritalStatus: 'single',
    age: 29,
    occupation: 'software engineer'
}

function explicit() {
    return this.maritalStatus
}

console.log(explicit.call(persons))

console.log("-------------------------------Hard Binding")


function viewers() {
    return this.occupation // Call site
}


function wrapper() {
    return viewers.call(persons) // Call site
}


console.log(wrapper()) // CallStack


console.log("-------------------------------Typical Hard Binding")


function typicalHardFn(num) {
    return this.age + num
}

function generalHardFn() {

    // return typicalHardFn.applypersons, arguments)

    var a = typicalHardFn.bind(persons, 6)
    var b = a()

    return b
}

var callViews = generalHardFn()
// var callViews = generalHardFn(4) for apply


console.log(callViews)



console.log("--------------------------------New Binding")


function Option(a) {
    this.a = a

    return this.a
}


const constructorCallCallStack = new Option(5)

console.log(constructorCallCallStack.a)


// const bodyEls = document.querySelector('body')

// function appendsContainer() {
//     const scriptJs = document.createElement('script')

//     scriptJs.setAttribute('src', '../JS/Types-Grammer.js')

//     bodyEls.appendChild(scriptJs)
// }

// appendsContainer()


console.log("-----------Creating Implicity Binding, Explicity Binding, Binding")

// Explicity Binding

let bindings = {
    power: "Powerless",
    names: "Albert Ukaegbu",
    nums: 45,
    direction: "Lagos, state.",
    implicity: implicityBinding
}

function explicityBinding(classic) {
    const assignPower = this.power + " " + classic

    return assignPower.toUpperCase()
}


const callStackFn = explicityBinding.call(bindings, "Enemies")

console.log(callStackFn)

// Implicity Binding


function implicityBinding(view) {
    const assignImplicity = this.names + " " + view

    return assignImplicity.toUpperCase()
}

const callStackImplicity = bindings.implicity("source")

const callStackImplicity2 = implicityBinding.bind(bindings, 'source')
const referenceBinds = callStackImplicity


console.log(callStackImplicity)
console.log(referenceBinds)




console.log("------------------------Ignored binding")

function views(num) {
    return this.a += num
}

let classic = {
    a: 20
}

console.log(views.call(classic, 10))
console.log(views.call(classic, 10))

const controlA = views.bind(classic, 4)

const referenceCharacter = controlA()

console.log(referenceCharacter)


console.log("---------------------SoftBind")
let objs = { name: "Divine" },
    obj2 = {
        name: "Albert"
    },
    obj3 = {
        name: "Bekee"
    }


function objFn() {
    return "Name:" + " " + this.name.toUpperCase()
}


const callObj = objFn.call(objs)
// const referenceObj = callObj()

console.log(callObj)


// Different binding

// 1. Called with new? Use the newly constructed object.
// 2. Called with call or apply(or bind)? Use the specified object.(explicity binding)and similiar to(hard binding)
// 3. Called with a context object owning the call? Use that context object(implicity binding)
// 4. Default: undefined in strict mode, global object otherwise.


console.log("----------------------------------------Objects")

// Objects comes in two forms: 1. Declarative(literal) form, 2. Constructed form.


// This is literal form 
let obj = {
    key: 'value'
}

//constructed form

const viewObj = new Object()

viewObj.key = 'value'

console.log("--------------------------------Contents")

let contents = {
    key: "values",
    location: 'Lagos'
}

var p = 'location'

var create1 = contents['[Object Object]']

create1 = 'view'

console.log(create1)

console.log(contents)


console.log(contents[p])


console.log(contents.key)
console.log(contents['key'])

contents['names'] = 'Divine Ajaegbu'
contents.age = 20

console.log(contents['names'])

console.log(contents.age)


console.log("-----------------------------Computed Property Names")

var prefix = 'foo'

let myObjects = {
    [prefix + 'bar']: 'hello',
    [prefix + 'baz']: 'world',
    // [Symbol + 'something']: 'people'
};

console.log(myObjects['foobar'])
console.log(myObjects['foobaz'])
console.log(myObjects.foobaz)
// console.log(myObjects.something)


const folded = function (name) {
    console.log(name)
}


const callFn = {
    someFoo: folded
}

const callFnArr = []

callFnArr.baz = folded('Loveth')

callFn.someFoo('Favor')
callFnArr.baz

console.log(callFnArr)




console.log("------------------------Arrays")

const arrStored = ['Divine', 'Albert', 'fruits']

console.log(arrStored[0])

arrStored['bar'] = 'Prestige'

console.log(arrStored.bar)

console.log(arrStored.length)
console.log(arrStored)


console.log("--------------------------------Duplicating Object")


function assignment(score, amount) {
    return score <= amount ? "A" : amount >= score ? "B" : "C"
}


const person = {
    firstName: "Divine",
    lastName: "views"
}


const success = ["Divine", "Albert", "Loveth", "JOY"]


const conclude = {
    fn: assignment,
    ob: person,
    figure: success,
    successValue: function () {
        this.figure.splice(1, 3)

        return this.figure
    }
}

console.log(conclude.successValue())


console.log("---------------------------Property Descriptors")

let myObject = {
    a: "Div"
}

const review = Object.getOwnPropertyDescriptor(myObject, 'a')

console.log(review)


const newObject = {
    firstName: "Ajaegbu",
    middleName: "Divine",
    lastName: "Ezinne"
}

const source = Object.defineProperty(newObject, "maritalStatus", {

    value: 'single',
    // Once they are false. The name will be called(Object constant) means cannot change,redefined and delete.
    writable: true,// Cannot change object value once is false or otherwise
    configurable: true,// Cannot delete object  value once is false or otherwise
    enumerable: true,


})

// newObject.maritalStatus = 'Not married'
// console.log(newObject.maritalStatus)

delete newObject.maritalStatus

console.log(newObject.maritalStatus)


//If you change writable to false, It means you cannot change the value of the objects again
// If you change configurable to false, It means that you cannot delete an objects again

console.log("-----------------------------prevent extensions")

const getObject = {
    firstName: "AJaegbu"
}


// Object.preventExtensions(getObject)// it means that no object or method and value will added again.

getObject.lastName = 'Divine'

console.log(getObject.lastName)
