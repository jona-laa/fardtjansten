<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Återkommande Resor';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > Återkommande Resor</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-reoccurring">
    <h1>Återkommande Resor</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här kan du se och boka dina återkommande resor.
</div>

<main>
    <!-- Start Menu -->
    <section class="box-menu">
        <h2 class="section-heading">Boka färdtjänst</h2>
        <a href="./bokaaterkommande.php">
            <div class="box-menu_box border-reoccurring rounded">
                <i class="fas fa-user"></i>
                <span>Boka återkommande resa</span>
            </div>
        </a>

        <a href="./aterkommanderesor.php">
            <div class="box-menu_box border-reoccurring rounded">
                <i class="fas fa-phone"></i>
                <span>Mina återkommande resor</span>
            </div>
        </a>
    </section>

    <!-- Tillbaka -->
    <div class="go-back go-back-medium">
        <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
</body>

</html>