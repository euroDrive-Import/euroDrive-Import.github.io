const translations = {
    es: {
        heroH1: "Tu coche de Alemania, sin moverte de casa.",
        heroBtn: "Empezar mi importación",
        footer: "© 2026 EuroDrive Import. Gestión profesional."
    },
    en: {
        heroH1: "Your car from Germany, delivered to your door.",
        heroBtn: "Start my import",
        footer: "© 2026 EuroDrive Import. Professional Management."
    }
};

function applyLanguage(lang) {
    localStorage.setItem('userLang', lang);
    const map = {
        'hero-h1': 'heroH1',
        'hero-btn': 'heroBtn',
        'footer-text': 'footer'
    };

    for (const [id, key] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) el.innerText = translations[lang][key];
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Tema
    let savedTheme = localStorage.getItem('userTheme');
    if (!savedTheme) {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        savedTheme = systemPrefersDark ? 'dark' : 'light';
    }
    document.body.setAttribute('data-theme', savedTheme);
    localStorage.setItem('userTheme', savedTheme);

    // Idioma
    const savedLang = localStorage.getItem('userLang') || 'es';
    const selector = document.getElementById('langSelector');
    if (selector) {
        selector.value = savedLang;
        selector.addEventListener('change', (e) => applyLanguage(e.target.value));
    }
    applyLanguage(savedLang);

    // Botón Tema
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('userTheme', next);
        });
    }
});