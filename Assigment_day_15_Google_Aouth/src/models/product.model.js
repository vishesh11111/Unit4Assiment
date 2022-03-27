
const mongoose = require("mongoose");

const produSchema = new mongoose.Schema({
    title : {type: String, required: true},
    price : {type: Number, required: true},
    userId : {type: mongoose.Schema.Types.ObjectId,
    ref: "user", required: true}
},
{
    versionKey: false,
    timestamps: false,
}
);

module.exports= mongoose.model("product", produSchema);