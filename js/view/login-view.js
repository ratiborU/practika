import { createElement } from '../render.js';


const createTemplate = () => (
   `<div class="main__login login">
      <div class="login__title">Вход</div>
      <div class="login__email login__input-block">
        <p class="login__email-text login__text">Электронная почта</p>
        <input class="login__email-input login__input" type="email" name="login__email-input" placeholder="введите вашу почту...">
      </div>
      <div class="login__password login__input-block">
        <p class="login__password-text login__text">Пароль</p>
        <input class="login__password-input login__input" type="password" name="login__password-input" placeholder="введите пароль...">
      </div>

      <button class="login__button" type="submit" name="login__button">Войти</button>
      <div class="login__hint">
        <div class="login__hint-text">нет аккаунта?</div>
        <div class="login__hint-link"><a href="#">нажми сюда</a></div>
      </div>
    </div>`
  );


export default class LoginView {
  init(callback) {
    this.getElement().querySelector('.login__hint-link').addEventListener('click', callback);
  }

  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}