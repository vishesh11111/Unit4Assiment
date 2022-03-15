const express = require("express");
// const { use } = require("..");

const User = require("../models/user.model");

const router = express.Router();

router.get("", async(req, res)=>{
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send({student_details : user});
    } catch (error) {
        return res
        .status(500)
        .send({massege: (error.massege)});
    }
});

router.post("",async(req, res)=>{

    try{
        const user = await User.create(req.body).lean().exec();
        return res.status(200).send({student_details: user});
    }catch(error){
        return res
        .status(500)
        .send({massege: error.massege});
    }
});

router.get("/:id",async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        .lean().exec();
        return res.status(200).send({student_details: user});
    } catch (error) {
        return res
        .status(500)
        .send({massage : error.massage});
    }
});

router.patch("/:id", async(req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new : true,
        }).lean().exec();
        return res.status(200).send({student_details: user});
    } catch (error) {
        return res
        .status(500)
        .send({massage: error.massage});
    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
        return res.status(200).send({student_details: user});
    } catch (error) {
        return res
        .status(500)
        .send({massage: error.massage});
    }
});

module.exports = router;