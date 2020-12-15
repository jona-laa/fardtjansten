// Table data elements
const tableDate = document.querySelector('#table-date');
const tableTime = document.querySelector('#table-time');
const tableFrom = document.querySelector('#table-from');
const tableTo = document.querySelector('#table-to');
const tableCompanions = document.querySelector('#table-companions');
const tableAccompaniers = document.querySelector('#table-accompaniers');
const tableAid = document.querySelector('#table-aid');
const sectionBooked = document.querySelector('.booked');

const existingBookings = JSON.parse(localStorage.getItem("reoccurring"));

const createBookings = (bookings) => {
    bookings.forEach(booking => {
        sectionBooked.innerHTML +=
            `<div class="booked-item reoccurring-item border-reoccurring rounded">
                <div class="booked-item_ref">Bokningsreferens: #${booking.id}</div>
                <div class="booked-item_content reoccurring-item_content">
                    <ul>
                        <li class="col-days">
                            <div>
                                <p class="col-title"><i class="far fa-calendar"></i>Dagar</p>
                                <p class="col-data">${booking.days.filter(day => day != null).join(', ')}</p>
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
                    </ul>
                </div>
            
                <div class="booked-item_buttons">
                    <button class="submit-btn btn rounded col-confirm" onclick="initUpdate(${booking.id}, 'reoccurring')">Ändra</button>
                    <button class="submit-btn btn rounded col-delete" onclick="confirmIt(${booking.id}, 'reoccurring')">Avboka</button>
                </div>
            </div>`
    });

    bookings.length == 0 ? sectionBooked.innerHTML = `<div class="feedback"><p>Du har inga återkommande resor.</p></div>` : null;
}



/*
  * Load bookings on page load
*/
window.addEventListener("load",
    createBookings(existingBookings)
);
