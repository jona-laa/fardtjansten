/*
  * DOM object - Box-menu
*/
const articleContainer = document.querySelector('main');
const breadcrumbs = document.querySelector('.breadcrumbs');



/*
  * Query Parameter for article id
*/
const queryParam = location.search.split('=')[1];



/*
  * Filters articles array for "about" articles
*/
const aboutArticles = articles.filter(article => article.id == queryParam);



/*
  * Append articles to the DOM
*/
aboutArticles.forEach(article => {
    articleContainer.innerHTML += `
            <article class="article rounded border-${article.category}">
                <h2 class="article-heading">${article.title}</h2>
                ${article.text}
                <button class="print-btn" onclick="window.print()"><i class="fas fa-print"></i>Skriv Ut</button>
            </article>
            
            <div class="go-back go-back-article">
                <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
            </div>
    `;
});

breadcrumbs.innerHTML += ` > ${aboutArticles[0].title}`;