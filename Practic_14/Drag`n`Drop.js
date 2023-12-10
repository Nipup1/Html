let magazin = document.querySelector('.Magazin');
let bascet = document.querySelector('.droppable')
let sum = 0;
let count = 0;

magazin.addEventListener('mousedown', (event) => {
    if(event.target.className.slice(0,5) !== "ritem") return false;

    let on_droppable = false;
    let product = event.target
    let clone_product = event.target.cloneNode(true);
    let shiftX = event.clientX - event.target.getBoundingClientRect().left;
    let shiftY = event.clientY - event.target.getBoundingClientRect().top;

    function get_coords(pageX, pageY){
        clone_product.style.left = pageX - shiftX + "px";
        clone_product.style.top = pageY - shiftY + "px";
    }

    clone_product.style.position = "absolute";
    clone_product.style.zIndex = "1000";

    document.body.appendChild(clone_product);

    get_coords(event.pageX, event.pageY);

    function set_coords(event){
        get_coords(event.pageX, event.pageY);

        clone_product.hidden = true;
        let elem_below = document.elementFromPoint(event.clientX, event.clientY);
        clone_product.hidden = false;

        let droppable = elem_below.closest('.droppable');

        if(droppable === bascet){
            bascet.style.scale = "1.2";
            on_droppable = true;
        } else{
            bascet.style.scale = "1";
            on_droppable = false;
        }
    }

    document.addEventListener('mousemove', set_coords);

    clone_product.addEventListener('mouseup', ()=>{
        document.removeEventListener('mousemove', set_coords);
        if(on_droppable){
            sum += Number(product.nextElementSibling.innerText.slice(6));
            count++;

            bascet.querySelector('.price').innerText = "Итого: " + sum;
            bascet.querySelector('.count').innerText = "Количество: " + count;
        }
        clone_product.remove();
        bascet.style.scale = "1";
    });
});