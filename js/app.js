// ============================================
// BASE DE DADOS DE APKS (AQUI VOCÊ CADASTRA!)
// ============================================

const appsDatabase = [
    {
        id: "youtube-premium",
        name: "YouTube Premium",
        version: "21.19.286",
        modType: "Mod",
        developer: "Google LLC",
        category: "Entretenimento",
        type: "app",
        size: "108.09 MB",
        updateDate: "7 de maio de 2026",
        requirements: "Android 8.0+",
        rating: 4.7,
        votes: 2289282,
        downloads: 5000000,
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_social_white_squircle.svg",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/00d26a?text=Screenshot+1",
            "https://via.placeholder.com/280x500/1a1a2e/00d26a?text=Screenshot+2",
            "https://via.placeholder.com/280x500/1a1a2e/00d26a?text=Screenshot+3"
        ],
        downloadUrl: "https://seu-link-de-download.com/youtube.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "YouTube Premium Mod permite aproveitar todos os recursos premium do YouTube sem custo algum. Reproduza vídeos em segundo plano, baixe conteúdo para assistir offline e aproveite uma experiência sem anúncios.",
        modFeatures: [
            "Sem anúncios (Ad-Free)",
            "Reprodução em segundo plano",
            "Downloads offline ilimitados",
            "YouTube Music incluído",
            "Qualidade 4K disponível",
            "Picture-in-Picture ativado"
        ],
        featured: true,
        popular: true
    },
    {
        id: "spotify-premium",
        name: "Spotify Premium",
        version: "8.9.42",
        modType: "Mod",
        developer: "Spotify Ltd",
        category: "Música",
        type: "app",
        size: "75.4 MB",
        updateDate: "10 de maio de 2026",
        requirements: "Android 7.0+",
        rating: 4.8,
        votes: 1543200,
        downloads: 3200000,
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/1DB954?text=Spotify+1",
            "https://via.placeholder.com/280x500/1a1a2e/1DB954?text=Spotify+2"
        ],
        downloadUrl: "https://seu-link-de-download.com/spotify.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "Spotify Premium Mod com todos os recursos desbloqueados. Ouça música sem anúncios, pulos ilimitados e qualidade extrema.",
        modFeatures: [
            "Sem anúncios de áudio",
            "Pulos ilimitados",
            "Qualidade extrema desbloqueada",
            "Downloads offline",
            "Modo offline ilimitado",
            "Spotify Connect disponível"
        ],
        featured: true,
        popular: true
    },
    {
        id: "netflix-premium",
        name: "Netflix Premium",
        version: "8.125.0",
        modType: "Mod",
        developer: "Netflix Inc",
        category: "Entretenimento",
        type: "app",
        size: "65.2 MB",
        updateDate: "5 de maio de 2026",
        requirements: "Android 8.0+",
        rating: 4.6,
        votes: 987654,
        downloads: 2100000,
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/E50914?text=Netflix+1",
            "https://via.placeholder.com/280x500/1a1a2e/E50914?text=Netflix+2"
        ],
        downloadUrl: "https://seu-link-de-download.com/netflix.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "Netflix Premium com acesso a todo o conteúdo sem restrições regionais.",
        modFeatures: [
            "4K UHD disponível",
            "Sem restrições regionais",
            "Múltiplos perfis",
            "Downloads ilimitados",
            "Sem anúncios",
            "Conteúdo Premium desbloqueado"
        ],
        featured: true,
        popular: true
    },
    {
        id: "minecraft",
        name: "Minecraft",
        version: "1.21.0",
        modType: "Mod",
        developer: "Mojang",
        category: "Aventura",
        type: "game",
        size: "180.5 MB",
        updateDate: "12 de maio de 2026",
        requirements: "Android 8.0+",
        rating: 4.9,
        votes: 3456789,
        downloads: 8500000,
        icon: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/55AA55?text=Minecraft+1",
            "https://via.placeholder.com/280x500/1a1a2e/55AA55?text=Minecraft+2"
        ],
        downloadUrl: "https://seu-link-de-download.com/minecraft.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "Minecraft completo com texturas e skins desbloqueadas. Modo criativo e sobrevivência ilimitado.",
        modFeatures: [
            "Texturas premium desbloqueadas",
            "Skins ilimitadas",
            "Mundos personalizados",
            "Mods integrados",
            "Multiplayer funcionando",
            "Sem licença necessária"
        ],
        featured: true,
        popular: true
    },
    {
        id: "gta-san-andreas",
        name: "GTA: San Andreas",
        version: "2.11.32",
        modType: "Mod",
        developer: "Rockstar Games",
        category: "Ação",
        type: "game",
        size: "2.4 GB",
        updateDate: "1 de maio de 2026",
        requirements: "Android 9.0+",
        rating: 4.8,
        votes: 2100000,
        downloads: 4500000,
        icon: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/FF6600?text=GTA+1",
            "https://via.placeholder.com/280x500/1a1a2e/FF6600?text=GTA+2"
        ],
        downloadUrl: "https://seu-link-de-download.com/gta.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "GTA San Andreas com mods de gráficos HD, dinheiro infinito e carros desbloqueados.",
        modFeatures: [
            "Dinheiro infinito",
            "Carros e armas desbloqueadas",
            "Gráficos HD melhorados",
            "Missões completadas",
            "Mapa completo desbloqueado",
            "Cheat menu integrado"
        ],
        featured: false,
        popular: true
    },
    {
        id: "duolingo-plus",
        name: "Duolingo Plus",
        version: "6.78.4",
        modType: "Mod",
        developer: "Duolingo",
        category: "Educação",
        type: "app",
        size: "45.3 MB",
        updateDate: "12 de maio de 2026",
        requirements: "Android 7.0+",
        rating: 4.5,
        votes: 890000,
        downloads: 1800000,
        icon: "https://upload.wikimedia.org/wikipedia/en/5/5c/Duolingo_logo_%282019%29.png",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/58CC02?text=Duolingo+1"
        ],
        downloadUrl: "https://seu-link-de-download.com/duolingo.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "Aprenda idiomas sem limites com Duolingo Plus. Sem anúncios e com funções premium.",
        modFeatures: [
            "Sem anúncios",
            "Vidas ilimitadas",
            "Funções Plus desbloqueadas",
            "Downloads offline",
            "Progresso ilimitado",
            "Todos os idiomas disponíveis"
        ],
        featured: true,
        popular: false
    },
    {
        id: "headway-premium",
        name: "Headway Premium",
        version: "3.162.1",
        modType: "Mod",
        developer: "Books Made Easy",
        category: "Educação",
        type: "app",
        size: "32.1 MB",
        updateDate: "14 de maio de 2026",
        requirements: "Android 7.0+",
        rating: 4.3,
        votes: 456000,
        downloads: 900000,
        icon: "https://via.placeholder.com/80x80/0055FF/FFFFFF?text=H",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/0055FF?text=Headway+1"
        ],
        downloadUrl: "https://seu-link-de-download.com/headway.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "Resumos de livros premium desbloqueados. Aprenda mais em menos tempo.",
        modFeatures: [
            "Todos os resumos desbloqueados",
            "Áudio disponível",
            "Sem anúncios",
            "Downloads ilimitados",
            "Funções premium ativas"
        ],
        featured: true,
        popular: false
    },
    {
        id: "simply-guitar",
        name: "Simply Guitar",
        version: "9.7.18",
        modType: "Mod",
        developer: "Simply Ltd",
        category: "Música",
        type: "app",
        size: "120 MB",
        updateDate: "9 de maio de 2026",
        requirements: "Android 8.0+",
        rating: 4.6,
        votes: 320000,
        downloads: 750000,
        icon: "https://via.placeholder.com/80x80/8B5CF6/FFFFFF?text=G",
        screenshots: [
            "https://via.placeholder.com/280x500/1a1a2e/8B5CF6?text=Guitar+1"
        ],
        downloadUrl: "https://seu-link-de-download.com/guitar.apk",
        telegramUrl: "https://t.me/seu_canal",
        description: "Aprenda violão com lições premium desbloqueadas.",
        modFeatures: [
            "Todas as lições desbloqueadas",
            "Sem anúncios",
            "Afinador premium",
            "Músicas ilimitadas",
            "Progresso salvo"
        ],
        featured: true,
        popular: false
    }
];

