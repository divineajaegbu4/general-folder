// Set up index.html to load the bundle
// Make sure to load uuid via npm module when neccessary

//

// Add neccessary imports
// Render initial todos
// Set up search text handler
// Set up checkbox handler
// Set up form submission handler
// Bonus: Add a watcher for local storage

import { renderTodos } from './view'
import { setFilters } from './filters'
import { createTodos } from './todos'

renderTodos()


document.querySelector('#search-text').addEventListener('input', function (e) {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()


})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const viewText = e.target.elements.text.value.trim()

    if (viewText.length > 0) {
        createTodos(viewText)
        renderTodos()
        e.target.elements.text.value = ''

    }
})


document.querySelector('#hide-completed').addEventListener('change', function (e) {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})










// // import { createTodo } from "./todos";
// import { renderTodos } from "./view";
// import { saveTodos } from "./todos"


// renderTodos()

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     setFilters({
//         searchText: e.target.value
//     })
//     renderTodos()


// })

// document.querySelector('#hide-completed').addEventListener('change', function (e) {
//     setFilters({
//         hideCompleted: e.target.checked
//     })
//     renderTodos()
// })


// document.querySelector('#new-todo').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const viewText = e.target.elements.text.value.trim()

//     if (viewText.length > 0) {
//         todos.push({
//             // id: uuidv4()
//             text: viewText,
//             completed: false
//         })
//         saveTodos()
//         renderTodos()
//         e.target.elements.text.value = ''

//     }
// })
