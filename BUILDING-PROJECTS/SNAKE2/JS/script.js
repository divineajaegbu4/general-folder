window.onload = function() {


    var cvs = document.getElementById('canvas');
    var ctx = cvs.getContext('2d');


    var cvsW = cvs.Width;
    var cvsH = cvs.Height;

    var snakeW = 10;
    var snakeH = 10;



    function drawSnake(x, y) {
        // ctx.clearRect(0, 0, cvsW, cvsH)

        // ctx.beginPath();
        // ctx.clearRect(0, 0, cvsW, cvsH)

        ctx.fillStyle = '#FFF';
        ctx.fillRect(x*snakeW, y * snakeH, snakeW, snakeH);

        ctx.clearRect(0, 0, cvsW, cvsH)


        ctx.fillStyle = '#000';
        ctx.strokeRect(x*snakeW, y * snakeH, snakeW, snakeH);
    }


    // drawSnake(4, 5)

    //create our snake object, it will contain 4 cells in default

    var len = 4;
    var snake = [];

    for(var i = len -1; i >=0; i--) {

        snake.push(
            {
                x: i,
                y: 0
            }
        )
    };


    function draw() {
        // ctx.clearRect(0, 0, cvsW, cvsH)
        for(let i = 0; i < snake.length; i++) {
            var x = snake[i].x;
            var y = snake[i].y;

        
            drawSnake(x, y)
        }

        


    //snake head

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    //remove to last entry (the snake Tail);

    snake.pop();


//     //create a new head, based on the previous head and the direction;

    snakeX++;


    let newHead = {

        x: snakeX,
        y: snakeY
    }



    snake.unshift(newHead)


}

setInterval(draw, 60);


}




