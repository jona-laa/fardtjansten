<?php 
include '../config.php';
session_start();
$page_title = 'Kundtjänst';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > Kundtjänst</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-service">
    <h1>Kundtjänst</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här hittar du information om färdtjänst.
</div>

<main>
    <!-- Kontakta Kundtjänst -->
    <section class="contact">
        <h2 class="section-heading">Kontakta Kundtjänst</h2>
        <p>Öppet helgfria vardagar 7–20</p>
        <h3><i class="fas fa-phone"></i>Telefon</h3>
        <a href="tel:012345678">01 - 234 56 78</a>
        <h3><i class="fas fa-envelope"></i>E-Post</h3>
        <a href="mailto:#">fardtjanst@tyreso.se</a>
    </section>

    <!-- Vanliga Frågor -->
    <section class="news service">
        <h2 class="section-heading">Vanliga frågor</h2>

        <!-- Filter Articles Input -->
        <div class="filter-content">
            <label for="filterbar">Filtrera artiklar</label>
            <input id="filterbar" type="text" role="search" aria-label="Filtrera artiklar" placeholder="Filtrera artiklar">
            <div class="filter-icon"><i class="fas fa-filter"></i></div>
        </div>
        <div class="feedback"></div>

        <!-- Service Articles will print here -->
        <div class="service_articles"></div>
    </section>
</main>

<?php include '../includes/footer.php' ?>
<script src="../data/articles.js"></script>
<script src="../data/service.js"></script>
<script src="../js/main.js"></script>
</body>

</html>