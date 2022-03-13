const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
    
    {
        bookName: { type: String, required: true },
        sectionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "section",
                required: true,
            },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("book", bookSchema);