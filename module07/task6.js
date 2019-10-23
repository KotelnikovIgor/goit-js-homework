// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.

// const validationInput = document.querySelector('#validation-input');
// const valid = document.querySelector('#valid');
// const invalid = document.querySelector('#invalid');


// validationInput.addEventListener('blur', () => {
//   if(validationInput.value === validationInput.dataset.length){
//     validationInput.value = valid.value
// })
// console.log(validationInput);

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  if(validationInput.value.length !== +validationInput.dataset.length){
    validationInput.classList.add('invalid')
  }else {
    validationInput.classList.add('valid')
  }
})

validationInput.addEventListener('focus', () => {
  if(validationInput.classList.contains('invalid')){
    validationInput.classList.remove('invalid')
  }else{
    validationInput.classList.remove('valid')
  }
})

