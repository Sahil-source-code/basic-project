const express=require('express')
const postrouter=express.Router();
const postcontroller=require('../controllers/post.controller')
const multer=require('multer');
const upload=multer({storage:multer.memoryStorage()})





/**
 * post --/api/post [protected api rhegi]
 * req.body--(caption,imgurl)
 */

postrouter.post("/",upload.single("image"),postcontroller.createpostcontroller)
/**
 * get---/api/posts/
 * jo user request kre uski sabhi post return hojaye
 * sabse phele ye identify krna hoga ki kon request kr rjha hai 
 */
postrouter.get('/',postcontroller.getpostcontroller)
module.exports=postrouter
