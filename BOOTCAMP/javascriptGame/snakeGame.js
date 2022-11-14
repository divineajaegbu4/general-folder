const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

let length = 5;

let x = 10;
let y = 10


generalGame = () => {
    rectangle();
    smallRect();
    increase();
}


rectangle = () => {
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(x, y, canvas.width, canvas.height);
    ctx.fill();
}

smallRect = () => {
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, canvas.width / 45, canvas.height / 40);
    ctx.fill();
}

let snake = [];

increase = () => {
    for (let i = 0; i <= length; i++) {
        i++;
        let fullX = snake[i].x;
        let fullY = snake[i].y;
        smallRect(fullX, fullY);
    }
}






generalGame();