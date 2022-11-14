const myAge = 19
const message = myAge >= 70 ? "You can vote!" : "You cannot vote"

// if ((myAge >= 10)) {
//     message = "You can vote!"
// } else {
//     message = "You cannot vote"
// }

const showValidAge = () => {
    console.log("This is valid age")
}

const showInvalidAge = () => {
    console.log("This is Invalid age")
}

myAge >= 100 ? showValidAge() : myAge < 20 ? showInvalidAge() : "Nothing shows"

console.log(message)


const team = ["Divine", "Albert"]

const printOut = team[0].includes('A') ? "Yes" : team[0].length <= 10 ? "Yes Length" : "views"

console.log(printOut)

