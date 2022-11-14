//Global(name)
//Local(name)
//Local
//Local



// Variable shadowing

var fruits = "orange"

console.log(fruits)

let firstName = "Prestige"

if ((true)) {
    let firstName = "Divine"

    if ((true)) {
        firstName = "Loveth"
        console.log("Local scope, Variable Shadowing:", firstName)
    }
}


if ((true)) {
    console.log("Global Scope:", firstName)
}




if ((true)) {

    if ((true)) {
        var firstNames = "kite"
        console.log("Local scope, Variable Shadowing:", firstNames)
    }
}


if ((true)) {
    console.log("Global Scope:", firstNames)
}

