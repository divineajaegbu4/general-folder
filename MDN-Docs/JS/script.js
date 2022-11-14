// const myHeading = document.querySelector('.header')
// myHeading.textContent = 'Hello world!'

// // if(red > 10)

// let p = '10'

// p = Number('10') * 1

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/firefox-icon.png') {
//         myImage.setAttribute('src', 'images/firefox2.png');
//     } else {
//         myImage.setAttribute('src', 'images/firefox-icon.png');
//     }
// }

// function change() {
//   let image = document.querySelector('.img')
//   image.src =
//     'https://media.istockphoto.com/photos/new-leather-cricket-ball-against-white-picture-id157181750?k=20&m=157181750&s=612x612&w=0&h=OQFimw32ZfF_ZfZ9dWiz-OIlhTPMIp43F1rOiOHL2Gc='
// }

// const myImage = document.querySelector('.img')
// let changeImg = 'g'
// const change = () => {
//     myImage.addEventListener('click', function() {
//         if (changeImg === 'g') {
//             myImage.src =
//                 'https://media.istockphoto.com/photos/new-leather-cricket-ball-against-white-picture-id157181750?k=20&m=157181750&s=612x612&w=0&h=OQFimw32ZfF_ZfZ9dWiz-OIlhTPMIp43F1rOiOHL2Gc='
//             changeImg = 't'
//         } else {
//             myImage.src =
//                 'https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg'
//             changeImg = 'g'
//         }
//     })
// }

// change()


let myImage = document.querySelector('img');
class ChangeUser {
    constructor(myImage) {
        this.myImage = myImage;
        
    }

    generalVal() {
        this.myImage.addEventListener('click', () => {
            this.myImage.src = "https://media.istockphoto.com/photos/colorful-soccer-ball-picture-id1315940628?b=1&k=20&m=1315940628&s=170667a&w=0&h=x0fTtUg8TWIVWrpU6AOzQYoU0ZrtRA7OIJE8vCBcEQ0=";
        })
    }
}

const unique = new ChangeUser(myImage);
unique.generalVal();


// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg') {
//         myImage.setAttribute('src', 'https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg');
//     } else {
//         myImage.setAttribute('src', 'https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg');
//     }
// }

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');




// let li = document.createElement('p')
// function setUserName() {
//     myButton.addEventListener('click', function() {
//         let smooth = prompt("what is your age");
//         myHeading.innerText = "heading, " + smooth
//     })
// }

// class SetUser {
//     constructor(button, tag) {
//         this.buttons = button;
//         this.tags = tag;

//     }
//     setUserName() {
//         this.buttons.addEventListener('click', () => {
//             let smooth = prompt("What's your age?")
//             this.tags.innerText = `Heading, ${smooth}`
//         })
//     }
// }

// const user = new SetUser(myButton, myHeading)
// user.setUserName()

// let myButton = document.querySelector('button');
// let li = document.createElement('p')
// let myHeading = document.querySelector('h1');
// class changeUser {
//     constructor(button, tags) {
//         this.buttons = button;
//         this.tag = tags
//     }

//     setUserName() {
//         this.buttons.addEventListener('click', () => {
//             let smooth = prompt("what is your age");
//             this.tag.innerText = "heading" + smooth
//                 // let li = document.createElement('p')
//                 // let li = document.createElement('p')
//                 // li.innerText = "Hello"
//                 // document.body.appendChild(li)
//         })
//     }
// }



// const users = new changeUser(myButton, myHeading);
// users.setUserName()




// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// }

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//     setUserName();
// }