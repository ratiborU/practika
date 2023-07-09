const ARTICLES_COUNT = 3;

const loremText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis assumenda suscipit eveniet error dolore? Eius neque dolore officiis, explicabo quam sed, porro, enim minus necessitatibus obcaecati sequi perferendis aut accusamus.";
const articleTitle = "Заголовок статьи";
const articleTheme = "brs";
const articleAuthor = "Иван Иванов";
const articleDate = "03.07.2023";


const getArticle = () => ({
  title: articleTitle,
  theme: articleTheme,
  text: loremText,
  author: articleAuthor,
  date: articleDate
});


const getArticles = () => Array.from({ length: ARTICLES_COUNT }).map(() => getArticle());


export { getArticles };