const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');

//admin Schema

const AdminSchema = mongoose.Schema({
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



