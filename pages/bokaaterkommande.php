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
<div class="breadcrumbs"><a href="../index.html">Start</a> > <a href="minasidor.html">Mina Sidor</a> > <a
        href="aterkommande.html">Återkommande Resor</a> > Boka
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
            <input type="text" id="travel-from" name="fravel-from" required autocomplete="on"><br>

            <label for="travel-to">Till</label><br>
            <input type="text" id="travel-to" name="travel-to" required autocomplete="on"><br>

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
            <input type="time" id="travel-time" name="travel-time" required="required"><br>

            <label for="travel-companions">Medresenär</label><br>
            <input type="number" value="0" min="0" max="3" id="travel-companions" name="travel-companions"><br>

            <label for="travel-accompaniers">Ledsagare</label><br>
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
            <div class="feedback"></div>

            <input type="submit" id="book-btn" onclick="createOrUpdate(event)" value="Boka"
                class="submit-btn btn rounded col-reoccurring">

        </fieldset>
    </form>

    <!-- Tillbaka -->
    <div class="go-back go-back-article">
        <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../data/reoccurringService.js"></script>
<script src="../js/main.js"></script>
</body>

</html>
