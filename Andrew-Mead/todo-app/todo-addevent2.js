const change1 = document.querySelectorAll('button')[0]
const change2 = document.querySelectorAll('button')[1]
const change3 = document.querySelectorAll('button')[2]
const change4 = document.querySelectorAll('button')[3]
const change5 = document.querySelectorAll('button')[4]
// const change6 = document.querySelectorAll('button')[5]
const change6 = document.querySelector('.successfully')
// const change7 = document.querySelectorAll('button')[6]
const change7 = document.getElementById('text')

function click1() {
    change1.addEventListener('click', function (e) {
        e.target.textContent = "Divine Love!"
        change1.style.backgroundColor = "red"
        change1.style.border = "none"
        change1.style.color = "white"
        change1.style.transition = "2s ease-in-out"
    })
}


function click2() {
    change2.addEventListener('click', function (e) {
        e.target.textContent = "Lovely Guy"
        change2.style.backgroundColor = "crimson"
        change2.style.border = "none"
        change2.style.color = "white"
        change2.style.transition = "2s ease-in-out"
    })
}

function click3() {
    change3.addEventListener('click', function (e) {
        e.target.textContent = "sidebar"
        change3.style.backgroundColor = "orange"
        change3.style.border = "none"
        change3.style.color = "white"
        change3.style.transition = "2s ease-in-out"

    })
}


function click4() {
    change4.addEventListener('click', function (e) {
        e.target.textContent = "Smart and elegant girl"
        change4.style.backgroundColor = "blue"
        change4.style.border = "none"
        change4.style.color = "white"
        change4.style.transition = "2s ease-in-out"
    })
}


function click5() {
    change5.addEventListener('click', function (e) {
        e.target.textContent = "Hello world!"
        change5.style.backgroundColor = "gray"
        change5.style.color = "white"
        change5.style.border = "none"
        change5.style.transition = "2s ease-in-out"
    })
}


function click6() {
    change6.addEventListener('click', function (e) {
        e.target.textContent = "Lovely Girl"
        change6.style.backgroundColor = "purple"
        change6.style.border = "none"
        change6.style.color = "white"
        change6.style.transition = "2s ease-in-out"
    })
}


function click7() {
    change7.addEventListener('click', function (e) {
        e.target.textContent = "Baby girl"
        change7.style.backgroundColor = "cornflowerblue"
        change7.style.color = "white"
        change7.style.border = "none"
        change7.style.transition = "2s ease-in-out"

    })
}

function callStackFn() {
    click1()
    click2()
    click3()
    click4()
    click5()
    click6()
    click7()
}


callStackFn()