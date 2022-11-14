// Create Arrays with five todos
// You have x todos
// Print the first and second to the last items => TODO: Walk the dog


const todo = ["walk the dog", "Happiness is coming", "principle man", "heading towards", "Albert"]




console.log(todo[0])
console.log(todo[todo.length - 2].length)
console.log(todo[todo.length - 3])

console.log("Length:", todo.length)



// Challenge area

// remove the 3rd item
// Add a new item onto the end
// remove the first item from the list

console.log("-------------------------------Challenge area")

// console.log("--------------------------Splice methods")
todo.splice(3, 1)

// console.log("--------------------------push methods")

todo.push("New item")

console.log("--------------------------Shift methods")

// console.log(todo.shift())

todo.splice(0, 1, "notes")



console.log(todo)
// console.log(todo.length)



// Challenge area using forEach

console.log("-------------------------------Challenge area using forEach")

console.log(`You have ${todo.length} todos`)



todo.forEach(function (item, i) {
    const num = i + 1
    console.log(`${num}. ${item}`)
})


// Challenge area for for loop

console.log("---------------------------Challenge area for for loop")

for (let count = 0; count < todo.length; count++) {
    const num = count + 1
    const todos = todo[count]

    console.log(`${num}. ${todos} `)
}



//Challenge area of findIndex and find methods

console.log("--------------------------------Challenge area of findIndex methods")

//1. Convert array to array of objects -> text, completed
//2. Create function to remove a todo by text value


const deleteTodo = function (viewTodo, searchOut) {
    const findTodo = viewTodo.findIndex(function (names) {
        let emptyStrTodo = ""

        if ((names === searchOut)) {
            emptyStrTodo = true
        } else {
            emptyStrTodo = false
        }

        return emptyStrTodo
    })

    return viewTodo[findTodo]
}

const callTodo = deleteTodo(todo, "Happiness is coming")

console.log(callTodo)


console.log("--------------------------------Challenge area of find methods")

const evaluateFind = function (list, pointStr) {
    return doneTodo = list.find(function (name) {
        return name === pointStr
    })

}

const viewFindTodo = evaluateFind(todo, "principle man")

console.log(viewFindTodo)

//Andrew Mead

console.log("-------------------------------------Andrew Mead")

const newTodos = [
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


const viewTodosText = function (arr, count) {
    const stateTodos = arr.findIndex(function (names) {
        return names.name === count
    })

    if ((stateTodos > -1)) {
        arr.splice(stateTodos, 1)
    }
}


viewTodosText(newTodos, "Tomato")

// console.log(callTextTodos)
console.log(newTodos)

console.log("-------------------------------------Another Andrew Mead")

const deleteTodos = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.name.toLowerCase() === todoText.toLowerCase()
    })

    if ((index > -1)) {
        todos.splice(index, 1, "Taco", "🌮")
    }
}


deleteTodos(newTodos, "Green apple")

console.log(newTodos)


// Challenge area for filter methods

console.log("----------------------------Challenge area for filter methods")


const getThingsToDo = function (create) {
    const filterItems = create.filter(function (names) {
        const isIncludes = names.name
        const isIncludes2 = names.name


        return isIncludes || isIncludes2
    })

    return filterItems

}


const callFilter = getThingsToDo(newTodos)

console.log(callFilter)


// Challenge area for sorts

console.log("---------------------------------------Challenge area for sorts")


const sortTodos = function (items) {
    const setTodos = items.sort(function (b, c) {
        if ((c.name > b.name)) {
            return -1//means if a is less than b(a comes before b)
        } else if ((c.name < b.name)) {
            return 1 //means if a is greater than b(a comes after b)
        } else {
            return 0 //means if a is equal to b(a is equal to b)
        }
    })

    return setTodos
}

newTodos.splice(3, 1)
const callTodosSort = sortTodos(newTodos)

console.log(callTodosSort)

console.log(newTodos)