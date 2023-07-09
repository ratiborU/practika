import ArticleView from '../view/article-view.js';
import ArticlesListView from '../view/articles-list-view.js';
import ArticleModel from '../model/article-model.js';
import ThemesListView from '../view/themes-list-view.js';
import ThemeView from '../view/theme-view.js';
import ThemeModel from '../model/theme-model.js';
import { render } from '../render.js';


export default class BoardPresenter {
  constructor (mainContainer) {
    this.articlesList = new ArticlesListView();
    this.themesList = new ThemesListView();
    this.mainContainer = mainContainer;
  }

  init (articlesModel, themesModel) {
    this.articlesModel = articlesModel;
    this.themesModel = themesModel;
    this.articles = [...this.articlesModel.getArticles()]; // ???
    console.log(this.articles);
    this.themes = [...this.themesModel.getThemes()]; // ???

    render(this.themesList, this.mainContainer);
    for (const theme of this.themes) {
      render(new ThemeView(theme), this.themesList.getElement());
    }
    render(this.articlesList, this.mainContainer);
    for (const article of this.articles) {
      render(new ArticleView(article), this.articlesList.getElement());
    }

    // render(this.eventsList, this.tripContainer);
    // render(new EditPointView(this.points[0], this.destinations, this.offers), this.eventsList.getElement());

    // for (const point of this.points) {
    //   render(new PointView(point, this.destinations, this.offers), this.eventsList.getElement());
    // }
  }
}