// ============================================
// CATEGORIAS
// ============================================

const categories = [
    { id: "all", name: "Todos", icon: "fa-th-large" },
    { id: "Entretenimento", name: "Entretenimento", icon: "fa-play-circle" },
    { id: "Música", name: "Música", icon: "fa-music" },
    { id: "Educação", name: "Educação", icon: "fa-graduation-cap" },
    { id: "Aventura", name: "Aventura", icon: "fa-mountain" },
    { id: "Ação", name: "Ação", icon: "fa-fist-raised" },
    { id: "Ferramentas", name: "Ferramentas", icon: "fa-tools" }
];

// ============================================
// COLEÇÕES
// ============================================

const collections = [
    {
        id: "battle-games",
        title: "Born for Battle",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/FF4444?text=Battle",
        apps: ["gta-san-andreas", "minecraft"],
        count: 4
    },
    {
        id: "personalization",
        title: "Personalize Beyond",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/4444FF?text=Personalize",
        apps: ["youtube-premium", "spotify-premium"],
        count: 47
    },
    {
        id: "gta-collection",
        title: "Grand Theft Auto",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/FF6600?text=GTA",
        apps: ["gta-san-andreas"],
        count: 11
    },
    {
        id: "pixel-games",
        title: "Legendary Pixel Games",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/AA44AA?text=Pixel",
        apps: ["minecraft"],
        count: 5
    }
];

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < fullStars; i++) html += '<i class="fas fa-star"></i>';
    if (hasHalf) html += '<i class="fas fa-star-half-alt"></i>';
    const empty = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < empty; i++) html += '<i class="far fa-star"></i>';
    return html;
}

