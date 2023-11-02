const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//шукаємо елемент куди будемо вставляти лішки
const listIngridients = document.querySelector('#ingredients')
// створення однієї лішки
const makeIngr = (ingredient) => {
  const liItem = document.createElement('li');
  liItem.classList.add('item');
  liItem.textContent = ingredient;
  return liItem;  
}
//перебираємо вхідний масив і створюємо масив лішок
const ingrArray = ingredients.map(ingredient => makeIngr(ingredient))
//вставляємо лішки
listIngridients.append(...ingrArray)

