
const mongoose = require("mongoose");
const books_author = new mongoose.Schema(
    {
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true,
        },
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports= mongoose.model("book_authors", books_author);