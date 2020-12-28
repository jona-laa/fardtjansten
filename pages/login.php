<?php 
if(!empty($_POST['custNo']) && !empty($_POST['password'])) {
  $username = $_POST['custNo'];
  $password = $_POST['password'];  
  
  if($username == '123456789' && $password == 'password') {
    session_start();
    $_SESSION['loggedin'] = 'loggedin';
    header("Location: https://studenter.miun.se/~jola1803/dt068g/fardtjansten/pages/minasidor.php");
    }
}
?>

<?php 
include '../config.php';
$page_title = 'Logga in på Mina Sidor';
include '../includes/header.php' 
?>

<!-- Bread Crumbs -->
<div class="breadcrumbs"><a href="../index.php">Start</a> > Logga In</div>

<!-- Page Title "Banner" -->
<div class="title-banner col-main">
    <h1>Logga in på Mina Sidor</h1>
</div>

<main>
    <!-- Login Form -->
    <form action="login.php" method="post" class="rounded border-main">
        <fieldset>
            <legend>Logga In</legend>
            <label for="custNo">Kundnummer</label><br>
            <input type="text" id="custNo" name="custNo" value="123456789" autocomplete="true"><br>
            <label for="password">Lösenord</label><br>
            <input type="password" id="password" value="password" name="password"><br>
            <input type="submit" value="Logga In" class="submit-btn col-main">
        </fieldset>

        <div class="login-help">
            <span>Har du problem med inloggningen?</span>
            <p>Om du har glömt ditt lösenord, eller av någon anledning har problem med att logga in, kontaktar
                du färdtjänstens <a href="kundtjanst.php">kundtjänst</a>.</p>
        </div>
    </form>

    <!-- Tillbaka -->
    <div class="go-back go-back-article">
        <a onclick="window.history.back()" class="go-back_link"><i class="fas fa-arrow-left"></i>Tillbaka</a>
    </div>
</main>

<?php include '../includes/footer.php' ?>
<script src="../js/main.js"></script>
</body>

</html>
