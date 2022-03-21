const express = require("express");

const usrControlller = require("./controllers/user.controller");

const router = express();

router.use(express.json());
router.use("/users", usrControlller);

module.exports = router;