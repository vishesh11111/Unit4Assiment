const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name :{type: String, required: true},
    last_name : {type: String, required: true},
    profile_pic : [{type: String, required: false}],
},
{
    versionKey: false,
    timestamps: true,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;