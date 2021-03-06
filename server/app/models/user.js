const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');
const bcrypt = require('bcryptjs');

//user Schema

const UserSchema = mongoose.Schema({
    roleid:{
      type:String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
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

module.exports.getUserByUsername = function(email,callback){
    const query = {email:email}
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
