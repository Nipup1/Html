let img = document.getElementById("Img")
let container = document.querySelector(".container")

img.style.top = (container.clientHeight - img.clientHeight)/2 + "px";
img.style.left = (container.clientWidth - img.clientWidth)/2 + "px";
window.addEventListener('resize', ()=>{
    img.style.top = (container.clientHeight - img.clientHeight)/2 + "px";
    img.style.left = (container.clientWidth - img.clientWidth)/2 + "px";
});

container.addEventListener('click', (event) => {
    alert(event.clientX + " : " + event.clientY);
});
