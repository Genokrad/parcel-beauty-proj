// import imagePlastic from './images/direction/cosmetology.png';
// import sprite from './images/sprite.svg';

// const element = selector => document.querySelector(selector);
// const directions = element('.directions__desktop-wrapper');
// console.log(directions);

// function myEventHandler(event) {
//   // Ваш код для обработки события
//   const actionTitleList = document.querySelectorAll(
//     '.directions__subtitle--desktop'
//   );
//   if (actionTitleList !== null) {
//     classTogler(actionTitleList, event);
//   }
//   // console.log(actionTitleList);
// }

// // Повесьте слушатель события на объект window
// window.addEventListener('click', myEventHandler);

// function throttle(callback, delay) {
//   let timerId;

//   return function () {
//     if (!timerId) {
//       timerId = setTimeout(() => {
//         callback();
//         timerId = null;
//       }, delay);
//     }
//   };
// }

// function classTogler(actionTitleList, event) {
//   function contain(arr, value) {
//     let result = null;
//     [...arr].find(item => {
//       if (item === value) {
//         result = true;
//       } else {
//         result = false;
//       }
//     });
//     return result;
//   }

//   if (contain(event.target.classList, 'directions__subtitle--desktop-active')) {
//     event.target.childNodes[2].innerHTML = '';
//   }

//   if (contain(event.target.classList, 'directions__subtitle--desktop')) {
//     actionTitleList.forEach(element => {
//       element.classList.remove('directions__subtitle--desktop-active');
//       event.target.classList.add('directions__subtitle--desktop-active');

//       console.dir(event.target.innerText);
//     });
//   }
// }

// let helloRendered = false; // Flag to track if "Hello" div has been rendered

// function renderMarkup() {
//   if (!helloRendered) {
//     const helloMarkup = `
//   <div class="directions__card">
//     <img
//       class="directions__img"
//       src="${imagePlastic}"
//       alt="women"
//     />
//   </div>
//   <div class="directions__card-information">
//     <ul class="directions__action-title directions__action-title--desctop">

//       <li class="directions__item-desctop directions__item-desctop--active">
//         <p class="directions__subtitle directions__subtitle--desktop directions__subtitle--desktop-active">Пластична хірургія</p>
//       </li>
//       <li class="directions__item-desctop">
//         <p class="directions__subtitle directions__subtitle--desktop">Eстетична гінекологія
//         </p>
//       </li>
//       <li >
//         <p class="directions__subtitle directions__subtitle--desktop">Косметологія
//         </p>
//       </li>
//     </ul>

//   </div>`;
//     directions.insertAdjacentHTML('beforeend', helloMarkup);
//     helloRendered = true; // Set the flag to true after rendering
//   }
//   renderAdditionalContent();
// }

// function watchViewportSizeAbove(callback) {
//   const throttledCallback = throttle(callback, 300);

//   window.addEventListener('resize', () => {
//     const viewportWidth = window.innerWidth;

//     // Check if viewport width is greater than or equal to 1440 pixels
//     if (viewportWidth >= 1440) {
//       throttledCallback(); // Call the callback function with throttling
//     } else {
//       // If viewport width is less than 1440 pixels, remove the "Hello" div
//       const helloDiv = directions.querySelector('div');
//       if (helloDiv) {
//         helloDiv.remove();
//         helloRendered = false; // Reset the flag when removed
//       }
//     }
//   });
// }

// watchViewportSizeAbove(() => {
//   console.log('Viewport is greater than or equal to 1440px.');
//   renderHello(); // Render the "Hello" div when the condition is met
// });

// (function () {
//   if (window.innerWidth >= 1440) {
//     renderMarkup();
//   }
// })();

// function renderAdditionalContent() {
//   // Находим элемент с классом "directions__subtitle--desktop-active"
//   const activeSubtitle = document.querySelector(
//     '.directions__item-desctop--active'
//   );

//   if (activeSubtitle) {
//     // Создаем верстку
//     const additionalContentMarkup = `
//       <div class="directions__card-information">

//         <p class="directions__text">
//           Пластика грудей, обличчя, тіла - все для ваших ідеальних ліній,
//           виразного погляду та гармонійних рис
//         </p>
//         <button class="button button--direction">
//           Детальніше<svg viewBox="0 0 32 32 xmlns="http://www.w3.org/2000/svg  class="button__icone">
//             <use xlink:href="${sprite}#arrowRight"></use>
//           </svg>
//         </button>
//       </div>
//     `;

//     // Вставляем созданную верстку перед элементом "activeSubtitle"
//     activeSubtitle.insertAdjacentHTML('beforeend', additionalContentMarkup);
//   }
// }