function getAppsByType(type) {
    return appsDatabase.filter(app => app.type === type);
}

function getFeaturedApps() {
    return appsDatabase.filter(app => app.featured && app.type === 'app');
}

function getFeaturedGames() {
    return appsDatabase.filter(app => app.featured && app.type === 'game');
}

function getPopularApps() {
    return [...appsDatabase].sort((a, b) => b.downloads - a.downloads).slice(0, 6);
}

function getAppById(id) {
    return appsDatabase.find(app => app.id === id);
}

// ============================================
// RENDERIZAÇÃO
// ============================================

function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;

    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.id}')">
            <i class="fas ${cat.icon}"></i>
            <span>${cat.name}</span>
        </div>
    `).join('');
}

function renderAppCard(app) {
    return `
        <a href="app.html?id=${app.id}" class="app-card">
            <div class="app-icon-wrapper">
                <img src="${app.icon}" alt="${app.name}" class="app-icon" onerror="this.src='https://via.placeholder.com/80x80/1a1a2e/00d26a?text=${app.name.charAt(0)}'">
                <span class="app-badge">${app.modType}</span>
            </div>
            <div class="app-info">
                <h3 class="app-name">${app.name}</h3>
                <div class="app-meta">
                    <span class="app-version">${app.version} (${app.modType})</span>
                    <span class="app-developer">${app.developer}</span>
                    <span class="app-date">${app.updateDate}</span>
                </div>
                <div class="app-rating">
                    <span class="stars">${generateStars(app.rating)}</span>
                    <span class="rating-text">${app.rating}/5</span>
                </div>
            </div>
        </a>
    `;
}

function renderAppsGrid(containerId, apps) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = apps.map(renderAppCard).join('');
}

function renderCollections() {
    const grid = document.getElementById('collectionsGrid');
    if (!grid) return;

    grid.innerHTML = collections.map(col => `
        <div class="collection-card" onclick="openCollection('${col.id}')">
            <img src="${col.bgImage}" alt="${col.title}" class="collection-bg">
            <div class="collection-overlay">
                <h3 class="collection-title">${col.title}</h3>
                <div class="collection-apps">
                    ${col.apps.slice(0, 3).map(appId => {
                        const app = getAppById(appId);
                        return app ? `<img src="${app.icon}" alt="${app.name}">` : '';
                    }).join('')}
                    <span class="collection-count">+${col.count} mais</span>
                </div>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    const totalApps = appsDatabase.filter(a => a.type === 'app').length;
    const totalGames = appsDatabase.filter(a => a.type === 'game').length;
    const totalDownloads = appsDatabase.reduce((sum, a) => sum + a.downloads, 0);

    const appsEl = document.getElementById('totalApps');
    const gamesEl = document.getElementById('totalGames');
    const downloadsEl = document.getElementById('totalDownloads');

    if (appsEl) appsEl.textContent = totalApps;
    if (gamesEl) gamesEl.textContent = totalGames;
    if (downloadsEl) downloadsEl.textContent = formatNumber(totalDownloads);
}

// ============================================
// FILTROS
// ============================================

