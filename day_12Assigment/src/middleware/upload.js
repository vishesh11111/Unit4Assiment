const multer = require("multer");
const path = require("path");
const req = require("express/lib/request");
// const expre = require("")
//  Storage Function
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null ,path.join(__dirname,"../gallery"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// filter section
// console.log(path);
const fileFilter = (req, file, cb)=>{

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        // To accept the file pass `true`, like so:
        cb(null, true)
    }
    else{
        // To reject this file pass `false`, like so:
        cb(null, false)
    }
  
    // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))
  
  };

const options = {
 storage,
 fileFilter, 
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
};

const upload = multer(options);

module.exports = upload;
