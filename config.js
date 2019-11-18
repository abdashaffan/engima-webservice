// Setting DB yang nanti ditambahin ke gitignore supaya gak ganti-ganti terus setiap push
// Di local jalanin "git rm --cached config.js" supaya ke ignore
const db_config = {
  host: "localhost",
  user: "abda",
  password: "abda",
  database: "transaksi_tiket"
};

module.exports = db_config;
