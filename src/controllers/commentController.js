const express = require("express");
const router = express.Router();
const Comment = require("../models/commentModel");

router.get("", async (req, res) => {
	try {
		const comments = await Comment.find().lean().exec();
		res.status(200).send(comments);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const comments = await Comment.findById(req.params.id).lean().exec();
		res.status(200).send(comments);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const comments = await Comment.create(req.body);
		res.status(200).send(comments);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const comments = await Comment.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
			.lean()
			.exec();
		res.status(200).send(comments);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const comments = await Comment.findByIdAndDelete(req.params.id)
			.lean()
			.exec();
		res.status(200).send(comments);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

module.exports = router;
