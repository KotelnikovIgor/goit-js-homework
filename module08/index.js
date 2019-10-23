import gallery from "./gallery-items.js";

// Необходимо динамически создать элементы галереи по указанному шаблону.
// При клике по элементу галереи должно открываться модальное окно
// с полноразмерным изображением. 
// Обязательно используй делегирование событий и слушай клики на элементе ul.gallery.
// Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], 
// по клику на div.overlay или по нажатию ESC.

const galleryUl = document.querySelector('.gallery');
const lightBox = document.querySelector('.lightbox')
const lightboxImage = document.querySelector('.lightbox___image');
// const lightboxButton = document.querySelector('.lightbox__button')


function renderGallery(items) {
  const arrItem = items.reduce((acc, el) => {
    const li = 
    `
    <li class="gallery__item">
      <a class="gallery__link">
        <img class="gallery__image" src="${el.preview}" data-source="${el.original}"  alt="${el.description}" />
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>
    `
    return acc += li;
  }, "");
  // console.log(arrItem);
  galleryUl.insertAdjacentHTML('beforeend', arrItem);
};
renderGallery(gallery);

galleryUl.addEventListener('click', function (e) {
  if(e.target.nodeName === "IMG"){
    lightBox.classList.add('is-open');
    lightboxImage.setAttribute('src', e.target.dataset.source)
    lightboxImage.setAttribute('alt', e.target.alt)
    console.log(lightboxImage)
  };
});

// lightboxButton.addEventListener('click', function(e) {
//   console.log('e.target :', e.target);
//   // if(e.target.nodeName === "BUTTON" && e.target.dataset.action === "close-lightbox"){
//   //   console.dir(lightboxButton);
//   // };
//   lightBox.classList.remove('is-open');
// });

lightBox.addEventListener('click', function(e){
  // if(e.target === e.currentTarget) {
  //   lightBox.classList.remove('is-open');
  // }
  console.dir(e.target);
  if(e.target.nodeName !== "IMG") {
    lightBox.classList.remove('is-open');
  }

})

window.addEventListener('keydown', function(e) {
  if(e.keyCode === 27 && lightBox.classList.contains('is-open')){
    lightBox.classList.remove('is-open');
  };
});

