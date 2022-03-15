const Memo = require("../models/model.js");

exports.create = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
	}

	Memo.create(req.body, (err, data) => {
		if (err)
			res.status(500).send({
				message: err.message || "Some error occurred while creating the Memo.",
			});
		else res.send(data);
	});
};

exports.findAll = (req, res) => {
	Memo.getAll((err, data) => {
		if (err)
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving Memos.",
			});
			else	console.log(data)
			res.send(data);
	});
};

exports.findOne = (req, res) => {
	Memo.findById(req.params.id, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found Memo with id ${req.params.id}.`,
				});
			} else {
				res.status(500).send({
					message: "Error retrieving Memo with id " + req.params.id,
				});
			}
		} else res.send(data);
	});
};

exports.update = (req, res) => {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
	}
	console.log(req.body);
	Memo.updateById(req.params.id, new Memo(req.body), (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found Memo with id ${req.params.id}.`,
				});
			} else {
				res.status(500).send({
					message: "Error updating Memo with id " + req.params.id,
				});
			}
		} else res.send(data);
	});
};

exports.delete = (req, res) => {
	Memo.remove(req.params.id, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found Memo with id ${req.params.id}.`,
				});
			} else {
				res.status(500).send({
					message: "Could not delete Memo with id " + req.params.id,
				});
			}
		} else res.send({ message: `Memo was deleted successfully!` });
	});
};
