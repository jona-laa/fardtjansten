// DOM element selectors
const header = document.querySelector('.header-content');
const toTopBtn = document.querySelector('#goTop');
const mainMenu = document.querySelector('#menu-main-menu');
const searchBar = document.querySelector('#searchbar');
const expandBtn = document.querySelectorAll('.expand-btn');
const bookReturn = document.querySelector('#book-return');



/* Toggle element from top or bottom
 * @param   {DOM element}   element     Target DOM element to toggle
 * @param   {string}        position    'top' or 'bottom'
 * @param   {string}        offset      Offset in e.g. pixels, rem, em, etc.
*/
const elementToggle = (element, position, offset) => position === 'top' ? element.style.top = offset : element.style.bottom = offset;



/* Change display attribute of element
 * @param   {DOM element}   element     Target DOM element
 * @param   {string}        value       Display attribute value, e.g. 'none', 'block', etc.
*/
const elementDisplay = (element, value) => element.style.display = value;



/* Apply focus on element
 * @param   {DOM element}   element     Target DOM element
*/
const elementFocus = (element) => element.focus();



// Hide "to top button"
const hideToTopBtn = () => window.pageYOffset > window.screen.height ? elementToggle(toTopBtn, 'bottom', '20px') : elementToggle(toTopBtn, 'bottom', '-50px');



/* Changes background color of elements depending on window.pageYOffset - Used onscroll
 * @param   {number}    offset     Negative offset on window.screen.height
 * @param   {string}    col1       Color if scrolled > (screen height - offset)
 * @param   {string}    col2       Color if scrolled < (screen height - offset)
 * @param   {DOM Eleme} elements   Element/elements to alter
*/
const alterBgColor = (offset, col1, col2, ...elements) => elements.forEach(element => window.pageYOffset > window.screen.height - offset ? element.style.background = col1 : element.style.background = col2);



/* If iOs device or no
  * @returns {boolean}
*/
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



//Smooth scrolling
$('#menu-main-menu a, .btn-top, .arrow-link').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top,
    },
      800
    );
  }
});



// Add click handler on article expand buttons
expandBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const articleText = btn.nextElementSibling;

    if (articleText.style.display === "block") {
      articleText.style.display = "none";
      btn.setAttribute('aria-expanded', 'false');

      btn.lastElementChild.classList.remove('fa-minus');
      btn.lastElementChild.classList.add('fa-plus');
    } else {
      articleText.style.display = "block";
      btn.setAttribute('aria-expanded', 'true');
      btn.lastElementChild.classList.remove('fa-plus');
      btn.lastElementChild.classList.add('fa-minus');
    }
  })
});



// Make searchbar listen for enter -> Load search results based on input value
searchBar.addEventListener('keyup', (event) => {
  console.log('keyup')
  if (event.keyCode === 13) {
    console.log('enter pressed')
    window.location.assign(`http://localhost:3000/pages/sokresultat.html?search=${searchBar.value}`)
  }
});