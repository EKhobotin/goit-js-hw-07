import { galleryItems } from './gallery-items.js';
// Change code below this line
//шукаємо елементи
const listGallery = document.querySelector('.gallery');
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
    const instance = basicLightbox.create(`
    <img src="${imgUrl}">
`);
    instance.show();
//після відкриття модалки вмикаємо слухача на Esc
    document.addEventListener('keydown', onEscDown);
    //функція слухача Esc
function onEscDown(event) {
    event.preventDefault();
    if (event.code === 'Escape') {
        instance.close();
    };     
}
}
       


