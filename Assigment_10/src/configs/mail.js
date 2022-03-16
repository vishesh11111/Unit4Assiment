const nodemailer = require("nodemailer");
  module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c1a6d023628c69",
      pass: "e66e198fae60d4"
    }
  });