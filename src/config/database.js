mongoose=require('mongoose')
async function connecttodb() {
    await mongoose.connect(process.env.mongo_uri)
    console.log("connecetd to db");
    
    
}
module.exports=connecttodb;