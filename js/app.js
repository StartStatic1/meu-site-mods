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
    { id: "Ferramentas", name: "Ferramentas", icon: "fa-tools" },
    { id: "Social", name: "Social", icon: "fa-users" },
    { id: "Fotografia", name: "Fotografia", icon: "fa-camera" }
];

// ============================================
// COLEÇÕES
// ============================================

const collections = [
    {
        id: "battle-games",
        title: "Born for Battle",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/FF4444?text=Battle+Games",
        filterType: "game",
        count: 0
    },
    {
        id: "entertainment",
        title: "Entretenimento Premium",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/4444FF?text=Entertainment",
        filterCategory: "Entretenimento",
        count: 0
    },
    {
        id: "education",
        title: "Aprendizado Sem Limites",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/58CC02?text=Education",
        filterCategory: "Educação",
        count: 0
    },
    {
        id: "music",
        title: "Música Ilimitada",
        bgImage: "https://via.placeholder.com/400x200/1a1a2e/AA44AA?text=Music",
        filterCategory: "Música",
        count: 0
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

    const categoryCounts = {};
    appsDatabase.forEach(app => {
        categoryCounts[app.category] = (categoryCounts[app.category] || 0) + 1;
    });

    grid.innerHTML = categories.map(cat => {
        const count = cat.id === 'all' ? appsDatabase.length : (categoryCounts[cat.id] || 0);
        return `
            <div class="category-card" onclick="filterByCategory('${cat.id}')">
                <i class="fas ${cat.icon}"></i>
                <span>${cat.name}</span>
                <small style="color: var(--text-muted); font-size: 12px;">${count} itens</small>
            </div>
        `;
    }).join('');
}

function renderAppCard(app) {
    return `
        <a href="app.html?id=${app.id}" class="app-card">
            <div class="app-icon-wrapper">
                <img src="${app.icon}" alt="${app.name}" class="app-icon" 
                     onerror="this.src='https://via.placeholder.com/80x80/1a1a2e/00d26a?text=${encodeURIComponent(app.name.charAt(0))}'">
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

    if (apps.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 40px; grid-column: 1/-1;">Nenhum item encontrado.</p>';
        return;
    }

    container.innerHTML = apps.map(renderAppCard).join('');
}

function renderCollections() {
    const grid = document.getElementById('collectionsGrid');
    if (!grid) return;

    collections.forEach(col => {
        if (col.filterType) {
            col.count = appsDatabase.filter(a => a.type === col.filterType).length;
        } else if (col.filterCategory) {
            col.count = appsDatabase.filter(a => a.category === col.filterCategory).length;
        }
    });

    grid.innerHTML = collections.map(col => {
        const relatedApps = col.filterType
            ? appsDatabase.filter(a => a.type === col.filterType).slice(0, 3)
            : appsDatabase.filter(a => a.category === col.filterCategory).slice(0, 3);

        return `
            <div class="collection-card" onclick="openCollection('${col.id}')">
                <img src="${col.bgImage}" alt="${col.title}" class="collection-bg">
                <div class="collection-overlay">
                    <h3 class="collection-title">${col.title}</h3>
                    <div class="collection-apps">
                        ${relatedApps.map(app =>
                            `<img src="${app.icon}" alt="${app.name}" 
                                  onerror="this.src='https://via.placeholder.com/36x36/1a1a2e/00d26a?text=${encodeURIComponent(app.name.charAt(0))}'">`)
                            .join('')}
                        <span class="collection-count">${col.count} apps</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function updateStats() {
    const totalApps = appsDatabase.filter(a => a.type === 'app').length;
    const totalGames = appsDatabase.filter(a => a.type === 'game').length;
    const totalDownloads = appsDatabase.reduce((sum, a) => sum + (a.downloads || 0), 0);

    const appsEl = document.getElementById('totalApps');
    const gamesEl = document.getElementById('totalGames');
    const downloadsEl = document.getElementById('totalDownloads');

    if (appsEl) animateCounter(appsEl, totalApps);
    if (gamesEl) animateCounter(gamesEl, totalGames);
    if (downloadsEl) animateCounter(downloadsEl, totalDownloads, true);
}

function animateCounter(el, target, useFormat) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = useFormat ? formatNumber(current) : current;
    }, 30);
}

