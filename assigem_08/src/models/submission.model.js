const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        evolution_Id : {type: mongoose.Schema.Types.ObjectId,
        ref: "evolution",
        required: true,},

        student_Id : {type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,},

        marks : {type: Number, required: true},
        date: {
            type: Date,
            // `Date.now()` returns the current unix timestamp as a number
            default: Date.now
          },
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

module.exports = mongoose.model("submission", submissionSchema);