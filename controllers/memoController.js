const { createConditionalExpression } = require("@vue/compiler-core");
const memos = require("../models/memos");

const memoController = {
	async index(req, res) {
		const results = await memos.all();
		res.send(results);
	},

	async edit(req, res) {
		const id = req.params.id;
		const result = await memos.selectById(id);
		res.send(result);
	},

	async store(req, res) {
		const data = req.body;
		await memos.create(data);
	},
	
	async update(req, res) {
		const data = req.body;
		await memos.update(data);
	},

	async delete(req, res) {
		const id = req.params.id;
		await memos.delete(id);
	}
};

module.exports = memoController;
