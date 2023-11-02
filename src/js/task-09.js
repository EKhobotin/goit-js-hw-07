function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//шукаємо елементи
const btnChangeColor = document.querySelector('.change-color')
const valueColor = document.querySelector('.color')
//вішаємо слухачів
btnChangeColor.addEventListener('click', onBtnClick);
//створюємо функції
function onBtnClick(event) {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  valueColor.textContent = randomColor;
}