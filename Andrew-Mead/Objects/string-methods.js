var myName = "    Ajaegbu Divine ".trim()


// Length property
console.log(myName.length)


// Convert to upper case method

console.log(myName.toUpperCase())


// Cnvert to lower case method

console.log(myName.toLowerCase())

// Includes method

var password = "adiva152309"

console.log(password.includes("adiva"))

// Trim method(removes whitespace from both ends(means start and end))

console.log(myName.trim())


// Challenge area
console.log("-----------------------------------Challenge area")

// isValidPassword
// length is more than 8 - it doesn't contain the password.

function isValidPassword(password) {
    var assign = ''
    if ((password.length >= 8)) {
        assign = password.includes("Albert")
    }

    return assign
}


console.log(isValidPassword("AlbertUkaegbu"))
console.log(isValidPassword("lilbyke2"))
console.log(isValidPassword("Albertlio@45"))


// Andrew Mead

console.log("----------------------------Andrew Mead")

function checkBool(password) {

    emptyStr = ""

    if ((password.length >= 8 && !password.includes("password"))) {
        emptyStr = "Valid Password"
    } else {
        emptyStr = "Invalid Password"
    }

    return emptyStr
}


console.log(checkBool("adivap"))
console.log(checkBool("lilbykeukaegbu"))
console.log(checkBool("adivapassword"))