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


## Pembagian tugas WBD IF3110
### REST
1. Menambah transaksi baru : 13517096
2. Mengubah status transaksi : 13517108
3. Mengembalikan seluruh data transaksi : 13517021
4. Skema database : 13517108

### SOAP
1. Validasi no rekening : 13517021
2. Memberi data rekening nasabah : 13517096
3. Transaksi transfer : 13517108
4. Membuat virtual account : 13517021
5. Mengecek data transaksi : 13517096

### ReactJS
1. Template bank-pro : 13517021
2. Login : 13517021
3. Transfer : 13517096
4. Riwayat : 13517108

### Perubahan Engima
1. Pemgambilan data film ke home : 13517108
2. Detail film dan search : 13517108
3. Buy ticket : 13517021
4. Transaction history : 13517096
5. Transaksi tiket film : 13517021


### Untuk tugas DPPL IF3159
1. Continous Integration :
    a. Linting : 13517108
2. Eksplorasi EC2 : 13517108
3. Deployment  ke EC2: 13517108
4. Deployment basis data ws-transaksi ke Amazon RDS : 13517096
5. Continuous Deployment :13517096
6. URL deployment : ec2-54-242-9-29.compute-1.amazonaws.com:3000/api