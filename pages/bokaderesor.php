<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Bokade Resor';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > Bokade Resor</div>


<!-- Page Title "Banner" -->
<div class="title-banner col-booked">
    <h1>Bokade Resor</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här hittar du dina aktiva bokningar.
</div>

<main>
    <!-- Bokade Resor -->
    <section class="booked">
        <h2 class="section-heading">Bokade Resor</h2>
        <!-- Bookings will render here -->
    </section>

    <!-- Tillbaka -->
    <div class="go-back">
        <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
<script src="../data/booked.js"></script>
</body>

</html>