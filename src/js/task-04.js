let counterValue = 0;
//шукаємо елементи
const span = document.querySelector('#value')
const buttonDecr = document.querySelector('button[data-action="decrement"]')
const buttonIncr = document.querySelector('button[data-action="increment"]')
//навішуємо слухачів
buttonDecr.addEventListener('click', onBtnDecrClick);
buttonIncr.addEventListener('click', onBtnIncrClick);
//функція зменшення лічильника при кліку
function onBtnDecrClick(event) {    
    counterValue -= 1;       
    span.textContent = counterValue;   
}
//функція збільшення лічильника при кліку
function onBtnIncrClick(event) {    
    counterValue += 1;       
    span.textContent = counterValue;    
}

