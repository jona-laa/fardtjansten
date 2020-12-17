const articles = [
    // ##### ABOUT #####
    {
        id: 1,
        title: "Vad är färdtjänst?",
        text: `<p class="article-text">Färdtjänst är en del av kollektivtrafiken för personer 
med stora svårigheter att förflytta sig på egen hand 
eller genom att resa med den vanliga kollektivtrafiken.</p>
            <p class="article-text">Du kan få färdtjänst med personbil eller specialfordon, 
beroende på ditt behov. Om du till exempel sitter i 
rullstol, finns det plats för detta i specialfordon.</p>`,
        category: "about",
        status: null
    },
    {
        id: 2,
        title: "Vem får färdtjänst?",
        text: `<p class="article-text">En person uppfyller grundkraven för färdtjänst om:</p>
            <ul class="article-list">
                    <li> Personen har stora svårigheter att förflytta sig på egen hand.</li>
                    <li>Personen har svårt att använda sig av vanlig kollektivtrafik.</li>
                    <li>Personen har en icke-tillfällig funktionsnedsättning som funnits i minst sex månader och som förväntas fortsätta.</li>
                    <li>Personen är bosatt i kommunen där denne ansöker om färdtjänst.</li>
            </ul>
            <p class="article-text">Vem som har rätt till färdtjänst regleras av <a href="https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1997736-om-fardtjanst_sfs-1997-736" class="article-link" target="_blank">färdtjänstlagen</a>.</p>`,
        category: "about",
        status: null
    },
    {
        id: 3,
        title: "Hur ansöker man om färdtjänst?",
        text: `<p class="article-text">Du ansöker om färdtjänst i kommunen där du bor och är folkbokförd.</p>
        <p class="article-text">Ansökningsprocessen är följande: </p>
            <ol class="article-list ordered" type="A">
                    <li>Du behöver ett läkarintyg som intygar att du har en funktionsnedsättning som gör det svårt att resa med kommunaltrafiken.</li>
                    <li>Läkarintyget skickas in till kommunen där du är folkbokförd.</li>
                    <li>En utredare på kommunen kontaktar dig för att boka ett möte.</li>
                    <li>Du beskriver dina svårigheter i en ansökningsblankett som du får av utredaren. Ta med ett nytaget fotografi till besöket.</li>
                    <li>Kommunen skickar samtliga handlingar till Färdtjänsten på Trafikförvaltningen som fattar beslut om färdtjänst beviljas.</li>
            </ol>`,
        category: "about",
        status: null
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
        status: null
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
            <p class="article-text">Om du vill ta med <strong>fler än en medresenär</strong>, eller om du åker med ledsagare men då också tar med dig en medresenär, betalar du en <strong>särskilt avgift</strong> för redan. Denna är <strong>resans halva taxameterbelopp</strong>, men som lägst 60 kronor.</p>
            <p class="article-text">Du har rätt att ta med upp till <strong>tre egna barn och syskon som är registrerade</strong> på ditt färdtjänsttillstånd <strong>utan extra kostnad</strong>.</p>`,
        category: "about",
        status: null
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
            <p class="article-text">Brevet måste komma in inom tre veckor från den dag du tog del av beslutet, och ska innehålla information om vad du vill överklaga. Inkludera följande:</p>
            <ul class="article-list">
                <li>Vilket beslut du vill överklaga.</li>
                <li>Hur du vill att beslutet ska ändras.</li>
                <li>Varför du vill att beslutet ska ändras.</li>
                <li>Ditt namn och personnummer.</li>
                <li>Din underskrift.</li>
            </ul>`,
        category: "about",
        status: null
    },



    // ##### SERVICE #####
    {
        id: 7,
        title: "Hur bokar jag en resa?",
        text: `<p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "service",
        status: null
    },
    {
        id: 8,
        title: "Hur avbokar jag en resa?",
        text: `<p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "service",
        status: null
    },
    {
        id: 9,
        title: "Hur ändrar jag en bokning?",
        text: `<p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "service",
        status: null
    },
    {
        id: 10,
        title: "Färdtjänsten har inte kommit",
        text: `<p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "service",
        status: null
    },
    {
        id: 11,
        title: "Min färdtjänst är försenad",
        text: `<p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "service",
        status: null
    },
    {
        id: 12,
        title: "Jag kan inte logga in",
        text: `<p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "service",
        status: null
    },
    {
        id: 13,
        title: "Hur många resor får jag göra?",
        text: `
        <p class="article-text">Hur många resor du får göra beror på ditt tillstånd. Du kan se hur många resor du har kvar genom att gå in på <a href="minprofil.html" class="article-link">Min Profil</a> som du når genom att logga in på <a href="minasidor.html" class="article-link">Mina Sidor</a>.</p>
        
        <h4 class="article-heading-small">Om du har slut på resor</h4>
        
        <p class="article-text">Om du har slut på resor kan du ansöka om fler färdtjänstresor för specifika ändamål. Dessa inkluderar resor till och från:</p>
        <ul class="article-list">
                <li>Betalt arbete</li>
                <li>Studier</li>
                <li>Förtroendeuppdrag</li>
                <li>Rehabilitering</li>
        </ul>`,
        category: "service",
        status: null
    },



    // ##### NEWS #####
    {
        id: 14,
        title: "Att tänka på i Corona-tider",
        text: `<p class="article-text">Res inte med oss om du har förkylningssymptom eller känner dig sjuk. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ul class="article-list">
                    <li>Stora svårigheter att förflytta sig.</li>
                    <li>Har svårt att använda valig kollektivtrafik.</li>
                    <li>Funktionsnedsättning en längre period, minst 3 månader.</li>
                    <li>Handikapp är ej tillfälligt.</li>
            </ul>
            <p class="article-text">Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
        category: "news",
        status: "important"
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
        category: "call contact",
        status: null
    }
];
