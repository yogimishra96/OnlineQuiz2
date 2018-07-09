const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');
const bcrypt = require('bcryptjs');

//user Schema

const UserSchema = mongoose.Schema({

    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    sex:{
        type: String,
        required: true
    },
    contact:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback){

       User.findById(id, callback);
}

module.exports.getUserByUsername = function(username,callback){
    const query = {username:username}
   return User.findOne(query,callback);
}



module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}


module.exports.comparePassword =function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash,(err,isMatch)=>
    {
        if (err) throw err;
        callback(null,isMatch);
    });

}
