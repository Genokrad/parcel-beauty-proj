const checkboxContainers = document.querySelectorAll(
  '.accordion__string-wrapper'
);

import sprite from '../images/sprite.svg';

checkboxContainers.forEach((container, index) => {
  container.addEventListener('click', () => {
    const checkbox = container.querySelector('.accordion__checkbox');
    const label = container.querySelector('.accordion__label');
    const list = container.querySelector('.accordion__list');

    checkbox.checked = !checkbox.checked;

    label
      .querySelector('use')
      .setAttribute(
        'xlink:href',
        checkbox.checked ? `${sprite}#minus` : `${sprite}#plus`
      );

    label.style.backgroundColor = checkbox.checked
      ? '#DC3C3C'
      : 'rgba(52, 56, 69, 0.1)';
    label.style.fill = checkbox.checked ? '#ffffff' : '#1E1E2B';

    // Показываем или скрываем список
    list.style.display = checkbox.checked ? 'grid' : 'none';
  });
});
