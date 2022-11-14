'use strict'

console.log("-------------------------------Class Hangman Game")
// import 'regenerator-runtime/runtime'
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }


    calculateStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter))

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses Left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! the word was ${this.word.join('')}.`
        } else {
            return `Great work! you guessed the work.`
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === '') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)


        if (this.status !== 'playing') {
            return
        }


        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }


        this.calculateStatus()
    }




}


// Inheritance

class Students extends Hangman {
    constructor(word, remainingGuess, age, position) {
        super(word, remainingGuess)
        this.age = age
        this.position = position
        this.divEl = document.querySelectorAll('div')[0]
        this.divEl2 = document.querySelectorAll('div')[1]
    }

    get calculateStatus() {
        return this.status.toUpperCase()
    }

    set calculateStatus(views) {
        if ((this.age >= this.position)) {
            this.status = `${views} is passing the post`
        } else if ((this.position <= this.age)) {
            this.status = `${this.word} is failing the post`
        } else {
            this.status = 'This is the both passing and failing post.'
        }
    }


    upDateGrade() {
        if ((this.age >= this.remainingGuess)) {
            this.position--
        } if ((this.remainingGuess >= this.age)) {
            this.position++
        } else {
            return 'nothing'
        }

        return this.position
    }
}



const student = new Students('Divine', 20, 19, 5)

student.calculateStatus = 'Divine is passing the position'
console.log(student.calculateStatus)
student.upDateGrade()



export { Hangman as default }





