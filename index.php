<?php
include './config.php';
session_start();
$page_title = 'Startsidan';
include './includes/header.php' 
?>

<div class="breadcrumbs">Start</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-main">
  <h1>Färdtjänsten</h1>
</div>

<!-- Page Description -->
<div class="page-descr">Här kan du boka och hitta information om färdtjänsten i Tyresö</div>

<main>
<!-- Start Menu -->
  <section class="box-menu">  
    <h2 class="section-heading">Startmeny</h2>
    <a href="./pages/boka.php">
      <div class="box-menu_box border-main rounded">
        <i class="fas fa-car"></i>
        <span>Boka färdtjänst</span>
      </div>
    </a>

    <a href="./pages/omfardtjanst.php">
      <div class="box-menu_box border-about rounded">
        <i class="fas fa-info-circle"></i>
        <span>Om färdtjänst</span>
      </div>
    </a>

    <a href="./pages/kundtjanst.php">
      <div class="box-menu_box border-service rounded">
        <i class="fas fa-headset"></i>
        <span>Kundtjänst</span>
      </div>
    </a>
  </section>

<!-- Aktuellt -->
<section class="news">
  <h2 class="section-heading">Aktuellt</h2>
  <!-- News Articles will print here -->
</section>

</main>

<?php include './includes/footer.php' ?>
<script src="./data/articles.js"></script>
<script src="./data/news.js"></script>
<script src="./js/main.js"></script>
</body>

</html>