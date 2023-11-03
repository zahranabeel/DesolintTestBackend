const mongoose = require("mongoose");

var userDetailSchema = new mongoose.Schema({
    carModel: {
        type: String,
        min: 3
    },
    price: {
        type: Number,
    },
    phoneNo: {
        type: Number,
    },
    city: {
        type: String,
    },
    images: {
        type: Array
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Login",
        require: true,
    },
});

module.exports = mongoose.model("userDetail", userDetailSchema);