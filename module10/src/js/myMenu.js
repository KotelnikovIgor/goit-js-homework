import menuArr from './menuArr';
import menuTemplates from '../templates/menu.hbs';
// console.log(menuArr);
// console.log(menuTemplates);
const input = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');
const markup = menuTemplates(menuArr);
// console.log(markup);
const menuItems = document.querySelector('#menu');
// console.log(menuItems)
menuItems.insertAdjacentHTML('beforeend', markup);

if(localStorage.getItem('theme') === 'dark-theme'){
  body.classList.add('dark-theme');
  input.checked = true;
};

input.addEventListener('input', function(e) {
  if(input.checked){
    body.classList.add('dark-theme');
    localStorage.setItem('theme', `${Theme.DARK}`)
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', `${Theme.LIGHT}`)
  }
});

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

