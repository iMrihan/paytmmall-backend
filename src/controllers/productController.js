const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("", async (req, res) => {
	try {
		const products = await Product.find().lean().exec();
		res.status(200).send(products);
	} catch (err) {
		res.status(500).send(err.message);
	}
});
router.get("/brands", async (req, res, next) => {
	try {
		var allBrands = await Product.distinct("brand");
		res.status(200).json({ allBrands });
	} catch (error) {
		next(error);
	}
});

router.get("/category", async (req, res, next) => {
	try {
		var categories = await Product.distinct("category");
		res.status(200).json({ categories });
	} catch (error) {
		next(error);
	}
});

router.get("/subCategory", async (req, res, next) => {
	try {
		var subCategories = await Product.distinct("subCategory");
		res.status(200).json({ subCategories });
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const products = await Product.findById(req.params.id).lean().exec();
		res.status(200).send(products);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post("", async (req, res) => {
	try {
		const products = await Product.create(req.body);
		res.status(200).send(products);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
			.lean()
			.exec();
		res.status(200).send(products);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const products = await Product.findByIdAndDelete(req.params.id)
			.lean()
			.exec();
		res.status(200).send(products);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

module.exports = router;