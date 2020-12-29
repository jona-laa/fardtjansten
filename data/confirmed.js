const confirmedRef = document.querySelector('#confirmed-ref');
const confirmedGreeting = document.querySelector('#confirmed-greeting');
const confirmedBooking = document.querySelector('#confirmed-booking');



// Query parameters
const bookingType = location.search.split('=')[1].split('&')[0];
const bookingId = location.search.split('=')[2];



// Bookings objects
const existingBookings = JSON.parse(localStorage.getItem("booked"));
const existingReoccurring = JSON.parse(localStorage.getItem("reoccurring"));



// Filter out relecant booking
const regular = existingBookings ? existingBookings.filter(booking => booking.id == bookingId)[0] : null;
const reoccurring = existingReoccurring ? existingReoccurring.filter(booking => booking.id == bookingId)[0] : null;


// Give feedback based on booking type
switch (bookingType) {
    case 'regular':
        confirmedBooking.innerHTML =
            `
                Från <strong>${regular.from}</strong><br> 
                till <strong>${regular.to}</strong><br> 
                Klockan <strong>${regular.time}</strong>,<br>
                <strong>${regular.date}</strong>
        `;

        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.php">Bokade Resor</a>.';
        break;

    case 'reoccurring':
        confirmedBooking.innerHTML =
            `
                Från <strong>${reoccurring.from}</strong><br> 
                till <strong>${reoccurring.to}</strong><br> 
                Klockan <strong>${reoccurring.time}</strong><br>
                varje <strong>${reoccurring.days.filter(day => day != null).join(', ')}</strong> 
        `;

        confirmedRef.innerHTML = 'Du hittar alla dina återkommande resor på <a class="article-link" href="aterkommanderesor.php">Återkommande Resor</a>.';
        break;

    case 'update':
        confirmedBooking.innerHTML =
            `
                Från <strong>${regular.from}</strong><br> 
                till <strong>${regular.to}</strong><br> 
                Klockan <strong>${regular.time}</strong>,<br>
                <strong>${regular.date}</strong>
        `;

        confirmedGreeting.textContent = "Din resa är nu uppdaterad!"
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.php">Bokade Resor</a>.';
        break;

    case 'update_reoccurring':
        confirmedBooking.innerHTML =
            `
                Från <strong>${reoccurring.from}</strong><br> 
                till <strong>${reoccurring.to}</strong><br> 
                Klockan <strong>${reoccurring.time}</strong><br>
                varje <strong>${reoccurring.days.filter(day => day != null).join(', ')}</strong> 
        `;

        confirmedGreeting.textContent = "Din återkommande resa är nu uppdaterad!"
        confirmedRef.innerHTML = 'Du hittar alla dina återkommande resor på <a class="article-link" href="aterkommanderesor.php">Återkommande Resor</a>.';
        break;

    default:
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.php">Bokade Resor</a>.';
}
