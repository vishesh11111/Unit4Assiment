const express = require("express");

const section = require("../models/section.model");

const rout = express.Router();
// rout.use(express.json());


rout.get("", async (req, res) => {
    try {
        const user = await section.find()
        // .populate({path:"userId" , select: { createdAt: 0,_id: 0}})
        .lean().exec();
        return res.status(200).send({ section: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.post("", async (req, res) => {
    try {
        const user = await section.create(req.body).lean().exec();
        return res.status(200).send({ section: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.get("/:id", async (req, res) => {
    try {
        const user = await section.findById(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.patch("/:id", async (req, res) => {
    try {
        const user = await section.findByIdAndUpdate(req.params.id, req.body,{
            new : true,
        })
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.delete("/:id", async (req, res) => {
    try {
        const user = await section.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

module.exports = rout; 