// Global Scope(convertFahreheitToCelsius, totalConvertion1, totalConvertion2)
// Local Scope(fahreheit, result)

let convertFahreheitToCelsius = function (fahreheit) {
    let result = (fahreheit - 32) * 5 / 9


    try {
        if ((result <= 0)) {
            let isFreezing = "Albert"

            console.log(isFreezing)
        }
    } catch (e) {
        return result
    }


    return result
}


let totalConvertion1 = convertFahreheitToCelsius(68)
let totalConvertion2 = convertFahreheitToCelsius(32)

console.log(totalConvertion2)
console.log(totalConvertion1)
