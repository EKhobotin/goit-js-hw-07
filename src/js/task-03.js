const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//шукаємо елемент для вставки
const listGallery = document.querySelector('.gallery')
//створюємо функцію для одного елемента забраження
const makeImg = ({ alt, url: src }) =>`<li><img src="${src}" alt="${alt}"/></li>`; 
//створюємо функцію для всіх зображень
const makeImgs = (imgsArr) => imgsArr.map(makeImg).join('')
//вставляємо елементи
const renderImgs = (imgsArr) => {
  const listImgs = makeImgs(imgsArr);
  listGallery.insertAdjacentHTML('afterbegin', listImgs);
}
renderImgs(images)

