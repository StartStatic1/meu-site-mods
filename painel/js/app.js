// ============================================
// PAINEL ADMINISTRATIVO - ApkBugado
// ============================================

const STORAGE_KEY = 'apkbugado_apps';
const CATEGORIES = ['Entretenimento', 'Música', 'Educação', 'Aventura', 'Ação', 'Ferramentas', 'Social', 'Fotografia'];

// ============================================
// GERENCIAMENTO DE DADOS
// ============================================

function getApps() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : getDefaultApps();
}

function saveApps(apps) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
}

function getDefaultApps() {
    return [
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
            screenshots: [],
            downloadUrl: "",
            telegramUrl: "",
            description: "YouTube Premium Mod permite aproveitar todos os recursos premium do YouTube sem custo algum.",
            modFeatures: ["Sem anúncios", "Reprodução em segundo plano", "Downloads offline"],
            featured: true,
            popular: true
        }
    ];
}

function generateId(name) {
    return name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
}

// ============================================
// NAVEGAÇÃO
// ============================================

function showPage(pageId) {
    // Esconder todas as páginas
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    // Mostrar página selecionada
    document.getElementById(pageId).classList.add('active');
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

    // Atualizar título
    const titles = {
        'dashboard': 'Dashboard',
        'apps': 'Gerenciar Apps',
        'add-app': 'Adicionar App',
        'categories': 'Categorias',
        'settings': 'Configurações'
    };
    document.getElementById('pageTitle').textContent = titles[pageId] || 'Dashboard';

    // Fechar sidebar no mobile
    document.getElementById('sidebar').classList.remove('active');

    // Atualizar conteúdo específico
    if (pageId === 'dashboard') updateDashboard();
    if (pageId === 'apps') renderAppsTable();
}

// ============================================
// DASHBOARD
// ============================================

