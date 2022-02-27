const mongoose = require("mongoose");

brandSchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("brand", brandSchema);
