const db = require("../db/db");
const table = "members"

const member = {
	async all() {
		const query = `select * from ${table}`;
		const results = await db.sql(query);
		return results;
	},
	
	async selectById(id) {
		const query = `select * from ${table} where id = ?`;
		const values = [id];
		const result = await db.sql(query, values);
		return result;
	},

	async create(data) {
		const admin_id = data.admin_id;
		const name = data.name;
		const password = data.password;

		const query = `insert into ${table} (admin_id, name, password) values(?, ?, ?)`;
		const values = [admin_id, name, password];
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

module.exports = member;
