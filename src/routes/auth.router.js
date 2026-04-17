const express=require('express');
const authcontroller=require('../controllers/auth.controller')

authrouter.post('/register',authcontroller,authcontroller.logincontroller)
  
authrouter.post('/login',authcontroller,logincontroller)
module.exports=authrouter;