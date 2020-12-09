/*
  * DOM object - Box-menu
*/
const aboutContainer = document.querySelector('.box-menu');

/*
  * Filters articles array for "about" articles
*/
const aboutArticles = articles.filter(article => article.category == "about");

/*
  * Append articles to the DOM
*/
aboutArticles.forEach(article => {
    aboutContainer.innerHTML += `
            <a href="artikel.html?id=${article.id}">
                <div class="box-menu_box border-about rounded">
                    <span class="about-link">${article.title}</span>
                </div>
            </a>
    `;
});
