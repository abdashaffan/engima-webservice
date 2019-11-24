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
  console.log(query);
});

//add new transaction
app.post("/api/transaksi", (req, res) => {
  let data = {
    ...req.body
    //gak perlu masukin status_transaksi sama waktu_pembuatan_transaksi, udah di default dari DB nya
  };
  let sql = "INSERT INTO transaksi SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) {
      console.log(err);
      res.send(JSON.stringify({ response: { msg: "Internal server error" } }));
    }
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
  console.log(query);
});

//change transaction status
app.put("/api/transaksi/:id_transaksi", (req, res) => {
  let sql =
    "UPDATE transaksi SET status_transaksi='" +
    req.body.status +
    "' WHERE id_transaksi=" +
    req.params.id_transaksi;
  console.log(sql);
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
  console.log(query);
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
  console.log(query);
});

//===========================================================================================

//Server listening
app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
