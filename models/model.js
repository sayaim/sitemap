const db = require("./db.js");

exports.create = (newMemo, result) => {
	db.query("INSERT INTO memos SET ?", newMemo, (err, res) => {
		if (err) {
			console.log(err);
			result(err, null);
			return;
		}
		result(null, { newMemo });
		console.log('success insert to DB!!!!!');
	});
};

exports.getAll = result => {
	let query = "SELECT id, title FROM memos";
	db.query(query, (err, res) => {
		if (err) {
			console.log(err);
			result(err, null);
			return;
		}
		result(null, res);
	});
};

exports.findById = (id, result) => {
	db.query(`SELECT * FROM memos WHERE id = ${id}`, (err, res) => {
		if (err) {
			console.log(err);
			result(err, null);
			return;
		}
		console.log(res);
		result(null, res);
	});
};

exports.updateById = (id, memo, result) => {
	let query = "UPDATE memos SET title = ?, content = ?, WHERE id = ?";
	db.query(query, [memo.title, memo.content, id], (err, res) => {
		if (err) {
			console.log(err);
			result(null, err);
			return;
		}
		console.log("updated: ", { id: id, ...memo });
		result(null, { id: id, ...memo });
	});
};

exports.remove = (id, result) => {
	db.query("DELETE FROM memos WHERE id = ?", id, (err, res) => {
		if (err) {
			console.log(err);
			result(null, err);
			return;
		}
		console.log("deleted memo: ", id);
		result(null, res);
	});
};
