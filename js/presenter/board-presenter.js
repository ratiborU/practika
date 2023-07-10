import ArticleView from '../view/article-view.js';
import ArticlesListView from '../view/articles-list-view.js';
import ThemesListView from '../view/themes-list-view.js';
import ThemeView from '../view/theme-view.js';
import LoginView from '../view/login-view.js';
import SignUpView from '../view/sign-up-view.js';
import LoadArticleView from '../view/load-article-view.js';
import MainContainerView from '../view/main-container-view.js';
import { render } from '../render.js';


export default class BoardPresenter {
  constructor (mainContainer) {
    this.articlesList = new ArticlesListView();
    this.themesList = new ThemesListView();
    this.mainContainer = new MainContainerView();
    this.loadArticle = new LoadArticleView();
    this.login = new LoginView();
    this.signUp = new SignUpView();
    this.mainWrapper = document.querySelector('.main__wrapper');
  }

  init (articlesModel, themesModel) {
    this.articlesModel = articlesModel;
    this.themesModel = themesModel;
    this.articles = [...this.articlesModel.getArticles()];
    this.themes = [...this.themesModel.getThemes()];


    render(this.mainContainer, this.mainWrapper)
    render(this.themesList, this.mainContainer.getElement());
    let i = 0;
    for (const theme of this.themes) {
      const themeView = new ThemeView(theme);
      render(themeView, this.themesList.getElement());
      themeView.setListener(themeView.setTheme(i++));
    }
    render(this.articlesList, this.mainContainer.getElement());
    for (const article of this.articles) {
      render(new ArticleView(article), this.articlesList.getElement());
    }

    this.login.init(this.switchToSignUpPage);
    this.signUp.init(this.switchToLoginPage);
  }


  switchToOtherPage = (pageNumber) => { // стрелка важна!
    if (pageNumber == 0) {
      this.mainWrapper.innerHTML = '';
      render(this.mainContainer, this.mainWrapper)
    }
    if (pageNumber == 1) {
      this.mainWrapper.innerHTML = '';
      render(this.loadArticle, this.mainWrapper);
    }
    if (pageNumber == 2) {
      this.mainWrapper.innerHTML = '';
      render(this.signUp, this.mainWrapper);
    }
  }

  switchToLoginPage = () => {
    this.mainWrapper.innerHTML = '';
    render(this.login, this.mainWrapper);
  }

  switchToSignUpPage = () => {
    this.mainWrapper.innerHTML = '';
    render(this.signUp, this.mainWrapper);
  }

}