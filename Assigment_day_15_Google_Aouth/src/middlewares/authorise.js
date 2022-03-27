
const authorise = (permutted)=>{

    return (req,res,next)=>{

        const user = req.user;
        // console.log(req.user.role);
        // console.log(permutted);
        let ispermutted = false;
        permutted.map(role =>{
            if(user.role.includes(role)){

                 ispermutted = true;
            }
        });
        if(ispermutted){
            return next();
        }
        else{
            return res.status(401).send({msg: "You are not Aothorize to Perform this Operation"});
        }
    }
}

module.exports = authorise;