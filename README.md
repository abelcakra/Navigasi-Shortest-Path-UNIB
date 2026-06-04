# 🗺️ Sistem Navigasi Rute Terpendek UNIB

<div align="center">

![Universitas Bengkulu](https://img.shields.io/badge/Universitas-Bengkulu-green?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
![HTML](https://img.shields.io/badge/HTML-66.5%25-orange?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS-24.0%25-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-9.5%25-yellow?style=for-the-badge&logo=javascript)

**Aplikasi web interaktif untuk mencari rute terpendek antar gedung di kampus Universitas Bengkulu menggunakan algoritma Dijkstra dan Heuristic.**

[🌐 Lihat Demo Live](https://shortest-path-six.vercel.app/) · [📄 Laporan](./G1A024077_Laporan_Shortest_Path_UNIB.pdf) · [🐛 Laporkan Bug](https://github.com/abelcakra/Navigasi-Shortest-Path-UNIB/issues)

</div>

---

## 📋 Tentang Proyek

Sistem Navigasi Rute Terpendek UNIB adalah aplikasi berbasis web yang membantu civitas akademika dan pengunjung kampus Universitas Bengkulu untuk menemukan jalur terpendek antar lokasi di lingkungan kampus. Aplikasi ini mengimplementasikan dua algoritma pencarian jalur yang dapat dipilih sesuai kebutuhan.

## ✨ Fitur Utama

- 🗺️ **Peta Interaktif** — Visualisasi peta kampus UNIB dengan marker lokasi
- 📍 **Pilih Titik Manual** — Klik langsung pada peta untuk menentukan titik awal dan tujuan
- 🔢 **Dua Algoritma** — Pilih antara Dijkstra (jalur jalan) atau Heuristic (jalur udara)
- 📏 **Informasi Jarak** — Menampilkan hasil perhitungan jarak rute terpendek
- 🏛️ **12 Lokasi Kampus** — Mencakup gedung-gedung utama di UNIB

## 🏛️ Lokasi yang Tersedia

| No | Lokasi |
|----|--------|
| 1 | Gerbang Utama UNIB |
| 2 | Laboratorium Teknik |
| 3 | Gedung Rektorat |
| 4 | Stadion UNIB |
| 5 | Perpustakaan UNIB |
| 6 | Gerbang Keluar UNIB |
| 7 | Gedung Belajar V |
| 8 | Gedung FKIK |
| 9 | Gedung Fakultas Hukum |
| 10 | Gedung Serba Guna |
| 11 | Masjid Baitul Hikmah |
| 12 | Klinik UNIB |

## 🧮 Algoritma

### Dijkstra (Jalur Jalan)
Mencari rute terpendek berdasarkan jalanan yang tersedia di kampus. Cocok digunakan untuk navigasi kendaraan maupun pejalan kaki yang mengikuti jalan.

### Heuristic (Jalur Udara)
Menghitung jarak terpendek secara garis lurus (as the crow flies) antara dua titik. Berguna untuk estimasi jarak aktual antar gedung.

## 🛠️ Teknologi

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js + Express (`server.js`)
- **Peta**: Leaflet.js / OpenStreetMap
- **Deployment**: Vercel

## 🚀 Cara Menjalankan Lokal

### Prasyarat
- Node.js (v14 atau lebih baru)
- npm

### Langkah Instalasi

```bash
# 1. Clone repositori
git clone https://github.com/abelcakra/Navigasi-Shortest-Path-UNIB.git

# 2. Masuk ke direktori proyek
cd Navigasi-Shortest-Path-UNIB

# 3. Install dependensi
npm install

# 4. Jalankan server
node server.js
```

Buka browser dan akses `http://localhost:3000` (atau port yang ditentukan server).

## 📖 Cara Penggunaan

1. **Buka aplikasi** di browser melalui [link demo](https://shortest-path-six.vercel.app/) atau jalankan secara lokal
2. **Pilih Titik Awal** — gunakan dropdown atau klik langsung pada peta
3. **Pilih Titik Tujuan** — gunakan dropdown atau klik langsung pada peta
4. **Pilih Algoritma** — Dijkstra untuk jalur jalan, Heuristic untuk jalur udara
5. **Lihat Hasil** — rute terpendek dan informasi jarak akan ditampilkan di bagian "Hasil Analisis"

> 💡 **Tips**: Klik sembarang titik di peta untuk melihat nilai koordinat aslinya.

## 📁 Struktur Proyek

```
Navigasi-Shortest-Path-UNIB/
├── public/                  # File statis (HTML, CSS, JS frontend)
├── node_modules/            # Dependensi Node.js
├── server.js                # Entry point server Express
├── package.json             # Konfigurasi proyek dan dependensi
├── package-lock.json        # Lock file dependensi
└── G1A024077_Laporan_Shortest_Path_UNIB.pdf  # Laporan tugas
```

## 📄 Laporan

Laporan lengkap mengenai implementasi algoritma dan analisis sistem tersedia dalam file [`G1A024077_Laporan_Shortest_Path_UNIB.pdf`](./G1A024077_Laporan_Shortest_Path_UNIB.pdf).

## 👤 Author

**Abel Cakra**
- GitHub: [@abelcakra](https://github.com/abelcakra)
- NIM: G1A024077
- Universitas Bengkulu

---

<div align="center">
Dibuat dengan ❤️ untuk kampus Universitas Bengkulu
</div>
