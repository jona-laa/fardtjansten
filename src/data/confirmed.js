const confirmedRef = document.querySelector('#confirmed-ref');
const confirmedBooking = document.querySelector('#confirmed-booking');
const confirmedGreeting = document.querySelector('#confirmed-greeting');


// Query parameters
const bookingType = location.search.split('=')[1].split('&')[0];
const bookingId = location.search.split('=')[2];



// Bookings objects
const existingBookings = JSON.parse(localStorage.getItem("booked"));
const existingReoccurring = JSON.parse(localStorage.getItem("reoccurring"));



// Filter out relecant booking
const regular = existingBookings.filter(booking => booking.id == bookingId)[0];
const reoccurring = existingReoccurring.filter(booking => booking.id == bookingId)[0];



// Give feedback based on booking type
switch (bookingType) {
    case 'regular':
        confirmedBooking.innerHTML =
            `
                Från <strong>${regular.from}</strong> till <strong>${regular.to}</strong><br> 
                Datum <strong>${regular.date}</strong><br> 
                Tid <strong>${regular.time}</strong>
        `;

        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.html">Bokade Resor</a>.';
        break;

    case 'reoccurring':
        confirmedBooking.innerHTML =
            `
                Från <strong>${reoccurring.from}</strong> till <strong>${reoccurring.to}</strong><br> 
                Dagar: <strong>${reoccurring.days.filter(day => day != null).join(', ')}</strong><br> 
                Tid <strong>${reoccurring.time}</strong>
        `;

        confirmedRef.innerHTML = 'Du hittar alla dina återkommande resor på <a class="article-link" href="aterkommanderesor.html">Återkommande Resor</a>.';
        break;

    case 'update':
        confirmedBooking.innerHTML =
            `
                Från <strong>${regular.from}</strong> till <strong>${regular.to}</strong><br> 
                Datum <strong>${regular.date}</strong><br> 
                Tid <strong>${regular.time}</strong>
        `;

        confirmedGreeting.textContent = "Din resa är nu uppdaterad!"
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.html">Bokade Resor</a>.';
        break;

    case 'update_reoccurring':
        confirmedBooking.innerHTML =
            `
                Från <strong>${reoccurring.from}</strong> till <strong>${reoccurring.to}</strong><br> 
                Dagar <strong>${reoccurring.days.filter(day => day != null).join(', ')}</strong><br> 
                Tid <strong>${reoccurring.time}</strong>
        `;

        confirmedGreeting.textContent = "Din återkommande resa är nu uppdaterad!"
        confirmedRef.innerHTML = 'Du hittar alla dina återkommande resor på <a class="article-link" href="aterkommanderesor.html">Återkommande Resor</a>.';
        break;

    default:
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.html">Bokade Resor</a>.';
}
