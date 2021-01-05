<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Boka Ny Resa';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > Boka Resa
</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-main">
    <h1>Boka Ny Resa</h1>
</div>

<main>
    <!-- Book Form -->
    <form class="rounded border-main">
        <fieldset>
            <legend>Resedetaljer</legend>

            <label for="travel-from">Från</label><br>
            <input type="text" id="travel-from" name="fravel-from" required aria-required="true" autocomplete="on">

            <button class="travel-switch" onclick="travelSwitch()" aria-label="Byt plats på från och till"><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-up"></i></button><br>

            <label for="travel-to">Till</label><br>
            <input type="text" id="travel-to" name="travel-to" required aria-required="true" autocomplete="on"><br>

            <label for="travel-date">Datum för avresa</label><br>
            <input type="date" id="travel-date" class="date-pick" name="travel-date" required aria-required="true"><br>

            <label for="travel-time">Tid för avresa</label><br>
            <input type="time" id="travel-time" class="time-pick" name="travel-time" required aria-required="true"><br>

            <label for="book-return">Boka med returresa</label><br>
            <div class="return">
                <input type="checkbox" onclick="toggleReturn()" id="book-return" name="book-return"><br>

                <div class="return-input" aria-hidden="true">
                    <label for="return-date">Datum för returresa</label><br>
                    <input type="date" id="return-date" name="return-date"><br>

                    <label for="return-time">Tid för returresa</label><br>
                    <input type="time" id="return-time" name="return-time"><br>
                </div>
            </div>

            <label for="travel-companions">Medresenärer
                <button class="show-info" aria-expanded="false" aria-controls="info-companions" aria-label="Öppna och stäng information">
                    <i class="fas fa-info-circle"></i>
                </button>
                <div class="info-box" id="info-companions" aria-hidden="true">
                    <ul>
                        <li>Extra person som du tar med på resan, till exempel en vän.</li>
                        <li>Kostar 20 kronor extra per resa.</li>
                        <li class="info-box_read-more"><a href="artikel.php?id=5" target="_blank">Läs mer</a></li>
                    </ul>
                </div>
            </label><br>
            <input type="number" value="0" min="0" max="3" id="travel-companions" name="travel-companions"><br>

            <label for="travel-accompaniers">Ledsagare
                <button class="show-info" aria-expanded="false" aria-controls="info-accompaniers"  aria-label="Öppna och stäng information">
                    <i class="fas fa-info-circle"></i>
                </button>
                <div class="info-box" id="info-accompaniers" aria-hidden="true">
                    <ul>
                        <li>Person som hjälper till under resan, till exempel en assistent.</li>
                        <li>Åker med utan extra kostnad.</li>
                        <li class="info-box_read-more"><a href="artikel.php?id=4" target="_blank">Läs mer</a></li>
                    </ul>
                </div>
            </label><br>
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
                    <input type="text" id="travel-message" name="travel-message" required autocomplete="on"><br>

            <div class="feedback"></div>

            <input type="submit" id="book-btn" onclick="createOrUpdate(event)" value="Boka"
                class="submit-btn btn rounded col-main">
        </fieldset>
    </form>

    <!-- Tillbaka -->
    <div class="go-back go-back-article">
        <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
<script src="../data/bookService.js"></script>
</body>

</html>