/* 
  * DOM object - News section
*/
const serviceContainer = document.querySelector('.service_articles');
const filterBar = document.querySelector('#filterbar');
const filterFeedback = document.querySelector('.feedback');



/* 
  * Filters articles array for "service" articles
*/
const serviceArticles = articles.filter(article => article.category == "service");



/* 
  * Append service articles to the DOM
*/
const createArticles = (articles) => {
  articles.forEach(article => {
    serviceContainer.innerHTML += `
              <article class="article border-service rounded">
                  <button class="expand-btn expandable-heading" id="btn_article-${article.id}" aria-expanded="false"
                      aria-controls="article-${article.id}">
                      ${article.title}
                      <i class="fas fa-plus expand-icon"></i>
                  </button>
                  <div class="article-content" id="${article.id}" aria-hidden="true">
                      <h3 class="article-heading">${article.title}</h3>
                      <div id="article-${article.id}" aria-labelledby="btn_article-${article.id}">${article.text}</div>
                      <button class="print-btn" id="print-service"><i class="fas fa-print"></i>Skriv Ut</button>
                  </div>
              </article>
      `;
  });
}



/*
  * Filter "about" articles with input string
*/
const filterContent = () => {
  filterFeedback.innerHTML = "";

  const filtered = serviceArticles.filter(article => article.title.toLowerCase().includes(filterBar.value.toLowerCase()) || article.text.toLowerCase().includes(filterBar.value.toLowerCase()));

  if (filterBar.value == "") {
    serviceContainer.innerHTML = "";
    createArticles(serviceArticles)
  } else {
    if (filtered.length < 1) {
      filterFeedback.innerHTML = `<p>Inga träffar på "${filterBar.value}"</p>`;
    }
    serviceContainer.innerHTML = "";
    createArticles(filtered);
  }
};



/*
  * Listen for filter bar input
*/
filterBar.addEventListener('input', () => {
  filterContent();
});



/*
  * Load "service" articles on page load
*/
window.addEventListener("load",
  createArticles(serviceArticles)
);
