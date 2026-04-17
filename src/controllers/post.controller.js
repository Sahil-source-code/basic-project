const postmodel=require('../models/post.model')
const postrouter = require('../routes/post.routes')
const ImageKit=require('@imagekit/nodejs')
const {toFile}=require('@imagekit/nodejs')
const jwt =require('jsonwebtoken')

const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATEKEY
})


async function createpostcontroller(req,res){
    console.log(req.body,req.file)
    const token =req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"token not provided unautjorize access"
        })
    }
    let decoded=null
    try{

         decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"user not authorized"
        })
    }
    const file=await imagekit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
            fileName:"Test",
            folder:"/cohort-2-instaclone-posty"
        })
        
    const post=await postmodel.create({
        caption:req.body.caption,
        imgurl:file.url,
        user:decoded.id
    })
    res.status(201).json({
        message:"post creasted successfully",post
    })
}
async function getpostcontroller(req,res){
    const token =req.cookies.token;
    let decoded=null
    try{
         decoded=jwt.verify(token,process.env.JWT_SECRET)

    }catch(err){
        return res.status(401).json({
            message:"token invalid"
        })
    }
    const userid=decoded.id
    const posts=await postmodel.find({
        user:userid
    })
 res.status(200).json({
    message:"post fetched successfully", posts
 })

}
module.exports={
    createpostcontroller,getpostcontroller
}