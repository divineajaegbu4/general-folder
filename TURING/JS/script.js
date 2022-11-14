// const improve = document.getElementsByClassName("menu")[0];
// const source = document.getElementsByClassName("open");



// improve.addEventListener('click', function() {
//     for (var i = 0; i < source.length; i++) {
//         source[i].classList.toggle('active');
//     }
// })

const menu = document.getElementsByClassName("menu")[0];
const display = document.getElementsByClassName("display");

menu.addEventListener("click", function() {
    for (let i = 0; i < display.length; i++) {
        display[i].classList.toggle("active");
    }
})