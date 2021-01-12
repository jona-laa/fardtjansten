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
                <div class="print"><span class="updated">Uppdaterad ${article.pub_date}</span><button class="print-btn" onclick="window.print()"><i class="fas fa-print"></i>Skriv Ut</button></div>
            </article>
            
            <div class="go-back go-back-article">
                <a href="#" onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
            </div>
    `;
});



// Create breadcrumbs based on article category
switch (aboutArticles[0].category) {
  case 'about':
    breadcrumbs.innerHTML += ` > <a href="omfardtjanst.php">Om Färdtjänst</a> > ${aboutArticles[0].title}`;
    break;

  case 'service':
    breadcrumbs.innerHTML += ` > <a href="kundtjanst.php">Kundtjänst</a> > ${aboutArticles[0].title}`;
    break;

  default:
    breadcrumbs.innerHTML += ` > ${aboutArticles[0].title}`;
}
