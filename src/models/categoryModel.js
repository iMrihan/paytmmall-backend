const mongoose = require("mongoose");

categorySchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
        
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("category", categorySchema);
