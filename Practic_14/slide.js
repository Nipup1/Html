let block_slide = document.querySelector(".Figure");
let block_with_slide = document.querySelector(".divSlaider")
let size_out = (block_with_slide.clientWidth/100)*10

function handler(event){
    let cord_x = (event.clientX - size_out);
    if(cord_x < 0) {
        block_slide.style.left = "0";
    } else if(cord_x > block_with_slide.clientWidth - 2*size_out - 10){
        block_slide.style.left = (block_with_slide.clientWidth - 2*size_out - 10) + "px"
    } else{
        block_slide.style.left = cord_x + "px";
    }
}

block_slide.addEventListener("mousedown", () => {
    window.addEventListener('mousemove', handler);
});

document.body.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', handler);
});