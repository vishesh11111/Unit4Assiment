
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId : {type: mongoose.Schema.Types.ObjectId,
        ref: "user", required: true},
    title : {type: String, required: true},
    price : {type: Number, required: true, unique: true},
},
{
versionKey: false,
timestamps : true,
});

const userProduct = mongoose.model("product", productSchema);

module.exports = userProduct;