let temp = 150

// Logical and(&&) - True if both sides are true.False otherwise
// Logical or(||) - True if at least one is true.False otherwise


if ((temp <= 70 && temp <= 100)) {
    console.log("A: A")
} else if ((temp === 10 || temp <= 60)) {
    console.log("B: B")
} else {
    console.log("Nothing, Shown up!")
}



// Challenge area

console.log("----------------------------Challenge area")

let isOneVegan = true
let isTwoVegan = true

if ((isOneVegan && isTwoVegan)) {
    console.log("Only offer up one vegan dishes")
} else if ((isTwoVegan || isOneVegan)) {
    console.log("Make sure to offer up some vegan options.")
} else {
    console.log("Offer anything on the vegan menu")
}