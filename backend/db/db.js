const mysql = require("mysql");
require('dotenv').config();

const config = {
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD, 
};

module.exports = {
	sql(query, values) {
		// console.log(query, "\n", values);
		return new Promise ((resolve, reject) => {
			const con = mysql.createConnection(config);
			con.query(query, values, (err, results, fields) => {
				if ( err ) {
					reject(err);
				} else {
					resolve(results);
				}
			});
			con.end();
		});
	}
}
