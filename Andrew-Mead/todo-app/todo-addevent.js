let todos = [
    {
        name: "Albert is still awake",
        complete: true
    },
    {
        name: "Happiness is freshing up",
        complete: false
    },
    {
        name: "Divine is pressing her computer tonight",
        complete: true
    },
    {
        name: "Mummy is still outside arrange things",
        complete: false
    },
    {
        name: "Shedrack is not asleep already",
        complete: true
    },
]


// // const modifyText = document.querySelectorAll('button')[0]
// const modifyText2 = document.querySelectorAll('button')[1]


// // function wrapper() {
// //     modifyText.addEventListener('click', function (e) {
// //         e.target.innerText = "Albert love Divine"
// //     })
// // }

// function wrapper2() {
//     modifyText2.addEventListener('click', function (e) {
//         console.log("Albert is my love", e)
//     })
// }

// // wrapper()
// wrapper2()


document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})




const myChange = document.querySelectorAll('button')[1]


function wrapper() {
    myChange.addEventListener('click', function (e) {
        e.target.innerText = 'Divine and Albert'
    })
}

wrapper()