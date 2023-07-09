import {createElement} from '../render.js';

const createTemplate = () => (
 `<div class="header__menu">
    <div class="header__logo"><p>Практика</p></div>
    <div class="header__search">
      <input type="text" name="header-search" placeholder="поиск...">
    </div>
    <nav class="header__menu">
      <div class="header__menu-item header__menu-item-active"><a class="header__menu-item-link" href="#">статьи</a></div>
      <div class="header__menu-item"><a class="header__menu-item-link" href="#">создать</a></div>
      <div class="header__menu-item"><a class="header__menu-item-link" href="#">профиль</a></div>
    </nav>
  </div>`
);


export default class MenuView {
  getTemplate() {
    return createTemplate;
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