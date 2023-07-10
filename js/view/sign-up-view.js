import { createElement } from '../render.js';


const createTemplate = () => {
  return (
   `<div class="main__sign-up sign-up">
      <div class="sign-up__title">Регистрация</div>
      <div class="sign-up__first-name sign-up__input-block">
        <p class="sign-up__first-name-text sign-up__text">Имя</p>
        <input class="sign-up__first-name-input sign-up__input" type="text" name="sign-up__first-name-input" placeholder="введите ваше имя...">
      </div>
      <div class="sign-up__second-name sign-up__input-block">
        <p class="sign-up__second-name-text sign-up__text">Фамилия</p>
        <input class="sign-up__second-name-input sign-up__input" type="text" name="sign-up__second-name-input" placeholder="введите вашу фамилию...">
      </div>
      <div class="sign-up__email sign-up__input-block">
        <p class="sign-up__email-text sign-up__text">Электронная почта</p>
        <input class="sign-up__email-input sign-up__input" type="email" name="sign-up__email-input" placeholder="введите вашу почту...">
      </div>
      <div class="sign-up__password sign-up__input-block">
        <p class="sign-up__password-text sign-up__text">Пароль</p>
        <input class="sign-up__password-input sign-up__input" type="password" name="sign-up__password-input" placeholder="введите пароль...">
        <input class="sign-up__password-input sign-up__password-input_confirmation sign-up__input" type="password" name="sign-up__password-input_confirmation" placeholder="подтвердите пароль...">
      </div>

      <button class="sign-up__button" type="submit" name="sign-up__button">Создать аккаунт</button>
      <div class="sign-up__hint">
        <div class="sign-up__hint-text">уже есть аккаунт?</div>
        <div class="sign-up__hint-link"><a href="#">нажми сюда</a></div>
      </div>
    </div>`
  );
};


export default class SignUpView {
  init(callback) {
    this.getElement().querySelector('.sign-up__hint-link').addEventListener('click', callback);
  }

  getTemplate () {
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