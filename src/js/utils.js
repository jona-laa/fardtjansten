// DOM element selectors
const header = document.querySelector('.header-content');
const toTopBtn = document.querySelector('#goTop');
const mainMenu = document.querySelector('#menu-main-menu');
const searchBar = document.querySelector('#searchbar');
const expandBtn = document.querySelectorAll('.expand-btn');
// const bookReturn = document.querySelector('#book-return');



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



/* If iOs device or no
  * @returns {boolean}
*/
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



/* 
  * Confirm deletions
*/
const confirmIt = (id, type) => {
  console.log(type);
  window.confirm(`Är du säker på att du vill avboka resan?`) ? deleteBooking(id, type) : null;
};



/*
  * Delete bookings
*/
const deleteBooking = (id, type) => {
  const updatedBookings = existingBookings.filter(booking => booking.id != id);
  type == 'reoccurring' ? localStorage.reoccurring = JSON.stringify(updatedBookings) : localStorage.booked = JSON.stringify(updatedBookings);
  window.location.reload();
};



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
      articleText.setAttribute('aria-hidden', 'true');

      btn.lastElementChild.classList.remove('fa-minus');
      btn.lastElementChild.classList.add('fa-plus');
    } else {
      articleText.style.display = "block";
      btn.setAttribute('aria-expanded', 'true');
      articleText.setAttribute('aria-hidden', 'false');

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