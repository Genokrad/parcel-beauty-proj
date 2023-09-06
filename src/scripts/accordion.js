const checkboxes = document.querySelectorAll('.accordion__checkbox');
const labels = document.querySelectorAll('.accordion__label');
const lists = document.querySelectorAll('.accordion__list');

import sprite from '../images/sprite.svg';

// Добавляем обработчик события для каждого чекбокса
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', () => {
    // Если чекбокс отмечен, меняем иконку на минус, иначе на плюс
    labels[index]
      .querySelector('use')
      .setAttribute(
        'xlink:href',
        checkbox.checked ? `${sprite}#minus` : `${sprite}#plus`
      );

    // Если чекбокс отмечен, меняем цвет фона на красный, иначе возвращаем исходный цвет
    labels[index].style.backgroundColor = checkbox.checked
      ? '#DC3C3C'
      : 'rgba(52, 56, 69, 0.1)';
    labels[index].style.fill = checkbox.checked ? '#ffffff' : '#1E1E2B';

    // Если чекбокс отмечен, показываем список, в противном случае скрываем его
    if (checkbox.checked) {
      lists[index].style.display = 'grid';
    } else {
      lists[index].style.display = 'none';
    }
  });
});
