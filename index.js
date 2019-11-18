const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

// import db config
const db_config = require("./config");
// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection(db_config);

//connect to database
conn.connect(err => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

//===========================================================================================

//show all transaction
app.get("/api/transaksi", (req, res) => {
  let sql = "SELECT * FROM transaksi";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//add new transaction
app.post("/api/transaksi", (req, res) => {
  let data = {
    id_pengguna: req.body.id_pengguna,
    va_tujuan: req.body.va_tujuan,
    id_film: req.body.id_film,
    jadwal_film: "2019-11-09 00:00:00",
    kursi_pesanan: req.body.kursi_pesanan,
    waktu_pembuatan_transaksi: "2019-11-09 00:00:00",
    status_transaksi: "pending"
  };
  let sql = "INSERT INTO transaksi SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//change transaction status
app.put("/api/transaksi/:id_transaksi", (req, res) => {
  let sql =
    "UPDATE transaksi SET status_transaksi='" +
    req.body.status +
    "' WHERE product_id=" +
    req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

// Send all user transaction data
app.get("/api/transaksi/:id_transaksi", (req, res) => {
  const account_num = req.params.id_transaksi;
  let sql = `SELECT * FROM  transaksi WHERE id_pengguna = ${account_num}`;
  console.log(sql);
  let query = conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.send({ response: { msg: "Internal server error" } }); //server gak hang kalo input gak valid, client tetep dapet response
    }
    res.send(
      JSON.parse(JSON.stringify({ response: { account_num, results } }))
    );
  });
});

//===========================================================================================

//Server listening
app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
