const articles = [
    // ##### ABOUT #####
    {
        id: 1,
        title: "Vad är färdtjänst?",
        text: `<p class="article-text">Färdtjänst är en del av kollektivtrafiken för personer med stora svårigheter att förflytta sig på egen hand och med den vanliga kollektivtrafiken.</p>
            <p class="article-text">Du kan få färdtjänst med personbil eller specialfordon, beroende på ditt behov. Om du till exempel sitter i rullstol, finns det plats för detta i specialfordon.</p>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 2,
        title: "Vem får färdtjänst?",
        text: `<p class="article-text">En person uppfyller grundkraven för färdtjänst om personen:</p>
            <ul class="article-list">
                    <li>har stora svårigheter att förflytta sig på egen hand,</li>
                    <li>har svårt att använda sig av vanlig kollektivtrafik,</li>
                    <li>har en icke-tillfällig funktionsnedsättning som funnits i minst sex månader och som förväntas fortsätta,</li>
                    <li>är bosatt i kommunen där denne ansöker om färdtjänst.</li>
            </ul>
            <p class="article-text">Vem som har rätt till färdtjänst regleras av <a href="https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1997736-om-fardtjanst_sfs-1997-736" class="article-link" target="_blank">färdtjänstlagen</a>.</p>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 3,
        title: "Hur ansöker man om färdtjänst?",
        text: `<p class="article-text">Du ansöker om färdtjänst i kommunen där du bor och är folkbokförd.</p>
        <p class="article-text"><strong>Ansökningsprocessen är följande: </strong></p>
            <ol class="article-list ordered" type="A">
                    <li>Du behöver ett läkarintyg som intygar att du har en funktionsnedsättning som gör det svårt att resa med kommunaltrafiken.</li>
                    <li>Läkarintyget skickas in till kommunen där du är folkbokförd.</li>
                    <li>En utredare på kommunen kontaktar dig för att boka ett möte.</li>
                    <li>Du beskriver dina svårigheter i en ansökningsblankett som du kan hitta via <a href="https://fardtjansten.sll.se/globalassets/formular/ansokan-om-fardtjanst.pdf" class="article-link" target="_blank">denna länk</a>, eller få av utredaren. Ta med ett nytaget fotografi på dig själv till besöket.</li>
                    <li>Kommunen skickar samtliga handlingar till Färdtjänsten på Trafikförvaltningen som fattar beslut om färdtjänst beviljas.</li>
            </ol>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 4,
        title: "Ledsagare",
        text: `<p class="article-text ingress">En ledsagare är en person som följer med och hjälper till under resan om man inte klarar av att åka ensam, till exempel en personlig assistent. </p>
            <ul class="article-list">
                    <li>En ledsagare åker med utan extra kostnad.</li>
                    <li>Du som har rätt att ta med en ledsagare kan inte ta med en medresenär.</li>
            </ul>
            <p class="article-text">Om du behöver en ledsagare nämner du detta när du ansöker om färdtjänst.</p>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 5,
        title: "Medresenärer",
        text: `<p class="article-text">Du som inte har tillstånd att ta med dig ledsagare kan ta med dig en extra person på dina resor.</p>
            <ul class="article-list">
                    <li>Kostar 20 kronor extra per resa.</li>
                    <li>Avgiften tillkommer på din faktura.</li>
            </ul>
            <h3 class="article-heading-small">Om flera ska med på resan</h3>
            <p class="article-text">Om du vill ta med fler än en medresenär, eller om du åker med ledsagare men då också tar med dig en medresenär, betalar du en <strong>särskilt avgift</strong> för resan. Denna är <strong>resans halva taxameterbelopp</strong>, men som lägst 60 kronor.</p>
            <p class="article-text">Du har rätt att ta med upp till <strong>tre egna barn och syskon som är registrerade</strong> på ditt färdtjänsttillstånd <strong>utan extra kostnad</strong>.</p>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 6,
        title: "Överklaga beslut",
        text: `<p class="article-text">Om du vill överklaga beslutet kring din färdtjänst kan du göra detta hos förvaltningsrätten. Du skriver då ett brev som du sänder till adressen nedan.</p>
            <ul class="article-list address">
                    <li>Färdtjänsten</li>
                    <li>Box 30103</li>
                    <li>104 25 Stockholm</li>
            </ul>
            <p class="article-text">Brevet måste komma in inom tre veckor från den dag du tog del av beslutet, och ska innehålla information om vad du vill överklaga. Inkludera</p>
            <ul class="article-list">
                <li>vilket beslut du vill överklaga,</li>
                <li>hur du vill att beslutet ska ändras,</li>
                <li>varför du vill att beslutet ska ändras,</li>
                <li>ditt namn och personnummer,</li>
                <li>din underskrift.</li>
            </ul>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 7,
        title: "Hur många resor får jag göra?",
        text: `
        <p class="article-text">Hur många resor du får göra beror på ditt tillstånd. Du kan se hur många resor du har kvar genom att gå in på <a href="minprofil.php" class="article-link">Min Profil</a> som du når genom att logga in på <a href="minasidor.php" class="article-link">Mina Sidor</a>.</p>
        
        <h3 class="article-heading-small">Om du har slut på resor</h3>
        
        <p class="article-text">Om du har slut på resor kan du ansöka om fler färdtjänstresor för specifika ändamål. Dessa inkluderar resor till och från</p>
        <ul class="article-list">
                <li>betalt arbete,</li>
                <li>studier,</li>
                <li>förtroendeuppdrag,</li>
                <li>rehabilitering.</li>
        </ul>`,
        category: "about",
        status: null,
        pub_date: '2020-12-24'
    },



    // ##### SERVICE #####
    {
        id: 8,
        title: "Hur bokar jag en resa?",
        text:
            `
            <h4 class="article-heading-small">Boka via Mina Sidor</h4>

            <ol class="article-list ordered">
                    <li>Logga in på <a href="minasidor.php" target="_blank" class="article-link">Mina Sidor</a>.</li>
                    <li>Gå in på <a href="bokaresa.php" target="_blank" class="article-link">Boka Ny Resa</a></li>
                    <li>Fyll i resedetaljerna för din resa.</li>
                    <li>Tryck på Boka.</li>
                    <li>Du får en bekräftelse på bokad resa.</li>
            </ol>

            <h4 class="article-heading-small">Ring och boka</h4>

            <p class="article-text">Du kan ringa och boka en resa via våran växel som är öppen dygnet runt på nummer <a href="tel:012345678" class="article-link">01 - 234 56 78</a>.</p>
        
            <p class="article-text">Att tänka på inför:</p>
            <ul class="article-list">
                <li>Ha ditt kundnummer tillgängligt.</li>
                <li>Boka din resa i god tid.</li>
            </ul>

            <h4 class="article-heading-small">Hur lång tid i förväg måste jag boka?</h4>
            <p class="article-text">Tänk på att beställa din resa i god tid innan du ska resa, så att det finns tidsmarginal.</p>
            <p class="article-text">Vi rekommenderar att du bokar din resa minst 30 minuter innan upphämtning.</p>
            `
        ,
        category: "service",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 9,
        title: "Hur avbokar jag en resa?",
        text:
            `
            <h4 class="article-heading-small">Avboka via Mina Sidor</h4>

            <ol class="article-list ordered">
                    <li>Logga in på <a href="minasidor.php" target="_blank" class="article-link">Mina Sidor</a>.</li>
                    <li>Gå in på <a href="bokaderesor.php" target="_blank" class="article-link">Bokade Resor</a></li>
                    <li>Hitta bokningen som du vill avboka.</li>
                    <li>Tryck på Avboka.</li>
                    <li>Du får en bekräftelse på avbokad resa.</li>
            </ol>

            <h4 class="article-heading-small">Ring och avboka</h4>

            <p class="article-text">Du kan ringa och avboka en resa via våran växel som är öppen dygnet runt på nummer <a href="tel:012345678" class="article-link">01 - 234 56 78</a>.</p>
        
            <p class="article-text">Att tänka på inför:</p>
            <ul class="article-list">
                <li>Ha ditt kundnummer tillgängligt.</li>
                <li>Ha din bokningreferens tillgänglig.</li>
                <li>Avboka din resa i god tid.</li>
            </ul>

            <h4 class="article-heading-small">Hur lång tid i förväg måste jag avboka?</h4>
            <p class="article-text">Avboka din resa i god tid, <strong>minst en halvtimme innan upphämtning</strong>.</p>

            <h4 class="article-heading-small">Vad händer om jag inte avbokar en resa?</h4>
            <p class="article-text">Om du inte avbokar en resa som du inte avser att nyttja, senast en halvtimma innan utsatt upphämtning, dras en resa från ditt resesaldo.</p>
            `
        ,
        category: "service",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 10,
        title: "Hur ändrar jag en resa?",
        text:
            `
            <h4 class="article-heading-small">Ändra resa via Mina Sidor</h4>

            <ol class="article-list ordered">
                    <li>Logga in på <a href="minasidor.php" target="_blank" class="article-link">Mina Sidor</a>.</li>
                    <li>Gå in på <a href="bokaderesor.php" target="_blank" class="article-link">Bokade Resor</a></li>
                    <li>Hitta bokningen som du vill ändra.</li>
                    <li>Tryck på Ändra.</li>
                    <li>Gör önskade ändringar i resedetaljerna.</li>
                    <li>Tryck på Spara Ändringar.</li>
                    <li>Du får en bekräftelse på ändrad resa.</li>
            </ol>

            <h4 class="article-heading-small">Ring och ändra resa</h4>

            <p class="article-text">Du kan ringa och ändra en resa via våran växel som är öppen dygnet runt på nummer <a href="tel:012345678" class="article-link">01 - 234 56 78</a>.</p>
        
            <p class="article-text">Att tänka på inför:</p>
            <ul class="article-list">
                <li>Ha ditt kundnummer tillgängligt.</li>
                <li>Ha din bokningreferens tillgänglig.</li>
                <li>Ändra din resa i god tid.</li>
            </ul>

            <h4 class="article-heading-small">Hur lång tid i förväg måste jag ändra en resa?</h4>
            <p class="article-text">Ändra din resa i god tid, <strong>minst en halvtimme innan upphämtning</strong>.</p>
            `
        ,
        category: "service",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 11,
        title: "Hur fungerar återkommande resor?",
        text:
            `<p class="article-text">Du kan boka resor som du gör regelbundet på samma veckodag och tid genom att boka en Återkommande Resa.</p>

            <p class="article-text">Kraven för att lägga upp en återkommande resa är att:</p>

            <ul class="article-list">
                    <li>resoror gäller under minst 3 månader,</li>
                    <li>resorna sker minst en gång per vecka,</li>
                    <li>du har tillräckligt många resor. Tänk på att du kan ha ett begränsat antal resor.</li>
            </ul>

            <h4 class="article-heading-small">Boka återkommande resa via Mina Sidor</h4>

            <ol class="article-list ordered">
                    <li>Logga in på <a href="minasidor.php" target="_blank" class="article-link">Mina Sidor</a>.</li>
                    <li>Gå in på <a href="aterkommande.php" target="_blank" class="article-link">Återkommande Resor</a>.</li>
                    <li>Välj <a href="bokaaterkommande.php" target="_blank" class="article-link">Boka Återkommande Resa</a>.</li>
                    <li>Fyll i resedetaljerna för din återkommande resa.</li>
                    <li>Tryck på Boka.</li>
                    <li>Du får en bekräftelse på bokad återkommande resa resa.</li>
            </ol>

            <h4 class="article-heading-small">Ring och boka återkommande resor</h4>

            <p class="article-text">Du kan ringa och boka en återkommande resa via våran växel som är öppen dygnet runt på nummer <a href="tel:012345678" class="article-link">01 - 234 56 78</a>.</p>`
        ,
        category: "service",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 12,
        title: "Min färdtjänst är försenad",
        text: `<p class="article-text">Om din beställda färdtjänst inte har dykt upp 20 minuter efter beställd tid, gäller resegarantin. </p>
            <p class="article-text">Du ringer i detta fall till <a href="tel:012345678" class="article-link">01 - 234 56 78</a> och får hjälp med att efterlysa din beställda taxi, eller med att beställa en ny om det skulle behövas.</p>`,
        category: "service",
        status: null,
        pub_date: '2020-12-24'
    },
    {
        id: 13,
        title: "Jag kan inte logga in",
        text: `<p class="article-text">Om du har glömt ditt lösenord eller av någon anledning har problem med att logga in, kontaktar du färdtjänstens kundtjänst på nummer  <a href="tel:012345678" class="article-link">01 - 234 56 78</a>.</p>`
        ,
        category: "service",
        status: null,
        pub_date: '2020-12-24'
    },



    // ##### NEWS #####
    {
        id: 14,
        title: "Att tänka på i Corona-tider",
        text: `<p class="article-text">Om du har förkylningssymptom, eller känner dig febrig,
GE FA-AN i att resa med färdtjänsten.</p>`,
        category: "news",
        status: "important",
        pub_date: '2020-12-24'
    },



    // ##### BOOK #####
    {
        id: 15,
        title: "Ring och Boka",
        text: `
                <p>Växeln öppen dygnet runt</p>
                <h3><i class="fas fa-phone"></i>Telefon</h3>
                <a href="tel:012345678">01 - 234 56 79</a>
                <div class="supporting-content">
                    <p>Att tänka på inför:</p>
                    <ul class="article-list">
                        <li>Ha ditt kundnummer tillgängligt.</li>
                        <li>Boka din resa i god tid.</li>
                    </ul>
                </div>
            `,
        category: "main contact",
        status: null,
        pub_date: '2020-12-24'
    },



    // ##### Tillgänglighetsredogörelse #####
    {
        id: 16,
        title: "Tillgänglighet",
        text: `
                <p class="article-text">Här hittar du information kring Färdtjänstens webbplats tillgänglighet.</p>

                <p class="article-text">Målet är att alla ska kunna ta del av webbplatsens information och tjänster. Brister kan dock dessvärre förekomma.</p>

                <p class="article-text">Här redovisas de brister som vi känner till, tillsammans med tidsplaner på när dessa är planerade att åtgärdas. </p>

                <h3 class="article-heading-medium">Kända brister för fardtjansten.domain</h3>
    
                <h4 class="article-heading-small">Bristområde 1</h4>
                <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc</p>

                <h4 class="article-heading-small">Bristområde 2</h4>
                <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc</p>

                <h4 class="article-heading-small">Bristområde 3</h4>
                <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc</p>

                <h4 class="article-heading-small">Bristområde 4</h4>
                <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc</p>

                <form class="rounded accessibility-form">
                <fieldset>
                    <legend>Påpeka Brister</legend>

                    <label for="email">Din E-Post</label><br>
                    <input type="text" id="email" name="email" aria-required="true" required autocomplete="on"><br>

                    <label class="message-label" for="message">Meddelande</label><br>
                    <textarea id="message" name="message" required></textarea><br>

                    <div class="feedback"></div>

                    <input type="submit" id="book-btn" onclick="alert(':)')" value="Skicka"
                        class="submit-btn btn rounded col-main">
                </fieldset>
            </form>
            `,
        category: "accessibility",
        status: null,
        pub_date: '2020-12-24'
    }
];
