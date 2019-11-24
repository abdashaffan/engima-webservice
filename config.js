// Setting DB yang nanti ditambahin ke gitignore supaya gak ganti-ganti terus setiap push
// Di local jalanin "git rm --cached config.js" supaya ke ignore
const db_config = {
  host: "transactionservicedb.cmqcolum2oyw.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "adminadmin",
  database: "transaksi_tiket",
  timezone: "Z"
};

module.exports = db_config;
