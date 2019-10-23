// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const value = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
// flinrfpyftndct*
incrementBtn.addEventListener('click', handelIncrement);
decrementBtn.addEventListener('click', handelDecrement);
let counterValue = 0;

function handelIncrement(){
  counterValue += 1;
  value.textContent = counterValue;
  // console.log('target :', e.target);
  // console.log('currentTarget :', e.currentTarget);
}

function handelDecrement(){
  counterValue -= 1;
  value.textContent = counterValue;
  // console.log('target :', e.target);
  // console.log('currentTarget :', e.currentTarget);
}




