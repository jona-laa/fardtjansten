<?php
include '../config.php';
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
}
?>

<?php 
$page_title = 'Min Profil';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > <a href="minasidor.php">Mina Sidor</a> > Min Profil</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-profile">
    <h1>Min Profil</h1>
</div>

<main>
    <!-- Min Profil -->
    <section class="profile">
        <h2 class="section-heading">Min Profil</h2>
        <div class="profile_container border-profile rounded">
            <div>
                <p class="profile-info_heading">Kundnummer</p>
                <p class="profile-info">0123456789</p>
            </div>

            <div>
                <p class="profile-info_heading">Namn</p>
                <p class="profile-info">Förnamn Efternamn</p>
            </div>

            <div>
                <p class="profile-info_heading">E-Post</p>
                <p class="profile-info">Min@email.com</p>
            </div>

            <div>
                <p class="profile-info_heading">Telefonnummer</p>
                <p class="profile-info">01 — 234 56 78</p>
            </div>

            <div>
                <p class="profile-info_heading">Gata</p>
                <p class="profile-info">Gatan 123</p>
            </div>

            <div>
                <p class="profile-info_heading">Ort</p>
                <p class="profile-info">Orten</p>
            </div>

            <div>
                <p class="profile-info_heading">Postnummer</p>
                <p class="profile-info">123 45</p>
            </div>
        </div>

        <!-- Tillbaka -->
        <div class="go-back go-back-small">
            <a href="#" onclick="window.history.back()" class="go-back_link"><i
                    class="fas fa-arrow-left"></i>Tillbaka</a>
        </div>
    </section>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
</body>

</html>