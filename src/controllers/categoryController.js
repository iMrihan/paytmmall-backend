const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");

router.get("", async (req, res) => {
	try {
		const items = await Category.find().lean().exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});
router.get("/brands", async (req, res, next) => {
	try {
		var allBrands = await Category.distinct("brand");
		res.status(200).json({ allBrands });
	} catch (error) {
		next(error);
	}
});

router.get("/category", async (req, res, next) => {
	try {
		var categories = await Category.distinct("category");
		res.status(200).json({ categories });
	} catch (error) {
		next(error);
	}
});

router.get("/subCategory", async (req, res, next) => {
	try {
		var subCategories = await Category.distinct("subCategory");
		res.status(200).json({ subCategories });
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const items = await Category.findById(req.params.id).lean().exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const items = await Category.create(req.body);
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const items = await Category.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
			.lean()
			.exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const items = await Category.findByIdAndDelete(req.params.id).lean().exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

module.exports = router;
