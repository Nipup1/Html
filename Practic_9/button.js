var button_press;

function createFollowingElement() {
    document.addEventListener('mousemove', function (event) {
        if(button_press){
            const element = document.createElement('div');
            element.className = 'follow-cursor';

            element.style.left = event.clientX + 'px';
            element.style.top = event.clientY + 'px';
            document.body.appendChild(element);
        }
    });
}

button_like.onclick = function (){
    if (button_like.style.backgroundColor === "white"){
        button_like.style.backgroundColor = '#FF4364';
        button_press = true;
        createFollowingElement();
    }
    else{
        button_like.style.backgroundColor = 'white';
        button_press = false;
    }
}
