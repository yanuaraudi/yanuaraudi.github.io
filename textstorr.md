01 — Haven
Type
PERSONAL PROJECT
Overview
English
A personal, local-first password manager designed to securely store and manage credentials while keeping the user's vault under their control.

Indonesia
Password manager personal dengan pendekatan local-first yang dirancang untuk menyimpan dan mengelola kredensial secara aman, dengan tetap memberikan kendali penuh kepada pengguna atas vault mereka.

Story
I'd make the story more personal here because the origin of Haven is actually interesting:
English
Haven is a project I've wanted to build since my first year of university. As I started accumulating more accounts and realizing how difficult it was to manage different passwords securely, I began imagining a personal password manager that I could use myself. The idea stayed with me for years before I finally started turning it into an actual project.
Haven is designed around a local-first approach, where the encrypted vault remains the primary source of truth. It uses Argon2id for password-based key derivation and XChaCha20-Poly1305 to protect the vault's contents. The project also explores optional synchronization through Google Drive, allowing the encrypted vault to be stored and synchronized without requiring Haven to operate its own backend.
The application is currently under development. Beyond building a password manager, Haven has become an opportunity for me to explore application security, encryption, local data management, synchronization, and desktop application architecture.

Indonesia
Haven adalah proyek yang sudah ingin saya buat sejak tahun pertama kuliah. Ketika mulai memiliki semakin banyak akun dan menyadari betapa sulitnya mengelola berbagai password dengan aman, saya mulai membayangkan sebuah password manager pribadi yang dapat saya gunakan sendiri. Ide tersebut terus ada selama bertahun-tahun hingga akhirnya saya mulai merealisasikannya menjadi sebuah proyek.
Haven dirancang dengan pendekatan local-first, di mana encrypted vault menjadi sumber data utama. Haven menggunakan Argon2id untuk proses derivasi kunci berbasis password dan XChaCha20-Poly1305 untuk melindungi isi vault. Proyek ini juga mengeksplorasi sinkronisasi opsional melalui Google Drive, sehingga vault yang telah terenkripsi dapat disimpan dan disinkronkan tanpa Haven harus menyediakan backend sendiri.
Saat ini Haven masih dalam tahap pengembangan. Selain membangun sebuah password manager, Haven menjadi kesempatan bagi saya untuk mempelajari lebih jauh mengenai keamanan aplikasi, enkripsi, pengelolaan data lokal, sinkronisasi, dan arsitektur aplikasi desktop.

Tags
RUST
TAURI
ENCRYPTION
ARGON2ID
XCHACHA20-POLY1305
LOCAL-FIRST
GOOGLE DRIVE
OAUTH
DESKTOP APPLICATION
SYSTEM DESIGN
And I really like Haven as a portfolio project because unlike a normal CRUD application, there's a story behind why you built it.
02 — Bintang Donor
Type
FREELANCE PROJECT
Overview
English
A web application developed for a faculty at Universitas Sumatera Utara to manage donor announcements and registration for blood donation events.

Indonesia
Aplikasi web yang dikembangkan untuk salah satu fakultas di Universitas Sumatera Utara untuk mengelola pengumuman donor dan pendaftaran kegiatan donor darah.

Story
English
Bintang Donor is a freelance web application I developed for one of the faculties at Universitas Sumatera Utara. The platform was created to make blood donation events easier to announce and manage, while providing a centralized way for participants to register.
The system focuses on two main functions: publishing donor announcements and managing event registration. WhatsApp notifications are used to communicate information about donation activities, helping connect announcements and registration with a communication channel that participants already use.
I developed the application using Laravel and MySQL, handling the web application and database layer as part of the project.

