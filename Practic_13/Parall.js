let cont_Parr = document.querySelector('.Parr')
let img_parr = document.querySelector('#ImgParr')
let main = document.getElementsByTagName("main")

cont_Parr.addEventListener('scroll', () =>{
    let scrollY = cont_Parr.scrollTop;
    img_parr.style.top = scrollY * 1.1 + "px"
});

window.addEventListener('scroll', ()=>{
    main[0].style.top = window.scrollY + "px";
});

