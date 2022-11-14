const note = ["Note 1", "Note 2", "Note 3"]

const newNotes = [
    {
        name: "Green apple",
        image: "🍏"
    },
    {
        name: "Peach",
        image: "🍑"
    },
    {
        name: "Tomato",
        image: "🍅"
    },
    {
        name: "Tangerine",
        image: "🍊"
    },
    {
        name: "Lemon",
        image: "🍋"
    },
]

// Push methods(adds something at the end)

note.push("Heading towards market")

// Pop methods(removes item from the end)

console.log("--------------------------------pop()")
console.log(note.pop())

// Shift methods(removes item in the front)

console.log("--------------------------------shift()")

console.log(note.shift())

// Unshift methods(add items in the front)

console.log("--------------------------------unshift()")

console.log(note.unshift("Albert Divine"))

console.log("--------------------------------splice()")

// Splice is used to remove and replace items(1- start, 2-deleteCount, Albert-replacement item, Divine-also replacement item and so on.)
console.log(note.splice(1, 2, "Albert", "Divine"))

console.log("--------------------------------Assignment array with indexes")

note[3] = "This is the new note3"

console.log("--------------------------------forEach loop")

note.forEach(function (item) {
    console.log(item)
})

console.log("--------------------------------for loop")

// How the code works:
//1.let count = 0(initalize)=> if initialize the count and the count is equal to zero
//2.count <= 2(condition)=> the count is not up to two and if it  true the code will executes.
//3. console.log(count)(print out the count) = The count print out because the condition  is true.
//4. count++(increment expression)=> After printing the code out the count will increase by one because
//count need to be added because it is not up to two.



for (let count = 0; count >= 0; count--) {
    console.log(count + 1)
}


console.log("--------------------------------Another for loop")

for (let i = note.length - 1; i >= 0; i--) {
    console.log(note[i])
}


console.log("--------------------------------Array")

console.log(note)

console.log("--------------------------------length")

console.log(note.length)

console.log("--------------------------------print out first array")


console.log(note[0])

console.log("--------------------------------print out third array")

console.log(note[note.length - 1])

console.log("-------------------------------indexOf")
// -1 means there is no such item in that list
console.log(note.indexOf('Note 3'))
console.log(note.indexOf('Albert'))

let objectP = {}

let otherObjectP = objectP

console.log(objectP === otherObjectP)

console.log("-------------------------------findIndex ")

// console.log(newNotes.length)

// const index = newNotes.findIndex(function (images) {
//     if ((images.image === "🍅")) {
//         return true
//     } else {
//         return false
//     }

// })

// console.log(index)


const findNotes = function (viewNotes, searches) {
    const findIndexNotes = viewNotes.findIndex(function (name) {
        let emptyStr = ""

        try {
            if ((name.image === searches)) {
                emptyStr = true
            } else {
                return false
            }
        } catch (e) {
            return "Nothing"
        }

        return emptyStr
    })
    return viewNotes[findIndexNotes]
}





const callNotes = findNotes(newNotes, "🍅")

console.log(callNotes)

console.log("-------------------------------Andrew Mead findIndex ")

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note) {
        return note.name.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const noted = findNote(newNotes, "peach");

console.log(noted)

console.log("-------------------------------find methods ")

const viewFinds = function (notes, noteTitle) {
    const index = notes.find(function (note) {
        return note.name.toLowerCase() === noteTitle.toLowerCase()
    })
    return index
}

const findNotesIndex = viewFinds(newNotes, "Green apple");

console.log(findNotesIndex)
// console.log(newNotes[3])


//filter array

console.log("----------------------------------Filter array")


const filterNotes = function (notes, query) {
    const findFilter = notes.filter(function (names) {
        const searchFilter = names.name.includes(query)
        const searchFilter2 = names.name.includes(query)


        return searchFilter || searchFilter2
    })

    return findFilter

}


const callFilter = filterNotes(newNotes, "e")

console.log(callFilter)

console.log("---------------------splice")
newNotes.splice(0, 1)

console.log(newNotes)


// Sort methods

console.log("-------------------------------Sort methods")

const sortView = function (customize) {
    const sortSolve = customize.sort(function (a, b) {
        if ((a.name.toLowerCase() < b.name.toLowerCase())) {
            return -1
        } else if ((a.name.toLowerCase() > b.name.toLowerCase())) {
            return 1
        } else {
            return 0
        }
    })

    return sortSolve
}

try {
    const clone = sortView(newNotes)
    console.log(clone)
} catch (e) {
    console.log("Is not working and executing")
}

// console.log(newNotes)

