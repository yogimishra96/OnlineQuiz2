const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');



router.post('/register',(req,res,next)=>
{   let newUser = new User({
    roleid: '0',
    name: req.body.name,
    email: req.body.email,
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
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByUsername(email, (err,user)=>
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
                        roleid:user.roleid,
                        id:user._id,
                        name:user.name,
                        email:user.email
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