const mysql = require("mysql");
// Create a connection to the database
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '', 
	database: '',
});
// open the MySQL connection
db.connect((error) => {
	if (error) throw error;
	console.log("Successfully connected to the database.");
});
module.exports = db;
