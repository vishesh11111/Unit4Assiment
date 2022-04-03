const mongoose = require("mongoose")


module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://vishesh:89824249@cluster1.5hmzk.mongodb.net/Redis?authSource=admin&replicaSet=atlas-14f8kv-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
    );
}