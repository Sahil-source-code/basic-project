const express=require('express')
const app=express();
const cookieparser=require('cookie-parser')
const authrouter=require('./routes/auth.router')
app.use(express.json())
app.use(cookieparser())
app.use('/api/auth',authrouter)
module.exports=app;