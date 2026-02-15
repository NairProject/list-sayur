# 📦 Update Stok Produk Sayuran

Website untuk input dan generate list stok produk sayuran dengan kategori Fresh dan Discount.

## ✨ Fitur

- ✅ Input stok untuk 98 produk sayuran dalam 4 kategori
- 📊 Kategori: Sayuran Daun, Sayur Keras, Buah & Ubi, dan Bawang-bawangan
- 💾 Data tersimpan otomatis di browser (localStorage)
- 📋 Generate list terformat untuk Fresh dan Discount
- 📱 Responsive design - bisa digunakan di mobile
- 🚀 Tanpa hosting - pure client-side

## 🚀 Cara Deploy ke GitHub Pages

### 1. Buat Repository Baru di GitHub

1. Buka [GitHub](https://github.com)
2. Klik tombol **New** untuk membuat repository baru
3. Beri nama repository (contoh: `stok-sayuran`)
4. Pilih **Public**
5. Klik **Create repository**

### 2. Upload File ke Repository

Ada 2 cara untuk upload file:

#### Cara 1: Upload via GitHub Web (Paling Mudah)

1. Di halaman repository, klik **Add file** > **Upload files**
2. Drag & drop atau pilih file berikut dari folder `docs`:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Klik **Commit changes**

#### Cara 2: Upload via Git Command Line

```bash
cd d:/list\ sayur/docs
git init
git add index.html styles.css script.js
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

*(Ganti `USERNAME` dan `REPOSITORY` dengan username dan nama repository Anda)*

### 3. Aktifkan GitHub Pages

1. Di repository, klik tab **Settings**
2. Scroll ke bawah ke bagian **Pages** (di sidebar kiri)
3. Di bagian **Source**, pilih:
   - Branch: `main`
   - Folder: `/ (root)`
4. Klik **Save**
5. Tunggu beberapa saat, lalu refresh halaman
6. URL website Anda akan muncul: `https://USERNAME.github.io/REPOSITORY/`

### 4. Akses Website

Buka browser dan kunjungi:
```
https://USERNAME.github.io/REPOSITORY/
```

*(Ganti `USERNAME` dan `REPOSITORY` dengan milik Anda)*

## 📖 Cara Menggunakan

1. **Pilih Kategori** - Klik salah satu kategori (Sayuran Daun, Sayur Keras, dll)
2. **Input Stok** - Masukkan jumlah stok Fresh dan Discount untuk setiap produk
3. **Generate List** - Klik tombol "✅ Generate List" setelah selesai input
4. **Copy ke Clipboard** - Klik tombol "📋 Copy" untuk copy list Fresh atau Discount
5. **Reset** - Klik "🔄 Reset Semua Data" jika ingin mulai dari awal

## 💾 Penyimpanan Data

- Data stok disimpan otomatis di localStorage browser
- Data tidak akan hilang meskipun browser ditutup
- Data tersimpan per browser (tidak sinkron antar device)
- Gunakan tombol Reset untuk menghapus semua data

## 🛠️ Teknologi

- HTML5
- CSS3 (dengan Flexbox & Grid)
- Vanilla JavaScript (ES6+)
- localStorage API

## 📱 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## 📝 Catatan

- Website ini **100% client-side** - tidak ada server/database
- **Gratis selamanya** - GitHub Pages free untuk public repository
- Data hanya tersimpan di browser Anda
- Untuk backup data, export/screenshot hasil generate

## 🔄 Update Website

Jika ingin update/edit website:

1. Edit file di repository GitHub
2. Atau upload ulang file yang sudah diedit
3. GitHub Pages akan otomatis update dalam beberapa menit

## 📞 Support

Jika ada masalah atau pertanyaan, silakan buat issue di repository ini.

---

Made with ❤️ for easier stock management
