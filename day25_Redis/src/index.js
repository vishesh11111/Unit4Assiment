const express = require("express");
const app = express();
const productController= require("./controllers/product.controller")
app.use(express.json())
app.use("/product",productController)


module.exports = app;
