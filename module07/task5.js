// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector('#name-input');
// console.log(inputName);
const outputName = document.querySelector('#name-output');
// console.log(outputName);

inputName.addEventListener('input', handelInputChange);


function handelInputChange(e){
  outputName.textContent = e.currentTarget.value;
  if(inputName.value === ""){
    outputName.textContent = 'незнакомец';
  }
};


