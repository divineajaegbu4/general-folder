

const forms = {
    firstName: "Ajaegbu Albert Divine Ukaegbu",
    score: 100,
    height: 45,
    width: 87,
    position: 50
}


let numbers = {
    name: "number of students",
    newClass: 45,
    oldClass: 10,


    evaluateNums: function (sizeUp) {
        var result = this.newClass - this.oldClass
        var emptyStr = ""


        if ((sizeUp >= result)) {
            emptyStr = "A"
        } else if ((sizeUp <= result)) {
            emptyStr = "B"
        } else {
            emptyStr = "C"
        }

        return `Answer: ${emptyStr} `
    },



    evaluateNums2: function (score) {
        let calc = forms.score + forms.height
        let thisCalc = (this.newClass + this.oldClass) - score
        var otherEmptyStr = ""

        if ((thisCalc >= calc)) {
            otherEmptyStr = "AB"
        } else if ((thisCalc <= calc)) {
            otherEmptyStr = "BC"
        } else {
            otherEmptyStr = "CD"
        }

        return `${forms.firstName} (${otherEmptyStr})`

    },



    declaration: function () {
        let containArr = [
            {
                name: "Albert",
                image: "🍔",
            },

            {
                name: "Albert",
                image: "🍑",
            },

            {
                name: "Albert",
                image: "🥑",
            },

            {
                name: "Albert",
                image: "🥝",
            },

            {
                name: "Albert",
                image: "🍍",
            },
        ]

        return containArr


    }

}





// customizeAppend()



var totalResult = numbers.evaluateNums(5)
var totalNewResult = numbers.evaluateNums2(10)

var images = numbers.declaration()

// console.log(numbers.declaration.image)

console.log(totalResult)
console.log(totalNewResult)

console.log(images)



// Challenge area

console.log("----------------------------------------Challenge area")

const resturant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let result = this.guestCapacity - this.guestCount

        var evaluateBool = partySize <= result

        return evaluateBool
    },
    seatParty: function (num) {
        let calc = this.guestCapacity + this.guestCount

        return num >= calc
    },
    removeParty: function (num2) {
        let totalCalc = (this.guestCapacity - this.guestCount) / 5

        return num2 >= totalCalc
    }
}


function outSideRunFn(count, amount) {
    var calcCount = (count.guestCapacity * count.guestCount) + 10
    var emptyStr = ""

    if ((amount <= calcCount)) {
        emptyStr = "A"
    } else if ((amount >= calcCount)) {
        emptyStr = "B"
    } else {
        emptyStr = "C"
    }

    return emptyStr

}

var executeBool = resturant.checkAvailability(10)
var executeBool2 = resturant.seatParty(70)
var executeBool3 = resturant.removeParty(50)

var runCallStack = outSideRunFn(resturant, 20)

console.log(executeBool)
console.log(executeBool2)
console.log(executeBool3)

console.log(runCallStack)


// Andrew Mead

console.log("---------------------------------Andrew Mead")

const resturants = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let result = this.guestCapacity - this.guestCount

        var evaluateBool = partySize <= result

        return evaluateBool
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize

    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}


resturants.seatParty(72)
console.log(resturants.checkAvailability(4))
resturants.removeParty(5)
console.log(resturants.checkAvailability(4))

