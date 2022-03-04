const express = require("express");
const app = express();
// console.log(express());
 app.get("/home", (req,res) =>{
console.log("Hello");
res.send("Hello");
 });
 app.get("/book",(req,res) =>{   
    let omg = {
        name1 : "Economy",
        name2 : "Math",
        name3 : "Science",
        name4 : "English"
    }
     res.send(omg);
 })
 app.listen(5000, () =>{
     console.log("listening on port 5000");
 });