function updateDashboard() {
    const apps = getApps();
    const totalApps = apps.filter(a => a.type === 'app').length;
    const totalGames = apps.filter(a => a.type === 'game').length;
    const totalDownloads = apps.reduce((sum, a) => sum + (a.downloads || 0), 0);
    const featuredCount = apps.filter(a => a.featured).length;

    document.getElementById('dashTotalApps').textContent = totalApps;
    document.getElementById('dashTotalGames').textContent = totalGames;
    document.getElementById('dashTotalDownloads').textContent = formatNumber(totalDownloads);
    document.getElementById('dashFeatured').textContent = featuredCount;

    // Últimos apps adicionados
    const recentApps = [...apps].reverse().slice(0, 5);
    const recentList = document.getElementById('recentAppsList');
    if (recentList) {
        recentList.innerHTML = recentApps.map(app => `
            <div class="app-cell" style="padding: 12px 0;">
                <img src="${app.icon || 'https://via.placeholder.com/40x40/1a1a2e/00d26a?text=' + app.name.charAt(0)}" 
                     alt="${app.name}" onerror="this.src='https://via.placeholder.com/40x40/1a1a2e/00d26a?text=${app.name.charAt(0)}'">
                <div class="app-cell-info">
                    <span class="app-cell-name">${app.name}</span>
                    <span class="app-cell-version">${app.version} • ${app.category}</span>
                </div>
            </div>
        `).join('');
    }
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

// ============================================
// TABELA DE APPS
// ============================================

function renderAppsTable() {
    const apps = getApps();
    const tbody = document.getElementById('appsTableBody');
    const emptyState = document.getElementById('appsEmptyState');

    if (apps.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    tbody.innerHTML = apps.map(app => `
        <tr>
            <td>
                <div class="app-cell">
                    <img src="${app.icon || 'https://via.placeholder.com/40x40/1a1a2e/00d26a?text=' + app.name.charAt(0)}" 
                         alt="${app.name}" onerror="this.src='https://via.placeholder.com/40x40/1a1a2e/00d26a?text=${app.name.charAt(0)}'">
                    <div class="app-cell-info">
                        <span class="app-cell-name">${app.name}</span>
                        <span class="app-cell-version">${app.version}</span>
                    </div>
                </div>
            </td>
            <td><span class="badge badge-${app.type}">${app.type === 'app' ? 'App' : 'Jogo'}</span></td>
            <td>${app.category}</td>
            <td><span class="badge badge-${app.modType.toLowerCase()}">${app.modType}</span></td>
            <td>${app.rating}/5</td>
            <td>${formatNumber(app.downloads || 0)}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-icon" onclick="editApp('${app.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon danger" onclick="deleteApp('${app.id}')" title="Excluir">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function searchApps() {
    const query = document.getElementById('searchApps').value.toLowerCase();
    const apps = getApps();
    const filtered = apps.filter(app => 
        app.name.toLowerCase().includes(query) ||
        app.developer.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query)
    );

    const tbody = document.getElementById('appsTableBody');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted)">Nenhum app encontrado</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(app => `
        <tr>
            <td>
                <div class="app-cell">
                    <img src="${app.icon || 'https://via.placeholder.com/40x40/1a1a2e/00d26a?text=' + app.name.charAt(0)}" 
                         alt="${app.name}" onerror="this.src='https://via.placeholder.com/40x40/1a1a2e/00d26a?text=${app.name.charAt(0)}'">
                    <div class="app-cell-info">
                        <span class="app-cell-name">${app.name}</span>
                        <span class="app-cell-version">${app.version}</span>
                    </div>
                </div>
            </td>
            <td><span class="badge badge-${app.type}">${app.type === 'app' ? 'App' : 'Jogo'}</span></td>
            <td>${app.category}</td>
            <td><span class="badge badge-${app.modType.toLowerCase()}">${app.modType}</span></td>
            <td>${app.rating}/5</td>
            <td>${formatNumber(app.downloads || 0)}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-icon" onclick="editApp('${app.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon danger" onclick="deleteApp('${app.id}')" title="Excluir">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ============================================
// ADICIONAR / EDITAR APP
// ============================================

let editingAppId = null;
let modFeatures = [];
let screenshots = [];

function openAddModal() {
    editingAppId = null;
    modFeatures = [];
    screenshots = [];
    document.getElementById('modalTitle').textContent = 'Adicionar Novo App';
    document.getElementById('appForm').reset();
    document.getElementById('featuresTags').innerHTML = '';
    document.getElementById('screenshotsPreview').innerHTML = '';
    document.getElementById('iconPreview').innerHTML = '';
    document.getElementById('appModal').classList.add('active');
}

function editApp(appId) {
    const apps = getApps();
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    editingAppId = appId;
    modFeatures = [...(app.modFeatures || [])];
    screenshots = [...(app.screenshots || [])];

    document.getElementById('modalTitle').textContent = 'Editar App';
    document.getElementById('appName').value = app.name;
    document.getElementById('appVersion').value = app.version;
    document.getElementById('appModType').value = app.modType;
    document.getElementById('appDeveloper').value = app.developer;
    document.getElementById('appCategory').value = app.category;
    document.getElementById('appType').value = app.type;
    document.getElementById('appSize').value = app.size;
    document.getElementById('appUpdateDate').value = app.updateDate;
    document.getElementById('appRequirements').value = app.requirements;
    document.getElementById('appRating').value = app.rating;
    document.getElementById('appVotes').value = app.votes;
    document.getElementById('appDownloads').value = app.downloads;
    document.getElementById('appIcon').value = app.icon || '';
    document.getElementById('appDownloadUrl').value = app.downloadUrl || '';
    document.getElementById('appTelegramUrl').value = app.telegramUrl || '';
    document.getElementById('appDescription').value = app.description || '';
    document.getElementById('appFeatured').checked = app.featured || false;
    document.getElementById('appPopular').checked = app.popular || false;

    renderFeaturesTags();
    renderScreenshotsPreview();

    if (app.icon) {
        document.getElementById('iconPreview').innerHTML = `
            <div class="image-preview-item" style="width:80px;height:80px;">
                <img src="${app.icon}" alt="Ícone" onerror="this.src='https://via.placeholder.com/80x80/1a1a2e/00d26a?text=?'">
            </div>
        `;
    }

    document.getElementById('appModal').classList.add('active');
}

function closeModal() {
    document.getElementById('appModal').classList.remove('active');
}

// Features (Tags)
function addFeature() {
    const input = document.getElementById('featureInput');
    const value = input.value.trim();
    if (!value) return;

    modFeatures.push(value);
    input.value = '';
    renderFeaturesTags();
}

function removeFeature(index) {
    modFeatures.splice(index, 1);
    renderFeaturesTags();
}

function renderFeaturesTags() {
    const container = document.getElementById('featuresTags');
    container.innerHTML = modFeatures.map((feat, i) => `
        <span class="tag-item">
            ${feat}
            <button type="button" onclick="removeFeature(${i})"><i class="fas fa-times"></i></button>
        </span>
    `).join('');
}

// Screenshots
function addScreenshot() {
    const input = document.getElementById('screenshotInput');
    const value = input.value.trim();
    if (!value) return;

    screenshots.push(value);
    input.value = '';
    renderScreenshotsPreview();
}

function removeScreenshot(index) {
    screenshots.splice(index, 1);
    renderScreenshotsPreview();
}

function renderScreenshotsPreview() {
    const container = document.getElementById('screenshotsPreview');
    container.innerHTML = screenshots.map((url, i) => `
        <div class="image-preview-item">
            <img src="${url}" alt="Screenshot" onerror="this.src='https://via.placeholder.com/100x100/1a1a2e/00d26a?text=IMG'">
            <button type="button" class="remove-img" onclick="removeScreenshot(${i})"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}

// Icon preview
function previewIcon() {
    const url = document.getElementById('appIcon').value.trim();
    const preview = document.getElementById('iconPreview');
    if (!url) {
        preview.innerHTML = '';
        return;
    }
    preview.innerHTML = `
        <div class="image-preview-item" style="width:80px;height:80px;">
            <img src="${url}" alt="Ícone" onerror="this.src='https://via.placeholder.com/80x80/1a1a2e/00d26a?text=?'">
        </div>
    `;
}

// Salvar app
function saveApp(e) {
    e.preventDefault();

    const apps = getApps();
    const appData = {
        id: editingAppId || generateId(document.getElementById('appName').value),
        name: document.getElementById('appName').value,
        version: document.getElementById('appVersion').value,
        modType: document.getElementById('appModType').value,
        developer: document.getElementById('appDeveloper').value,
        category: document.getElementById('appCategory').value,
        type: document.getElementById('appType').value,
        size: document.getElementById('appSize').value,
        updateDate: document.getElementById('appUpdateDate').value,
        requirements: document.getElementById('appRequirements').value,
        rating: parseFloat(document.getElementById('appRating').value) || 0,
        votes: parseInt(document.getElementById('appVotes').value) || 0,
        downloads: parseInt(document.getElementById('appDownloads').value) || 0,
        icon: document.getElementById('appIcon').value,
        screenshots: screenshots,
        downloadUrl: document.getElementById('appDownloadUrl').value,
        telegramUrl: document.getElementById('appTelegramUrl').value,
        description: document.getElementById('appDescription').value,
        modFeatures: modFeatures,
        featured: document.getElementById('appFeatured').checked,
        popular: document.getElementById('appPopular').checked
    };

    if (editingAppId) {
        const index = apps.findIndex(a => a.id === editingAppId);
        if (index !== -1) apps[index] = appData;
    } else {
        // Verificar se já existe
        if (apps.some(a => a.id === appData.id)) {
            appData.id = appData.id + '-' + Date.now();
        }
        apps.push(appData);
    }

    saveApps(apps);
    closeModal();
    showToast(editingAppId ? 'App atualizado com sucesso!' : 'App adicionado com sucesso!', 'success');

    if (document.getElementById('apps').classList.contains('active')) {
        renderAppsTable();
    } else {
        showPage('apps');
    }
}

function deleteApp(appId) {
    if (!confirm('Tem certeza que deseja excluir este app?')) return;

    const apps = getApps().filter(a => a.id !== appId);
    saveApps(apps);
    renderAppsTable();
    showToast('App excluído com sucesso!', 'success');
}

// ============================================
// EXPORTAR PARA O SITE
// ============================================

function exportToSite() {
    const apps = getApps();
    const jsonData = JSON.stringify(apps, null, 2);

    // Criar arquivo para download
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'appsDatabase.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Arquivo appsDatabase.json exportado! Substitua no js/data.js do site.', 'success');
}

function copyDatabaseCode() {
    const apps = getApps();
    const header = '// ============================================\n// BASE DE DADOS DE APKS\n// Para adicionar/editar apps, use o Painel (/painel)\n// ou edite diretamente este arquivo.\n// ============================================\n\n';
    const code = header + `const appsDatabase = ${JSON.stringify(apps, null, 4)};\n`;

    navigator.clipboard.writeText(code).then(() => {
        showToast('Código copiado! Cole no arquivo js/data.js do site.', 'success');
    }).catch(() => {
        // Fallback: criar textarea temporário
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Código copiado! Cole no arquivo js/data.js do site.', 'success');
    });
}

function clearAllData() {
    if (!confirm('Tem certeza? Isso apagará TODOS os apps cadastrados. Esta ação não pode ser desfeita.')) return;
    localStorage.removeItem(STORAGE_KEY);
    showToast('Todos os dados foram apagados.', 'success');
    showPage('dashboard');
}

// ============================================
// CONFIGURAÇÕES
// ============================================

function saveSettings(e) {
    e.preventDefault();
    const siteName = document.getElementById('settingSiteName').value;
    const telegramUrl = document.getElementById('settingTelegram').value;
    const siteDescription = document.getElementById('settingDescription').value;

    localStorage.setItem('apkbugado_settings', JSON.stringify({
        siteName,
        telegramUrl,
        siteDescription
    }));

    showToast('Configurações salvas com sucesso!', 'success');
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('apkbugado_settings') || '{}');
    if (settings.siteName) document.getElementById('settingSiteName').value = settings.siteName;
    if (settings.telegramUrl) document.getElementById('settingTelegram').value = settings.telegramUrl;
    if (settings.siteDescription) document.getElementById('settingDescription').value = settings.siteDescription;
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

function init() {
    // Menu toggle
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Nav items
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
        item.addEventListener('click', () => showPage(item.dataset.page));
    });

    // Forms
    document.getElementById('appForm').addEventListener('submit', saveApp);
    document.getElementById('settingsForm').addEventListener('submit', saveSettings);

    // Feature input (Enter)
    document.getElementById('featureInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); addFeature(); }
    });

    // Screenshot input (Enter)
    document.getElementById('screenshotInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); addScreenshot(); }
    });

    // Search
    document.getElementById('searchApps').addEventListener('input', searchApps);

    // Load settings
    loadSettings();

    // Show dashboard
    showPage('dashboard');
}

document.addEventListener('DOMContentLoaded', init);
