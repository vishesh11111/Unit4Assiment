const router = require("./index");
const connect = require("./configs/db");

router.listen(4100, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
console.log("runing 4100....")
});