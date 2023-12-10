let cont = document.getElementById("contents");

cont.addEventListener('click', (event) => {
    if(event.target.tagName === "A") {
        event.preventDefault();
    }
});