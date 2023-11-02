//шукаємо потрібні елементи
const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');
// навішуємо слухача
inputElem.addEventListener('input', onFormInput);
//створюємо функцію
function onFormInput(event) {
    outputElem.textContent = event.target.value ? event.target.value : 'Anonymous'; 
}