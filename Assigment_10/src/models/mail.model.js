const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const mailSchema = new mongoose.Schema(
    {
        fristName: {type: String, required: true},
        lastName : {type: String, required : true},
        subject : {type: String, required: false},
        email : {type: String, required: true},
        text : {type: String, required: false}
    },
    {
        versionKey: false,
        timestamps: true,
    });

    const product = mongoose.model("SendMail", mailSchema)

    module.exports= product;