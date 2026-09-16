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
        year: '2025',
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
        tags: ['JAVA', 'SPRING BOOT', 'MONGODB', 'REST API', 'BACKEND DEVELOPMENT'],
        links: []
    },
    haven: {
        year: '2026',
        type: { en: 'PERSONAL PROJECT', id: 'PROYEK PRIBADI' },
        title: 'HAVEN',
        overview: {
            en: "A personal, local-first password manager designed to securely store and manage credentials while keeping the user's vault under their control.",
            id: "Password manager personal dengan pendekatan local-first yang dirancang untuk menyimpan dan mengelola kredensial secara aman, dengan tetap memberikan kendali penuh kepada pengguna atas vault mereka."
        },
        story: {
            en: "Haven is a project I've wanted to build since my first year of university. As I started accumulating more accounts and realizing how difficult it was to manage different passwords securely, I began imagining a personal password manager that I could use myself. The idea stayed with me for years before I finally started turning it into an actual project.\n\nHaven is designed around a local-first approach, where the encrypted vault remains the primary source of truth. It uses Argon2id for password-based key derivation and XChaCha20-Poly1305 to protect the vault's contents. The project also explores optional synchronization through Google Drive, allowing the encrypted vault to be stored and synchronized without requiring Haven to operate its own backend.\n\nThe application is currently under development. Beyond building a password manager, Haven has become an opportunity for me to explore application security, encryption, local data management, synchronization, and desktop application architecture.",
            id: "Haven adalah proyek yang sudah ingin saya buat sejak tahun pertama kuliah. Ketika mulai memiliki semakin banyak akun dan menyadari betapa sulitnya mengelola berbagai password dengan aman, saya mulai membayangkan sebuah password manager pribadi yang dapat saya gunakan sendiri. Ide tersebut terus ada selama bertahun-tahun hingga akhirnya saya mulai merealisasikannya menjadi sebuah proyek.\n\nHaven dirancang dengan pendekatan local-first, di mana encrypted vault menjadi sumber data utama. Haven menggunakan Argon2id untuk proses derivasi kunci berbasis password dan XChaCha20-Poly1305 untuk melindungi isi vault. Proyek ini juga mengeksplorasi sinkronisasi opsional melalui Google Drive, sehingga vault yang telah terenkripsi dapat disimpan dan disinkronkan tanpa Haven harus menyediakan backend sendiri.\n\nSaat ini Haven masih dalam tahap pengembangan. Selain membangun sebuah password manager, Haven menjadi kesempatan bagi saya untuk mempelajari lebih jauh mengenai keamanan aplikasi, enkripsi, pengelolaan data lokal, sinkronisasi, dan arsitektur aplikasi desktop."
        },
        tags: ['RUST', 'TAURI', 'ENCRYPTION', 'ARGON2ID', 'LOCAL-FIRST', 'GOOGLE DRIVE', 'OAUTH', 'DESKTOP APPLICATION', 'SYSTEM DESIGN'],
        links: []
    },
    'bintang-donor': {
        year: '2025',
        type: { en: 'FREELANCE PROJECT', id: 'PROYEK FREELANCE' },
        title: 'BINTANG DONOR',
        overview: {
            en: 'A web application developed for a faculty at Universitas Sumatera Utara to manage donor announcements and registration for blood donation events.',
            id: 'Aplikasi web yang dikembangkan untuk salah satu fakultas di Universitas Sumatera Utara untuk mengelola pengumuman donor dan pendaftaran kegiatan donor darah.'
        },
        story: {
            en: 'Bintang Donor is a freelance web application I developed for one of the faculties at Universitas Sumatera Utara. The platform was created to make blood donation events easier to announce and manage, while providing a centralized way for participants to register.\n\nThe system focuses on two main functions: publishing donor announcements and managing event registration. WhatsApp notifications are used to communicate information about donation activities, helping connect announcements and registration with a communication channel that participants already use.\n\nI developed the application using Laravel and MySQL, handling the web application and database layer as part of the project.',
            id: 'Bintang Donor adalah aplikasi web freelance yang saya kembangkan untuk salah satu fakultas di Universitas Sumatera Utara. Platform ini dibuat untuk mempermudah penyampaian informasi kegiatan donor darah sekaligus menyediakan tempat terpusat bagi peserta untuk melakukan pendaftaran.\n\nSistem ini berfokus pada dua fungsi utama, yaitu penyampaian pengumuman donor dan pengelolaan pendaftaran kegiatan. Notifikasi melalui WhatsApp digunakan untuk menyampaikan informasi terkait kegiatan donor, sehingga proses pengumuman dan pendaftaran dapat terhubung dengan media komunikasi yang sudah umum digunakan oleh peserta.\n\nSaya mengembangkan aplikasi ini menggunakan Laravel dan MySQL, termasuk bagian aplikasi web dan pengelolaan database.'
        },
        tags: ['PHP', 'LARAVEL', 'MYSQL', 'WEB DEVELOPMENT', 'DATABASE', 'FREELANCE'],
        links: []
    },
    etl: {
        year: '2023',
        type: { en: 'ACADEMIC PROJECT', id: 'PROYEK AKADEMIK' },
        title: 'WEATHER ETL & DATA VISUALIZATION',
        overview: {
            en: 'An automated weather-data pipeline built to collect, transform, store, and visualize forecast data using Apache Airflow, Docker, Python, and Tableau.',
            id: 'Pipeline data cuaca otomatis yang dibangun untuk mengambil, mentransformasi, menyimpan, dan memvisualisasikan data prakiraan cuaca menggunakan Apache Airflow, Docker, Python, dan Tableau.'
        },
        story: {
            en: 'This project was developed as part of a Database Management Systems course at Universitas Sumatera Utara. The goal was to build an automated ETL pipeline capable of continuously collecting data from an external source at a scheduled interval.\n\nI chose to retrieve weather forecast data through an API and used Apache Airflow to orchestrate the pipeline. The collected data was then transformed using Python and Pandas, including data-type conversion, selecting relevant fields, and preparing the data for further analysis.\n\nThe processed data was stored across two different databases, MySQL and PostgreSQL. Rather than simply duplicating the same data in both databases, the data was structured with relationships that allowed corresponding records across the two systems to remain connected.\n\nFinally, the processed data was connected to Tableau for visualization and analysis, allowing the weather data to be presented as information that could be explored beyond the raw dataset.\n\nThe entire ETL workflow was containerized using Docker, making the pipeline and its supporting services easier to configure and run consistently.',
            id: 'Proyek ini dikembangkan sebagai bagian dari mata kuliah Database Management Systems di Universitas Sumatera Utara. Tujuannya adalah membangun pipeline ETL otomatis yang dapat mengambil data dari sumber eksternal secara berkala berdasarkan jadwal yang telah ditentukan.\n\nSaya memilih menggunakan data prakiraan cuaca yang diambil melalui API dan menggunakan Apache Airflow untuk mengatur serta menjalankan pipeline tersebut. Data yang diperoleh kemudian ditransformasi menggunakan Python dan Pandas, termasuk mengubah tipe data, memilih informasi yang relevan, dan menyiapkan data agar dapat digunakan untuk analisis lebih lanjut.\n\nData yang telah diproses kemudian disimpan ke dalam dua database yang berbeda, yaitu MySQL dan PostgreSQL. Data tidak hanya diduplikasi ke kedua database, tetapi disusun menggunakan relasi sehingga data yang saling berkaitan pada kedua sistem tetap dapat terhubung.\n\nSetelah itu, data digunakan sebagai sumber untuk visualisasi dan analisis menggunakan Tableau, sehingga data prakiraan cuaca dapat disajikan menjadi informasi yang lebih mudah dieksplorasi dibandingkan data mentah.\n\nSeluruh proses ETL beserta layanan pendukungnya dijalankan menggunakan Docker, sehingga pipeline dapat dikonfigurasi dan dijalankan secara lebih konsisten.'
        },
        tags: ['PYTHON', 'PANDAS', 'APACHE AIRFLOW', 'DOCKER', 'TABLEAU', 'MYSQL', 'POSTGRESQL', 'ETL', 'DATA ENGINEERING', 'DATA VISUALIZATION'],
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
