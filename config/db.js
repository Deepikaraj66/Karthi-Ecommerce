const mysql = require("mysql");

const myPool = mysql.createPool({
  host: "remote.pvtinstone.cloudns.ch",
  username: "DeepikaRaj",
  password: "Gowdeep@3602",
  database: "inventorydetails",
});

myPool.getConnection(() => {
  console.log("connected successfully");
});

module.exports = myPool;
