const express = require("express");
const app = express();
const mysql=require('mysql2')


const db = mysql.createConnection({
  host: "localhost",
  database:'chocolates',
  user: "root",
  password:'',
});

app.get("/", (req, res) => {
  let sql='SELECT * FROM chocolates_info'
  db.query(sql,(err,result)=>{
if (err) {
  throw err
}
  res.send(result);

  })
});

app.listen(5000, () =>
{
  db.connect((err) => {
    if (err) throw err;
    console.log("db connected");
  });
});
