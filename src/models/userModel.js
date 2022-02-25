const mongoose = require("mongoose");

userSchema = new mongoose.Schema(
	{
		// first_name: { type: String, require: true },
		// last_name: { type: String, require: true },
		mobile: { type: Number, require: true },
		// email: { type: String, require: true },
		// password: { type: String, require: true },
		// gender: { type: String, require: true, default: "male" },
		// address: { type: String, require: false },
		// myCarts: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		// myOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		// myFavorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("user", userSchema);
