/* =========================================
   LANGUAGE TOGGLE
   ========================================= */

const langBtns = document.querySelectorAll('[data-lang-btn]');
let lang = localStorage.getItem('lang') || 'en';

let activeProjectKey = null;

function applyLang(l) {
    lang = l;
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.dataset[l] || el.dataset.en;
    });

    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langBtn === l);
    });

    localStorage.setItem('lang', l);

    if (activeProjectKey && projects[activeProjectKey]) {
        const p = projects[activeProjectKey];
        if (panelType && p.type) {
            panelType.textContent = p.type[l] || p.type.en;
        }
        if (panelOver && p.overview) {
            panelOver.textContent = typeof p.overview === 'object' ? (p.overview[l] || p.overview.en) : p.overview;
        }
        if (panelStory && p.story) {
            panelStory.textContent = typeof p.story === 'object' ? (p.story[l] || p.story.en) : p.story;
        }
    }
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        applyLang(btn.dataset.langBtn);
    });
});

applyLang(lang);


/* =========================================
   PROJECT DETAIL PANEL
   ========================================= */

const projects = {
    stethosoul: {
        num: '01',
        year: '2026',
        type: { en: 'WORK / INTERN PROJECT', id: 'PROYEK KERJA / MAGANG' },
        title: 'STETHOSOUL',
        overview: {
            en: 'Stethosoul is a full-stack platform designed to support psychosis early detection through speech processing and linguistic analysis.',
            id: 'Stethosoul adalah platform full-stack yang dirancang untuk mendukung deteksi dini psikosis melalui pemrosesan suara dan analisis linguistik.'
        },
        story: {
            en: 'At BahasaKita, I contributed across the product lifecycle: designing the UI/UX in Figma, documenting the architecture and data flows, and building the application with Next.js and Go. I developed REST APIs, background workers connected through NATS, MongoDB integration, authentication and OTP flows, user and admin dashboards, and Midtrans payment integration. The focus was on turning a complex clinical workflow into a structured, usable web product.',
            id: 'Di BahasaKita, saya berkontribusi di sepanjang siklus produk: merancang UI/UX di Figma, mendokumentasikan arsitektur dan alur data, serta membangun aplikasi menggunakan Next.js dan Go. Saya mengembangkan REST API, worker latar belakang yang terhubung melalui NATS, integrasi MongoDB, alur autentikasi dan OTP, dashboard pengguna dan admin, serta integrasi pembayaran Midtrans. Fokus utamanya adalah mengubah alur kerja klinis yang kompleks menjadi produk web yang terstruktur dan mudah digunakan.'
        },
        tags: ['DESIGN', 'FIGMA', 'NEXT.JS', 'GOLANG', 'MONGODB', 'NATS', 'REST API', 'MIDTRANS', 'MINIO', 'SMTP', 'DOCKER', 'AUTHENTICATION', 'GITLAB'],
        links: []
    },
    mosquito: {
        num: '02',
        year: '2026',
        type: { en: 'THESIS PROJECT', id: 'PROYEK TUGAS AKHIR' },
        title: 'MOSQUITO CLASSIFICATION',
        overview: {
            en: 'A hybrid YOLO11 and ResNet18 model that detects and classifies Aedes aegypti, Aedes albopictus, and Culex quinquefasciatus.',
            id: 'Model hibrida YOLO11 dan ResNet18 yang mendeteksi serta mengklasifikasikan Aedes aegypti, Aedes albopictus, dan Culex quinquefasciatus.'
        },
        story: {
            en: 'I prepared and managed the dataset, designed the hybrid model architecture, trained and evaluated the model, and analyzed its performance. The model achieved 96.44% accuracy across three mosquito species. I also built a Python Flask web application so users could upload an image and receive a classification result through a simple interface.',
            id: 'Saya menyiapkan dan mengelola dataset, merancang arsitektur model hibrida, melatih dan mengevaluasi model, serta menganalisis performanya. Model ini berhasil mencapai akurasi 96,44% pada tiga spesies nyamuk. Saya juga membangun aplikasi web Python Flask agar pengguna dapat mengunggah gambar dan mendapatkan hasil klasifikasi melalui antarmuka yang sederhana.'
        },
        tags: ['PYTHON', 'YOLO11', 'RESNET18', 'COMPUTER VISION', 'DEEP LEARNING', 'FLASK'],
        links: []
    },
    psi: {
        num: '03',
        year: '2026',
        type: { en: 'WORK / INTERN PROJECT', id: 'PROYEK KERJA / MAGANG' },
        title: 'PSI INCENTIVE API',
        overview: {
            en: 'A backend service that supports academic-community incentive submissions through structured API endpoints and MongoDB data management.',
            id: 'Layanan backend yang mendukung pengajuan insentif civitas akademika melalui endpoint API yang terstruktur dan manajemen data MongoDB.'
        },
        story: {
            en: 'While working with Pusat Sistem Informasi Universitas Sumatera Utara, I developed backend services in Java and Spring Boot based on system requirements. I designed and managed the MongoDB database, integrated it with the API, tested and debugged the endpoints, and collaborated with other developers to deliver reliable system behavior.',
            id: 'Selama bekerja bersama Pusat Sistem Informasi Universitas Sumatera Utara, saya mengembangkan layanan backend dengan Java dan Spring Boot berdasarkan kebutuhan sistem. Saya merancang dan mengelola database MongoDB, mengintegrasikannya dengan API, menguji serta men-debug endpoint, dan berkolaborasi dengan pengembang lain untuk menghadirkan performa sistem yang andal.'
        },
        tags: ['JAVA', 'SPRING BOOT', 'MONGODB', 'REST API', 'BACKEND DEVELOPMENT', 'DATABASE DESIGN'],
        links: []
    }
};

const panel      = document.getElementById('work-panel');
const overlay    = document.getElementById('panel-overlay');
const closeBtn   = document.getElementById('panel-close');
const panelType  = document.getElementById('panel-type');
const panelYear  = document.getElementById('panel-year');
const panelTitle = document.getElementById('panel-title');
const panelOver  = document.getElementById('panel-overview');
const panelStory = document.getElementById('panel-story');
const panelTags  = document.getElementById('panel-tags');
const panelLinks = document.getElementById('panel-links');

function openPanel(projectKey) {
    const p = projects[projectKey];
    if (!p) return;

    activeProjectKey = projectKey;
    if (panelType && p.type) {
        panelType.textContent = p.type[lang] || p.type.en;
    }
    panelYear.textContent  = p.year;
    panelTitle.textContent = p.title;
    panelOver.textContent  = typeof p.overview === 'object' ? (p.overview[lang] || p.overview.en) : p.overview;
    panelStory.textContent = typeof p.story === 'object' ? (p.story[lang] || p.story.en) : p.story;

    panelTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

    panelLinks.innerHTML = p.links.length
        ? p.links.map(l => `<a href="${l.url}" target="_blank" class="panel-link">${l.label} ↗</a>`).join('')
        : '';

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    activeProjectKey = null;
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
