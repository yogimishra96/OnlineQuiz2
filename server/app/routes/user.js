const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');



router.post('/register',(req,res,next)=>
{   let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    sex: req.body.sex,
    contact: req.body.contact,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
});
   User.addUser(newUser,(err,user)=>{
       if(err){
           res.json({success: false, msg:'Failed to register user'});
       } else{
           res.json({success: true, msg:'Successfully Registered'});
       }
   })
});

router.post('/authenticate',(req,res,next)=>
{
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, (err,user)=>
    {
        if (err)throw err;
        if (!user){
            return res.json({success: false, msg:'User Not Found'});
        }
        User.comparePassword(password,user.password,(err,isMatch)=>
        {
            if (err) throw err;
            if(isMatch){
                const token=jwt.sign(user.toJSON(), config.secret , {
                    expiresIn:604800 //1 week
                });
                res.json({
                    success:true,
                    token:`Bearer ${token}`,
                    user:{
                        id:user._id,
                        firstname:user.firstname,
                        lastname:user.lastname,
                        sex:user.sex,
                        contact:user.contact,
                        email:user.email,
                        username:user.username
                    }
                });
            }
            else{
                return res.json({success: false, msg:'Wrong password'});

            }
        });
    });
});


    router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>
{

    res.json({user: req.user});
});


module.exports = router;