Indonesia
Bintang Donor adalah aplikasi web freelance yang saya kembangkan untuk salah satu fakultas di Universitas Sumatera Utara. Platform ini dibuat untuk mempermudah penyampaian informasi kegiatan donor darah sekaligus menyediakan tempat terpusat bagi peserta untuk melakukan pendaftaran.
Sistem ini berfokus pada dua fungsi utama, yaitu penyampaian pengumuman donor dan pengelolaan pendaftaran kegiatan. Notifikasi melalui WhatsApp digunakan untuk menyampaikan informasi terkait kegiatan donor, sehingga proses pengumuman dan pendaftaran dapat terhubung dengan media komunikasi yang sudah umum digunakan oleh peserta.
Saya mengembangkan aplikasi ini menggunakan Laravel dan MySQL, termasuk bagian aplikasi web dan pengelolaan database.

Tags
PHP
LARAVEL
MYSQL
WEB DEVELOPMENT
DATABASE
FREELANCE
I intentionally didn't invent specifics about the WhatsApp implementation. If you actually used a WhatsApp API/provider, we can add it later.
03 — ETL & DATA VISUALIZATION
I think this one deserves a better name than simply "ETL and Data Visualization."
I'd call it:
WEATHER DATA PIPELINE

or
WEATHER ETL & DATA VISUALIZATION

I'd personally use WEATHER DATA PIPELINE because it sounds much more like an actual engineering project.
Type
ACADEMIC PROJECT
Overview
English
An automated weather-data pipeline built to collect, transform, store, and visualize forecast data using Apache Airflow, Docker, Python, and Tableau.

Indonesia
Pipeline data cuaca otomatis yang dibangun untuk mengambil, mentransformasi, menyimpan, dan memvisualisasikan data prakiraan cuaca menggunakan Apache Airflow, Docker, Python, dan Tableau.

Story
This one should explain the ETL process because that's the interesting part:
English
This project was developed as part of a Database Management Systems course at Universitas Sumatera Utara. The goal was to build an automated ETL pipeline capable of continuously collecting data from an external source at a scheduled interval.
I chose to retrieve weather forecast data through an API and used Apache Airflow to orchestrate the pipeline. The collected data was then transformed using Python and Pandas, including data-type conversion, selecting relevant fields, and preparing the data for further analysis.
The processed data was stored across two different databases, MySQL and PostgreSQL. Rather than simply duplicating the same data in both databases, the data was structured with relationships that allowed corresponding records across the two systems to remain connected.
Finally, the processed data was connected to Tableau for visualization and analysis, allowing the weather data to be presented as information that could be explored beyond the raw dataset.
The entire ETL workflow was containerized using Docker, making the pipeline and its supporting services easier to configure and run consistently.

Indonesia
Proyek ini dikembangkan sebagai bagian dari mata kuliah Database Management Systems di Universitas Sumatera Utara. Tujuannya adalah membangun pipeline ETL otomatis yang dapat mengambil data dari sumber eksternal secara berkala berdasarkan jadwal yang telah ditentukan.
Saya memilih menggunakan data prakiraan cuaca yang diambil melalui API dan menggunakan Apache Airflow untuk mengatur serta menjalankan pipeline tersebut. Data yang diperoleh kemudian ditransformasi menggunakan Python dan Pandas, termasuk mengubah tipe data, memilih informasi yang relevan, dan menyiapkan data agar dapat digunakan untuk analisis lebih lanjut.
Data yang telah diproses kemudian disimpan ke dalam dua database yang berbeda, yaitu MySQL dan PostgreSQL. Data tidak hanya diduplikasi ke kedua database, tetapi disusun menggunakan relasi sehingga data yang saling berkaitan pada kedua sistem tetap dapat terhubung.
Setelah itu, data digunakan sebagai sumber untuk visualisasi dan analisis menggunakan Tableau, sehingga data prakiraan cuaca dapat disajikan menjadi informasi yang lebih mudah dieksplorasi dibandingkan data mentah.
Seluruh proses ETL beserta layanan pendukungnya dijalankan menggunakan Docker, sehingga pipeline dapat dikonfigurasi dan dijalankan secara lebih konsisten.

Tags
PYTHON
PANDAS
APACHE AIRFLOW
DOCKER
MYSQL
POSTGRESQL
ETL
DATA ENGINEERING
TABLEAU
DATA VISUALIZATION
REST API