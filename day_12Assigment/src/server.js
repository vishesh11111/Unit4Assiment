
const connect = require("./configs/db");

const route = require("./index");

route.listen(4000, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("running 4000>>>>>>>");
})
