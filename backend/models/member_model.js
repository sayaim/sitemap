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

	async create(form) {
		const title = form.title;
		const content = form.content;

		const query = `insert into ${table} (title, content) values(?, ?)`;
		const values = [title, content];
		await db.sql(query, values);
	},

	async update(data) {
		const id = data.id;
		const title = data.title;
		const content = data.content;

		const query = `update ${table} set title = ?, content = ? where id = ?`;
		const values = [title, content, id];
		await db.sql(query, values);
	},

	async delete(id) {
		const query = `delete from ${table} where id = ?`;
		const values = [id];
		await db.sql(query, values);
	}
};

module.exports = member;
