let isAccountLocked = false
let userRole = "Admin"


// if ((isAccountLocked)) {
//     console.log("Is account locked")
// } else {
//     console.log("Welcome!")
// }

if ((isAccountLocked)) {
    console.log("Is account locked")
} else if ((userRole === "Admins")) {
    console.log("Welcome Admin")
} else {
    console.log("Welcome!")
}


// challenge area
console.log("---------------------------Challenge area")

let temp = 45

if ((temp >= 50)) {
    console.log("It is freezing outside!")
} else if ((temp > 45)) {
    console.log("It is hot freezing")
} else {
    console.log("Go for it. It is pretty")
}