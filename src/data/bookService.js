/*
  * DOM elements
*/
const travelFrom = document.querySelector('#travel-from');
const travelTo = document.querySelector('#travel-to');
const travelDate = document.querySelector('#travel-date');
const travelTime = document.querySelector('#travel-time');
const travelCompanions = document.querySelector('#travel-companions');
const travelAccompaniers = document.querySelector('#travel-accompaniers');
const travelAid = document.querySelector('#travel-aid');
const returnDate = document.querySelector('#return-date');
const returnTime = document.querySelector('#return-time');
const bookBtn = document.querySelector('#book-btn');
const feedback = document.querySelector('.feedback');
const returnInput = document.querySelector('.return-input');

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
    aid: travelAid.value
  }

  if (bookReturn) {
    const returnBooking = {
      id: Math.floor(Math.random() * 1e7),
      from: travelTo.value,
      to: travelFrom.value,
      date: returnDate.value,
      time: returnTime.value,
      companions: travelCompanions.value,
      accompaniers: travelAccompaniers.value,
      aid: travelAid.value
    }
    existingBookings.push(returnBooking);
  }

  existingBookings.push(newBooking);
  localStorage.booked = JSON.stringify(existingBookings);

  window.location.assign(`http://localhost:3000/pages/bekraftad.html?type=regular`)
}



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
    }
  });

  localStorage.booked = JSON.stringify(existingBookings);
  window.location.assign(`bekraftad.html?type=update`)
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
*/
const fillInputFields = (booking) => {
  travelFrom.value = booking.from;
  travelTo.value = booking.to;
  travelDate.value = booking.date;
  travelTime.value = booking.time;
  travelCompanions.value = booking.companions;
  travelAccompaniers.value = booking.accompaniers;
  travelAid.value = booking.aid;
};



/*
  * Checks query params for booking to update -> sets form in "update mode"
*/
if (queryParam != null) {
  update = true;
  const existingBookings = JSON.parse(localStorage.getItem("booked"));
  const bookingToUpdate = existingBookings.filter(booking => booking.id == queryParam)[0];
  bookBtn.value = 'Spara Ändringar';

  fillInputFields(bookingToUpdate);
}



let bookReturn = false;
/*
  * Toggles return input fields
*/
const toggleReturn = () => {
  if (!bookReturn) {
    elementDisplay(returnInput, 'block');
    returnInput.setAttribute('aria-hidden', 'false');
    bookReturn = true;
  } else {
    elementDisplay(returnInput, 'none');
    returnInput.setAttribute('aria-hidden', 'true');
    bookReturn = false;
  }
};