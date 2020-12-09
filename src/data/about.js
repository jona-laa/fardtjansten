/*
  * DOM object - Box-menu
*/
const aboutContainer = document.querySelector('.box-menu');
const filterBar = document.querySelector('#filterbar');
const filterFeedback = document.querySelector('.filter-feedback');

/*
  * Filters articles array for "about" articles
*/
const aboutArticles = articles.filter(article => article.category == "about");

/*
  * Append articles to the DOM
*/
const createArticles = (articles) => {
  articles.forEach(article => {
    aboutContainer.innerHTML += `
              <a href="artikel.html?id=${article.id}">
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






// For searchbar
// filterBar.addEventListener('input', () => {
//   filterContent();
// });


// const filterContent = () => {
//   const filtered = articles.filter(article => article.title.toLowerCase().includes(filterBar.value.toLowerCase()));
//   if (filterBar.value == "") {
//     aboutContainer.innerHTML = "";
//     createArticles(aboutArticles)
//   } else {
//     aboutContainer.innerHTML = "";
//     createArticles(filtered);
//   }
// };


// window.addEventListener("load",
//   createArticles(aboutArticles)
// );