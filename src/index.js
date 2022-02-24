const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const commentController = require("./controllers/commentController");
app.use("/users", userController);
app.use("/products", productController);
app.use("/comments", commentController);
app.listen(5000, async (req, res) => {
	try {
		await connect();
		console.log("listing on port 5000");
	} catch (err) {
		console.log(err.message);
	}
});
