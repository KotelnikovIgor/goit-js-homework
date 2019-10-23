// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
    'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
    'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
    'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUl = document.getElementById('gallery');
// console.log(galleryUl);
const fragmentImg = document.createDocumentFragment();

function renderList(arr, ref) {
  const item = arr.reduce((acc, el)=>{
    const li =`
      <li class="items__img">
        <img class="item__img" src="${el.url}" alt="${el.alt}" width="480" height="480" />
      </li>
    `;
    return acc += li;
  },"");
  ref.insertAdjacentHTML('beforeend', item);
};

renderList(images, galleryUl);
 