
const express = require("express");
const router = express.Router();
 
const authenticate = require("../middlewares/authentication");
 const product = require("../models/userProduct.model");

router.post("",authenticate, async(req, res)=>{
    req.body.userId = req.userID;
try {
    
    const products = await product.create(req.body);

    return res.status(200).send({products});
} catch (error) {
    return res.send({message : error.message});
}

});
 
router.get("", async (req, res) =>{
    try {
        
        const productm = await product.find()
        return res.status(200).send(productm);

    } catch (error) {
        
        return res.status(400).send({message : error.message});
    }
})

module.exports = router;