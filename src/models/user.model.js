const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already exist"],
        require:[,"username is required"]
    },
    email:{
        type:String,
        unique:[true,"email already exist"],
        require:[true,"email is required"]



    },
    password:{
        type:String,
        require:[true,"password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:'https://ik.imagekit.io/vdktkdrov/default%20userimage.png'
    }

})
const usermodel=mongoose.model("users",userschema)
module.exports=usermodel