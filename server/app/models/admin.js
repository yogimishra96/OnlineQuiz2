const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');
const bcrypt = require('bcryptjs');

//user Schema

const AdminSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },

    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    rightAnswer: {
        type: String,
        required: true
    },
});
const Admin = module.exports = mongoose.model('Admin',AdminSchema);

module.exports.getUserById = function(id,callback){

    User.findById(id, callback);
}

module.exports.getUserByUsername = function(email,callback){
    const query = {email:email}
    return Admin.findOne(query,callback);
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

// db.collection("quiz").insertMany(docs, function(err, res) {
//     if (err) throw err;
//     console.log(res.insertedCount+" documents inserted");
//
// });


