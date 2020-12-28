<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Mina Sidor';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > Mina Sidor</div>


<!-- Page Title "Banner" -->
<div class="title-banner col-main">
    <h1>Mina Sidor</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här kan du boka, avboka, och ändra färdtjänstresor.
</div>

<main>
    <!-- Start Menu -->
    <section class="box-menu">
        <h2 class="section-heading">Startmeny</h2>
        <a href="./bokaresa.php">
            <div class="box-menu_box border-main rounded">
                <i class="fas fa-car-side"></i>
                <span>Boka Ny Resa</span>
            </div>
        </a>

        <a href="./bokaderesor.php">
            <div class="box-menu_box border-booked rounded">
                <i class="fas fa-list-ul"></i>
                <span>Bokade Resor</span>
            </div>
        </a>

        <a href="./aterkommande.php">
            <div class="box-menu_box border-reoccurring rounded">
                <i class="fas fa-history"></i>
                <span>Återkommande Resor</span>
            </div>
        </a>

        <a href="./gamlaresor.php">
            <div class="box-menu_box border-call rounded">
                <i class="fas fa-history"></i>
                <span>Gamla Resor</span>
            </div>
        </a>

        <a href="./minprofil.php">
            <div class="box-menu_box border-profile rounded">
                <i class="fas fa-user"></i>
                <span>Min Profil</span>
            </div>
        </a>

        <a href="logout.php">
            <div class="box-menu_box border-logout rounded">
                <i class="fas fa-sign-out-alt"></i>
                <span>Logga Ut</span>
            </div>
        </a>
    </section>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
</body>

</html>