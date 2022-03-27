const express = require("express");
const app = express();
const Usercontroller = require("./controllers/user.controller")
const {register, login, newToken} = require("./controllers/auth.controller");
const productCntroller = require("./controllers/product.controller");
const passport = require("./configs/google.Aouth");
app.use(express.json());


app.use("/users", Usercontroller)

app.post("/register",register);

app.post("/login", login);
app.use("/products", productCntroller)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' ,session: false }),
  function(req, res) {
    // res.redirect('/');
    // Take Data from Gmail
    const token = newToken(req.user); 
    return res.status(200).send({user: req.user, token});
  });
module.exports = app;