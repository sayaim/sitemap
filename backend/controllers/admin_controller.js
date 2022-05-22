const admin = require("../models/admin_model");

const adminController = {
	async index(req, res) {
		const results = await admin.all();
		res.send(results);
	},

	async edit(req, res) {
		const id = req.params.id;
		const result = await admin.selectById(id);
		res.send(result);
	},

	async create(req, res) {
		const data = req.body;
		await admin.create(data);
	},
	
	async update(req, res) {
		const data = req.body;
		await admin.update(data);
	},

	async delete(req, res) {
		const id = req.params.id;
		await admin.delete(id);
	}
};

module.exports = adminController;
