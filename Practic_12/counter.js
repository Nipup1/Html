let container = document.getElementById('conteiner')
let bttn_add = document.getElementById('bttn_add')
let menu = document.getElementById('Menu');
let noti = document.getElementsByClassName("notification")

function addCounter(){
    let menu = document.getElementById('Menu')
    let counter = document.getElementById('count');
    let value = document.getElementById('count').innerText;

    counter.innerHTML = String(Number(value) + 1);
};

menu.addEventListener('click', () => {
    clearInterval(timeInterval);
    setTimeout(createIntervel, 10000);
    noti[0].innerText = "123";
    setTimeout(delete_noti, 1500)
});

function createIntervel(){
    timeInterval = setInterval(addCounter,3000);
}

function delete_noti(){
    noti[0].remove();
}

bttn_add.addEventListener('click', () => {
    while(true){
        let prompt_value = prompt();
        if(prompt_value === null) break;
        else if(prompt_value === "") break;
        let element = document.createElement('li');
        element.innerText = String(prompt_value);
        container.appendChild(element);
    }
});

let timeInterval = setInterval(addCounter, 3000);