// ============================================
// FILTROS
// ============================================

function filterByCategory(categoryId) {
    if (categoryId === 'all') {
        renderAppsGrid('featuredApps', getFeaturedApps());
        renderAppsGrid('gamesGrid', getFeaturedGames());
        renderAppsGrid('popularGrid', getPopularApps());
        return;
    }

    const filtered = appsDatabase.filter(app => app.category === categoryId);
    renderAppsGrid('featuredApps', filtered.filter(a => a.type === 'app'));
    renderAppsGrid('gamesGrid', filtered.filter(a => a.type === 'game'));
    renderAppsGrid('popularGrid', filtered);

    const section = document.getElementById('apps');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function filterByType(type) {
    const filtered = getAppsByType(type);
    renderAppsGrid('featuredApps', type === 'app' ? filtered : []);
    renderAppsGrid('gamesGrid', type === 'game' ? filtered : []);

    const section = document.getElementById(type === 'app' ? 'apps' : 'games');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function searchApps() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    const query = input.value.toLowerCase().trim();
    if (!query) {
        initHome();
        return;
    }

    const filtered = appsDatabase.filter(app =>
        app.name.toLowerCase().includes(query) ||
        app.developer.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query)
    );

    renderAppsGrid('featuredApps', filtered.filter(a => a.type === 'app'));
    renderAppsGrid('gamesGrid', filtered.filter(a => a.type === 'game'));
    renderAppsGrid('popularGrid', []);

    const section = document.getElementById('apps');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================
// COLEÇÕES - NAVEGAÇÃO
// ============================================

function openCollection(colId) {
    const col = collections.find(c => c.id === colId);
    if (!col) return;

    let filtered;
    if (col.filterType) {
        filtered = appsDatabase.filter(a => a.type === col.filterType);
    } else if (col.filterCategory) {
        filtered = appsDatabase.filter(a => a.category === col.filterCategory);
    } else {
        filtered = appsDatabase;
    }

    renderAppsGrid('featuredApps', filtered.filter(a => a.type === 'app'));
    renderAppsGrid('gamesGrid', filtered.filter(a => a.type === 'game'));
    renderAppsGrid('popularGrid', []);

    const section = document.getElementById('apps');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================
// PÁGINA DE DETALHES (app.html)
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

    document.title = app.name + ' - ApkBugado';

    document.getElementById('bcAppName').textContent = app.name;
    document.getElementById('bcCategory').textContent = app.category;
    document.getElementById('detailName').textContent = app.name;
    document.getElementById('detailVersion').textContent = app.version + ' (' + app.modType + ')';
    document.getElementById('detailCategory').textContent = app.category;
    document.getElementById('detailStars').innerHTML = generateStars(app.rating);
    document.getElementById('detailRating').textContent = app.rating;
    document.getElementById('detailVotes').textContent = '(' + formatNumber(app.votes) + ' votos)';

    const iconImg = document.getElementById('detailIcon');
    iconImg.src = app.icon;
    iconImg.alt = app.name;
    iconImg.onerror = function () {
        this.src = 'https://via.placeholder.com/150x150/1a1a2e/00d26a?text=' + encodeURIComponent(app.name.charAt(0));
    };

    document.getElementById('infoDev').textContent = app.developer;
    document.getElementById('infoUpdate').textContent = app.updateDate;
    document.getElementById('infoSize').textContent = app.size;
    document.getElementById('infoVersion').textContent = app.version;
    document.getElementById('infoReq').textContent = app.requirements;

    // Download button
    var downloadBtn = document.getElementById('downloadBtn');
    if (app.downloadUrl) {
        downloadBtn.href = app.downloadUrl;
        downloadBtn.classList.remove('btn-disabled');
    } else {
        downloadBtn.removeAttribute('href');
        downloadBtn.classList.add('btn-disabled');
        downloadBtn.title = 'Link de download em breve';
        downloadBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showNotification('Link de download será adicionado em breve!');
        });
    }

    // Telegram button
    var telegramBtn = document.getElementById('telegramBtn');
    if (app.telegramUrl) {
        telegramBtn.href = app.telegramUrl;
    } else {
        telegramBtn.href = 'https://t.me/ApkBugado';
    }

    // Screenshots
    var screenshotsContainer = document.getElementById('screenshotsScroll');
    if (screenshotsContainer) {
        if (app.screenshots && app.screenshots.length > 0) {
            screenshotsContainer.innerHTML = app.screenshots.map(function (url) {
                return '<div class="screenshot-item">' +
                    '<img src="' + url + '" alt="Screenshot" onerror="this.parentElement.style.display=\'none\'">' +
                    '</div>';
            }).join('');
        } else {
            screenshotsContainer.innerHTML = '<p style="color: var(--text-muted); padding: 20px;">Nenhuma screenshot disponível.</p>';
        }
    }

    // Description
    var descContainer = document.getElementById('descriptionContent');
    if (descContainer) {
        var descHtml = app.description.replace(/\n/g, '<br>');
        descContainer.innerHTML = '<p>' + descHtml + '</p>';
    }

    // Mod features
    var modContainer = document.getElementById('modFeatures');
    if (modContainer) {
        modContainer.innerHTML = app.modFeatures.map(function (feature) {
            return '<div class="mod-feature-item">' +
                '<i class="fas fa-check-circle"></i>' +
                '<span>' + feature + '</span>' +
                '</div>';
        }).join('');
    }

    // Related apps
    var related = appsDatabase.filter(function (a) {
        return a.category === app.category && a.id !== app.id;
    }).slice(0, 4);

    if (related.length === 0) {
        related = appsDatabase.filter(function (a) {
            return a.id !== app.id;
        }).slice(0, 4);
    }

    renderAppsGrid('relatedApps', related);
}

