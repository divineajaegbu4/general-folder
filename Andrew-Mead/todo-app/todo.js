const p = document.querySelectorAll('p')

p.forEach(function (item) {

    if ((item.innerText.includes('the'))) {
        item.remove()
    }
})


// for (let i = 0; i <= p.length; i++) {
//     if (p[i].textContent.includes("the")) {
//         p[i].remove()
//     }
// }