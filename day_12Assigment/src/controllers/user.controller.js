
let arr=[]

const fs = require('fs');
function getFilesInDirectory() {
    console.log("\nFiles present in directory:");
    let files = fs.readdirSync(__dirname);
    files.forEach(file => {
      console.log(file);
    });
  }

  
const express = require("express");
const User = require("../models/user.model");

// const path = require("path");
const Upload = require("../middleware/upload");

const router = express.Router();

router.get("", async(req, res)=>{
    try {
        const users = await User.find().lean().exec();

        return res.status(200).send({user: users});
    } catch (error) {
        return res.send({msg: error.msg});
    }
});



router.post("",Upload.single("profile_pic"),async(req, res)=>{
    try {
        // console.log(req.body)
        // console.log(req.file);
        console.log(path)
        // const users = User.create(req.body);

        const usrs = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            profile_pic : req.file.path,
        })
     
        return res.status(200).send({profile: users});
        // return res.status(200).send({image: users});
    } catch (error) {
        // console.log(error);
        return res.send({msg: error.msg})
    }
});

router.post("/multiple",Upload.any("profile_pic"),async(req, res)=>{
    try {
        console.log(req.body)
        console.log(req.file);
        // const users = User.create(req.body);
        const filePath = req.files.map((file)=>{
            return file.path;
        });
        const users = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: filePath,
        });
        return res.status(200).send({image: users});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;