import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const itemEl = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('data-source', element.original);
  galleryImage.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  itemEl.push(galleryItem);
});

galleryEl.append(...itemEl);

galleryEl.addEventListener('click', (el) => {
  el.preventDefault();
  if (el.target.nodeName !== 'IMG') {
    return;
  }

  const onSelectImg = el.target.getAttribute('data-source');

  const elementEl = basicLightbox.create(
    `<img src="${onSelectImg}" width="800" height="600"`
  );

  elementEl.show();

  galleryEl.addEventListener('keydown', (el) => {
    if (el.key === 'Escape') {
      elementEl.close();
    }
  });
});
