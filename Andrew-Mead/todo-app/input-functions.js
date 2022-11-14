//For Arrays
let views = [
    {
        title: "My next notes",
        complete: false
    },

    {
        title: "The woman ",
        complete: true
    },

    {
        title: "wish nothing",
        complete: true
    },

    {
        title: "serverless",
        complete: false
    },

    {
        title: "Pointer event",
        complete: true
    },
]


//Rendering
const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    notesDiv.textContent = ''
    filterNotes.forEach(function (filtering) {
        const textEl = document.createElement('div')
        const view = document.createElement('p')
        const button = document.createElement('button')
        view.textContent = filtering.title
        button.textContent = 'x'
        localStorage.setItem('Anonymous', JSON.stringify(view))




        textEl.textContent = view.title.length > 0 ? filtering.title : "Anonymous"

        // if ((view.title.length > 0)) {
        //     textEl.textContent = filtering.title
        // } else {
        //     textEl.textContent = "Anonymous name"
        // }



        textEl.appendChild(button)


        notesDiv.appendChild(textEl)
        // notesDiv.style.lineHeight = '3'

        return notesDiv
        // notesDiv.appendChild(generateAppend(filtering))
    })
}


// function generateAppend(filtering) {
//     const view = document.createElement('p')
//     const button = document.createElement('button')

//     button.textContent = 'x'

//     localStorage.setItem('Anonymous', JSON.stringify(view))

//     if ((view.title.length > 0)) {
//         view.textContent = filtering.title
//     } else {
//         view.textContent = "Anonymous name"
//     }



//     return button
// }



let viewJSON = localStorage.getItem('Anonymous')

if ((viewJSON !== null)) {
    view = JSON.parse(viewJSON)
}








//ArrangeInput
function arrangeInput() {
    inputs.addEventListener('input', function (e) {
        filters.searchText = e.target.value
        renderNotes(newNotesList, filters)
    })
}



//Submit
function submit() {
    forms.addEventListener('submit', function (e) {
        e.preventDefault()

        newNotesList.push({
            title: e.target.elements.text.value,
        })

        // console.log(e.target.elements.text.value)

        renderNotes(newNotesList, filters)
        e.target.elements.text.value = ''
    })


}

