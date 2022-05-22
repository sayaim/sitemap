const member = require("../models/member_model");

const memberController = {
	async index(req, res) {
		const results = await member.all();
		res.send(results);
	},

	async edit(req, res) {
		const id = req.params.id;
		const result = await member.selectById(id);
		res.send(result);
	},

	async create(req, res) {
		const data = req.body;
		await member.create(data);
	},
	
	async update(req, res) {
		const data = req.body;
		await member.update(data);
	},

	async delete(req, res) {
		const id = req.params.id;
		await member.delete(id);
	}
};

module.exports = memberController;
