const getEl = el => document.querySelector(el);

import sprite from './images/sprite.svg';

const toggleClass = mark => {
  console.log(mark);
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
};

// header-modal__services-list

const toggleChevron = selector => {
  const servicess = getEl(selector);

  const currentHref = servicess.getAttribute('xlink:href');

  if (currentHref === `${sprite}#chevronUp`) {
    servicess.setAttribute('xlink:href', `${sprite}#chevronBot`);
  } else if (currentHref === `${sprite}#chevronBot`) {
    servicess.setAttribute('xlink:href', `${sprite}#chevronUp`);
  } else {
    servicess.setAttribute('xlink:href', `${sprite}#chevronBot`);
  }
};

const toggleSvg = () => {
  const hamburgerIcon = document.querySelector('.header__hamburger use');
  const currentHref = hamburgerIcon.getAttribute('xlink:href');

  if (currentHref === `${sprite}#hamburger`) {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#cross`);
  } else if (currentHref === `${sprite}#cross`) {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#hamburger`);
  } else {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#cross`);
  }
};

getEl('.header__hamburger').addEventListener('click', () =>
  toggleClass('modal')
);

getEl('.button--header-modal').addEventListener('click', () =>
  toggleClass('servicess')
);

getEl('#button-doctors').addEventListener('click', () =>
  toggleClass('doctors')
);
