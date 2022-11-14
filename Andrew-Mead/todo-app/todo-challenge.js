const bodyEl = document.querySelector('body')
// const buttons = document.querySelector('button')
const button = document.querySelectorAll('button')[1]


let todos = [
    {
        name: "Albert is still awake",
        complete: true
    },
    {
        name: "Happiness is freshing up",
        complete: false
    },
    {
        name: "Divine is pressing her computer tonight",
        complete: true
    },
    {
        name: "Mummy is still outside arrange things",
        complete: false
    },
    {
        name: "Shedrack is not asleep already",
        complete: true
    },
]



function rendering(addNames) {
    const list = document.createElement('p')
    list.innerText = addNames

    return list
}


function arrangeList() {
    bodyEl.appendChild(rendering(todos[0].name)).style.color = 'white'
    bodyEl.appendChild(rendering(todos[1].name)).style.color = 'white'
    bodyEl.appendChild(rendering(todos[2].name)).style.color = 'white'
    bodyEl.appendChild(rendering(todos[3].name)).style.color = 'white'
    bodyEl.appendChild(rendering(todos[4].name)).style.color = 'white'
    bodyEl.style.fontSize = "3rem"
    bodyEl.style.backgroundColor = "crimson"


}

arrangeList()


//Andrew Mead

//Using filter to render text
const incompleteTodos = todos.filter(function (todo) {
    return !todo.complete
})

const summary = document.createElement('h2')

summary.textContent = `You have ${incompleteTodos.length} todos left`

bodyEl.appendChild(summary).style.color = 'white'

//Using foreach to render text

todos.forEach(function (item) {

    const p = document.createElement('p')
    p.innerText = item.complete

    bodyEl.appendChild(p).style.color = 'white'

})

//Change text button when you clicked it

function click() {
    button.addEventListener('click', function (e) {
        e.target.innerText = "This is very nice"
        // e.target.innerText.style.color = 'white'
        console.log(e)
    })
}

// function addClick() {
//     buttons.addEventListener('click', function (e) {
//         e.target.innnerText = "Albert is the only child I have."
//     })
// }


click()