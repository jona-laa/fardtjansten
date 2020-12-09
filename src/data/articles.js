const articles = [
    // ##### ABOUT #####
    {
        id: 1,
        title: "Vad är färdtjänst?",
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
        category: "about",
        status: null
    },
    {
        id: 2,
        title: "Vem får färdtjänst?",
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
        category: "about",
        status: null
    },
    {
        id: 3,
        title: "Hur ansöker man om färdtjänst?",
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
        category: "about",
        status: null
    },
    {
        id: 4,
        title: "Ledsagare",
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
        category: "about",
        status: null
    },
    {
        id: 5,
        title: "Medresenärer",
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
        category: "about",
        status: null
    },
    {
        id: 6,
        title: "Överklaga beslut",
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
        category: "about",
        status: null
    },
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
        category: "about",
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
        category: "about",
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
        category: "about",
        status: null
    },



    // ##### SERVICE #####
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



    // ##### NEWS #####
    {
        id: 13,
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
        id: 14,
        title: "Ring och Boka",
        text: `
                <p>Växeln öppen dygnet runt</p>
                <h3><i class="fas fa-phone"></i>Telefon</h3>
                <a href="tel:012345678">01 - 234 56 79</a>
                <div class="supporting-content">
                    <p>Att tänka på inför:</p>
                    <ul>
                        <li>Ha ditt kundnummer tillgängligt.</li>
                        <li>Boka din resa i god tid.</li>
                    </ul>
                </div>
            `,
        category: "call contact",
        status: null
    }
];
