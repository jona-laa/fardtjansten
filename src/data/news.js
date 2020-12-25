/*
  * DOM object - Box-menu
*/
const newsContainer = document.querySelector('.news');



/*
  * Filters articles array for "news" articles
*/
const newsArticles = articles.filter(article => article.category == "news");



/*
  * Append articles to the DOM
*/
newsArticles.forEach(article => {
    newsContainer.innerHTML += `
        <article class="article rounded">
          <button class="expand-btn expandable-heading" id="btn_article-${article.id}" aria-expanded="false" aria-controls="article-${article.id}"><div>
            ${article.status == "important" ? "<i class='fas fa-exclamation-triangle alert-icon'></i>" : null}
            ${article.title}</div>
            <i class="fas fa-plus expand-icon"></i>
          </button>
          <div class="article-content" aria-hidden="true">
            <h3 class="article-heading">${article.title}</h3>
            <div id="article-${article.id}" aria-labelledby="btn_article-${article.id}">${article.text}</div>
            <div class="print"><button class="print-btn" id="print-service" onclick="printThis()"><i class="fas fa-print"></i>Skriv Ut</button></div>
          </div>
        </article>
    `;
});