const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");
let authenticate = require("../middlewares/authenticate");
let authorization = require("../middlewares/authorise");

router.post("", authenticate, async(req,res)=>{
    req.body.userId = req.user._id
    try {
        const product = await Product.create(req.body);

        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg: error.msg});

    }

});


// Patch Request 

router.patch("/:id", authenticate, authorization(["admin", "seller"]), async(req, res)=>{

    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        });

        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg: error.msg});

    }
});


// Request Get 

router.get("", async(req, res)=>{
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({msg : error.msg});

    }
});

module.exports = router;