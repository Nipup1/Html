let inputBasket = document.querySelector('#basket');
let bttn3 = document.querySelector('#bttn3');
function Basket(startingValue){
    this.sum = startingValue;

    this.read = function (){
        let x = prompt("Введите значение");
        this.sum += Number(x);
    }
}

let basket = new Basket(17);
inputBasket.value = basket.sum

bttn3.addEventListener('click', function (){
    basket.read();
    inputBasket.value = basket.sum;
});