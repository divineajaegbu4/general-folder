setInterval(digitalClock, 1000);


function digitalClock() {
    const clockHead = new Date();
    const hours = clockHead.getHours();
    const minutes = clockHead.getMinutes();
    const seconds = clockHead.getSeconds();

    var hrs = 'AM'

    const totalClock = `${hours} : ${minutes} : ${seconds} : ${hrs}`;

    document.querySelector('.clock').innerHTML = totalClock;

   if(hrs === 0) {
       hours = 12;
   }else if(hrs >= 12) {
       hours-=12;
       hrs = 'PM'
   }
}

// const viewClock = document.querySelector('.clock')

// class Clock {
//   constructor(sites) {
//     this.viewClock = sites;
//     setInterval(this.digitalClock, 1000)

//   }


//   digitalClock() {
//     const clockHead = new Date();
//         const hours = clockHead.getHours();
//         const minutes = clockHead.getMinutes();
//         const seconds = clockHead.getSeconds();

//         const totalClock = `${hours}: ${minutes}: ${seconds}`; 

//         this.viewClock.innerHTML = totalClock;
    
//   }
// }

// const sideUp = new Clock(viewClock);

// sideUp.digitalClock()

    