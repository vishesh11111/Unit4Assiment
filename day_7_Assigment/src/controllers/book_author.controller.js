const express = require("express");
const b_authorl = require("../models/book_author.model");

const rout = express.Router();

// rout.use(express.json());


rout.get("/authors", async (req, res) => {
    try {
        const user = await b_authorl.find()
        .populate({path: "userId" , select: {name:1 , _id: 0}})
        .lean().exec();
        return res.status(200).send({ author: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.post("/authors", async (req, res) => {
    try {
        const user = await b_authorl.create(req.body).lean().exec();
        return res.status(200).send({ author: user });
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.get("/authors/:id", async (req, res) => {
    try {
        const user = await b_authorl.findById(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

rout.patch("/authors/:id", async (req, res) => {
    try {
        const user = await b_authorl.findByIdAndUpdate(req.params.id, req.body,{
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

rout.delete("/authors/:id", async (req, res) => {
    try {
        const user = await b_authorl.findByIdAndDelete(req.params.id)
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: (error.massage) });
    }
});

module.exports = rout;