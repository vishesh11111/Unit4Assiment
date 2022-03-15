const express = require("express");
// const { use } = require("..");

const evolutionk = require("../models/batch.model");

const router = express.Router();

router.get("", async(req, res)=>{
    try {
        const students = await evolutionk.find().lean().exec();
        return res.status(200).send({student_details : students});
    } catch (error) {
        return res
        .status(500)
        .send({massege: (error.massege)});
    }
});

router.post("",async(req, res)=>{

    try{
        const students = await evolutionk.create(req.body).lean().exec();
        return res.status(200).send({students: students});
    }catch(error){
        return res
        .status(500)
        .send({massege: error.massege});
    }
});

router.get("/:id",async(req, res)=>{
    try {
        const students = await evolutionk.findById(req.params.id)
        .lean().exec();
        return res.status(200).send({student_details: students});
    } catch (error) {
        return res
        .status(500)
        .send({massage : error.massage});
    }
});

router.patch("/:id", async(req, res)=>{
    try {
        const students = await evolutionk.findByIdAndUpdate(req.params.id, req.body,{
            new : true,
        }).lean().exec();
        return res.status(200).send({student_details: students});
    } catch (error) {
        return res
        .status(500)
        .send({massage: error.massage});
    }
});

router.delete("/:id", async(req, res)=>{
    try {
        const students = await evolutionk.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
        return res.status(200).send({student_details: students});
    } catch (error) {
        return res
        .status(500)
        .send({massage: error.massage});
    }
});

module.exports = router;