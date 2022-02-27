const mongoose = require("mongoose");

productSchema = new mongoose.Schema(
	{
		title: { type: String, require: true },
		price: { type: Number, require: true },
		description: [{ type: String, require: true }],

		images_url: [{ type: String, require: true }],
		likes: { type: Number, require: false, default: 0 },
		subCategory_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "subCategory",
			required: true,
		},

		brand_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "brand",
			required: true,
		},

		comment_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("product", productSchema);
