/* 
  * DOM object - News section
*/
const serviceContainer = document.querySelector('.news');

/* 
  * Filters articles array for "service" articles
*/
const serviceArticles = articles.filter(article => article.category == "service");

/* 
  * Append articles to the DOM
*/
serviceArticles.forEach(article => {
    serviceContainer.innerHTML += `
            <article class="article border-service rounded">
                <button class="expand-btn article-heading" id="btn_article-${article.id}" aria-expanded="false"
                    aria-controls="article-${article.id}">
                    ${article.title}
                    <i class="fas fa-plus expand-icon"></i>
                </button>
                <div class="article-content">
                    <h3 class="article-heading">${article.title}</h3>
                    <div id="article-${article.id}" aria-labelledby="btn_article-${article.id}">${article.text}</div>
                </div>
            </article>
    `;
});
