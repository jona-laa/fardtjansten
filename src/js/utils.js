// DOM element selectors
// const header = document.querySelector('.header-content');
const header = document.getElementsByTagName('header')[0];
const toTopBtn = document.querySelector('#goTop');
const mainMenu = document.querySelector('#menu-main-menu');
const searchBar = document.querySelector('#searchbar');
const expandBtn = document.querySelectorAll('.expand-btn');
const closeSearch = document.querySelector('#search-icon--close');



/* Change display attribute of element
 * @param   {DOM element}   element     Target DOM element
 * @param   {string}        value       Display attribute value, e.g. 'none', 'block', etc.
*/
const elementDisplay = (element, value) => {
  element.style.display = value;
  value == 'none' ? toggleAria(element, 'aria-hidden', 'true') : toggleAria(element, 'aria-hidden', 'false');
};



/* Toggle aria attribute of element
 * @param   {DOM element}   element       Target DOM element
 * @param   {string}        aria          Aria attribute, e.g. 'aria-hidden'
 * @param   {string}        ariaValue     Aria attribute value, e.g. 'true'
*/
const toggleAria = (element, aria, ariaValue) => {
  element.style.display == 'none' ? element.setAttribute(aria, ariaValue) : element.setAttribute(aria, ariaValue);
};



/* Toggle element from top or bottom
 * @param   {DOM element}   element     Target DOM element to toggle
 * @param   {string}        position    'top' or 'bottom'
 * @param   {string}        offset      Offset in e.g. pixels, rem, em, etc.
*/
const elementToggle = (element, position, offset) => position === 'top' ? element.style.top = offset : element.style.bottom = offset;



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



/* 
  * Confirm deletions
   * @param   {string}   id       Booking ID
   * @param   {string}   type     'reoccurring' or 'regular'
*/
const confirmIt = (id, type) => {
  window.confirm(`Är du säker på att du vill avboka resan?`) ? deleteBooking(id, type) : null;
};



/*
  * Delete bookings
  * @param   {string}   id       Booking ID
  * @param   {string}   type     'reoccurring' or 'regular'
*/
const deleteBooking = (id, type) => {
  const updatedBookings = existingBookings.filter(booking => booking.id != id);
  type == 'reoccurring' ? localStorage.reoccurring = JSON.stringify(updatedBookings) : localStorage.booked = JSON.stringify(updatedBookings);
  window.location.reload();
};



/*
  * Initiates update process by sending user to right form with ID of booking
  * @param   {string}   id       Booking ID
  * @param   {string}   type     'reoccurring' or 'regular'
*/
const initUpdate = (id, type) => {
  type == 'reoccurring' ? window.location.assign(`bokaaterkommande.html?update=${id}`) : window.location.assign(`bokaresa.html?update=${id}`);
};



/*
  * "Routes" function of bookBtn
*/
const createOrUpdate = (e) => {
  e.preventDefault();

  if (validInput()) {
    update ? updateBooking() : createBooking();
  }
}



/*
  * Returs time YYYY-MM-DD
*/
const getToday = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};



/* 
  * Used to print specific elements
*/
const printThis = () => {
  const printContent = event.target.parentElement.parentElement.innerHTML;
  const origiginalContent = window.document.body.innerHTML;
  window.document.body.innerHTML = printContent;
  window.print();
  window.document.body.innerHTML = origiginalContent;
};



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
      btn.setAttribute('aria-expanded', 'false');
      elementDisplay(articleText, 'none');

      btn.lastElementChild.classList.remove('fa-minus');
      btn.lastElementChild.classList.add('fa-plus');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      elementDisplay(articleText, 'block');

      btn.lastElementChild.classList.remove('fa-plus');
      btn.lastElementChild.classList.add('fa-minus');
    }
  })
});



// Make searchbar listen for enter -> Load search results based on input value
searchBar.addEventListener('keyup', (event) => {
  if (searchBar.value != "" && event.keyCode === 13) {
    window.location.assign(`http://localhost:3000/pages/sokresultat.html?search=${searchBar.value}`)
  }
});



// Hide search bar when not in focus
searchBar.addEventListener('focusout', () => {
  elementDisplay(searchBar, 'none');
  elementDisplay(closeSearch, 'none');
})