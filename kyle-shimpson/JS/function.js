document.querySelector('.click').addEventListener('click', function() {
    setTimeout(function() {
        alert('this is me')
    }, 5000)
})

let c = 10
console.log(
    '----------------------------------Regular IIFE(immediately-invoked Function expressions)',
);
(function anotherClass(a, b) {
    let result = a * b + 10
        // return result;
    console.log(result)
})(4, 6)

console.log(
    '----------------------------------Arrow IIFE(immediately-invoked Function expressions)',
);
(() => {
    let teacher = 'Albert'
    console.log(teacher)
})()

getMe = (a, b) => a * b + 2
console.log(getMe(3, 4))

console.log('----------------------------------block scope')

let y = 10

{
    let y = 20
    console.log(y)
}

console.log(y)

console.log('----------------------------------this')

let animalsValue = {
    name: 'goat',
    firstName: 'sheep',
    lastName: 'elephant',

    different: {
        domestic: 'lion',
        getNames() {
            console.log(this.domestic)
        },
    },
}

animalsValue.different.getNames()

let numCount = {
    one: 1,
    two: 2,

    totalValue() {
        console.log(this.one)
    },

    callBack: {
        three: 3,
        total() {
            console.log(this.three)
        },
    },
}

numCount.totalValue()
numCount.callBack.total()

console.log('----------------------------------prototype')

let obj = class {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    inherit = () => {
        return `${this.firstName} and ${this.lastName} age ${this.age}`
    }
}

let total = new obj('prestige', 'albert', 30)
let totalValue = new obj('divine', 'justine', 12)

console.log(total.inherit())
console.log(totalValue.inherit())

console.log('----------------------------------Second prototype')

function form(num, count, bookName) {
    this.num = num
    this.count = count
    this.bookName = bookName
}

form.prototype.totalAsk = function(list) {
    return `${this.num} ${this.count} ${this.bookName}`
}

let cloneV = new form(20, 30, "don'/t cry again")
console.log(cloneV.totalAsk(), 70)

console.log('----------------------------------Third prototype')

let shop = class {
    constructor(animal, phone) {
        this.animal = animal
        this.phone = phone
    }

    inheritance = () => {
        return `${this.animal} ${this.phone}`
    }
}

let complete = new shop('goat', 'iphone')
console.log(complete.inheritance())

console.log('----------------------------------new')
let stringValue = function(name, age) {
    this.name = name
    this.age = age
}

stringValue.prototype.getNames = function() {
    return `${this.name} ${this.age}`
}

let totalStringValue = new stringValue('jungle', 20)
console.log(totalStringValue.getNames(), totalStringValue.name)

console.log(
    '----------------------------------------------------Three Pillar of JS',
)

class method {
    constructor() {
        this.favoriteBooks = []
    }

    countNameValue(myNewBooks) {
        if (!myNewBooks.includes('Great')) {
            this.favoriteBooks.push(myNewBooks)
        }
    }

    printNewBooks() {
        console.log(`${this.favoriteBooks}`)
        for (let newBooks of this.favoriteBooks) {
            console.log(newBooks)
        }
    }
}

function loadBooks(myBookShelf) {
    callBack(function bookNameResult(bookNames) {
        for (let bookResult of bookNames) {
            myBookShelf.countNameValue(bookResult)
        }
        myBookShelf.printNewBooks()
    })
}

var myArrBooks = new method()
loadBooks(myArrBooks)

function callBack(myArr) {
    setTimeout(function stuff() {
        myArr([
            'this is the Great one',
            'this is the jungle one',
            'this is the favorite one',
            'this is the Great one',
            'this is the Great one',
            'this is the jungle one',
            'this is the favorite one',
            'this is the Great one',
            'this is the Great one',
            'this is the jungle one',
            'this is the favorite one',
            'this is the Great one',
        ])
    }, 8000)
}