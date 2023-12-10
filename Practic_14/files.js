let file_container = document.querySelector(".contFailes");

function delete_classes(item){
    item.classList.remove("selected");
}

file_container.addEventListener('click', (event) => {
    if(event.target.tagName === "P"){
        if(!event.ctrlKey){
            file_container.querySelectorAll("p").forEach(delete_classes);
        }
        event.target.className = "selected";
    }
});