const getEl = el => document.querySelector(el);

import sprite from './images/sprite.svg';

const isModalHidden = selector => {
  const modal = document.querySelector(selector);
  if (!modal) return false; // Если элемент не найден, считаем его видимым
  return modal.classList.contains('visually-hidden');
};

// let latButton = '';

const toggleModalDesktop = (mark, event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.dir(event.target);
  console.dir(event.currentTarget);
  if (isModalHidden('.header-modal.container')) {
    getEl('.header-modal').classList.toggle('visually-hidden');
    console.log('1');
  }

  if (!isModalHidden('.header-modal__services-list--servicess')) {
    getEl('.header-modal__services-list--servicess').classList.add(
      'visually-hidden'
    );
    console.dir(event.target.innerText);
    toggleChevron('.header-modal__icon-desktop-servicess use');
    console.log('5');
    return;
  }

  if (!isModalHidden('.header-modal__services-list--doctors')) {
    getEl('.header-modal__services-list--doctors').classList.add(
      'visually-hidden'
    );
    toggleChevron('.header-modal__icon-desktop-doctors use');
    console.dir(event.target.innerText);
    console.log('6');
    return;
  }
  if (isModalHidden('.header-modal__services-list--doctors')) {
    toggleClass(mark);
    console.log('7');
    return;
  }
};

const toggleClass = mark => {
  // console.log(mark);
  if (mark === 'modal') {
    toggleSvg();
    getEl('.header-modal').classList.toggle('visually-hidden');
  }
  if (mark === 'servicess') {
    toggleChevron('.header-modal__icon use');
    getEl('.header-modal__services-list--servicess').classList.toggle(
      'visually-hidden'
    );
  }
  if (mark === 'doctors') {
    console.log(mark);
    toggleChevron('.header-modal__icon--doctors use');
    getEl('.header-modal__services-list--doctors').classList.toggle(
      'visually-hidden'
    );
  }
  if (mark === 'servicess-desktop') {
    console.log(mark);
    toggleChevron('.header-modal__icon-desktop-servicess use');
    getEl('.header-modal__services-list--servicess').classList.toggle(
      'visually-hidden'
    );
  }
  if (mark === 'doctors-desktop') {
    console.log(mark);
    toggleChevron('.header-modal__icon-desktop-doctors use');
    getEl('.header-modal__services-list--doctors').classList.toggle(
      'visually-hidden'
    );
  }
};

// header-modal__services-list

const toggleChevron = selector => {
  const servicess = getEl(selector);

  const currentHref = servicess.getAttribute('xlink:href');

  if (currentHref === `${sprite}#chevronBot`) {
    servicess.setAttribute('xlink:href', `${sprite}#chevronUp`);
  } else if (currentHref === `${sprite}#chevronUp`) {
    servicess.setAttribute('xlink:href', `${sprite}#chevronBot`);
  } else {
    servicess.setAttribute('xlink:href', `${sprite}#chevronUp`);
  }
};

const toggleSvg = () => {
  const hamburgerIcon = document.querySelector('.header__hamburger use');
  const currentHref = hamburgerIcon.getAttribute('xlink:href');

  if (currentHref === `${sprite}#hamburger`) {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#cross`);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else if (currentHref === `${sprite}#cross`) {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#hamburger`);
    const top = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  } else {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#cross`);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }
};

getEl('.header__hamburger').addEventListener('click', () =>
  toggleClass('modal')
);

getEl('#button-servicess').addEventListener('click', () =>
  toggleClass('servicess')
);

getEl('#button-doctors').addEventListener('click', () =>
  toggleClass('doctors')
);

getEl('#button-servicess-desktop').addEventListener('mouseover', () =>
  toggleModalDesktop('servicess-desktop', event)
);

getEl('#button-servicess-desktop').addEventListener('mouseout', () =>
  toggleModalDesktop('servicess-desktop', event)
);

getEl('#button-doctors-desktop').addEventListener('mouseover', () =>
  toggleModalDesktop('doctors-desktop', event)
);
getEl('#button-doctors-desktop').addEventListener('mouseout', () =>
  toggleModalDesktop('doctors-desktop', event)
);

// getEl('#button-servicess-desktop').addEventListener('mouseover', () =>
//   toggleModalDesktop('servicess-desktop', event)
// );

// getEl('#button-doctors-desktop').addEventListener('mouseover', () =>
//   toggleModalDesktop('doctors-desktop', event)
// );

// const toggleModalDesktop = (mark, event) => {
//   console.log(event.target);
//   if (isModalHidden('.header-modal.container')) {
//     getEl('.header-modal').classList.toggle('visually-hidden');
//     console.log('1');
//   }

//   if (!isModalHidden('.header-modal__services-list--servicess')) {
//     getEl('.header-modal__services-list--servicess').classList.add(
//       'visually-hidden'
//     );
//     console.dir(event.target.innerText);
//     toggleChevron('.header-modal__icon-desktop-servicess use');
//     console.log('5');
//     return;
//   }

//   if (!isModalHidden('.header-modal__services-list--doctors')) {
//     getEl('.header-modal__services-list--doctors').classList.add(
//       'visually-hidden'
//     );
//     toggleChevron('.header-modal__icon-desktop-doctors use');
//     console.dir(event.target.innerText);
//     console.log('6');
//     return;
//   }
//   if (isModalHidden('.header-modal__services-list--doctors')) {
//     toggleClass(mark);
//     console.log('7');
//     return;
//   }
// };
