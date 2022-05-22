const client = require("../models/client_model");

const clientController = {
	async index(req, res) {
		const results = await client.all();
		res.send(results);
	},

	async edit(req, res) {
		const id = req.params.id;
		const result = await client.selectById(id);
		res.send(result);
	},

	async create(req, res) {
		const data = req.body;
		await client.create(data);
	},
	
	async update(req, res) {
		const data = req.body;
		await client.update(data);
	},

	async delete(req, res) {
		const id = req.params.id;
		await client.delete(id);
	}
};

module.exports = clientController;
