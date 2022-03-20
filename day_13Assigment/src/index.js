
const express = require("express");

// const { body, validationResult } = require('express-validator');
const {register, login} = require("./controllers/auth.controller");
const Usercontroller = require("./controllers/user.controller");
const productController = require("./controllers/userProduct.controller");

const router = express();
router.use(express.json());
router.use("/users", Usercontroller);


router.post("/login", login);

router.post("/register",register);
router.use("/products", productController);
module.exports = router;