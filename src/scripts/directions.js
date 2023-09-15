const getEl = el => document.querySelector(el);
const getElAll = el => document.querySelectorAll(el);

import milkVinesImg from '../images/direction/cosmetology.png';
import ginecologyImg from '../images/direction/estetic.png';
import cosmetologyImg from '../images/direction/plastic.png';

console.log(cosmetologyImg);

const removeClass = event => {
  getElAll('.directions__subtitle--desktop').forEach(item => {
    item.classList.remove('directions__subtitle--desktop-active');
  });
  getElAll('.directions__data').forEach(item => {
    item.classList.add('visually-hidden');
  });
  // forEach(item => {
  //   item.classList.remove('directions__subtitle--desktop-active');
  // });
  event.target.classList.add('directions__subtitle--desktop-active');
  console.log(event.target.innerText);
  if (event.target.innerText === 'Пластична хірургія') {
    getEl('#directions__data-plastick').classList.toggle('visually-hidden');
    getEl('.directions__img-desktop').src = milkVinesImg;
  }
  if (event.target.innerText === 'Eстетична гінекологія') {
    getEl('#directions__data-ginecology').classList.toggle('visually-hidden');
    getEl('.directions__img-desktop').src = ginecologyImg; // Выбираем изображение напрямую
  }
  if (event.target.innerText === 'Косметологія') {
    getEl('#directions__data-cosmetology').classList.toggle('visually-hidden');
    getEl('.directions__img-desktop').src = cosmetologyImg; // Выбираем изображение напрямую
  }
};

getEl('.directions__action-title--desctop').addEventListener(
  'click',
  removeClass
);
