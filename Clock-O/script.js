setInterval(newClock, 1000)

// const clockGame = document.getElementById('clock');
// clockGame.innerText = 'time';
// clockGame.style.color = 'white'


function newClock() {
    let clockDate = new Date();
    let hrs = clockDate.getHours();
    let mins = clockDate.getMinutes();
    let seconds = clockDate.getSeconds();

    let period = 'AM';

    if(hrs == 0) {
        hrs = 12;
    }else if(hrs >= 12) {
        hrs = hrs - 12;
        period = 'PM'
    }

    let time = `${hrs}: ${mins}: ${seconds}: ${period}`
    const drawGame = document.getElementById('clock');
    drawGame.innerText = time;
    drawGame.style.color = 'white'
    drawGame.style.fontWeight = 'bolder'
    setTimeout(newClock, 1000)
}

newClock();