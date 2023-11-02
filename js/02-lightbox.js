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
//вмикаємо лайтбокс
    const lightbox = new SimpleLightbox('.gallery a',
        {captionType: 'attr',
            captionsData: 'alt',
            captionDelay: 250,
            captionPosition: 'bottom',
    });
    lightbox.open();

