
// const getToday = () => {
//   const today = new Date();
//   const dd = String(today.getDate()).padStart(2, '0');
//   const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   const yyyy = today.getFullYear();

//   return `${yyyy}-${mm}-${dd}`;
// };

/*
  * DOM elements
*/
const travelFrom = document.querySelector('#travel-from');
const travelTo = document.querySelector('#travel-to');
const travelDate = document.querySelector('#travel-date');
travelDate.min = `${getToday()}`;
const travelTime = document.querySelector('#travel-time');
const travelCompanions = document.querySelector('#travel-companions');
const travelAccompaniers = document.querySelector('#travel-accompaniers');
const travelAid = document.querySelector('#travel-aid');
const travelMessage = document.querySelector('#travel-message');
const returnDate = document.querySelector('#return-date');
const returnTime = document.querySelector('#return-time');
const bookBtn = document.querySelector('#book-btn');
const feedback = document.querySelector('.feedback');
const returnInput = document.querySelector('.return-input');
const titleBanner = document.querySelector('.title-banner');

let update = false;



/*
  * Used if form is to be used for updating certain ID
*/
const queryParam = location.search.split('=')[1];



/*
  * Handles travel booking 
*/
const createBooking = () => {
  let existingBookings = JSON.parse(localStorage.getItem("booked"));
  if (existingBookings == null) {
    existingBookings = [];
  }

  const newBooking = {
    id: Math.floor(Math.random() * 1e7),
    from: travelFrom.value,
    to: travelTo.value,
    date: travelDate.value,
    time: travelTime.value,
    companions: travelCompanions.value,
    accompaniers: travelAccompaniers.value,
    aid: travelAid.value,
    message: travelMessage.value
  }

  if (returnIsChecked) {
    existingBookings.push(getReturnObject());
  }

  existingBookings.push(newBooking);
  localStorage.booked = JSON.stringify(existingBookings);

  window.location.assign(`bekraftad.html?type=regular&id=${newBooking.id}`)
}



/*
  * Returns a booking object for return bookings
*/
const getReturnObject = () => {
  return {
    id: Math.floor(Math.random() * 1e7),
    from: travelTo.value,
    to: travelFrom.value,
    date: returnDate.value,
    time: returnTime.value,
    companions: travelCompanions.value,
    accompaniers: travelAccompaniers.value,
    aid: travelAid.value,
    message: travelMessage.value
  }
};



/*
  * Handles booking update
*/
const updateBooking = () => {
  const existingBookings = JSON.parse(localStorage.getItem("booked"));

  existingBookings.forEach(booking => {
    if (booking.id == queryParam) {
      booking.from = travelFrom.value;
      booking.to = travelTo.value;
      booking.date = travelDate.value;
      booking.time = travelTime.value;
      booking.companions = travelCompanions.value;
      booking.accompaniers = travelAccompaniers.value;
      booking.aid = travelAid.value;
      booking.message = travelMessage.value;
    }
  });

  if (returnIsChecked) {
    existingBookings.push(getReturnObject());
  }

  localStorage.booked = JSON.stringify(existingBookings);
  window.location.assign(`bekraftad.html?type=update&id=${queryParam}`)
};



/*
  * Checks for empty input fields
*/
const validInput = () => {
  if (
    travelFrom.value != "" &&
    travelTo.value != "" &&
    travelDate.value != "" &&
    travelTime.value != "" &&
    travelCompanions.value != "" &&
    travelAccompaniers.value != "" &&
    travelAid.value != ""
  ) {
    return true;
  }

  emptyInputFeedback();
}



/*
  * Gives feedback on empty input fields
*/
const emptyInputFeedback = () => {
  [travelFrom, travelTo, travelDate, travelTime, travelCompanions, travelAccompaniers, travelAid].forEach(input => {
    if (input.value == "") {
      input.style.border = "2px solid red";
      input.placeholder = 'Fyll i fält'
    } else {
      input.style.border = "none";
      feedback.innerHTML = "<p>Fyll i samtliga markerade fält</p>"
    }
  });
}



