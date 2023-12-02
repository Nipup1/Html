let textArea = document.querySelector('#textArea')
let bttn4 = document.querySelector('#bttn4')

function truncate(str, maxlength = 20){
    return str.substring(0, 17) + "..."
}
bttn4.addEventListener('click', function (){
    let str = prompt("Введите строку");
    if(str.length < 20){
        textArea.value = str;
    } else{
        str = truncate(str);
        textArea.value = str;
    }
})