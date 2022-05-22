const db = require("../db/db");
const table = "clients"

const client = {
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
		const name = data.name;
		const description = data.description;

		const query = `insert into ${table} (name, description) values(?, ?)`;
		const values = [name, description];
		await db.sql(query, values);
	},

	async update(data) {
		const id = data.id;
		const name = data.name;
		const description = data.description;

		const query = `update ${table} set name = ?, description = ? where id = ?`;
		const values = [name, description, id];
		await db.sql(query, values);
	},

	async delete(id) {
		const query = `delete from ${table} where id = ?`;
		const values = [id];
		await db.sql(query, values);
	}
};

module.exports = client;
