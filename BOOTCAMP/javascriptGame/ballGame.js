const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 100;
let radius = 50

let speed = 10;

let dir = 'right';

ballGame = () => {
    bigRect();
    showing();
    greenBall();
    requestAnimationFrame(ballGame);
}

bigRect = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}


function showing() {
    if (dir === 'down') {
        y = y + speed;
    }

}


greenBall = () => {
    ctx.fillStyle = 'green';
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

document.body.addEventListener('keydown', keyDown);

function keyDown(e) {
    if (e.keyCode === 40) {
        dir = 'down';
    }
    if (e.keyCode === 38) {
        dir = 'up';
    }
    if (e.keyCode === 39) {
        dir = 'right';
    }
    if (e.keyCode === 37) {
        dir = 'left';
    }
};

setInterval(ballGame, 100);