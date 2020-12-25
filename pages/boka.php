<?php 
include '../config.php';
session_start();
$page_title = 'Boka Färdtjänst';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.html">Start</a> > Boka färdtjänst</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-main">
    <h1>Boka Färdtjänst</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här väljer du om du vill boka via Mina Sidor eller om du vill ringa och boka din resa.
</div>

<main>
    <!-- Book Menu -->
    <section class="box-menu">
        <h2 class="section-heading">Boka färdtjänst</h2>
        <a href="./minasidor.php">
            <div class="box-menu_box border-main rounded">
                <i class="fas fa-user"></i>
                <span>Boka via Mina Sidor</span>
            </div>
        </a>

        <a href="./artikel.php?id=15">
            <div class="box-menu_box border-main rounded">
                <i class="fas fa-phone"></i>
                <span>Ring och boka</span>
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
