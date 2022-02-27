const mongoose = require("mongoose");

module.exports = () => {
	return mongoose.connect(
		"mongodb+srv://paytmmall:paytmmall_123@cluster0.hvbuz.mongodb.net/paytmMall-Clone?retryWrites=true&w=majority"
	);
};
