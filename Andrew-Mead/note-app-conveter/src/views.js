import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

//Generate the DOM structure for a note

const generateNoteDOM = function (note) {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // const button = document.createElement('button')

    // //Setup the remove button

    // button.textContent = 'x'

    // button.addEventListener('click', function () {
    //     removeNote(note.id)
    //     saveNotes(notes)
    //     renderNotes(notes, filters)

    // })
    //Setup the note title text

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'

    }

    textEl.classList.add('list-item__title')
    // noteEl.appendChild(button)
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', '../public/edit.html')
    statusEl.classList.add('list-item__subtitle')
    noteEl.classList.add('list-item')

    // Setup the message
    statusEl.textContent = generateLastEdited(notes.updateAt)
    noteEl.appendChild(statusEl)
    return noteEl
}


//Render applications notes

const renderNotes = function () {
    const noteEls = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    noteEls.innerHTML = ''

    if (filterNotes.length > 0) {
        filterNotes.forEach(function (note) {
            const noteEl = generateNoteDOM(note)
            noteEls.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        noteEls.appendChild(emptyMessage)
    }

}


const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited')

    const notes = getNotes()

    const note = notes.find(function (note) {
        return note.id === noteId
    })


    if (note === undefined) {
        location.assign('../public/index2.html')
    }


    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updateAt)
}

//Generate the last edited message

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}


export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }