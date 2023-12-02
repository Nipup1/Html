let resInput = document.querySelector('#res-input');
let nInput = document.querySelector("#nInput");
let bttn = document.querySelector('#bttn');
let bttn2 = document.querySelector('#bttn2');

let res = '';
let strInput = '';
let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
let str2 = '0123456789';
let sum;
function captcha() {
    res = '';
    for (let i = 0; i < 8; i++) {
        res += str[getRandom(0, str.length - 1)]; //генерация капчи
    }
    return res;
}

const rezult = captcha();
bttn.addEventListener('click', function () {
    res = '';
    for (let i = 0; i < 8; i++) {
        res += str[getRandom(0, str.length - 1)]; //генерация капчи

    }
    resInput.value = res;
    document.getElementById('glob').innerHTML = res;
});

function calcKapth(){
    let x = str2[getRandom(0, str2.length - 1)];
    let y = str2[getRandom(0, str2.length - 1)];
    sum = String(Number(x) + Number(y));
    res = x + "+" + y;
    resInput.value = res;
}

function getRandom(min, max) { //рандомное значение
    return Math.floor(Math.random() * max - min + 1) + min;
}

bttn2.addEventListener('click', function () {
    strInput = nInput.value;

    if(strInput === ""){
        alert("Пустая строка");
    }
    else if (strInput ===  res) {
        alert("Вход разрешён");
    }
    else if(strInput === sum){
        alert("Вход разрешён");
    }
    else{
        calcKapth();
    }
});