const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("", async (req, res) => {
	try {
		const users = await User.find().lean().exec();
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const users = await User.findById(req.params.id).lean().exec();
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const users = await User.create(req.body);
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const users = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
			.lean()
			.exec();
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const users = await User.findByIdAndDelete(req.params.id).lean().exec();
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

module.exports = router;
