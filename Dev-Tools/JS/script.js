const input = document.querySelectorAll('input');
const showText = document.querySelector('p');
const clickBtn = document.querySelector('button')

clickBtn.addEventListener('click', clickBtnShow);


function clickBtnShow() {
    if(cline()) {
        showText.textContent = 'Error: one or both input';
        return
    }

    updateLabel()
}


function cline() {
    if(getNumber1() === '' || getNumber2() === '' || getNumber3() === '') {
        return true
    }else {
        return false
    }
}

function updateLabel() {
    let append1 = getNumber1();
    let append2 = getNumber2();
    let append3 = getNumber3();

    let sum = `${append1} ${append2} ${append3}`;
    showText.textContent = `${append1} + ${append2} + ${append3} = ${sum}`
}

function getNumber1() {
    return input[0].value
}

function getNumber2() {
    return input[1].value
}

function getNumber3() {
    return input[2].value
}


