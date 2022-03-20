
const connect  = require("./configs/db");
const router = require("./index");

router.listen(3000, async()=>{
    try {
        await connect();
        console.log("listen on part 3000");
    } catch (error) {
        console.log(error.message);
    }
});