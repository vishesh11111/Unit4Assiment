const rout = require("./index");
const connect = require("./configs/db");
rout.listen(3000, async () => {
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("running 3000");
});