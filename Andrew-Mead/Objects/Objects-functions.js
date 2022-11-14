const myBook = {
    title: 1984,
    author: "Landlord housemaid",
    pageCount: 3098

}

const otherBook = {
    title: "My lovely house builds",
    author: "From sorrow to joy",
    pageCount: "infinity"

}


const addFunc = function (books) {
    let totalFn = {
        add1: `Have patience so that you can pass ${books.author}`,
        add2: `The pagecount is ${books.pageCount}`
    }

    return totalFn


}

var summary1 = addFunc(myBook)
var summary2 = addFunc(otherBook)

console.log(`\n ${summary1.add1} \n ${summary2.add2}`)

// Challenge area

console.log("--------------------------------Challenge area")

// create a function - take fahraheit-return Objects with all three

const fahraheitObjects = {
    num1: 32,
    num2: 50,
    num3: 74
}


const arrangeFn = function (fahraheit) {
    let celsius = {
        first: (fahraheit.num1 - 32) * 5 / 9,
        second: (fahraheit.num2 - 32) * 5 / 9,
        third: (fahraheit.num3 - 32) * 5 / 9
    }



    return celsius
}

function customize() {
    var totalConvert = arrangeFn(fahraheitObjects)

    console.log(totalConvert.first)
    console.log(totalConvert.second)
    console.log(totalConvert.third)
    console.log(totalConvert)
}

customize()



// for Andrew mead

const convertFahraheit = function (fahraheits) {
    return {
        fahraheit: fahraheits,
        kelvin: (fahraheits + 459.67) * 5 / 9,
        celsius: (fahraheits - 32) * 5 / 9

    }
}


var temps = convertFahraheit(74)

console.log(temps)
console.log(temps.fahraheit)
console.log(temps.celsius)