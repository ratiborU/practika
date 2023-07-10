import MenuView from './view/menu-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import ArticleModel from './model/article-model.js';
import ThemeModel from './model/theme-model.js';
import { getArticles } from './mock/article.js';
import { getThemes } from './mock/themes.js';
import { render } from './render.js';


const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const boardPresenter = new BoardPresenter(mainElement.querySelector('.main__continer'))


const articles = getArticles();
const themes = getThemes();
const articleModel = new ArticleModel();
const themeModel = new ThemeModel();
const menu = new MenuView();

render(menu, headerElement.querySelector('.header__container'));


menu.setListeners(boardPresenter.switchToOtherPage);
themeModel.init(themes);
articleModel.init(articles);
boardPresenter.init(articleModel, themeModel);