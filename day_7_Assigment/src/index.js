const express = require("express");
// const { get } = require("express/lib/response");
// const mongoose = require("mongoose");




// connect mongo -----------------------
const userController = require("./controllers/user.controller")
// Section Crude
const sectionController = require("./controllers/section.controller");
// book Crude
const bookController = require("./controllers/book.controller");
// author crude
const authorcontroller = require("./controllers/author.controller");
// books_author crude
const book_aouthorController = require("./controllers/book_author.controller")
// checkOut crude
const checkOutController = require("./controllers/checkOut.controller");

const rout = express();
rout.use(express.json());
rout.use("/users",userController);
rout.use("/sections", sectionController);
rout.use("/books",bookController);
rout.use("/book", book_aouthorController);
rout.use("/authors",authorcontroller);
rout.use("/checkOuts",checkOutController);

module.exports = rout;