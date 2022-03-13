const express = require("express");

const User = require("../models/user.model");

const rout = express.Router();
// rout.use(express.json());


rout.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send({ Users: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.post("", async (req, res) => {
    try {
        const user = await User.create(req.body).lean().exec();
        return res.status(200).send({ Users: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
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
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
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
        const user = await User.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

module.exports = rout;