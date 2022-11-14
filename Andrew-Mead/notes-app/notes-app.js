const p = document.querySelector('h1')

const button = document.querySelector('button')

const bodyElement = document.querySelector('body')

// Using querySelectorAll here!
const viewP = document.querySelectorAll('p')

p.innerHTML = "Divine"
p.style.color = "crimson"



// viewP.forEach(function (p) {
//     // p.remove()
//     // console.log(p.textContent)
//     p.style.color = 'orange'
//     p.textContent = "Albert ***********************************" // update the text
// })


function showStyles() {
    button.addEventListener('click', function () {
        viewP.forEach(function (p) {
            p.style.backgroundColor = 'darkblue'
            p.style.color = 'white'
            p.style.padding = '2rem 0'
            p.style.fontSize = '3rem'
            p.style.boxShadow = '2px 2px 4px black, -2px -2px 4px black'
            p.style.textShadow = '2px 2px 3px #4444444'

        })
    })
}

let todo = [
    {
        name: "Divine",
        age: 19
    },
    {
        name: "Happiness",
        age: 19
    },
    {
        name: "Albert",
        age: 19
    },
    {
        name: "Prestige",
        age: 19
    },
]
function render(addElement) {
    const viewElement = document.createElement('p')
    viewElement.innerText = addElement

    return viewElement
}



function callStackFn() {
    let name = "Rendering Element from javaScript"
    bodyElement.appendChild(render(name))
    bodyElement.appendChild(render(todo[2].name))
}


callStackFn()
showStyles()


//Andrew Mead rendering
const create = document.createElement('div')
create.textContent = "Andrew Mead rendering"
bodyElement.appendChild(create)

