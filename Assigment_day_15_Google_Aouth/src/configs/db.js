const mongoose = require("mongoose"); 

const connect = ()=>{
    mongoose.connect("mongodb+srv://vishesh:89824249@cluster1.5hmzk.mongodb.net/Authorization?authSource=admin&replicaSet=atlas-14f8kv-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
}

module.exports = connect;