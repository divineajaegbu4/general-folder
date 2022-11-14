console.log(
    '---------------------------------------------------------------DOM',
)

const colorSquare = document.querySelectorAll('.color-js-item')[0]
const listItems = document.querySelectorAll('.target-js')
const clickStuff = document.querySelector('.click')
const input = document.querySelector('.input-js')
const text = document.querySelector('.text-js')
const clickChange = document.querySelector('.button')
const containerButton = document.querySelector('.container-button');
const appearPackage = document.querySelector('.appear-js');

let target = true
let name = 'click-button'
let changeColor = true
let countNum = 10

// general function
function generalName() {
    styles()
    nameItems()
    openClicked()
    inputText()
    clickButton()
        // clickChange()
}

// styles function
function styles() {
    if (target) {
        for (let i = 0; i <= countNum; i++) {
            colorSquare
            console.log(colorSquare, i)
        }
    }
    colorSquare.style.backgroundColor = 'red'
    colorSquare.style.marginLeft = '80px'
    colorSquare.style.position = 'relative'
    colorSquare.style.top = '10px'
}

// names function
function nameItems() {
    if (target) {
        for (let i = 0; i < listItems.length; i++) {
            let callItem = listItems[i]
            callItem.innerHTML = 'Albert is a good guy and smart'
            console.log(callItem)
        }
    }
}

// show function
function openClicked() {
    if (name === 'click-button') {
        clickStuff.addEventListener('click', function() {
            colorSquare.style.display = 'block'
            console.log('this is  me')
            alert('This is true programmer')
        })
    }
}

// input function
function inputText() {
    if (target) {
        input.addEventListener('keyup', function() {
            text.innerHTML = input.value
        })
    }

    // changeColor
    if (changeColor) {
        input.addEventListener('change', function() {
            text.style.backgroundColor = input.value
        })
    }
}

//click and change backgroundColor
function changeBackgroundColor(number) {
    let mathReturn = Math.round(Math.random() * (number + 1))
    return mathReturn
}

function clickChangeButton() {
    let templateColor = `rgba(${changeBackgroundColor(
    255,
  )}, ${changeBackgroundColor(255)}, ${changeBackgroundColor(255)})`

    document.body.style.backgroundColor = templateColor
}

clickChange.addEventListener('click', clickChangeButton)

// clickChange.addEventListener('click', function() {
//     let templateColor = `rgba(${changeBackgroundColor(
//     255,
//   )}, ${changeBackgroundColor(255)}, ${changeBackgroundColor(255)})`
//     document.body.style.backgroundColor = templateColor
// })

function clickButton() {
    if (target) {
        containerButton.addEventListener('click', function(e) {
            alert(`this is button ${e.target.innerHTML}`);
            e.target.innerHTML = "clicked";
            appearPackage.style.backgroundColor = "red";

            // e.stopPropagation();
        })
    }

}

generalName();