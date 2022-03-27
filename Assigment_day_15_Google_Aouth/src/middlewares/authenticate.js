
// const { reject } = require("bcrypt/promises");
const jwt = require ("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{
        let decoded = jwt.verify(token, process.env.secret_key, (err,decoded)=>{
            if(err){
                return reject(err);
            }
            return resolve(decoded);
        });

    })
}

const authenticate = async(req, res, next)=>{

    if(!req.headers.authorization){

        return res.status(400).send({msg : "Authorization Token Not Found"});
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({msg : "Authorization Token Not Found"});
    }

    const token = req.headers.authorization.trim().split(" ")[1];

    let decoded
    try {
        
        decoded = await verifyToken(token);

    } catch (error) {
        return res.status(400).send({msg : "Authorization Token Not Found or Incarrenct"});

    }
    console.log(decoded);
    /////////Not Got It
    req.user = decoded.user;
    return next();
}

module.exports = authenticate;