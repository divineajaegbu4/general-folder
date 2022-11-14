//Read exiting code from localStorage
const getSavedItem = function () {
    localStorage.setItem('saveItems', JSON.stringify(todosViews))
    const viewJSON = localStorage.getItem('saveItems')

    if ((viewJSON !== null)) {
        return JSON.parse(viewJSON)

    } else {
        return []
    }


}


const secondGetSavedItem = function () {
    const viewItems = localStorage.getItem('viewItems')

    if ((viewItems !== null)) {
        return JSON.parse(viewItems)
    } else {
        return []
    }
}


//generate the code

function generate(item) {
    const createEl = document.createElement('p')

    createEl.textContent = item.name

    return createEl
}




// Render Application
function reRenderApp(notes, viewers) {
    const checkShow = notes.filter(function (note) {
        const searchTextMatch = note.name.toLowerCase().includes(viewers.showText.toLowerCase())
        const hideCompletedMatch = !showFilters.hideCompleted || !note.completed

        return searchTextMatch && hideCompletedMatch
    })


    // checkShow = checkShow.filter(function (note) {
    //     return !showFilters.hideCompleted || !note.completed
    // })

    emptyDiv.innerHTML = '' //clear the screen

    //render checkShow to the emptyDiv
    checkShow.forEach(function (item) {
        createEl = generate(item)
        emptyDiv.appendChild(createEl)
    })

    // checkShow.forEach(function (item) {
    //     const createEl = document.createElement('p')

    //     if ((item.name.length < 1)) {
    //         createEl.textContent = item.name
    //     } else {
    //         createEl.textContent = "Divine Lover"
    //     }

    //     emptyDiv.appendChild(createEl)
    // })


}

function updateInput() {
    includesText.addEventListener('input', function (e) {
        showFilters.showText = e.target.value //update the showText

        reRenderApp(todosViews, showFilters)
    })
}




//submit btn
function submitForm() {
    todosText.addEventListener('submit', function (e) {
        e.preventDefault() // cancel the default action
        //Add names to the todosViews use push method


        todosViews.push({
            name: e.target.elements.text.value,
            age: false
        })

        // Save the items inside localStorage
        getSavedItem()

        //call the function inside submit form
        reRenderApp(todosViews, showFilters)

        //clear the screen
        e.target.elements.text.value = ''




    })
}