// Hide header & to top on scroll
window.onscroll = () => {
  hideMenu();
};



// Give menu correct aria attributes if mobile menu
window.onload = () => {
  if (window.innerWidth < 960) {
    mainMenu.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-hidden', 'false');
  } else {
    searchBar.setAttribute('aria-hidden', 'false')
  }
}



// Make sure aria attributes are still correct on resize
window.onresize = () => {
  if (window.innerWidth < 960) {
    mainMenu.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-hidden', 'false');
    // searchBar.setAttribute('aria-hidden', 'true')
    elementDisplay(searchBar, 'none')

  } else {
    mainMenu.setAttribute('aria-hidden', 'false');
    mainMenuToggle.setAttribute('aria-hidden', 'true');
    elementDisplay(searchBar, 'block')
  }
}




// Hide Header
let prevScrollpos = window.pageYOffset;

const hideMenu = () => {
  let currentScrollPos = window.pageYOffset;

  if (window.pageYOffset > 100) {
    if (prevScrollpos > currentScrollPos) {
      elementToggle(header, 'top', '0');
      elementDisplay(mainMenu, 'none');
    } else {
      elementToggle(header, 'top', '-115px');
      elementDisplay(mainMenu, 'none');
    }
  }

  prevScrollpos = currentScrollPos;
}


// Toggle mobile menu
$('#main-menu-toggle').click(function () {
  $('.menu').toggle(100);

  if (mainMenu.getAttribute('aria-hidden') == 'false') {
    mainMenu.setAttribute('aria-hidden', 'true');
    mainMenuToggle.setAttribute('aria-expanded', 'false');
  } else {
    mainMenu.setAttribute('aria-hidden', 'false');
    mainMenuToggle.setAttribute('aria-expanded', 'true');
  }
});
