const express = require("express");

const app = express.Router();
const Mail = require("../models/mail.model");
const transporter = require("../configs/mail");
// const { router } = require("..");
app.post("/", async (req, res) => {
  try {
    const prodt = await Mail.create(req.body);
   
    transporter.sendMail({
      from: '"<visshe@12gmail.com>', // sender address
      to: prodt.email, // list of receivers
      subject: prodt.subject, // Subject line
      text: "Hello worlmsaduaad?", // plain text body
      html: prodt.text, // html body
    });

    return res.status(200).send({ messege: "poduct uplodede succefully" });
  } catch (error) {

return res.
status(500)
.send({messege: error.messege});
  }
});

module.exports = app;