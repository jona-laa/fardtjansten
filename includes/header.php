<!DOCTYPE html>
<html lang="sv">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="<?php echo FAVICON ?>">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
    crossorigin="anonymous" />
  <meta name="description" content="Färdtjänsten">
  <meta property="og:image" content="<?php echo LOGO ?>" />
  <link rel="stylesheet" href="<?php echo STYLESHEET ?>">
  <title>Färdtjänsten - <?php echo $page_title ?></title>
</head>

<body id="home">
  <div class="container">
    <header>
      <div class="header-content">
        <!-- Logotype -->
        <a href="<?php echo STARTSIDAN ?>">
          <div class="brand">
            <img src="<?php echo LOGO ?>" alt="Färdtjänsten Logotyp">
            Färdtjänsten
          </div>
        </a>
        <nav>
          <!-- Mobile meny - Hidden on default -->
          <a href="" onClick=event.preventDefault() id="main-menu-toggle" aria-label="Toggle Mobile Menu">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="90" height="12" fill="#000"></rect>
              <rect y="30" width="90" height="12" fill="#000"></rect>
              <rect y="60" width="90" height="12" fill="#000"></rect>
            </svg>
          </a>

          <!-- Main Menu -->
          <ul id="menu-main-menu" class="menu">
            <li><a href="<?php echo STARTSIDAN?>" class="menu-link <?php if ($page_title == 'Startsidan') { echo 'current';} ?>">Start</a></li>

            <li><a href="<?php echo BOKA?>" class="menu-link <?php if ($page_title == 'Boka Färdtjänst') { echo 'current';} ?>">Boka Färdtjänst</a></li>

            <li><a href="<?php echo OMFARDTJANST?>" class="menu-link <?php if ($page_title == 'Om Färdtjänst') { echo 'current';} ?>">Om Färdtjänst</a></li>

            <li><a href="<?php echo KUNDTJANST?>" class="menu-link <?php if ($page_title == 'Kundtjänst') { echo 'current';} ?>">Kundtjänst</a></li>

            <li><a href="<?php echo MINASIDOR?>" class="menu-link <?php if ($page_title == 'Mina Sidor' || $page_title == 'Boka Ny Resa' || $page_title == 'Bokade Resor' || $page_title == 'Återkommande Resor' || $page_title == 'Boka Återkommande Resa' || $page_title == 'Mina Återkommande Resor' || $page_title == 'Gamla Resor' || $page_title == 'Min Profil') { echo 'current';} ?>">Mina Sidor</a></li>

             <?php if (isset($_SESSION['loggedin'])) { 
               echo "<li><a href='" .  LOGOUT . "' class='menu-link logout-btn'><i class='fas fa-sign-out-alt'></i>Logga Ut</a></li>"; 
               }; ?>
          </ul>
        </nav>

        <!-- Search Bar -->
        <div id="search">
          <a href="#" id="search-icon" onclick="elementDisplay(searchBar, 'block'), elementDisplay(closeSearch, 'block'), elementFocus(searchBar)" class="menu-link"
            aria-label="Open Search">
            <i class="fas fa-search"></i>
          </a>

          <a href="#" id="search-icon--close" onclick="elementDisplay(searchBar, 'none'), elementDisplay(closeSearch, 'none')" aria-label="Close Search" aria-hidden="true">
            <i class="fas fa-times"></i>
          </a>
          
          <input id="searchbar" type="text" autocomplete="on" aria-hidden="true">
        </div>
      </div>
    </header>