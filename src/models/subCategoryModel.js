const mongoose = require("mongoose");

subCategorySchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
		image_url: { type: String, require: true },
		discount: { type: String, require: true },
		category_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "category",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("subCategory", subCategorySchema);
