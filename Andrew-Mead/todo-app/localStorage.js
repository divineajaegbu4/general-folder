const localStor = document.querySelector('button')
const input = document.getElementById('inputs')
const emptyEl = document.querySelector('.empty')
const bodyEl = document.querySelector('body')

let viewers = [
    {
        name: "Albert",
        completed: true,
        age: 10

    },

    {
        name: "Divine",
        completed: true,
        age: 45
    },

    {
        name: "Prestige",
        completed: false,
        age: 90
    },

    {
        name: "Success",
        completed: true,
        age: 54
    },

    {
        name: "Loveth",
        completed: false,
        age: 85
    },
]


//localStorage goes here

// const noteJSON = localStorage.getItem('note')

// if ((noteJSON !== null)) {
//     viewers = JSON.parse(noteJSON)
// }




const filters = {
    searchText: ""
}


// Length for viewers

function length() {
    const length = document.createElement('h1')


    length.textContent = `You have ${viewers.length} Todos left`

    bodyEl.appendChild(length)





}




function removeNotes(completed) {
    const clearNotes = viewers.findIndex(function (views) {

        return views.completed === completed
    })

    if ((clearNotes > -1)) {
        viewers.splice(clearNotes, 1)
    }

}





const toggleTodo = function (completed) {
    const todo = viewers.find(function (todo) {
        return todo.completed === completed
    })

    if ((todo !== undefined)) {
        // viewers.completed = !viewers.completed
        viewers.splice(todo, 1)
    }
}


const renderViewers = function (named, show) {
    const filtering = named.filter(function (note) {
        return note.name.toLowerCase().includes(show.searchText.toLowerCase())
    })

    emptyEl.textContent = ''

    filtering.forEach(function (notes) {
        const createNotes = document.createElement('div')
        const button = document.createElement('button')
        const checkBox = document.createElement('input')

        // const bodyEl = document.createElement('body')


        button.textContent = 'x'



        checkBox.setAttribute('type', 'checkbox')
        checkBox.checked = !notes.completed

        emptyEl.appendChild(checkBox)


        checkBox.addEventListener('change', function () {
            viewers.forEach(function (colors) {
                colors.name = moment().format('MMM D, YYYY')
                colors.completed = moment().fromNow()
            })

            toggleTodo(notes.completed)

            localStorage.setItem('user', JSON.stringify(viewers))

            const userJSON = localStorage.getItem('user')

            if ((userJSON !== null)) {
                viewers = JSON.parse(userJSON)
            }

            renderViewers(viewers, filters)

        })


        button.addEventListener('click', function () {
            // e.target.innerText = 'Is working'

            removeNotes(notes.completed)
            localStorage.setItem('noteViews', JSON.stringify(viewers))
            const openJSON = localStorage.getItem('noteViews')

            renderViewers(viewers, filters)

            // viewers = openJSON !== null ? JSON.parse(openJSON)

            if ((openJSON !== null)) {
                viewers = JSON.parse(openJSON)
            }
        })

        createNotes.textContent = notes.name.length > 0 ? notes.name : "Anonymous name"
        // if ((notes.name.length > 0)) {
        //     createNotes.textContent = notes.name
        // } else {
        //     createNotes.textContent = "Anonymous name"
        // }

        createNotes.appendChild(button)
        emptyEl.appendChild(createNotes)
        // bodyEl.appendChild(emptyEl)
    })




    //call the function of the length.
    length()


}

renderViewers(viewers, filters)


function inputFn() {
    input.addEventListener('input', function (e) {
        filters.searchText = e.target.value
        renderViewers(viewers, filters)
    })
}


function clickBtn() {
    localStor.addEventListener('click', function (e) {

        // viewers.forEach(function (listItems) {
        //     listItems.name = moment().valueOf()
        // })
        e.target.innerText = "Click the btn"
        viewers.push({
            name: "",
            completed: ""
        })

        localStorage.setItem('note', JSON.stringify(viewers))
        renderViewers(viewers, filters)
    })

}


inputFn()
clickBtn()


const momentSet = moment()
console.log(momentSet.toString())