const express = require('express')
const router=express.Router();

const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt =require('jsonwebtoken');


// register

router.post("/register",async (req,res)=>{
   
    const newUser = User({
        username : req.body.username,
        email : req.body.email,
        // password :  JSON.stringify(CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY))
        password : CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    })
   
  
    try{

        const user= await newUser.save();
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

})


// Login -->

router.post("/login", async (req,res)=>{
        
    try{
        const user= await User.findOne({email : req.body.email});

        !user && res.status(401).json("wrong username or password");

        var bytes  = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        originalText !== req.body.password && res.status(401).json("wrong username or password");
       
        const accessToken= jwt.sign({id : user._id ,isAdmin : user.isAdmin},
            process.env.SECRET_KEY ,
            {expiresIn :"5d"});

        const { password ,...info} =user._doc;
       
        res.status(201).json({...info,accessToken});

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports=router;