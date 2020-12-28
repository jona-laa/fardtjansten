const confirmedRef = document.querySelector('#confirmed-ref');
const confirmedGreeting = document.querySelector('#confirmed-greeting');


const queryParam = location.search.split('=')[1];

switch (queryParam) {
    case 'regular':
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.php">Bokade Resor</a>.';
        break;
    case 'reoccurring':
        confirmedRef.innerHTML = 'Du hittar alla dina återkommande resor på <a class="article-link" href="aterkommanderesor.php">Återkommande Resor</a>.';
        break;
    case 'update':
        confirmedGreeting.textContent = "Din resa är nu uppdaterad!"
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.php">Bokade Resor</a>.';
        break;
    case 'update_reoccurring':
        confirmedGreeting.textContent = "Din återkommande resa är nu uppdaterad!"
        confirmedRef.innerHTML = 'Du hittar alla dina återkommande resor på <a class="article-link" href="aterkommanderesor.php">Återkommande Resor</a>.';
        break;

    default:
        confirmedRef.innerHTML = 'Du hittar alla dina aktiva bokningar på <a class="article-link" href="bokaderesor.php">Bokade Resor</a>.';
}