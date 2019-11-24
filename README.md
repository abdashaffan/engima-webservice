# WS-Transaksi

## Deskripsi Web Service
Web Service Transaksi dibangun di atas Node.js dengan mengimplementasikan protokol REST, dimana dibangun menggunakan framework Express Js.
Web Service transaksi memiliki fitur :
1. Menambah transaksi baru dengan status “Pending”.
2. Mengubah status suatu transaksi menjadi status “Success” atau “Cancelled”.
3. Mengembalikan seluruh data transaksi pembelian film seorang pengguna Engima.


## Basis data yang digunakan
Web service menggunakan baisdata transaksi_tiket dengan satu tabel yaitu tabel transaksi, yang memiliki atribut :
##### id_transaksi | id_pengguna | va_tujuan | id_film | id_jadwal | kursi_pesanan | waktu_pembuatan_transaksi | status_transaksi | harga

