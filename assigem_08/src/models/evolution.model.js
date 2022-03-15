const mongoose = require("mongoose");

const evolutionSchema = new mongoose.Schema(
    {
        batch_Id : {type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
    },
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

module.exports = mongoose.model("evolution", evolutionSchema);