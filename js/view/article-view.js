import { createElement } from '../render.js';


const createTemplate = (article) => {
  return (
    `<li class="main__article article">
      <div class="article__name">
        <p class="aticle__name-text">${article.title}</p>
      </div>
      <div class="article__text">
        ${article.text}
      </div>
      <div class="article__date">${article.date}</div>
    </li>`
  );
};


export default class ArticleView {
  constructor(article) {
    this.article = article
  }

  getTemplate () {
    return createTemplate(this.article);
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