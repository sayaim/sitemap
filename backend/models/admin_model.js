// 管理者画面
const db = require("../db/db");
const table = "admins"

const admin = {

	async create(form) {
		const name = form.name;
		const password = form.password;

		const query = `insert into ${table} (name, password) values(?, ?)`;
		const values = [name, password];
		await db.sql(query, values);

		// this.createTable
	}

	// async createTable() {
		// 	const create_clients = `create table ${id}_clients (id int auto_increment, name varchar(25) not null, description text`;
		// 	const create_members = `create table ${id}_members (id int auto_increment, name varchar(25) not null, password char(25) not null, admin_id int)`;
	// }
};

module.exports = admin;
