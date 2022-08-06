# Authentication & Authorization in Express
- **Authentication** : yaitu memvalidasi atau memverifikasi user yang ingin masuk(login) kesebuah web atau aplikasi untuk mencocokan sebuah data apakah user tersebut pemilik idetitas. yang berupa username dan password.
- **Authorization** : yaitu hak apa saja yang dimiki user tersebut pada sebuah web atau aplikasi yang mereka jalankan. sebagai contoh: terdapat 2 user dimana user tersebut sudah login dan belum login maka akses yang diberikan sebuah apikasi atau web kepada user yang sudah login akan lebih banyak dari pada yang belum login 

## Authentication

- **Faktor Authentication**
    1. Knowledge : informasi yang bisa kita ketahui  
    2. Possesion : Sebuah kepemilika atau sebuah posisi yang dimiki user
    3. Inherence : yaitu biometric data seperti fingerprints,Face Unlock,dll
- **Autentikasi multifaktor (MFA)** memberikan lapisan perlindungan tambahan pada proses masuk. Ketika mengakses akun atau aplikasi, pengguna perlu memberikan verifikasi identitas tambahan, seperti memindai sidik jari atau memasukkan kode yang diterima melalui telepon.
  
## Authorization

- **Faktor Authorization**
    - Hak akses yang dimiliki oleh user seperti halnya saat kita menyewa sebuah kamar di hotel, perlengkapan atau properti yang dimiliki user pasti berbeda-beda seperti : akses wifi, jumlah properti, dll
  
## Encryption
- bagaimana kita mengamankan data agar tidak terlihat dan diakses oleh oranglain
- bagaimana Encryption bekerja 
  
<img src="https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/03/Cara-Kerja-Enkripsi-1024x467.jpg" width="600" height="400">

## cookies, local storage, dan session storage

<img src="https://www.loginradius.com/blog/static/a6522d000e0137d5fdf82fd370646d12/2bef9/comparison-table.png" width="600" height="400">


## JWT ( JSON Web Token)
- yang berarti token ini menggunakan JSON (Javascript Object Notation) berbentuk string panjang yang sangat random, lalu token ini memungkinkan kita untuk mengirimkan data yang dapat diverifikasi oleh dua pihak atau lebih.

## Penggunaan JWT 
- buka Web JWT berikut [https://jwt.io/](https://jwt.io/)

  <img src="../03-Arsip-Latihan-BackEnd/00-img/WhatsApp%20Image%202022-08-06%20at%2016.15.43.jpeg" width="600" height="400">

