// 管理者画面
const db = require("../db/db");
const table = "admins"

const admin = {
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
		const password = data.password;
		
		const query = `insert into ${table} (name, password) values(?, ?)`;
		const values = [name, password];
		await db.sql(query, values);

		// 所属table不要
// `create table clients (id int auto_increment, admin_id, name varchar(25) not null unique, description text`;
// `create table users (id int auto_increment, admin boolean, name varchar(25) not null unique, password char(25) not null)`;
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

module.exports = admin;
