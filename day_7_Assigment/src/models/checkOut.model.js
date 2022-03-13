
const mongoose = require("mongoose");
const checkOut = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        bookId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "book",
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("checkOuts", checkOut);