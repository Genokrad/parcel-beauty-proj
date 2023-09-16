const slider = $('.slider');

slider.slick({
  prevArrow: '.custom-prev-button', // Селектор кастомной кнопки "Previous"
  nextArrow: '.custom-next-button', // Селектор кастомной кнопки "Next"
});

$('.slider_content').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  prevArrow: $('.custom-prev-button'),
  nextArrow: $('.custom-next-button'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// slider.on('click', 'div[data-slide-index]', function () {
//   const slideIndex = $(this).data('slide-index');
//   slider.slick('slickGoTo', parseInt(slideIndex)); // Преобразуем в число
// });

const openModal = event => {
  toggleClass(event);
};

const getEl = el => document.querySelector(el);
const getElAll = el => document.querySelectorAll(el);
const indicatorWrapper = getEl('.indicators');

let arrLength = null;
let targetIndex = null;

const getCurrentIndex = () => {
  const allCards = getElAll('.slick-slide');

  const slides = Array.from(allCards).filter(
    element =>
      !element.classList.contains('slick-cloned') &&
      !element.classList.contains('slider__slide')
  );
  arrLength = slides.length;

  const arrayWithActive = Array.from(slides).map((item, index) => {
    Array.from(item.classList).find(subItem => {
      if (subItem === 'slick-current') {
        targetIndex = index;
      }
    });
  });

  return { targetIndex, arrLength };
};

const AllIndicator = getElAll('.indicator');
AllIndicator[0].style.opacity = 1;

const backdrop = getEl('.modal-slider');

const toggleClass = event => {
  if (
    event.target.className == 'custom-next-button slick-arrow' ||
    event.target.className == 'custom-prev-button slick-arrow' ||
    event.target.className == 'indicators'
  ) {
    // console.log(getCurrentIndex());

    AllIndicator.forEach(function (element) {
      element.style.opacity = 0.2;
    });
    AllIndicator[getCurrentIndex().targetIndex].style.opacity = 1;
    return;
  }
  // console.dir(event.target.className);
  backdrop.classList.toggle('visually-hidden');
};

const diplomas = getElAll('.diplomas__list');

diplomas.forEach(item => {
  item.addEventListener('click', openModal);
});

backdrop.addEventListener('click', toggleClass);
