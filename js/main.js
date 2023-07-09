import MenuView from './view/menu-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import ArticleModel from './model/article-model.js';
import ThemeModel from './model/theme-model.js';
import { getArticles } from './mock/article.js';
import { getThemes } from './mock/themes.js';
import { render } from './render.js';

// import FiltersView from './view/filters-view.js';
// import MainPresenter from './presenter/main-presenter.js';
// import MenuView from './view/menu-view.js';
// import { render } from './render.js';
// import PointModel from './model/point-model.js';
// import { getPoints, getDestinations, getOffersByType } from './mock/point.js';


const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');


const boardPresenter = new BoardPresenter(mainElement.querySelector('.main__continer'))


const articles = getArticles();
const themes = getThemes();
const articleModel = new ArticleModel();
const themeModel = new ThemeModel();

render(new MenuView(), headerElement.querySelector('.header__container'));


themeModel.init(themes);
articleModel.init(articles);
boardPresenter.init(articleModel, themeModel);


// const siteHeaderElement = document.querySelector('.trip-main');
// const siteMainElement = document.querySelector('.page-main');
// const tripPresenter = new MainPresenter(siteMainElement.querySelector('.trip-events'));

// const points = getPoints();
// const destinations = getDestinations();
// const offersByType = getOffersByType();
// const pointsModel = new PointModel();

// render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));
// render(new MenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

// pointsModel.init(points, destinations, offersByType);
// tripPresenter.init(pointsModel);