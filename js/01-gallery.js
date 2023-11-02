import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
//шукаємо елементи
const listGallery = document.querySelector('.gallery');
console.dir(listGallery);
//функція для створення елемента
function createGalleryItem({ preview, original, description }) {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
}
//функція для створення розмітки 
function createGalleryItems(arr) {     
    listGallery.insertAdjacentHTML('afterbegin',arr.map((elem) => createGalleryItem(elem)).join(''))      
}
createGalleryItems(galleryItems);

//навішуємо слухача на спільного предка - список
listGallery.addEventListener('click', onGalleryItemClick)
//створюємо функцію слухача
function onGalleryItemClick(event) {
    event.preventDefault();
    if (!event.target.nodeName === 'IMG') { return };
    const imgUrl = event.target.dataset.source;
    console.log(event.currentTarget);
    const instance = basicLightbox.create(`
    <img src="${imgUrl}">
`);
    instance.show();
}



