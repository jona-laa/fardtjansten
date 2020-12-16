const aboutContainer = document.querySelector('.box-menu');
const pageDescr = document.querySelector('.page-descr');
const feedback = document.querySelector('.feedback');
const pageTitle = document.querySelector('title');



/*
  * Query Parameter
*/
const queryParam = location.search.split('=')[1];



/* 
  * Create string for page description
*/
pageDescr.textContent = `Sökresultat för "${queryParam}"`;
pageTitle.textContent = `Färdtjänsten - Sökresultat: ${queryParam}`;



/*
  * Filters articles array for search query string
*/
const filtered = articles.filter(article => article.title.toLowerCase().includes(queryParam.toLowerCase()) || article.text.toLowerCase().includes(queryParam.toLowerCase()));



/*
  * Append articles to the DOM
*/
filtered.forEach(article => {
    aboutContainer.innerHTML += `
              <a href="artikel.html?id=${article.id}">
                  <div class="box-menu_box border-${article.category} rounded">
                      <span class="about-link">${article.title}</span>
                  </div>
              </a>
      `;
});



// In case of no search results, give user feedback
filtered.length < 1 ? feedback.innerHTML = "<p>Inga träffar</p>" : null;