/*
  * Fills input fields on "update mode"
  * @param   {object}   booking     booking object
*/
const fillInputFields = (booking) => {
  travelFrom.value = booking.from;
  travelTo.value = booking.to;
  travelDate.value = booking.date;
  travelTime.value = booking.time;
  travelCompanions.value = booking.companions;
  travelAccompaniers.value = booking.accompaniers;
  travelAid.value = booking.aid;
  travelMessage.value = booking.message;
};



/*
  * Update DOM-element text content accordingly
  * @param   {object}   bookingToUpdate     booking object
*/
const updateTextContent = (bookingToUpdate) => {
  bookBtn.value = 'Spara Ändringar';
  titleBanner.innerHTML = '<h1>Uppdatera Resa</h1>';
  bookingToUpdate.date < getToday() ? titleBanner.innerHTML = '<h1>Boka Om Resa</h1>' : null;
};



/*
  * Checks query params for booking to update -> sets form in "update mode"
*/
if (queryParam != null) {
  update = true;
  const existingBookings = JSON.parse(localStorage.getItem("booked"));
  const bookingToUpdate = existingBookings.filter(booking => booking.id == queryParam)[0];

  updateTextContent(bookingToUpdate);
  fillInputFields(bookingToUpdate);
}



let returnIsChecked = false;
/*
  * Toggles return input fields
*/
const toggleReturn = () => {
  if (!returnIsChecked) {
    elementDisplay(returnInput, 'block');
    returnIsChecked = true;
    returnDate.min = travelDate.value;
  } else {
    elementDisplay(returnInput, 'none');
    returnIsChecked = false;
  }
};



/*
  * Set return time to min leave time if travel and return date are the same 
*/
returnDate.addEventListener('focusout', () => {
  travelDate.value == returnDate.value ? returnTime.min = travelTime.value : null;
})



// Date picker if not supported by browser
$(document).ready(function () {
  if (document.querySelector('.date-pick').type !== 'date') {
    var oCSS = document.createElement('link');
    oCSS.type = 'text/css'; oCSS.rel = 'stylesheet';
    oCSS.href = '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css';
    oCSS.onload = function () {
      var oJS = document.createElement('script');
      oJS.type = 'text/javascript';
      oJS.src = '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
      oJS.onload = function () {
        $('.date-pick').datepicker();
      }
      document.body.appendChild(oJS);
    }
    document.body.appendChild(oCSS);
  }
});



// Time picker if not supported by browser
$(document).ready(function () {
  if (document.querySelector('.time-pick').type !== 'time') {
    var oCSS = document.createElement('link');
    oCSS.type = 'text/css'; oCSS.rel = 'stylesheet';
    oCSS.href = '//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css';
    oCSS.onload = function () {
      var oJS = document.createElement('script');
      oJS.type = 'text/javascript';
      oJS.src = '//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js';
      oJS.onload = function () {
        $('.time-pick').timepicker({
          timeFormat: 'h:mm p',
          interval: 5,
          defaultTime: '12',
          startTime: '00:00',
          dynamic: false,
          dropdown: true,
          scrollbar: true
        });
      }
      document.body.appendChild(oJS);
    }
    document.body.appendChild(oCSS);
  }
});



// Show small info box above Medresenärer and Ledsagare
document.querySelectorAll('.show-info').forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();

    event.target.parentNode.nextElementSibling.style.display == 'block' ? elementDisplay(event.target.parentNode.nextElementSibling, 'none') : elementDisplay(event.target.parentNode.nextElementSibling, 'block');
  })

  element.addEventListener('keydown', (event) => {
    event.preventDefault();
    console.log(event.keyCode)

    if (event.keyCode === 13) {
      event.target.nextElementSibling.style.display == 'block' ? elementDisplay(event.target.nextElementSibling, 'none') : elementDisplay(event.target.nextElementSibling, 'block');
    } 

    if (event.keyCode === 9) {
      event.target.parentNode.nextElementSibling.nextElementSibling.focus();
    }

  })
}
);
