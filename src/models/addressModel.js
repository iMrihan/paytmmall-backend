const mongoose = require("mongoose");

addressSchema = new mongoose.Schema(
	{
		full_name: { type: String, require: true },
		address1: { type: String, require: true },
		address2: { type: String },
		mobile: { type: Number, require: true },
		pinCode: { type: Number, require: true },
		city: { type: String, require: true },
		state: { type: String, require: true }
		// address: { type: String, require: false },
		// myCarts: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
		// user_id: [
		// 	{ type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
		// ],
		// myFavorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("addresses", addressSchema);
