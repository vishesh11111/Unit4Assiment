const mongoose = require('mongoose');

const connect = ()=>{
return mongoose.connect
("mongodb://127.0.0.1:27017/Bank");
// ("mongodb+srv://vishesh:89824249@cluster0.kq2zb.mongodb.net/ProfilePic");
}

module.exports = connect;
           