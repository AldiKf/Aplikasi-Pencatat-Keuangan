# Aplikasi Manajemen Pemasukan dan Pengeluaran Menggunakan JavaScript dan LocalStorage

Aplikasi ini merupakan sistem pencatatan pemasukan dan pengeluaran sederhana yang dibuat menggunakan HTML, CSS, dan JavaScript, serta memanfaatkan localStorage sebagai media penyimpanan data. Aplikasi ini dibuat sebagai tugas akhir praktikum Pemrograman Web.

### Fitur Utama
- Menambahkan transaksi pemasukan dan pengeluaran.
- Menghitung total income, total outcome, dan balance secara otomatis.
- Menampilkan daftar transaksi dalam bentuk tabel.
- Fitur Edit transaksi.
- Fitur Delete transaksi dengan pop-up konfirmasi.
- Data tersimpan permanen menggunakan localStorage (tidak hilang ketika halaman direfresh).
- Tampilan UI yang sederhana dan mudah digunakan.

### Teknologi yang Digunakan
- HTML – Struktur halaman aplikasi.
- CSS – Tampilan dan desain antarmuka.
- JavaScript – Pengolahan logika aplikasi & interaksi user.
- LocalStorage – Penyimpanan data langsung di browser tanpa database eksternal.

### Struktur Folder
/project-Ujian
│── index.html
│── style.css
│── script.js
└── README.md

### Deskripsi Singkat Logika Aplikasi
- Data transaksi disimpan dalam array lalu dipersistenkan menggunakan localStorage.
- Saat halaman dibuka, data akan diambil kembali dari localStorage.
- Setiap perubahan (tambah, edit, hapus) langsung memperbarui tampilan tabel dan perhitungan keuangan.
- Fungsi JavaScript mengatur proses CRUD dan perhitungan otomatis.

---
**Ditulis oleh:** Aldi Kurnia Fadillah
**Email:** aldykurniq@gmail.com 
