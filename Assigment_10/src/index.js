const express = require("express");
// const transporter = require("./configs/mail")
const productController = require("./controllers/mail.Controller");
const app = express();

app.use(express.json());
// const productController = require("./controllers/productController")


  // send mail with defined transport object

// main().catch(console.error);

// app.use("/product", productController);
app.use("/product",productController);
module.exports= app;