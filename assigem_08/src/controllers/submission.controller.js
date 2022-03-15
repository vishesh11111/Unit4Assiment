const express = require("express");
// const { use } = require("..");

const submission = require("../models/submission.model");

const router = express.Router();

router.get("", async(req, res)=>{
    try {
        const student = await submission.find()
        .populate({path: "evolution_Id",populate:{path: "batch_Id"}
    })
    .populate({path: "student_Id"}).lean().exec();
        return res.status(200).send({submission : student});
    } catch (error) {
        return res
        .status(500)
        .send({massege: (error.massege)});
    }
});

router.post("",async(req, res)=>{

    try{
        const student = await submission.create(req.body).lean().exec();
        return res.status(200).send({student_details: student});
    }catch(error){
        return res
        .status(500)
        .send({massege: error.massege});
    }
});

router.get("/:id",async(req, res)=>{
    try {
        const student = await submission.findById(req.params.id)
        .populate({path: "evolution_Id",populate: {path:"batch_Id"}})
        .populate({path: "student_Id"})
        .lean().exec();
        return res.status(200).send({student_details: student});
    } catch (error) {
        return res
        .status(500)
        .send({massage : error.massage});
    }
});

router.patch("/:id", async(req, res)=>{
    try {
        const student = await submission.findByIdAndUpdate(req.params.id, req.body,{
            new : true,
        }).lean().exec();
        return res.status(200).send({student_details: student});
    } catch (error) {
        return res
        .status(500)
        .send({massage: error.massage});
    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const student = await submission.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
        return res.status(200).send({student_details: student});
    } catch (error) {
        return res
        .status(500)
        .send({massage: error.massage});
    }
});

module.exports = router;