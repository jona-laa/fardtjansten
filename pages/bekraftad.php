<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Bokaning Bekräftad';
include '../includes/header.php' 
?>

<main>
    <!-- Bokning Bekräftad -->
    <article class="article confirmed rounded border-booked">
        <h2 class="article-heading"><i class="far fa-check-circle"></i>Bokning Bekräftad</h2>
        <p class="article-text" id="confirmed-greeting">Tack för din bokning!</p>
        <p class="article-text" id="confirmed-ref"></p>
        <br>
        <a href="minasidor.php" class="article-link centered">Tillbaka till Mina Sidor <i
                class="fas fa-angle-double-right"></i></a>
    </article>
</main>

<?php include '../includes/footer.php' ?>
<script src="../data/confirmed.js"></script>
<script src="../js/main.js"></script>
</body>

</html>
