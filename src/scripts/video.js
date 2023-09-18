const chernovciWrapper = document.querySelector('.video__wrapper-chernovci');
const bukovelWrapper = document.querySelector('.video__wrapper-bukovel');
const descriptionChernovci = document.querySelector('#desk-cher');
const descriptionBukovel = document.querySelector('#desk-buk');
const bukovelVideo = document.querySelector('#video-bukovel');
const chernovciVideo = document.querySelector('#video-chernovci');
const chernovciBackdrop = document.querySelector('#backdropp-chernovci');
const bukovelBackdrop = document.querySelector('#backdropp-bukovel');
const bukovelWall = document.querySelector('#wall-bukovel');
const chernovciWall = document.querySelector('#wall-chernovci');
const bukovelWallDesk = document.querySelector('#wall-bukovel-desktop');
const chernovciWallDesk = document.querySelector('#wall-chernovci-desktop');

// window.addEventListener('click', () => {
//   bukovelVideo.play();
// });

// chernovciVideo.pause();

let minWidth = '240px';
let minHeight = '150px';
let maxWidth = '336px';
let maxHeight = '210px';
let borderRadiusMin = '20px';
let borderRadiusMax = '24px';

const sizeZoom = (
  minimizeSelector,
  maximizeSelector,
  decriptionShow,
  decriptionHide,
  videoToStop,
  videoToPlay,
  backdropToBlur,
  backdropToUnBlur
) => {
  minimizeSelector.style.width = minWidth;
  minimizeSelector.style.height = minHeight;
  minimizeSelector.style.borderRadius = borderRadiusMin;
  maximizeSelector.style.width = maxWidth;
  maximizeSelector.style.height = maxHeight;
  maximizeSelector.style.borderRadius = borderRadiusMax;
  decriptionShow.style.width = '0';
  decriptionShow.style.height = '0';
  decriptionShow.style.opacity = '0';
  decriptionShow.style.opacity = '0';
  decriptionHide.style.width = '266px';
  decriptionHide.style.height = 'auto';
  decriptionHide.style.opacity = '1';
  decriptionHide.style.opacity = '1';
  videoToStop.pause();
  videoToPlay.play();
  backdropToBlur.style.backdropFilter = 'blur(5px)';
  backdropToUnBlur.style.backdropFilter = 'blur(0px)';
};

const sizeZoomOut = (
  minimizeSelector,
  maximizeSelector,
  decriptionShow,
  decriptionHide,
  videoToStop,
  videoToPlay,
  backdropToBlur,
  backdropToUnBlur
) => {
  minimizeSelector.style.width = maxWidth;
  minimizeSelector.style.height = maxHeight;
  minimizeSelector.style.borderRadius = borderRadiusMax;
  maximizeSelector.style.width = minWidth;
  maximizeSelector.style.height = minHeight;
  maximizeSelector.style.borderRadius = borderRadiusMin;
  decriptionShow.style.width = '266px';
  decriptionShow.style.height = 'auto';
  decriptionShow.style.opacity = '1';
  decriptionShow.style.opacity = '1';
  decriptionHide.style.width = '0';
  decriptionHide.style.height = '0';
  decriptionHide.style.opacity = '0';
  decriptionHide.style.opacity = '0';
  videoToStop.play();
  videoToPlay.pause();
  backdropToBlur.style.backdropFilter = 'blur(0px)';
  backdropToUnBlur.style.backdropFilter = 'blur(5px)';
};

function handleViewportChange() {
  // Получите текущий размер вьюпорта
  const viewportWidth = window.innerWidth;

  // Проверьте размер вьюпорта и выполните действия в зависимости от него
  if (viewportWidth >= 1440) {
    // Действия для больших экранов (ширина >= 1200px)
    minWidth = '416px';
    minHeight = '277px';
    maxWidth = '911px';
    maxHeight = '606px';
    borderRadiusMin = '36px';
    borderRadiusMax = '72px';
    sizeZoomOut(
      bukovelWrapper,
      chernovciWrapper,
      descriptionBukovel,
      descriptionChernovci,
      bukovelVideo,
      chernovciVideo,
      bukovelBackdrop,
      chernovciBackdrop
    );

    // Выполните здесь ваш код для больших экранов
  } else if (viewportWidth >= 834) {
    // Действия для средних экранов (ширина >= 768px)
    minWidth = '527px';
    minHeight = '329px';
    maxWidth = '738px';
    maxHeight = '461px';
    borderRadiusMin = '36px';
    borderRadiusMax = '64px';
    sizeZoomOut(
      bukovelWrapper,
      chernovciWrapper,
      descriptionBukovel,
      descriptionChernovci,
      bukovelVideo,
      chernovciVideo,
      bukovelBackdrop,
      chernovciBackdrop
    );

    // Выполните здесь ваш код для средних экранов
  } else if (viewportWidth >= 360) {
    minWidth = '240px';
    minHeight = '150px';
    maxWidth = '336px';
    maxHeight = '210px';
    borderRadiusMin = '20px';
    borderRadiusMax = '24px';
    sizeZoomOut(
      bukovelWrapper,
      chernovciWrapper,
      descriptionBukovel,
      descriptionChernovci,
      bukovelVideo,
      chernovciVideo,
      bukovelBackdrop,
      chernovciBackdrop
    );

    // Выполните здесь ваш код для маленьких экранов
  } else {
    minWidth = '71.5%';
    minHeight = '62.5%';
    maxWidth = '100%';
    maxHeight = '62.5%';
    borderRadiusMin = '20px';
    borderRadiusMax = '24px';
    sizeZoomOut(
      bukovelWrapper,
      chernovciWrapper,
      descriptionBukovel,
      descriptionChernovci,
      bukovelVideo,
      chernovciVideo,
      bukovelBackdrop,
      chernovciBackdrop
    );

    // Выполните здесь ваш код для маленьких экранов
  }
}

// Вызовите функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', handleViewportChange);

// Добавьте обработчик события resize для проверки изменения размера вьюпорта
window.addEventListener('resize', handleViewportChange);

chernovciWrapper.addEventListener('mouseover', () =>
  sizeZoom(
    bukovelWrapper,
    chernovciWrapper,
    descriptionBukovel,
    descriptionChernovci,
    bukovelVideo,
    chernovciVideo,
    bukovelBackdrop,
    chernovciBackdrop
  )
);

chernovciWrapper.addEventListener('mouseout', () =>
  sizeZoomOut(
    bukovelWrapper,
    chernovciWrapper,
    descriptionBukovel,
    descriptionChernovci,
    bukovelVideo,
    chernovciVideo,
    bukovelBackdrop,
    chernovciBackdrop
  )
);

const showVideBukovel = event => {
  event.target.style.display = 'none';
  chernovciWall.style.display = 'block';
  chernovciWall.style.backdropFilter = 'blur(5px)';
  bukovelWall.style.backdropFilter = 'blur(0px)';
};

const showVidoeChernovci = event => {
  event.target.style.display = 'none';
  bukovelWall.style.display = 'block';
  bukovelWall.style.backdropFilter = 'blur(5px)';
  chernovciWall.style.backdropFilter = 'blur(0px)';
};

const hideDeskWallCher = () => {
  chernovciWallDesk.style.display = 'none';
};
const hideDeskWallBuk = () => {
  bukovelWallDesk.style.display = 'none';
};

bukovelWall.addEventListener('click', showVideBukovel);
chernovciWall.addEventListener('click', showVidoeChernovci);
bukovelWallDesk.addEventListener('click', hideDeskWallBuk);
chernovciWallDesk.addEventListener('click', hideDeskWallCher);
