const connect = require("./configs/db");
const app = require("./index");

app.listen(4300, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("runnng");
})