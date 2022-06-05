const user = require("../models/user_model");

const userController = {
	async login(req, res) {
		const data = req.body;
		const result = await user.login(data);
		res.send(result);
	},

	async select(req, res) {
		const id = req.params.id;
		const result = await user.selectById(id);
		res.send(result);
	},

	async create(req, res) {
		const data = req.body;
		await user.create(data);
	},
	
	async update(req, res) {
		const data = req.body;
		await user.update(data);
	},

	async delete(req, res) {
		const id = req.params.id;
		await user.delete(id);
	}
};

module.exports = userController;
