<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Gamla Resor';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > Gamla Resor</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-history">
    <h1>Gamla resor</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här hittar du dina gamla resor.
</div>

<main>
    <!-- Gamla Resor -->
    <section class="booked">
        <h2 class="section-heading">Gamla Resor</h2>
        <!-- Bookings will render here -->
    </section>

    <!-- Tillbaka -->
    <div class="go-back">
        <a href="#" onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
<script src="../data/history.js"></script>
</body>

</html>