// ============================================
// NOTIFICAÇÃO INLINE
// ============================================

function showNotification(message) {
    var existing = document.querySelector('.site-notification');
    if (existing) existing.remove();

    var notif = document.createElement('div');
    notif.className = 'site-notification';
    notif.innerHTML = '<i class="fas fa-info-circle"></i> ' + message;
    notif.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--bg-card);border:1px solid var(--accent-primary);color:var(--text-primary);padding:14px 24px;border-radius:12px;z-index:9999;font-size:14px;box-shadow:0 4px 20px rgba(0,0,0,0.4);display:flex;align-items:center;gap:8px;animation:fadeInUp 0.3s ease;';
    document.body.appendChild(notif);

    setTimeout(function () {
        notif.style.opacity = '0';
        notif.style.transform = 'translateX(-50%) translateY(10px)';
        notif.style.transition = 'all 0.3s ease';
        setTimeout(function () { notif.remove(); }, 300);
    }, 3000);
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
    // Menu mobile toggle
    var menuToggle = document.getElementById('menuToggle');
    var mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });

        // Close nav when clicking a link
        mainNav.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('active');
            });
        });
    }

    // Search on Enter
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') searchApps();
        });
        searchInput.addEventListener('input', function () {
            if (this.value === '') initHome();
        });
    }

    // Bottom nav active state
    var bottomLinks = document.querySelectorAll('.bottom-link');
    bottomLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            bottomLinks.forEach(function (l) { l.classList.remove('active'); });
            this.classList.add('active');
        });
    });

    // Detect page and init
    if (document.querySelector('.app-detail-page')) {
        initAppDetail();
    } else {
        initHome();
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
