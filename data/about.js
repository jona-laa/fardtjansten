/*
  * DOM object - Box-menu
*/
const aboutContainer = document.querySelector('.box-menu');
const filterBar = document.querySelector('#filterbar');
const filterFeedback = document.querySelector('.feedback');



/*
  * Filters articles array for "about" articles
*/
const aboutArticles = articles.filter(article => article.category == "about");



/*
  * Append articles to the DOM
  * @param    {array}     articles    a bunch of "abuot" articles
*/
const createArticles = (articles) => {
  articles.forEach(article => {
    aboutContainer.innerHTML += `
              <a href="artikel.php?id=${article.id}">
                  <div class="box-menu_box border-about rounded">
                      <span class="about-link">${article.title}</span>
                  </div>
              </a>
      `;
  });
};



/*
  * Listen for filter bar input
*/
filterBar.addEventListener('input', () => {
  filterContent();
});



/*
  * Filter "about" articles with input string
*/
const filterContent = () => {
  filterFeedback.innerHTML = "";

  const filtered = aboutArticles.filter(article => article.title.toLowerCase().includes(filterBar.value.toLowerCase()) || article.text.toLowerCase().includes(filterBar.value.toLowerCase()));

  if (filterBar.value == "") {
    aboutContainer.innerHTML = "";
    createArticles(aboutArticles)
  } else {
    if (filtered.length < 1) {
      filterFeedback.innerHTML = `<p>Inga träffar på "${filterBar.value}"</p>`;
    }
    aboutContainer.innerHTML = "";
    createArticles(filtered);
  }
};



/*
  * Load "about" articles on page load
*/
window.addEventListener("load",
  createArticles(aboutArticles)
);
