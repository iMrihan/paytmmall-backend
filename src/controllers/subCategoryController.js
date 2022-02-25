const express = require("express");
const router = express.Router();
const subCategory = require("../models/subCategoryModel");

router.get("", async (req, res) => {
	try {
		const items = await subCategory
			.find()
			.populate("category_id")
			.lean()
			.exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});
router.get("/brands", async (req, res, next) => {
	try {
		var allBrands = await subCategory.distinct("brand");
		res.status(200).json({ allBrands });
	} catch (error) {
		next(error);
	}
});

router.get("/category", async (req, res, next) => {
	try {
		var categories = await subCategory.distinct("category");
		res.status(200).json({ categories });
	} catch (error) {
		next(error);
	}
});

router.get("/subCategory", async (req, res, next) => {
	try {
		var subCategories = await subCategory.distinct("subCategory");
		res.status(200).json({ subCategories });
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const items = await subCategory.findById(req.params.id).lean().exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const items = await subCategory.create(req.body);
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const items = await subCategory
			.findByIdAndUpdate(req.params.id, req.body, {
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
		const items = await subCategory
			.findByIdAndDelete(req.params.id)
			.lean()
			.exec();
		res.status(200).send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

module.exports = router;
