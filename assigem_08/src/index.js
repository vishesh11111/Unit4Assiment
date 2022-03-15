const express = require("express");
// const { use } = require("express/lib/router");


// user connect
const userController = require("./controllers/user.controller");
const studentController = require("./controllers/student.controller");
const batchController = require("./controllers/batch.controller");
const evolutionController = require("./controllers/evolution.controller");
const submissionController = require("./controllers/submission.controller");

const router = express();
 router.use(express.json());

 router.use("/users", userController);
 router.use("/students", studentController);
 router.use("/batchs", batchController);
 router.use("/evolution", evolutionController);
 router.use("/submission", submissionController);

module.exports = router;