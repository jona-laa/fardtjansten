<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Boka Återkommande Resa';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > <a
        href="aterkommande.php">Återkommande Resor</a> > Boka
    Återkommande Resa
</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-reoccurring">
    <h1>Boka återkommande resa</h1>
</div>

<main>
    <!-- Book Form -->
    <form class="rounded border-reoccurring">
        <fieldset>
            <legend>Resedetaljer</legend>

            <label for="travel-from">Från</label><br>
            <input type="text" id="travel-from" name="fravel-from" required aria-required="true" autocomplete="on">

            <button class="travel-switch" onclick="travelSwitch()" aria-label="Byt plats på från och till"><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-up"></i></button><br>

            <label for="travel-to">Till</label><br>
            <input type="text" id="travel-to" name="travel-to" required aria-required="true" autocomplete="on"><br>

            <label>Veckodag</label><br>
            <div class="travel-weekdays">
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-monday" name="Måndag"><label
                        for="travel-monday">Måndag</label><br>
                </div>
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-tuesday" name="Tisdag"><label
                        for="travel-tuesday">Tisdag</label><br>
                </div>
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-wednesday" name="Onsdag"><label
                        for="travel-wednesday">Onsdag</label><br>
                </div>
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-thursday" name="Torsdag"><label
                        for="travel-thursday">Torsdag</label><br>
                </div>
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-friday" name="Fredag"><label
                        for="travel-friday">Fredag</label><br>
                </div>
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-saturday" name="Lördag"><label
                        for="travel-saturday">Lördag</label><br>
                </div>
                <div class="travel-weekdays_weekday">
                    <input type="checkbox" id="travel-sunday" name="Söndag"><label
                        for="travel-sunday">Söndag</label><br>
                </div>
            </div>

            <label for="travel-time">Tid för avresa</label><br>
            <input type="time" id="travel-time" name="travel-time" class="time-pick" required><br>

            <div class="label-extrainfo">
                <label for="travel-companions">Medresenärer</label>
                <button class="show-info" aria-expanded="false" aria-controls="info-companions"
                    aria-label="Visa och dölj mer information">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
            <div class="info-box" id="info-companions" aria-hidden="true">
                <ul>
                    <li>Extra person som du tar med på resan, till exempel en vän.</li>
                    <li>Kostar 20 kronor extra per resa.</li>
                    <li class="info-box_read-more"><a href="artikel.html?id=5" target="_blank">Läs mer</a>
                    </li>
                </ul>
            </div><br>
            <input type="number" value="0" min="0" max="3" id="travel-companions" name="travel-companions"><br>

            <div class="label-extrainfo">
                <label for="travel-accompaniers">Ledsagare</label>
                <button class="show-info" aria-expanded="false" aria-controls="info-accompaniers"
                    aria-label="Visa och dölj mer information">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
            <div class="info-box" id="info-accompaniers" aria-hidden="true">
                <ul>
                    <li>Person som hjälper till under resan, till exempel en assistent.</li>
                    <li>Åker med utan extra kostnad.</li>
                    <li class="info-box_read-more"><a href="artikel.html?id=4" target="_blank">Läs mer</a>
                    </li>
                </ul>
            </div><br>
            <select name="travel-accompaniers" id="travel-accompaniers">
                <option value="Nej">Nej</option>
                <option value="Ja">Ja</option>
            </select>

            <label for="travel-aid">Hjälpmedel</label><br>
            <select name="aid" id="travel-aid">
                <option value="-">-</option>
                <option value="Rullstol">Rullstol</option>
                <option value="Rullator">Rullator</option>
                <option value="Permobil">Permobil</option>
            </select>

            <label for="travel-message">Meddelande till Färdtjänsten</label><br>
            <input type="text" id="travel-message" name="travel-message" autocomplete="on"><br>

            <div class="feedback"></div>

            <input type="submit" id="book-btn" onclick="createOrUpdate(event)" value="Boka"
                class="submit-btn btn rounded col-reoccurring">

        </fieldset>
    </form>

    <!-- Tillbaka -->
    <div class="go-back go-back-article">
        <a href="#" onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../data/reoccurringService.js"></script>
<script src="../js/main.js"></script>
</body>

</html>
