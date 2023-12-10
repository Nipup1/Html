let arrow = document.querySelector('.Arrow')
let wheel = document.querySelector('.Wheel')
let bttn = document.getElementById('bttn')

let prev = performance.now();
let times= 0;

bttn.addEventListener('click', ()=>{
    set_basis_state();
    requestAnimationFrame(function anim(time){
        draw_arrow(times);
        draw_wheel(times)

        if(times++ < 50) requestAnimationFrame(anim);
    });
});
function draw_arrow(progress){
    arrow.style.left = 20 * progress + "px";
}

function draw_wheel(progress){
    wheel.style.rotate = 15 * progress + "deg"
}

function set_basis_state(){
    times = 0;
    arrow.style.left = "0";
    wheel.style.rotate = "0";
}
