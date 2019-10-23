// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего 
// вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUL = document.querySelector('#ingredients');
const fragmentLi = document.createDocumentFragment();
// console.log(ingredientsUL);

// const itemsLi = document.createElement('li');
// console.log(itemsLi);

ingredients.forEach(el => {
  const itemsLi = document.createElement('li');
  itemsLi.textContent = el;
  fragmentLi.append(itemsLi);
  // console.log(itemsLi);
});
ingredientsUL.append(fragmentLi);