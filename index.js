const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  // database: 'restful_db'
  database: 'transaksi_tiket'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});


//===========================================================================================

//show all transaction
app.get('/api/transaksi',(req, res) => {
  let sql = "SELECT * FROM transaksi";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//add new transaction
app.post('/api/transaksi',(req, res) => {
  let data = {id_pengguna: req.body.id_pengguna, va_tujuan: req.body.va_tujuan, id_film: req.body.id_film, jadwal_film: '2019-11-09 00:00:00', kursi_pesanan: req.body.kursi_pesanan, waktu_pembuatan_transaksi: '2019-11-09 00:00:00', status: 'pending'};
  let sql = "INSERT INTO transaksi SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//change transaction status
app.put('/api/transaksi/:id_transaksi',(req, res) => {
  let sql = "UPDATE transaksi SET status='"+req.body.status+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//===========================================================================================
 
// //show all products
// app.get('/api/products',(req, res) => {
//   let sql = "SELECT * FROM product";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //show single product
// app.get('/api/products/:id',(req, res) => {
//   let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //add new product
// app.post('/api/products',(req, res) => {
//   let data = {product_name: req.body.product_name, product_price: req.body.product_price};
//   let sql = "INSERT INTO product SET ?";
//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //update product
// app.put('/api/products/:id',(req, res) => {
//   let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// //Delete product
// app.delete('/api/products/:id',(req, res) => {
//   let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});