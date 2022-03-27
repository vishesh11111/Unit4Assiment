// for UUID =>  https://www.npmjs.com/package/uuid
// google => https://www.npmjs.com/package/passport-google-oauth20
require("dotenv").config();
const passport = require("passport");
const { v4: uuidv4 } = require('uuid');
const User = require("../models/user.model");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
//   console.log(profile._json.email);
// console.log(profile.displayName);
// console.log(accessToken);
// console.log(refreshToken);
// console.log(uuidv4())

/////////
// check by Gmail, user is there or not
let user = await User.findOne({email: profile?._json?.email}).lean().exec();

// take data from Gmail
if(!user){
    user = await User.create({
        name: profile.displayName,
        email : profile._json.email,
        password : uuidv4(),   // random password not use in signUp
        role : ["customer"]
    })
}
// console.log(user);
return cb(null, user);
  }
));


module.exports = passport;