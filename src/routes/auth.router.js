const express=require('express');
const authrouter=express.Router()
const authcontroller=require('../controllers/auth.controller')

authrouter.post('/register',authcontroller.registercontroller)
  
authrouter.post('/login',authcontroller.logincontroller)
module.exports=authrouter;