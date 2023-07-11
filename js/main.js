import MenuView from './view/menu-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import ThemeModel from './model/theme-model.js';

import { getAnswers, getQuestions, getThemes } from './mock/themes.js';
import { getApiAnswers, getApiQuestions, getApiThemes } from './api/themes-api.js'
import { render } from './render.js';


const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const boardPresenter = new BoardPresenter(mainElement.querySelector('.main__continer'))


// заменить на getApi()
const themes = getThemes();
const questions = getQuestions();
const answers = getAnswers();

const themeModel = new ThemeModel();
const menu = new MenuView();

render(menu, headerElement.querySelector('.header__container'));


themeModel.init(themes, questions, answers);
menu.init(boardPresenter.switchToOtherPage, boardPresenter.setSearchQuestions());
boardPresenter.init(themeModel);
