const multer =require("multer");

const {v4: uuid}=require('uuid')
const path=require('path') 

const storage=multer.diskStorage({
  destination:'uploads',
  filename:async(req,file,cb)=>{
    cb(null,file.originalname.split('.')[0]+`.${file.mimetype.split('/')[1]}`)
  }
})

module.exports= multer({storage})