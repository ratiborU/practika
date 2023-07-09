export default class ArticleModel {
  constructor() {
    this.articles = [];
  }

  init(articles) {
    this.articles = articles;
  }

  getArticles() {
    return this.articles;
  }
}