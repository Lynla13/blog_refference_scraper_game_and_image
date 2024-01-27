const db_host : string = process.env.DB_HOST || 'localhost'
const db_user : string = process.env.DB_USER || 'root'
const db_password : string = process.env.DB_PASSWORD || ''

import mariadb from "mariadb"

const pool = mariadb.createPool({
    host: db_host, 
    user: db_user, 
    password: db_password,
    connectionLimit: 5
});

async function asyncFunction() {
 let conn;
 try {
   conn = await pool.getConnection();
   const rows = await conn.query("SELECT 1 as val");
   console.log(rows); //[ {val: 1}, meta: ... ]
   const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
   console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

 } catch (err) {
   throw err;
 } finally {
   if (conn) return conn.end();
 }
}