// const input = document.querySelector('input')
// const nameTextarea = document.querySelector('name')

// const notId = location.hash.substring(1)
// const notes = view
// const note = notes.forEach(function (value) {
//     return value.completed
// })
// if ((note === undefined)) {
//     location.assign('../todo-app/forms.html')
// }


// input.value = note.name
// nameTextarea = note.age

// input.addEventListener('input', function (e) {
//     note.name = e.target.value
// })

// nameTextarea.addEventListener('input', function (e) {
//     note.age = e.target.value
// })

const appends = document.querySelector('.appends')
const addNames = document.querySelectorAll('button')[0]
const addStorage = document.querySelectorAll('button')[1]

// console.log(addNames)

let views = [
    {
        name: 'Divine',
        age: 19
    },
    {
        name: 'Albert',
        age: 28
    }
]

function localStor() {
    localStorage.setItem('saveItem', JSON.stringify(views))

    let getJSON = localStorage.getItem('saveItem')

    if ((getJSON !== undefined)) {
        views = JSON.parse(getJSON)
    }
}

function noteViews() {
    let myFilter = views.filter(function (item) {
        return item.name
    })

    myFilter.forEach(function (item) {
        const p = document.createElement('p')

        p.textContent = item.name

        appends.appendChild(p)
    })

}




noteViews()

function add() {
    addNames.addEventListener('click', function (e) {
        views.forEach(function (items) {
            const viewMoment = moment()
            viewMoment.toString
            viewMoment.month(0).date(5).year(2023)
            items.name = viewMoment.format('MMM D, YYYY')

            items.age = viewMoment.fromNow()

        })
        views.push({
            name: e.target.value[0],
            age: 57
        })

        localStor()
        noteViews()


    })
}


add()


//Window goes here

window.addEventListener('click', function () {
    console.log("Divine Albert")
})

window.addEventListener('storage', function (e) {
    // console.log('Some data changed')
    if ((e.key === 'saveItem')) {
        addStorage.addEventListener('click', function () {
            const h1Tag = document.createElement('h1')

            h1Tag.textContent = "It has already clear"

            h1Tag.style.color = 'white'
            h1Tag.style.textShadow = '2px 2px 4px black'
            h1Tag.style.fontSize = '7rem'
            appends.appendChild(h1Tag)

        })

        // localStor()
        // noteViews()
    }
})


const now = moment()

console.log(now.toString())
// now.minutes(1)
// now.add(1, 'year')
// now.add(1, 'year').subtract(20, 'days')
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.toString())
console.log(now.minutes())
console.log(now.format('MMM D YYYY'))
console.log(now.fromNow())

const timeStamp = now.valueOf()

console.log(timeStamp)
console.log(moment(timeStamp).toString())


//Challenge area
console.log("-----------------------Challenge area")

const setter = moment()


console.log(setter.toString())
console.log(setter.format('MMM D, YYYY'))
console.log(setter.fromNow())
const setValue = setter.valueOf()

console.log(moment(setValue).toString())

setter.month(0).date(6).year(1991)

console.log(setter.format('MMM D, YYYY'))

// const now = new Date()

// const timeStamp = now.getTime()

// const myDate = new Date(timeStamp)

// console.log(`year: ${myDate.getFullYear()}`)
// // const now = new Date('march 2021 6:00')

// console.log(now.toString())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`day of month: ${now.getDate()}`)
// console.log(`Hours: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)
// console.log(`Time: ${now.getTime()}`)


// console.log("------------------------------Challeng time for dates")

// const nowDate = new Date()

// const setTime = nowDate.getTime()
// const newDate = new Date(setTime)

// console.log(`Month: ${newDate.getMonth()}`)

// console.log(nowDate.toString())



// console.log("Window height:", window.innerHeight)
// console.log("Window Width:", window.innerWidth)
// console.log("Window height:", window.innerHeight)
// console.log("Window Width:", window.innerWidth)
// console.log("Window Width:", window.innerWidth)
// console.log(window.document === document)
// window.console.log('test')
