import mysql from "mysql2/promise";

// create connection
console.log("Create connection pool ...")
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'nodejsbasic',
	port: '3036',
});

/* connection.query('SELECT * FROM `users` ', (err, results, fields) => {
	console.log('>>> check mysql');
	console.log(results);
  let rows = results.map((row) => {return row});
  console.log(rows);
}
);*/

export default pool;
