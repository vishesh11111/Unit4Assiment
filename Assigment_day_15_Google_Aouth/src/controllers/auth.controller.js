

const User = require("../models/user.model");
const jwt = require ("jsonwebtoken");
require("dotenv").config();

const newToken = (user) =>{
    // console.log(process.env.secret_key);
    return jwt.sign({user}, process.env.secret_key);
}

const register = async(req, res)=> {
try {
    let user = await User.findOne({email : req.body.email});

    if(user){

        return res.status(400).send({mgs : "Email alredy Exist"});
    }

    user = await User.create(req.body);

    const token = newToken(user); 
    return res.status(200).send({user, token});
} catch (error) {
    
return res.status(400).send({msg : error.mgs});
}
}


//////Login Side

const login = async(req, res)=> {
try {
    

    const user = await User.findOne({email: req.body.email});

    if(!user){
        return res.status(400).send("wrong email or password");
    }

    const match = user.checkPassword(req.body.password);
    if(!match){
        return res.status(400).send({msg :"worng password or email"});

    }

    const token = newToken(user); 
    return res.status(200).send({user, token});

} catch (error) {

    return res.status(400).send({msg : error.mgs});

}
}


module.exports = {register, login, newToken};