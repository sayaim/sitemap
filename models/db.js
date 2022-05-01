const mysql = require("mysql");

const config = {
	host: 'localhost',
	user: 'root',
	password: '', 
	database: '',
};

module.exports = {
	sql(query, values) {
		console.log(query, "\n", values);
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
