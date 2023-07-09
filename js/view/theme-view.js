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

  removeElement() {
    this.element = null;
  }
}