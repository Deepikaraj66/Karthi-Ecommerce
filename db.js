const mysql = require("mysql");

const myPool = mysql.createPool({
  host: "remote.pvtinstone.cloudns.ch",
  user: "DeepikaRaj",
  password: "Gowdeep@3602",
  database: "",
});

module.exports = myPool;
