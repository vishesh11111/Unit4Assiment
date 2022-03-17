// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
// const app = require("..");


const userSchema = new mongoose.Schema(
    {
        first_name : {type: String, required: true},
        last_name : {type: String, required: true},
        email : {type: String, required: true},
        pincode: {type: String, required: true},
        age : {type: Number, required: true},
        gender : {type: String, required : true,
            // enum:["Male", "Female"], 
            default: "Male"},
    },
    {
        versionKey: false,
        timestamps : true, 
    }
);
module.exports = mongoose.model("users", userSchema);