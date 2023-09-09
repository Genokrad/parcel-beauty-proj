const getEl = el => document.querySelector(el);
const getElAll = el => document.querySelectorAll(el);

const milkVinesImg = './images/direction/cosmetology.png';
const ginecologyImg = './images/direction/estetic.png';
const cosmetologyImg = './images/direction/plastic.png';

import sprite from './../images/sprite.svg';

// console.log(getEl('.directions__action-title--desctop'));
// console.log(getElAll('.directions__item-desctop'));

const removeClass = event => {
  getElAll('.directions__subtitle--desktop').forEach(item => {
    item.classList.remove('directions__subtitle--desktop-active');
  });
  // getElAll('.directions__data').forEach(item => {
  //   item.innerHTML = '';
  // });

  // console.dir(event.target);

  event.target.classList.add('directions__subtitle--desktop-active');

  if (event.target.innerText === 'Пластична хірургія') {
    getEl('#directions__data-plastick').classList.toggle('visually-hidden');
    console.dir(getEl('.directions__image-container'));
    // getEl('.directions__img').src = milkVinesImg;
  }
  if (event.target.innerText === 'Eстетична гінекологія') {
    getEl('#directions__data-ginecology').classList.toggle('visually-hidden');
    console.dir(getEl('.directions__image-container'));
    // getEl('.directions__img').src = ginecologyImg;
  }
  if (event.target.innerText === 'Косметологія') {
    getEl('#directions__data-cosmetology').classList.toggle('visually-hidden');
    console.dir(getEl('.directions__image-container'));
    // getEl('.directions__img').src = cosmetologyImg;
  }

  // console.dir(getEl('.directions__img').src);

  // console.dir(event.target.localName);
  // if (event.target.localName === 'li') {
  //   return;
  // }

  // if (event.target.innerText === 'Пластична хірургія') {
  //   event.target.nextElementSibling.innerHTML = `<p class="directions__text">Пластика грудей, обличчя, тіла - все для ваших ідеальних ліній, виразного погляду та гармонійних рис</p><a href='#' class="button button--direction">Детальніше<svg class="button__icone"><use xlink:href="${sprite}#arrowRight"></use></svg></a>`;
  // } else if (event.target.innerText === 'Eстетична гінекологія') {
  //   event.target.nextElementSibling.innerHTML = `
  //   <p class="directions__text">
  //     Усі види інтимної пластики, ліпофілінгу, ліпосакції, а також косметологічного догляду інтимної зони
  //   </p>
  //   <a href='#' class="button button--direction">
  //     Детальніше<svg class="button__icone">
  //       <use xlink:href="${sprite}#arrowRight"></use>
  //     </svg>
  //   </a>`;
  // } else if (event.target.innerText === 'Косметологія') {
  //   event.target.nextElementSibling.innerHTML = `
  //   <p class="directions__text">
  //     Сучасні лазери, SMAS-ліфтинг, контурна пластика та доглядові процедури для вашого неперевершеного виигляду
  //   </p>
  //   <a href='#' class="button button--direction">
  //     Детальніше<svg class="button__icone">
  //       <use xlink:href="${sprite}#arrowRight"></use>
  //     </svg>
  //   </a>`;
  // }

  // console.dir(event.target.innerText);
};

getEl('.directions__action-title--desctop').addEventListener(
  'click',
  removeClass
);

// mvp backup
// const getEl = el => document.querySelector(el);
// const getElAll = el => document.querySelectorAll(el);
// import sprite from './../images/sprite.svg';

// console.log(getEl('.directions__action-title--desctop'));
// console.log(getElAll('.directions__item-desctop'));

// const removeClass = event => {
//   getElAll('.directions__subtitle--desktop').forEach(item => {
//     item.classList.remove('directions__subtitle--desktop-active');
//   });
// getElAll('.directions__data').forEach(item => {
//   item.innerHTML = '';
// });

// event.target.classList.add('directions__subtitle--desktop-active');

// console.dir(event.target.localName);
// if (event.target.localName === 'li') {
//   return;
// }

// if (event.target.innerText === 'Пластична хірургія') {
//   event.target.nextElementSibling.innerHTML = `<p class="directions__text">Пластика грудей, обличчя, тіла - все для ваших ідеальних ліній, виразного погляду та гармонійних рис</p><a href='#' class="button button--direction">Детальніше<svg class="button__icone"><use xlink:href="${sprite}#arrowRight"></use></svg></a>`;
// } else if (event.target.innerText === 'Eстетична гінекологія') {
//   event.target.nextElementSibling.innerHTML = `
//   <p class="directions__text">
//     Усі види інтимної пластики, ліпофілінгу, ліпосакції, а також косметологічного догляду інтимної зони
//   </p>
//   <a href='#' class="button button--direction">
//     Детальніше<svg class="button__icone">
//       <use xlink:href="${sprite}#arrowRight"></use>
//     </svg>
//   </a>`;
// } else if (event.target.innerText === 'Косметологія') {
//   event.target.nextElementSibling.innerHTML = `
//   <p class="directions__text">
//     Сучасні лазери, SMAS-ліфтинг, контурна пластика та доглядові процедури для вашого неперевершеного виигляду
//   </p>
//   <a href='#' class="button button--direction">
//     Детальніше<svg class="button__icone">
//       <use xlink:href="${sprite}#arrowRight"></use>
//     </svg>
//   </a>`;
// }

//   console.dir(event.target.innerText);
// };

// getEl('.directions__action-title--desctop').addEventListener(
//   'click',
//   removeClass
// );
