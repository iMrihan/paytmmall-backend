const express = require("express");
const cors = require('cors')

const app = express();
app.use(express.json());
const connect = require("./configs/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const commentController = require("./controllers/commentController");
const categoryController = require("./controllers/categoryController");
const subCategoryController = require("./controllers/subCategoryController");
const brandController = require("./controllers/brandController");
const addressController = require("./controllers/addressController");

app.use(cors);
app.use("/users", userController);
app.use("/products", productController);
app.use("/comments", commentController);
app.use("/categories", categoryController);
app.use("/subCategories", subCategoryController);
app.use("/brands", brandController);
app.use("/addresses", addressController);

app.listen(2350, async (req, res) => {
	try {
		await connect();
		console.log("listing on port 2350");
	} catch (err) {
		console.log(err.message);
	}
});
