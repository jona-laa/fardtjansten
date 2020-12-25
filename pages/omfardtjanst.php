<?php 
include '../config.php';
session_start();
$page_title = 'Om Färdtjänst';
include '../includes/header.php' 
?>

<!-- Bread crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > Om Färdtjänst</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-about">
    <h1>Om Färdtjänst</h1>
</div>

<!-- Page Description -->
<div class="page-descr">Här hittar du information om färdtjänst</div>

<!-- Filter Articles Input -->
<div class="filter-content">
    <label for="filterbar">Filtrera artiklar</label>
    <input id="filterbar" name="filterbar" type="text" placeholder="Filtrera artiklar">
    <div class="filter-icon"><i class="fas fa-filter"></i></div>
</div>
<div class="feedback"></div>

<main>
    <!-- Start Menu -->
    <section class="box-menu">
        <h2 class="section-heading">Om Färdtjänst</h2>
        <!-- About Articles will print here -->
    </section>
</main>

<?php include '../includes/footer.php' ?>
<script src="../data/articles.js"></script>
<script src="../data/about.js"></script>
<script src="../js/main.js"></script>
</body>

</html>
