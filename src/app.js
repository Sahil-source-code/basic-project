const express=require('express')
const app=express();
const cookieparser=require('cookie-parser')
const authrouter=require('./routes/auth.router')
const cors=require('cors')

const postrouter=require('./routes/post.routes')
app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use('/api/auth',authrouter)
app.use('/api/posts',postrouter)
module.exports=app;