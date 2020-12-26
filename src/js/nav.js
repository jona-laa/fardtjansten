// Hide header & to top on scroll
window.onscroll = () => {
  hideMenu();
};



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
});
