/*
  * DOM elements 
*/
// Form
const travelFrom = document.querySelector('#travel-from');
const travelTo = document.querySelector('#travel-to');
const travelMonday = document.querySelector('#travel-monday');
const travelTuesday = document.querySelector('#travel-tuesday');
const travelWednesday = document.querySelector('#travel-wednesday');
const travelThursday = document.querySelector('#travel-thursday');
const travelFriday = document.querySelector('#travel-friday');
const travelSaturday = document.querySelector('#travel-saturday');
const travelSunday = document.querySelector('#travel-sunday');
const travelTime = document.querySelector('#travel-time');
const travelCompanions = document.querySelector('#travel-companions');
const travelAccompaniers = document.querySelector('#travel-accompaniers');
const travelAid = document.querySelector('#travel-aid');
const bookBtn = document.querySelector('#book-btn');
const feedback = document.querySelector('.feedback');
const travelWeekdays = document.querySelector('.travel-weekdays');
const titleBanner = document.querySelector('.title-banner');

let update = false;



/*
  * Used if form is to be used for updating existing booking
*/
const queryParam = location.search.split('=')[1];



/*
  * Handles travel booking 
*/
const createBooking = () => {
    let existingBookings = JSON.parse(localStorage.getItem("reoccurring"));
    if (existingBookings == null) {
        existingBookings = [];
    }

    const newBooking = {
        id: Math.floor(Math.random() * 1e7),
        from: travelFrom.value,
        to: travelTo.value,
        days: [
            travelMonday.checked ? 'Måndag' : null,
            travelTuesday.checked ? 'Tisdag' : null,
            travelWednesday.checked ? 'Onsdag' : null,
            travelThursday.checked ? 'Torsdag' : null,
            travelFriday.checked ? 'Fredag' : null,
            travelSaturday.checked ? 'Lördag' : null,
            travelSunday.checked ? 'Söndag' : null,
        ],
        time: travelTime.value,
        companions: travelCompanions.value,
        accompaniers: travelAccompaniers.value,
        aid: travelAid.value
    }

    console.log(newBooking);

    existingBookings.push(newBooking);
    localStorage.reoccurring = JSON.stringify(existingBookings);

    window.location.assign(`http://localhost:3000/pages/bekraftad.html?type=reoccurring`);
};



/*
   * Handles travel update 
 */
const updateBooking = () => {
    console.log('update me')
    const existingBookings = JSON.parse(localStorage.getItem("reoccurring"));
    
    existingBookings.forEach(booking => {
        if (booking.id == queryParam) {
            booking.from = travelFrom.value;
            booking.to = travelTo.value;
            booking.days = [
                travelMonday.checked ? 'Måndag' : null,
                travelTuesday.checked ? 'Tisdag' : null,
                travelWednesday.checked ? 'Onsdag' : null,
                travelThursday.checked ? 'Torsdag' : null,
                travelFriday.checked ? 'Fredag' : null,
                travelSaturday.checked ? 'Lördag' : null,
                travelSunday.checked ? 'Söndag' : null,
            ];
            booking.time = travelTime.value;
            booking.companions = travelCompanions.value;
            booking.accompaniers = travelAccompaniers.value;
            booking.aid = travelAid.value;
        }
    });

    localStorage.reoccurring = JSON.stringify(existingBookings);
    window.location.assign(`bekraftad.html?type=update_reoccurring`)
};



/*
  * Checks for empty input fields
*/
const validInput = () => {
    if (
        travelFrom.value != "" &&
        travelTo.value != "" &&
        travelTime.value != "" &&
        travelCompanions.value != "" &&
        travelAccompaniers.value != "" &&
        travelAid.value != "" &&
        minOneChecked()
    ) {
        return true;
    }


    emptyInputFeedback();
}



/*
  * Makes sure at least one checkbox is checked
*/
const minOneChecked = () => {
    if (
        travelMonday.checked == false &&
        travelTuesday.checked == false &&
        travelWednesday.checked == false &&
        travelThursday.checked == false &&
        travelFriday.checked == false &&
        travelSaturday.checked == false &&
        travelSunday.checked == false
    ) {
        return false;
    } else {
        return true;
    }
}



/*
  * Gives feedback on empty input fields
*/
const emptyInputFeedback = () => {
    [travelFrom, travelTo, travelTime, travelCompanions, travelAccompaniers, travelAid].forEach(input => {
        if (input.value == "") {
            input.style.border = "2px solid red";
            input.placeholder = 'Fyll i fält'
        } else {
            input.style.border = "none";
            feedback.innerHTML = "<p>Fyll i samtliga markerade fält</p>"
        }
    });

    !minOneChecked() ? travelWeekdays.style.border = "2px solid red" : travelWeekdays.style.border = "none";
}



/*
  * Fills input fields on "update mode"
  * @param   {object}   booking     booking object
*/
const fillInputFields = (booking) => {
    travelFrom.value = booking.from;
    travelTo.value = booking.to;
    travelTime.value = booking.time;
    travelCompanions.value = booking.companions;
    travelAccompaniers.value = booking.accompaniers;
    travelAid.value = booking.aid;

    // Auto-check existing reoccurring days
    [travelMonday, travelTuesday, travelWednesday, travelThursday, travelFriday, travelSaturday, travelSunday].forEach(day => {
        booking.days.includes(day.name.replace(/^\w/, (c) => c.toUpperCase())) ? day.checked = true : null;
    })
};



/*
  * Checks query params for booking to update -> sets form in "update mode"
*/
if (queryParam != null) {
    update = true;
    const existingBookings = JSON.parse(localStorage.getItem("reoccurring"));
    const bookingToUpdate = existingBookings.filter(booking => booking.id == queryParam)[0];
    bookBtn.value = 'Spara Ändringar';
    titleBanner.innerHTML = '<h1>Uppdatera Återkommande Resa</h1>';

    fillInputFields(bookingToUpdate);
}