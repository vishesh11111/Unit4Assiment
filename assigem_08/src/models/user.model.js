const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName :{type: String, required: true},
        lastName : {tyoe: String, required: false},
        gender : {type: String, required: true},
        dateOfBirth : {type: String, required: true},
    },
    {
         
        versionKey : false,
        timestamps : true,
    }
);

module.exports = mongoose.model("user", userSchema);