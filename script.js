/* =========================================
   LANGUAGE TOGGLE
   ========================================= */

const langToggle = document.getElementById('lang-toggle');
let lang = localStorage.getItem('lang') || 'en';

function applyLang(l) {
    lang = l;
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.dataset[l] || el.dataset.en;
    });
    langToggle.textContent = l === 'en' ? 'ID' : 'EN';
    localStorage.setItem('lang', l);
}

langToggle.addEventListener('click', () => {
    applyLang(lang === 'en' ? 'id' : 'en');
});

applyLang(lang);


/* =========================================
   PROJECT DETAIL PANEL
   ========================================= */

const projects = {
    stethosoul: {
        num: '01',
        year: '2026',
        title: 'STETHOSOUL',
        overview: 'An early detection system for psychosis using automatic speech recognition and syntactic-semantic language analysis.',
        story: 'Stethosoul started from a simple question: what if we could catch the early signs of psychosis not through expensive clinical tests, but through something as natural as a conversation? The system records short audio clips, runs them through a speech recognition pipeline, then analyzes the resulting transcript for syntactic and semantic markers — things like tangential speech, loose associations, or poverty of verbal content — that correlate with early psychotic episodes. I handled the full stack: the ASR integration, the NLP analysis layer, the backend API, and the frontend interface.',
        tags: ['DESIGN', 'SYSTEM ARCHITECTURE', 'FRONTEND', 'BACKEND', 'NLP', 'ASR'],
        links: []
    },
    mosquito: {
        num: '02',
        year: '2026',
        title: 'MOSQUITO CLASSIFICATION',
        overview: 'A hybrid deep learning model combining a YOLO11 detection head with a ResNet18 backbone for mosquito species classification.',
        story: 'Indonesia has one of the highest mosquito-borne disease burdens in Southeast Asia. This project explored whether a lightweight hybrid model — a YOLO11 detection head grafted onto a ResNet18 backbone — could identify mosquito species from images accurately enough to be field-useful. The model was trained and evaluated on a labeled dataset of mosquito specimens. The main challenge was balancing model size against classification accuracy, since the target deployment context was resource-constrained.',
        tags: ['PYTHON', 'COMPUTER VISION', 'DEEP LEARNING', 'YOLO11', 'RESNET18', 'PYTORCH'],
        links: []
    },
    haven: {
        num: '03',
        year: '2026',
        title: 'HAVEN',
        overview: 'A private, local-first digital vault designed around encrypted personal data and optional cloud synchronization.',
        story: 'Haven came out of frustration with cloud storage. The premise is simple: your data should be encrypted before it ever touches a network. The architecture encrypts files at the item level using AES-256, stores them locally in a structured vault, and optionally syncs encrypted blobs to any S3-compatible bucket. The cloud never sees plaintext. The application is still in the exploration and design phase — the focus so far has been on getting the encryption model and sync protocol right before building the full UI.',
        tags: ['SYSTEM DESIGN', 'SECURITY', 'ENCRYPTION', 'DESKTOP', 'AES-256', 'S3'],
        links: []
    }
};

const panel      = document.getElementById('work-panel');
const overlay    = document.getElementById('panel-overlay');
const closeBtn   = document.getElementById('panel-close');
const panelNum   = document.getElementById('panel-num');
const panelYear  = document.getElementById('panel-year');
const panelTitle = document.getElementById('panel-title');
const panelOver  = document.getElementById('panel-overview');
const panelStory = document.getElementById('panel-story');
const panelTags  = document.getElementById('panel-tags');
const panelLinks = document.getElementById('panel-links');

function openPanel(projectKey) {
    const p = projects[projectKey];
    if (!p) return;

    panelNum.textContent   = p.num;
    panelYear.textContent  = p.year;
    panelTitle.textContent = p.title;
    panelOver.textContent  = p.overview;
    panelStory.textContent = p.story;

    panelTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

    panelLinks.innerHTML = p.links.length
        ? p.links.map(l => `<a href="${l.url}" target="_blank" class="panel-link">${l.label} ↗</a>`).join('')
        : '';

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.querySelectorAll('.work-item[data-project]').forEach(item => {
    item.addEventListener('click', () => openPanel(item.dataset.project));
});

closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

// Close on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
});
