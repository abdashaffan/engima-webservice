# WS-Transaksi

**Note: node_module nya gua ignore ya, setiap ngepull nanti run** `npm install` **dulu dari folder ws-bank biar di git nya yang penting-pentingnya aja.**

## Deskripsi Web Service
Wb service dibangun diatas Node.js dan mengimplementasikan protokol REST, dimana web service dibangun dengan framework Express Js.
Web service transaksi memnyediakan tiga fitur yaitu :
1. Menambahkan transaksi baru dengan status "Pending".
2. mengubah status transaksi menjadi status "Success" atau "Cancelled".
3. Mengembalikan seluruh data transaksi pembelian film seorang pengguna Engima.


## Basis data yang digunakan
Web service menggunakan baisdata transaksi_tiket dengan satu tabel yaitu tabel transaksi yang terdiri dari atribut :
##### id_transaksi | id_pengguna | va_tujuan | id_film | id_jadwal | kursi_pesanan | waktu_pembuatan_transaksi | status_transaksi | harga

