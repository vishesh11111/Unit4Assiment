const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const {validationResult } = require('express-validator');
const GenToken = (users)=>{
    return jwt.sign({users}, process.env.JWT_SECRET);;
}

const register = async(req, res)=>{

    try {
        
        // validation path
        
        
        const errors = validationResult(req)
        let final = null;

        if(!errors.isEmpty()){

          final = errors.array().map((err)=>{
              return {param : err.param, msg : err.msg}
          })

          return res.status(400).send({errors : final });
        }
        
        

       let users = await User.findOne({email : req.body.email});

       if(users){
           return res.status(400).send({message : "Email alrady exist"});
       }

       users = await User.create(req.body);

       const token = GenToken(users);
       return res.status(200).send({users, token});
    } catch (error) {

        res.status(400).send({message : error.message});
        
    }
}


// Login Part

const login = async(req, res)=>{

     try {
      const users = await User.findOne({email : req.body.email});

      if(!users){
          return res.status(400).send("worng Email");
      }
      const match = users.checkPassword(req.body.password);

      if(!match){
          return  res.status(400).send({message : "wrong Password"});
      }

      const token = GenToken(users);
      return res.status(200).send({users, token});

     } catch (error) {
         
        return res.status(500).send({message: error.message});
     }
}


module.exports = {register, login};
