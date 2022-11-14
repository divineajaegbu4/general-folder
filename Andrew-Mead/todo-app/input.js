
let newNotesList = views

const inputs = document.getElementById('input')
const notesDiv = document.getElementById('notes')
const forms = document.getElementById('forms')
const btns = document.getElementById('btn')
console.log(forms)
console.log(btns)




const filters = {
    searchText: ""
}


renderNotes(newNotesList, filters)


arrangeInput()
submit()



// localStorage.setItem("location", "lagos")
// console.log(localStorage.getItem("location"))
// localStorage.removeItem("location")is used to remove items
// localStorage.clear()is used to remove items

// const user = {
//     name: "Albert Divine",
//     age: 48
// }

// // Convert the Objects to a string
// const userJSON = JSON.stringify(user)
// // console.log(userJSON)

// localStorage.setItem("user", userJSON)
// console.log(localStorage.getItem("user"))









// https://www.beamjobs.com/resumes/software-engineer-resume-examples#example