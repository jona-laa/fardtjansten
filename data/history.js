// Table data elements
const tableDate = document.querySelector('#table-date');
const tableTime = document.querySelector('#table-time');
const tableFrom = document.querySelector('#table-from');
const tableTo = document.querySelector('#table-to');
const tableCompanions = document.querySelector('#table-companions');
const tableAccompaniers = document.querySelector('#table-accompaniers');
const tableAid = document.querySelector('#table-aid');
const sectionBooked = document.querySelector('.booked');

const existingBookings = JSON.parse(localStorage.getItem("booked"));



/*
  * Creates old bookings (Date < today) DOM-elements
  * @param   {object}   bookings     booking objects
*/
const createBookings = (bookings) => {
    const today = new Date();

    const oldBookings = bookings
        .sort((a, b) => {
            const c = new Date(`${a.date}T${a.time}`);
            const d = new Date(`${b.date}T${b.time}`);
            return c - d;
        })
        .filter(booking => new Date(`${booking.date}T${booking.time}`) < today);



    oldBookings.forEach(booking => {
        sectionBooked.innerHTML +=
            `<div class="booked-item border-call rounded">
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
                        </ul>
                    </div>
    
                    <div class="booked-item_buttons">
                        <button class="submit-btn btn rounded col-main" onclick="initUpdate(${booking.id})">Boka Om Resa</button>
                    </div>
                </div>`
    });

    oldBookings.length == 0 ? sectionBooked.innerHTML = `<div class="feedback rounded"><p>Du har inga gamla resor.</p></div>` : null;
}



/*
  * Load bookings on page load
*/
window.addEventListener("load",
    createBookings(existingBookings)
);
