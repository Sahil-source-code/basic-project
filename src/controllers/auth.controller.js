const usermodel = require('../models/user.model');
const authrouter=express.Router()
const crypto=require('crypto')
const jwt=require('jsonwebtoken')


async function registercontroller(req,res){
    const {email,username,password,bio,profileImage}=req.body
        const isuserexist=await usermodel.findOne({
           $or:[
            {username},
            {email}
           ]
        })
    if(isuserexist){
        return res.status(409).json({
            message:"user already exist"+ isuserexist==email?"email exist":"username exist"
        })
    }
    const hash=crypto.createHash('sha256').update(password).digest('hex')
    const user=await usermodel.create({
        username,
        email,
        bio,
        profileImage,
        password:hash
    })
    const token=jwt.sign({
        /**
         * user ka data unique hona cahaiye
         * data unique hona cahiye
         */
        
            id:user._id
        },
        process.env.JWT_SECRET,{expiresIn :'1d'}
    )
        res.cookie("token", token)
        res.status(201).json({
            message:"user register successfully",
            user:{
                email:user.email,
                username:user.username,
                bio:user.bio,
                profileImage:user.profileImage
            }
        })
}


async function logincontroller(req,res){
    const {username,email,password}=req.body
    //email,username,password me se koi 2 se hi login ho jaye
    const user=await usermodel.findOne({
        $or:[
            {
                //conditon 1
                username:username

            },
            {
                //coditin 2
                email:email

            }
        ]
    })
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }
    const hash=crypto.createHash('sha256').update(password).digest('hex')
    const ispasswordvalid = hash==user.password
    if(!ispasswordvalid){
        return res.status(401).json({
            message:"password invalid"
        })
    }
    const token=jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    )
    res.cookie("token",token)
    res.status(200).json({
        message:"user logged in successfully",user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}
module.exports={
    registercontroller,
    logincontroller
}
