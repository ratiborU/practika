import {createElement} from '../render.js';

const createTemplate = (themeName) => (
  `<li class="main__themes-item">
    <a class="main__themes-item-link" href="#">${themeName}</a>
  </li>`
);


export default class ThemeView {
  constructor(themeName) {
    this.themeName = themeName
  }

  getTemplate() {
    return createTemplate(this.themeName);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  setListener(callBack) {
    this.element.addEventListener('click', callBack) // не очень хорошо
  }

  setTheme(themeNumber) {
    return () => {
      const themeElements = document.querySelectorAll('.main__themes-item');
      for (const themeElement of themeElements) {
        themeElement.classList.remove('main__themes-item-active');
      }
      themeElements[themeNumber].classList.add('main__themes-item-active');
    };
  }

  removeElement() {
    this.element = null;
  }
}