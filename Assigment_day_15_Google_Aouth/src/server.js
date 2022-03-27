const connect = require("./configs/db");
let app = require("./index");


app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});