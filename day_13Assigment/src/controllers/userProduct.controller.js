
const express = require("express");
const router = express.Router();
 
const authenticate = require("../middlewares/authentication");
const { findByIdAndDelete } = require("../models/userProduct.model");
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
});

router.patch("/:id", async (req, res) =>{
    try {
        
        const productm = await product.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        })
        return res.status(200).send(productm);

    } catch (error) {
        
        return res.status(400).send({message : error.message});
    }
});


router.delete(":/id", async (req, res)=>{
    try {
        const productm = await product.findByIdAndDelete(req.params.id);
        return res.status(200).send({users : productm});

    } catch (error) {
         return res.status(400).send({message : error.message});
    }
})

module.exports = router;
