import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'


let notes = []


//Read existing notes from localStorage

const loadNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return notes
    }
}


//Save the notes to localStorage

const saveNotes = function () {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from module

const getNotes = () => notes

const createNotes = () => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createAt: timeStamp,
        updateAt: timeStamp
    })
    saveNotes()

    return id
}


//Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNotes()
    }
}


// sort you notes by one of three ways

const sortNotes = function (sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updateAt > b.updateAt) {
                return -1
            } else if (a.updateAt < b.updateAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}


const updateNotes = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if (!note) {
        return
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title
        note.updateAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body
        note.updateAt = moment().valueOf()
    }

    saveNotes()

    return note

}
notes = loadNotes()

export { getNotes, createNotes, removeNote, sortNotes, updateNotes }