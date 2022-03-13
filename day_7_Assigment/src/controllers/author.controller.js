const express = require("express");

const author = require("../models/author.model");

const rout = express.Router();

// rout.use(express.json());

rout.get("", async (req, res) => {
    try {
        const user = await author.find()
        // .populate({path: "userId" , select: {name:1 , _id: 0}})
        .lean().exec();
        return res.status(200).send({ author: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.post("", async (req, res) => {
    try {
        const user = await author.create(req.body).lean().exec();
        return res.status(200).send({ author: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.get("/:id", async (req, res) => {
    try {
        const user = await author.findById(req.params.id)
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
        const user = await author.findByIdAndUpdate(req.params.id, req.body,{
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
        const user = await author.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

module.exports= rout;