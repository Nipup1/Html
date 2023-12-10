let menu = document.querySelector(".MenuImages");
let item_main = document.querySelector(".itemMain");
let styles = window.getComputedStyle(item_main)

menu.addEventListener('click', (event) => {
    if(event.target.className !== "itemMain"){
        item_main.style.backgroundImage = getComputedStyle(event.target).backgroundImage;
    }
});