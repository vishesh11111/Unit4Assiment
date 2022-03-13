const express = require("express");

const checkOutMe = require("../models/checkOut.model");

const rout = express.Router();
// rout.use(express.json());


rout.get("", async (req, res) => {
    try {
        const user = await checkOutMe.find()
        .populate({path: "userId", select: {name: 1, _id: 0}})
        .populate({path: "bookId", select: {bookName: 1, _id : 0, createdAt: 1, updatedAt: 1}})
        .lean().exec();
        return res.status(200).send({ checkout: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.post("", async (req, res) => {
    try {
        const user = await checkOutMe.create(req.body).lean().exec();
        return res.status(200).send({ checkout: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.get("/:id", async (req, res) => {
    try {
        const user = await checkOutMe.findById(req.params.id)
        .populate({path: "userId", select: {name: 1, _id: 0}})
        .populate({path: "bookId", select: {bookName: 1, _id : 0, createdAt: 1, updatedAt: 1}})
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
        const user = await checkOutMe.findByIdAndUpdate(req.params.id, req.body,{
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
        const user = await checkOutMe.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

module.exports = rout;