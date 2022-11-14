const forms = document.getElementById('form-text')
const cool = document.getElementById('v')


function wrapForms() {
    forms.addEventListener('submit', function (e) {
        e.preventDefault() //cancel the default action
        console.log(e.target.elements.LastName.value)
        //to clear the screen
        e.target.elements.LastName.value = ''
    })
}


wrapForms()


//Challenge area
// 1. Create a form with a single input for todo text
// 2. Setup an submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application

let todosViews = [
    {
        name: "Albert",
        age: 29,
        completed: true
    },
    {
        name: "Divine",
        age: 19,
        completed: false
    },
    {
        name: "Prestige",
        age: 26,
        completed: true
    },
    {
        name: "Bekee",
        age: 3,
        completed: false
    }
]

// let todosViews = getSavedItem()

let todoViewers = {
    firstCall: getSavedItem(),
    secondCall: secondGetSavedItem(),
    generalFn: function () {
        return this.firstCall
    },
    generalFn2: function () {
        return this.secondCall
    }
}

views = todoViewers.generalFn()
sub = todoViewers.generalFn2()

todosViews = views




function generateMo() {
    const viewGenerate = moment()
    const sort = viewGenerate.fromNow()

    return sort
}



const todosText = document.getElementById('todos-text')
const includesText = document.getElementById('includes-text')
const emptyDiv = document.querySelector('.empty-div')
const bodyEl = document.querySelector('body')


//for checkbox
const funs = document.querySelector('.for-fun')
console.log(funs)

//for select options

const selectValue = document.getElementById('selection')
console.log(selectValue)



const showFilters = {
    showText: "",
    hideCompleted: false
}
//for localStorage

// const viewJSON = localStorage.getItem('saveItems')

// if ((viewJSON !== null)) {
//     todosViews = JSON.parse(viewJSON)

// }


// const viewItems = localStorage.getItem('viewItems')

// if ((viewItems !== null)) {
//     todosViews = JSON.parse(viewItems)
// }

// Append length
function append(item) {
    const createAppend = document.createElement('h1')
    const p = document.createElement('h2')
    createAppend.textContent = `You have ${item.length} Todos`
    p.textContent = `last edited is ${generateMo()}`

    bodyEl.appendChild(createAppend)
    bodyEl.appendChild(p)
}



//call the function
reRenderApp(todosViews, showFilters)




// Challenge area for checkbox
// 1. Create a checkbox and setup event listener->"Hide completed"
// 2. Create new hideCompleted filter(default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTools to remove completed items


function checkboxFun() {
    funs.addEventListener('change', function (e) {
        showFilters.hideCompleted = e.target.checked
        reRenderApp(todosViews, showFilters)
    })
}


function selectValueFn() {
    selectValue.addEventListener('change', function (e) {
        // console.log(e.target.value)

        todosViews.push({
            name: e.target.value
        })
        localStorage.setItem('viewItems', JSON.stringify(todosViews))

        reRenderApp(todosViews, showFilters)
        e.target.value = ''
    })

}





console.log(moment().toString())
//for length
append(todosViews)

// for update inputs
updateInput()

//submit forms
submitForm()

// for checkbox
checkboxFun()

//for select options
selectValueFn()


