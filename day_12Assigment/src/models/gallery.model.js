const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
   userId : {type: mongoose.Schema.Types.ObjectId, required: true},
},
{
    versionKey: false,
    timestamps: true,
});


const gallleryModel = mongoose.model("gallery", gallerySchema);
module.exports = gallleryModel;