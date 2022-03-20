
require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token)=>{
return new Promise((resolve, reject)=>{
    jwt.verify(token, process.env.JWT_SECRET,(err, decoded)=>{

        if(err){
            return reject(err);
        } 
        return resolve(decoded);
    });
})

    // var decoded = jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{
    //     if(err) return false;
    //     return decoded;
    // })
}

// Not Got Better
const authenticate =async (req , res, next) => {
console.log(req);
   
    if(!req.headers.authorization){
        return res.status(500).send({message : "Authoriztion token not Found"})
    }

    if(!req.headers.authorization.startsWith("Bearer")){
        return res.status(400).send({message : "Aurization token incorerct" });
    }

    const token = req.headers.authorization.trim().split(" ")[1]
    // verifyToken(token);

    let decoded;
    try {
        
        decoded = await verifyToken(token)
    } catch (error) {
        console.log(error);
        return res.status(400).send({message: "Authorization incorrect"});
        
    }

    req.userID = decoded.users._id;

    return next();

}

module.exports = authenticate;