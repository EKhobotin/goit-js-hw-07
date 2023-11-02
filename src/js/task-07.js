//шукаємо елементи
const sizeElem = document.querySelector('#font-size-control')
const textElem = document.querySelector('#text')
//навішуємо слухача
sizeElem.addEventListener('input', onSizeChange)
//створюємо функцію
function onSizeChange(event)
{
    const currentSize = event.target.value;
    textElem.style.fontSize = `${currentSize}px`
}