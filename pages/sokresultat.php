<?php
include '../config.php';
session_start();
$page_title = 'Startsidan';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > Sökresultat</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-about">
<h1>Sökresultat</h1>
</div>

<!-- Page Description -->
<div class="page-descr">

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
<script src="../js/main.js"></script>
<script src="../data/articles.js"></script>
<script src="../data/search.js"></script>
</body>

</html>