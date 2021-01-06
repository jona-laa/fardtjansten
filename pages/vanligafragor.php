<?php 
include '../config.php';
session_start();
$page_title = 'Kundtjänst';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="../index.php">Kundtjänst</a> > Vanliga Frågor</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-service">
    <h1>Vanliga Frågor</h1>
</div>

<!-- Page Description -->
<div class="page-descr">
    Här hittar du svar på vanliga frågor.
</div>

<main>
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