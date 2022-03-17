// const path = require("path");
const app = require("./index");

const connect = require("./configs/db");
// console.log(path.join(__dirname,"../configs/db"));
app.listen(4000, async()=>{
    try{
        await connect();
    }catch(error){
        console.log(error);
    }
    console.log("running 4000>>>>>>")
})