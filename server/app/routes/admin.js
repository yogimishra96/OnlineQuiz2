const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

router.post('/addQuestion',(req,res,next)=>
{   let admin = new Admin({
    question: req.body.question,
    optionA: req.body.optionA,
    optionB: req.body.optionB,
    optionC: req.body.optionC,
    optionD: req.body.optionD,
    rightAnswer:req.body.answer,
});
    admin.save(function(res,err){
        if(err){
            res.json({success: false, msg:'Failed'});
        } else{
            res.json({success: true, msg:'Successfully'});
        }
    });
});

//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>
{
    res.json({user: req.user});
});


module.exports = router;