let rezult = prompt("Введите логин");
if(rezult === "Админ"){
    let rezult = prompt("Введите пароль")
    if(rezult === "Главный"){
        alert("Здравствуйте!");
    }
    else if(rezult === null){
        alert("Отменено");
    } else{
        alert("Неверный пароль!");
    }
}else{
    alert("Отменено");
}