function filterByCategory(categoryId) {
    if (categoryId === 'all') {
        renderAppsGrid('featuredApps', getFeaturedApps());
        renderAppsGrid('gamesGrid', getFeaturedGames());
        return;
    }

    const filtered = appsDatabase.filter(app => app.category === categoryId);
    renderAppsGrid('featuredApps', filtered.filter(a => a.type === 'app'));
    renderAppsGrid('gamesGrid', filtered.filter(a => a.type === 'game'));
}

function filterByType(type) {
    const filtered = getAppsByType(type);
    renderAppsGrid('featuredApps', type === 'app' ? filtered : []);
    renderAppsGrid('gamesGrid', type === 'game' ? filtered : []);
    window.scrollTo({ top: document.getElementById(type === 'app' ? 'apps' : 'games').offsetTop - 100, behavior: 'smooth' });
}

function searchApps() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        initHome();
        return;
    }

    const filtered = appsDatabase.filter(app => 
        app.name.toLowerCase().includes(query) ||
        app.developer.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query)
    );

    renderAppsGrid('featuredApps', filtered);
    renderAppsGrid('gamesGrid', []);
    renderAppsGrid('popularGrid', []);
}

// ============================================
// PÁGINA DE DETALHES
// ============================================

function initAppDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('id');

    if (!appId) {
        window.location.href = 'index.html';
        return;
    }

    const app = getAppById(appId);
    if (!app) {
        window.location.href = 'index.html';
        return;
    }

    // Preencher dados
    document.getElementById('bcAppName').textContent = app.name;
    document.getElementById('bcCategory').textContent = app.category;
    document.getElementById('detailName').textContent = app.name;
    document.getElementById('detailVersion').textContent = `${app.version} (${app.modType})`;
    document.getElementById('detailCategory').textContent = app.category;
    document.getElementById('detailStars').innerHTML = generateStars(app.rating);
    document.getElementById('detailRating').textContent = app.rating;
    document.getElementById('detailVotes').textContent = `(${formatNumber(app.votes)} votos)`;

    const iconImg = document.getElementById('detailIcon');
    iconImg.src = app.icon;
    iconImg.alt = app.name;
    iconImg.onerror = function() {
        this.src = `https://via.placeholder.com/150x150/1a1a2e/00d26a?text=${app.name.charAt(0)}`;
    };

    // Info cards
    document.getElementById('infoDev').textContent = app.developer;
    document.getElementById('infoUpdate').textContent = app.updateDate;
    document.getElementById('infoSize').textContent = app.size;
    document.getElementById('infoVersion').textContent = app.version;
    document.getElementById('infoReq').textContent = app.requirements;

    // Botões
    document.getElementById('downloadBtn').href = app.downloadUrl;
    document.getElementById('telegramBtn').href = app.telegramUrl;

    // Screenshots
    const screenshotsContainer = document.getElementById('screenshotsScroll');
    if (screenshotsContainer) {
        screenshotsContainer.innerHTML = app.screenshots.map(url => `
            <div class="screenshot-item">
                <img src="${url}" alt="Screenshot" onerror="this.src='https://via.placeholder.com/280x500/1a1a2e/00d26a?text=Screenshot'">
            </div>
        `).join('');
    }

    // Descrição
    const descContainer = document.getElementById('descriptionContent');
    if (descContainer) {
        descContainer.innerHTML = `<p>${app.description}</p>`;
    }

    // Mod features
    const modContainer = document.getElementById('modFeatures');
    if (modContainer) {
        modContainer.innerHTML = app.modFeatures.map(feature => `
            <div class="mod-feature-item">
                <i class="fas fa-check-circle"></i>
                <span>${feature}</span>
            </div>
        `).join('');
    }

    // Related apps (mesma categoria)
    const related = appsDatabase.filter(a => a.category === app.category && a.id !== app.id).slice(0, 4);
    renderAppsGrid('relatedApps', related);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

function initHome() {
    renderCategories();
    renderAppsGrid('featuredApps', getFeaturedApps());
    renderAppsGrid('gamesGrid', getFeaturedGames());
    renderAppsGrid('popularGrid', getPopularApps());
    renderCollections();
    updateStats();
}

function init() {
    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Search on Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchApps();
        });
    }

    // Detectar página
    if (document.body.classList.contains('app-detail-page') || document.querySelector('.app-detail-page')) {
        initAppDetail();
    } else {
        initHome();
    }
}

// Scroll top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open collection
function openCollection(id) {
    alert('Coleção: ' + id + '\n(Implementar página de coleção)');
}

// Iniciar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);
