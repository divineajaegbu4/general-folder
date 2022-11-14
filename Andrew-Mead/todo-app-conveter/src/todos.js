import { v4 as uuidv4 } from 'uuid';
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// Setup the empty todos array

let todos = []

// loadTodos
// Arguments: none
// Return value: none

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        todos = JSON.parse(todosJSON)
    } else {
        todos = []
    }
}

//saveTodos
// Arguments: none
// Return value: none

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array

const getTodos = () => todos
// createTodo
// Arguments: none
// Return value: none

const createTodos = (texts) => {
    todos.push({
        id: uuidv4(),
        text: texts,
        completed: true
    })
    saveTodos()
}


//removeTodo
//Arguments: id of todo to remove
const removeTodos = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}
// toggleTodo
// Arguments: id of todo to remove
// Return value: none
const toggleTodos = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

// Make sure to call loadTodos and setup the exports

export { getTodos, createTodos, removeTodos, toggleTodos }