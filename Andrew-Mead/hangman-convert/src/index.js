import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import Hangman from './hangman-game'
import { getPuzzleFetch } from './request'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector("#guesses")
const resetBtn = document.querySelector("#reset")

console.log(uuidv4())
console.log(validator.isEmail("divine"))

let hangman;

window.addEventListener('keypress', (e) => {
   const guess = String.fromCharCode(e.charCode)
   hangman.makeGuess(guess)
   render()

})



//integrating app applications(Asynchronous)

const render = () => {
   // puzzleEl.textContent = hangman.puzzle
   puzzleEl.innerHTML = ''
   guessesEl.textContent = hangman.statusMessage

   hangman.puzzle.split('').forEach((letter) => {
      const letterEl = document.createElement('span')

      letterEl.textContent = letter

      puzzleEl.appendChild(letterEl)
   })
}

const startGame = async () => {
   const puzzle = await getPuzzleFetch()
   hangman = new Hangman(puzzle.puzzle, 5)

   console.log("hangman:", hangman.puzzle)

   render()
}

resetBtn.addEventListener('click', startGame)

startGame()































// import files

// import "./utilities"

// import multiply, { concatString, creation } from "./utilities"
// import otherCalculate, { person, num } from "./scream"


// // Named export import
// console.log("Albert and Divine")
// console.log(creation)
// console.log(concatString("Albert", "coder"))
// console.log(person("Ajaegbu", "Divine"))
// console.log(num(100, 5))

// //default export import
// console.log(multiply(8))
// console.log(otherCalculate(5))


// const name = "Divine Albert"

// console.log(name)

// class Hangman {
//     myMethod() {
//         return "Testing"
//     }
// }



// const hangman = new Hangman()

// console.log(hangman.myMethod())


/**
 *  How to install babel
 *  cd to your folder
 *  install npm init(npm initialize)
 *  run this command to your folder:npm install babel-
    preset-env@1.6.1
 * **/

/** 
 *  How to run babel file in your command line
 *  babel input.js --out-file output.js --presets env
 * &&
 * babel src/index.js --out-file public/script/bundle.js --presets env
 * **/