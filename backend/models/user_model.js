const db = require("../db/db");
const table = "users"

const user = {
	async login(data) {
		const email = data.email;
		const password = data.password;

		// const query = `select exists(select * from ${table} where email = ? and password = ?)`;
		const query = `select * from ${table} where email = ? and password = ?`;
		const values = [email, password];
		const result = await db.sql(query, values);
		return result;
	},
	
	async selectById(id) {
		const query = `select * from ${table} where id = ?`;
		const values = [id];
		const result = await db.sql(query, values);
		return result;
	},

	async create(data) {
		const admin = data.admin;
		const email = data.email;
		const password = data.password;

		const query = `insert into ${table} (admin, email, password) values(?, ?, ?)`;
		const values = [admin, email, password];
		await db.sql(query, values);
	},

	async update(data) {
		const id = data.id;
		const name = data.name;
		const password = data.password;

		const query = `update ${table} set name = ?, password = ? where id = ?`;
		const values = [name, password, id];
		await db.sql(query, values);
	},

	async delete(id) {
		const query = `delete from ${table} where id = ?`;
		const values = [id];
		await db.sql(query, values);
	}
};

module.exports = user;
