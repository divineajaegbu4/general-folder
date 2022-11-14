class Cat {
    constructor(name, num) {
        this.name = name
        this.num = num
    }

    returnName() {
        return `Name: ${this.name}`
    }

    returnAge() {
        return `number: ${this.num}`
    }
}


const callStack = new Cat("Elephant", 10)

console.log(callStack.returnName())
console.log(callStack.returnAge())


console.log("-----------------------For Andrew Mead")
//Prototypal inheritance
const Hangman = function (word, remaining, likes) {
    this.word = word
    this.remaining = remaining
    this.likes = likes
    this.guessedLetters = ['c']
    this.figure = [1, 2, 3, 4, 5]
}

Hangman.prototype.getBio = function () {
    let bio = `${this.word} and ${this.remaining}`

    this.likes.forEach(item => {
        bio += `${this.word} likes ${item}`
    })

    return bio
}

Hangman.prototype.setName = function (fullName) {
    fullName = this.getBio()
    return fullName
}


Hangman.prototype.values = function (names) {
    const name = names.split(' ')

    let select = {
        firstSelect: this.firstName = name[0].toUpperCase(),
        secondSelect: this.lastName = name[1].toUpperCase()
    }

    return select

}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.figure.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === '') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}



const game1 = new Hangman('Cat', 2, [])
console.log(game1.setName())
game1.setName = function (view) {
    return view.toUpperCase()
}

console.log(game1.setName('Albert and Divine'))

console.log(game1.getPuzzle())

const game2 = new Hangman("Dog", 5, [])

console.log(game2.getBio())

const selectors = game2.values("Albert Divine are living together")

console.log(selectors.firstSelect)
console.log(selectors.secondSelect)
