//шукаємо елемент
const inputElem = document.querySelector('#validation-input');
console.dir(inputElem);
//навішуємо слухачів
inputElem.addEventListener('blur', onInputChange);
inputElem.addEventListener('focus', onInputFocus);

//створюємо функції навішування класів і скидання при повторному фокусі
function onInputChange(event) {
    const minLength = Number(event.target.dataset.length);    
    const currentLength = event.target.value.length; 
    currentLength === minLength ? event.target.classList.add('valid') : event.target.classList.add('invalid');
}
function onInputFocus(event) {
    event.target.classList.remove('valid','invalid')
}