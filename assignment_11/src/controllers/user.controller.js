const express = require("express");
const { body, validationResult } = require('express-validator');
const { find } = require("../models/user.model");
const User = require("../models/user.model");
const app = express.Router();


app.post("",
body("first_name").not().isEmpty()
.withMessage("name can not be Empaty!")
.isLength({min: 5}).withMessage("must longer then five!"),
body("pincode").not().isEmpty()
.withMessage("pincode can not be Empty")
.isLength({min: 6},{max: 6})
.withMessage("must be 6 number"),
body("age").not().isEmpty()
.withMessage("age Not be Empty!")
.custom((value)=>{
    if((value<1) || (value>100)){
        throw new Error("Enter Valid Age");
    }
    return true;
}),
body("email").not().isEmpty()
.isEmail(),
async(req, res)=>{

    try {
        const error = validationResult(req)
        let final = null;
        if(!error.isEmpty()){

            final = error.array().map((err)=> {
                console.log(err);
                return {param: err.param,msg: err.msg}
            })

            return res.status(400).json({error: final});
        }
        
        const users =  await User.create(req.body);
        console.log(users);
        return res.send({user: users})
    } catch (error) {
        console.log(error);
    }

});

module.exports = app;