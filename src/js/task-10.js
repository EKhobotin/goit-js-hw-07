function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//шукаємо елементи
const countElem = document.querySelector('#controls :first-child')
const createElem = document.querySelector('[data-create]')
const destroyElem = document.querySelector('[data-destroy]')
const divBox = document.querySelector('#boxes')
let startWidth = 30; let startHeight = 30;
//вішаємо слухачів
createElem.addEventListener('click', onBtnCreateClick)
destroyElem.addEventListener('click', onBtndestrClick)
//створюємо функції
function onBtnCreateClick(event) {
  const countDiv = countElem.value;  
  const divArr = []; 
  if (countDiv>0) {
    for (let i = 0; i < countDiv; i++) {
      const divElement = `<div style="width: ${startWidth}px; height: ${startHeight}px; background-color: ${getRandomHexColor()}"></div>`;
      divArr.push(divElement);
      startWidth += 30;
      startHeight += 30;
    }
    const stroke = divArr.join('');
    divBox.insertAdjacentHTML('beforeend', stroke)
  } else {alert('Введіть число більше нуля')}
}
function onBtndestrClick(event) {
  divBox.innerHTML = '';
  startWidth = 30; startHeight = 30; countElem.value='';
}