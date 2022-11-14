const changeBg = document.querySelector('.change-bg')
const click = document.querySelector(".click-me");
const calc = document.querySelector(".double")


let value = true;
let numberValue = 20;
let stringValue = "";
let nameValue = "Albert";
document.write(nameValue.substring(0, 0));
class Change {
    constructor(name, age) {
        this.nameValue = "divine";
        this.age = 19;
    }


    callback(value) {
        this.value = 30;
    }
}

console.log(nameValue);




function returnValue(number) {
    let totalReturnValue = Math.round(Math.random() * (number + 1))
    return totalReturnValue
}

function actionValue() {
    let showActionValue = `rgba(${returnValue(255)}, ${returnValue(
    255,
  )}, ${returnValue(255)})`
    document.body.style.backgroundColor = showActionValue
}

changeBg.addEventListener('click', actionValue)

function calcValue() {
    if (value) {
        click.addEventListener("click", function() {
            calc.style.display = "block";
        })
    }
}



// generalValueName();