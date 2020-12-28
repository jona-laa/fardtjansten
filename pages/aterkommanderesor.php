<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Mina Återkommande Resor';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > <a
        href="aterkommande.php">Återkommande Resor</a> > Mina Återkommande Resor</div>


<!-- Page Title "Banner" -->
<div class="title-banner col-reoccurring">
    <h1>Mina Återkommande Resor</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här hittar du dina återkommande resor.
</div>

<main>
    <!-- Bokade Resor -->
    <section class="booked">
        <h2 class="section-heading">Återkommande Resor</h2>
        <!-- Reoccurring Bookings will render here -->
    </section>

    <!-- Tillbaka -->
    <div class="go-back">
        <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
<script src="../data/reoccurring.js"></script>
</body>

</html>