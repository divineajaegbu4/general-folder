
import { createNotes } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./views";


renderNotes()

document.querySelector('.create-note').addEventListener('click', function () {
   const id = createNotes()
   location.assign(`../public/edit.html#${id}`)

})


document.querySelector('#search-text').addEventListener('input', function (e) {
   setFilters({
      searchText: e.target.value
   })
   renderNotes()

})


document.querySelector('#filter-by').addEventListener('change', function (e) {
   setFilters({
      sortBy: e.target.value
   })
   renderNotes()
})


window.addEventListener('storage', e => {
   if (e.key === 'notes') {
      renderNotes()
   }
})





// console.log(getNotes())
// createNotes()

// removeNote('1')
// updateNotes('74b3195e-8639-44c3-9b27-26d80afcebe2', {
//    title: "My note title",
//    body: "My body for the notes"
// })
// console.log(getNotes())


// console.log(getFilters())
// setFilters({
//    searchText: 'Office',
//    sortBy: 'byCreated'
// })
// console.log(getFilters())
/**
 *  How to install babel
 *  cd to your folder
 *  install npm init(npm initialize)
 *  run this command to your folder:npm install babel-
    preset-env@1.6.1
 * **/

/** 
 *  How to run babel file in your command line
 *  babel input.js --out-file output.js --presets env
 * &&
 * babel src/index.js --out-file public/script/bundle.js --presets env
 * **/






























