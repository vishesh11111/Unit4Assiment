const express = require("express");
const mongoose = require("mongoose");
// console.log(mongoose);
const app = express();

app.use(express.json());
const conectes = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/Library")
}

const BySchema = new mongoose.Schema(
    {
        firstName : {type : String, required: true},
        lastName : {type : String, required: false},
        bookName : {type : String, required: true},
        password : {type : String, required : true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const ByUser = mongoose.model("book", BySchema);
// naot Ho

const PostSchema = new mongoose.Schema(
    {
        title : {type: String, required: true},
        body : {type: String, required: true},
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required : true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const PostData = mongoose.model("section", PostSchema);

const authorSchema = new mongoose.Schema(
    {
        body: {type: String, required: true},
        postId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "section",
            required: true,
        },
        userId:{
            type : mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const author = mongoose.model("author", authorSchema);

app.get("/check",async(req, res)=>{
    try{
        const oprts = await ByUser.find().lean().exec();
        return res.status(200).send({users: oprts});
    }catch(err){
        return res
        .status(500)
        .send({message: "gone Wrong"});
    }
});

app.post("/check", async(req, res)=>{
    try {
        const oprt = await ByUser.create(req.body);
        return res.status(201).send(oprt);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
});

app.get("/check/:id", async(req,res)=>{
    try {
        const oprt = await ByUser.findById(req.params.id).lean().exec();
        return res.status(200).send(oprt);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});

// hhdasdhahsddddddd
app.patch("/check/:id", async (req,res)=>{
    try {
        const oprt = await ByUser.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        })
        .lean()
        .exec();
        return res.status(200).send(oprt);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});

app.delete("/check/:id", async(req, res)=>{
    try {
        const oprt = await ByUser.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(oprt);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});

app.get("/books", async(req, res)=>{
    try {
        const postMe = await PostData.find().lean().exec();
        return res.status(200).send(postMe);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

app.post("/books",async (req,res)=>{
    try {
        const postHel = await PostData.create(req.body);
        return res.status(200).send(postHel);
        } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

app.get("/books/:id",async (req, res)=>{
    try {
        const postHel = await PostData.findById(req.params.id).lean().exec();
        return res.status(200).send(postHel);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

app.patch("/books/:id",async (req, res)=>{
    try {
        const postHel = await PostData.findByIdAndUpdate(req.params.id,req.body,{
           new: true,
        })
        .lean()
        .exec();
        return res.status(200).send(postHel);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


app.delete("/books/:id",async (req, res)=>{
    try {
        const postHel = await PostData.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(postHel);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

app.listen(4000,async()=>{
    try {
        await conectes();
    } catch (error) {
        console.log(error);
    }
    console.log("listen 4000");
})