const getEl = el => document.querySelector(el);

import sprite from './images/sprite.svg';

const isModalHidden = () => {
  const modal = document.querySelector('.header-modal.container');
  if (!modal) return false; // Если элемент не найден, считаем его видимым
  return modal.classList.contains('visually-hidden');
};

let latButton = '';

const toggleModalDesktopService = (event, mark) => {
  // console.dir(event.target.innerText === 'Лікарі');
  if (latButton === '') {
    toggleClass(mark);
    toggleClass('modal');
    latButton = event.target.innerText;
    console.log('latButton === ""');
    return;
  }

  if (latButton !== 'Послуги') {
    toggleClass('servicess-desktop');
    toggleClass('doctors-desktop');
    console.log("latButton !== 'Послуги'");
    latButton = event.target.innerText;
    return;
  }

  if (isModalHidden()) {
    toggleClass(mark);
    toggleClass('modal');

    return;

    // getEl('.header-modal').classList.add('visually-hidden');
  }
  if (!isModalHidden()) {
    getEl('.header-modal').classList.add('visually-hidden');
    toggleClass(mark);
    return;
    // toggleClass('modal');
    // getEl('.header-modal').classList.add('visually-hidden');
  }
  const isHiden = isModalHidden();
  console.log(isHiden);
};

const toggleModalDesktopDoctor = (event, mark) => {
  // console.dir(event.target.innerText === 'Лікарі');
  if (latButton === '') {
    toggleClass(mark);
    toggleClass('modal');
    console.log('latButton === ""');
    latButton = event.target.innerText;
    return;
  }

  if (latButton !== 'Лікарі') {
    toggleClass('servicess-desktop');
    toggleClass('doctors-desktop');
    console.log("latButton !== 'Лікарі'");
    latButton = event.target.innerText;
    return;
  }

  if (isModalHidden()) {
    toggleClass(mark);
    toggleClass('modal');
    return;
    // getEl('.header-modal').classList.add('visually-hidden');
  }

  if (!isModalHidden()) {
    getEl('.header-modal').classList.add('visually-hidden');
    toggleClass(mark);
    return;
    // toggleClass('modal');
    // getEl('.header-modal').classList.add('visually-hidden');
  }

  // if (event.target)

  const isHiden = isModalHidden();
  console.log(isHiden);
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
  } else if (currentHref === `${sprite}#cross`) {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#hamburger`);
  } else {
    hamburgerIcon.setAttribute('xlink:href', `${sprite}#cross`);
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

getEl('#button-servicess-desktop').addEventListener('click', () =>
  toggleModalDesktopService(event, 'servicess-desktop')
);

getEl('#button-doctors-desktop').addEventListener('click', () =>
  toggleModalDesktopDoctor(event, 'doctors-desktop')
);
