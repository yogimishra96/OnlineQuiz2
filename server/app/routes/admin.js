const express = require('express');
const router = express.Router();
const User = require('../models/admin');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');



router.post('/addquestion',(req,res,next)=>
{   let admin = new Admin({
    question: req.body.question,
    optionA: req.body.optionA,
    optionB: req.body.optionB,
    optionC: req.body.optionC,
    optionD: req.body.optionD,
    rightAnswer:req.body.answer,

});
    Admin.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else{
            res.json({success: true, msg:'Successfully Registered'});
        }
    })
});


router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>
{

    res.json({user: req.user});
});


module.exports = router;