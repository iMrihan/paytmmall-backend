const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
	{
		body: { type: "string", required: true },

		product_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "product",
			required: true,
		},
		likes: { type: Number, default: 0 },
		disLikes: { type: Number, default: 0 },

		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("comment", commentSchema);
