let basket = [1, 2, 3];
let bttn_delete = document.querySelector('#delete');
let bttn_clean = document.querySelector('#clean');
let bttn_add = document.querySelector('#add');
let bttn_calc = document.querySelector('#calc');
let bttn_sort = document.querySelector('#sort');
let sum = 0;

for(let i of basket){
    sum += Number(i);
}

document.getElementById('TextInput').innerHTML = basket;
document.getElementById('cost').innerHTML = "Итого: " + sum;
document.getElementById('new').innerHTML = "      ";
bttn_delete.addEventListener('click', function (){
    let delete_value = basket.shift();
    document.getElementById('TextInput').innerHTML = basket;
    sum -= delete_value;
    document.getElementById('cost').innerHTML = "Итого: " + sum;
});

bttn_clean.addEventListener('click', function (){
    basket.length = 0;
    document.getElementById('TextInput').innerHTML = basket;
    sum = 0;
    document.getElementById('cost').innerHTML = "Итого: " + sum;
});

bttn_add.addEventListener('click', function (){
    let add_value = Number(prompt("Введите значение"));
    basket.push(add_value);
    document.getElementById('TextInput').innerHTML = basket;
    sum += add_value;
    document.getElementById('cost').innerHTML = "Итого: " + sum;
});

bttn_calc.addEventListener('click', function (){
    document.getElementById('new').innerHTML = basket.filter(function (item){
        return item >= 2 && item<=5
    });
});

function compBol(a, b){
    if(a > b) return 1;
    else if(a === b) return 0;
    else if(a < b) return -1;
}

function compMen(a, b){
    if(a < b) return 1;
    else if(a === b) return 0;
    else if(a > b) return -1;
}

bttn_sort.addEventListener('click', function (){
    let type_sort = prompt("1 - возрастание, -1 - убывание")
    if(type_sort === "1"){
        basket.sort(compBol);
    } else if(type_sort === "-1"){
        basket.sort(compMen);
    }
    document.getElementById('TextInput').innerHTML = basket;
});
