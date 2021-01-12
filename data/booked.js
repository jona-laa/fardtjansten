// Table data elements
const tableDate = document.querySelector('#table-date');
const tableTime = document.querySelector('#table-time');
const tableFrom = document.querySelector('#table-from');
const tableTo = document.querySelector('#table-to');
const tableCompanions = document.querySelector('#table-companions');
const tableAccompaniers = document.querySelector('#table-accompaniers');
const tableAid = document.querySelector('#table-aid');



const existingBookings = JSON.parse(localStorage.getItem("booked"));



/*
  * Creates upcoming (Date > today) booked DOM-elements
  * @param   {object}   bookings     booking objects
*/
const createBookings = (bookings) => {
    const today = new Date();

    if (bookings != null) {

        const upcomingBookings = bookings
            .sort((a, b) => {
                const c = new Date(`${a.date}T${a.time}`);
                const d = new Date(`${b.date}T${b.time}`);
                return c - d;
            })
            .filter(booking => new Date(`${booking.date}T${booking.time}`) > today);
    
        upcomingBookings.forEach(booking => {
            sectionBooked.innerHTML +=
                `<div class="booked-item border-booked rounded">
                    <div class="booked-item_ref">Bokningsreferens: #${booking.id}</div>
                    <div class="booked-item_content">
                        <ul>
                            <li class="col-date">
                                <div>
                                    <p class="col-title"><i class="far fa-calendar"></i>Datum</p>
                                    <p class="col-data">${booking.date}</p>
                                </div>
                            </li>
                            <li class="col-time">
                                <div>
                                    <p class="col-title"><i class="far fa-clock"></i>Tid</p>
                                    <p class="col-data">${booking.time}</p>
                                </div>
                            </li>
                            <li class="col-from">
                                <div>
                                    <p class="col-title"><i class="fas fa-map-marker-alt"></i>Från</p>
                                    <p class="col-data">${booking.from}</p>
                                </div>
                            </li>
                            <li class="col-to">
                                <div>
                                    <p class="col-title"><i class="fas fa-map-pin"></i>Till</p>
                                    <p class="col-data">${booking.to}</p>
                                </div>
                            </li>
                            <li class="col-companions">
                                <div>
                                    <p class="col-title"><i class="fas fa-user-plus"></i>Medresenärer</p>
                                    <p class="col-data">${booking.companions}</p>
                                </div>
                            </li>
                            <li class="col-accompaniers">
                                <div>
                                    <p class="col-title"><i class="fas fa-user-plus"></i>Ledsagare</p>
                                    <p class="col-data">${booking.accompaniers}</p>
                                </div>
                            </li>
                            <li class="col-aid">
                                <div>
                                    <p class="col-title"><i class="fas fa-wheelchair"></i>Hjälpmedel</p>
                                    <p class="col-data">${booking.aid}</p>
                                </div>
                            </li>
                            <li class="col-message">
                                <div>
                                    <p class="col-title"><i class="fas fa-envelope"></i>Meddelande</p>
                                    <p class="col-data">${booking.message}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                     <div class="print"><button class="print-btn" onclick="printThis()"><i class="fas fa-print"></i>Skriv Ut</button></div>
    
                    <div class="booked-item_buttons">
                        <button class="submit-btn btn rounded col-confirm" onclick="initUpdate(${booking.id})">Ändra</button>
                        <button class="submit-btn btn rounded col-delete" onclick="confirmIt(${booking.id})">Avboka</button>
                    </div>
                </div>`
        });
    
        if (upcomingBookings.length == 0) {
            zeroOrNullBookingsStyles('Du har inga aktiva bokningar.');
        }
    } else {
        zeroOrNullBookingsStyles('Du har inga aktiva boknignar.');
    }
}



/*
  * Load bookings on page load
*/
window.addEventListener("load",
    createBookings(existingBookings)
);
