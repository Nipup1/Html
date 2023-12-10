let menu = document.getElementById("Menu");
let bttn = menu.firstElementChild;

bttn.addEventListener('click', ()=>{
    let sub_element = document.createElement('div');
    let sub_cross = document.createElement('div');
    sub_cross.className = "test_cross";
    sub_element.className = "test";
    sub_element.innerHTML = "Что-то";
    sub_element.appendChild(sub_cross);
    menu.appendChild(sub_element);
});

menu.addEventListener('click', (event) => {
    let target = event.target;

    if(target.className === "test_cross"){
        target.parentNode.remove();
    }
});

