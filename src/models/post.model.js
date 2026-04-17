const mongoose=require('mongoose')
const postschema=new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imggurl:{
        type:String,
        required:[true,"imgurl is require for post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"user id is require for creating a post"]
    }

})
const postmodel=mongoose.model("posts",postschema)
module.exports=postmodel;