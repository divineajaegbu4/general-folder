"use strict"

const totalAppends = document.querySelector('body')
const btn1 = document.querySelectorAll('button')[0]
const btn2 = document.querySelectorAll('button')[1]
const btn3 = document.querySelectorAll('button')[2]





const selectOptions = [
    {
        name: "Albert",
        age: 29
    },
    {
        name: "Nigeria",
        age: 67
    },
    {
        name: "Ukaegbu",
        age: 5
    },
    {
        name: "Ajaebgu",
        age: 34
    },
    {
        name: "single",
        age: 12
    },
]


function clickToDirect() {
    btn1.addEventListener('click', function () {
        location.assign(`../todo-app/forms.html#${selectOptions[0].name}`)
        // location.assign(`../todo-app/forms.html`)

    })


    function clickToDirect2() {
        btn2.addEventListener('click', function () {
            location.replace('../todo-app/Challenge-area.html')
        })
    }

    function clickToDirect3() {
        btn3.addEventListener('click', function () {
            location.reload()
        })
    }

    function styleBtns() {
        btn1.style.fontSize = '2rem'
        btn2.style.fontSize = '2rem'
        btn3.style.fontSize = '2rem'

        btn1.style.borderRadius = '20px'
        btn2.style.borderRadius = '20px'
        btn3.style.borderRadius = '20px'
    }


    let setUp = {
        first: clickToDirect2,
        second: clickToDirect3,
        styles: styleBtns
    }

    return setUp
}



function callStack() {

    const viewClick = clickToDirect()

    viewClick.first()
    viewClick.second()
    viewClick.styles()
}


callStack()



function complexRendering(text) {
    const section = document.createElement('section')
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    section.appendChild(header)
    header.appendChild(nav)
    nav.appendChild(ul)
    ul.appendChild(li)




    li.textContent = text


    //Stylings CSS
    totalAppends.style.backgroundColor = "crimson"
    section.style.textAlign = 'center'
    ul.style.listStyle = 'none'
    li.style.color = 'white'
    li.style.fontSize = '3rem'
    li.style.textShadow = '2px 2px 4px black'

    //return section
    return section

}


// function callFnAppends() {
//     totalAppends.appendChild(complexRendering(selectOptions[0].name))
//     totalAppends.appendChild(complexRendering(selectOptions[1].country))
//     totalAppends.appendChild(complexRendering(selectOptions[2].firstName))
//     totalAppends.appendChild(complexRendering(selectOptions[3].lastName))
//     totalAppends.appendChild(complexRendering(selectOptions[4].maritalStatus))
// }


selectOptions.forEach(function (item) {
    function callFnAppends() {
        totalAppends.appendChild(complexRendering(item.name))
    }

    callFnAppends()
})


function anotherRendering(view) {
    const div = document.createElement('div')
    const checkBoxs = document.createElement('input')
    const span = document.createElement('div')
    const button = document.createElement('button')
    const link = document.createElement('a')
    const figure = document.createElement('figure')
    const image = document.createElement('img')


    // let name = "Divine"
    //for links
    link.textContent = "Click"
    link.setAttribute('href', `../todo-app/input.html#${view[0].name} `)
    // link.setAttribute('href', '../todo-app/input.html')

    //for checkbox
    checkBoxs.setAttribute('type', 'checkbox')

    //for span
    span.textContent = view[0].name

    //for button
    button.textContent = 'This is my button to click'

    //for image
    figure.textContent = 'This is flower image'
    figure.style.fontSize = '3rem'
    figure.style.color = 'white'
    figure.style.textShadow = '2px 2px 4px black'
    figure.style.fontWeight = 'bolder'
    figure.style.textAlign = 'center'

    image.setAttribute('src', 'https://d15k1bjvpm8kj4.cloudfront.net/image/catalog/products/flowers/FL303-500x500.jpg')

    figure.appendChild(image)
    //for rendering
    div.appendChild(button)
    div.appendChild(span)
    div.appendChild(checkBoxs)
    div.appendChild(link)
    div.appendChild(figure)

    //for returnable value
    return div
}


totalAppends.appendChild(anotherRendering(selectOptions))

