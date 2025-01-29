const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: Number},
});

const User = mongoose.model('User', userSchema);

//controller function
const createUser = async (name, email, password, age) => {
    try {
         const user = new User({name, email, password, age});
         await user.save();
         return user;
    } catch (error) {
        throw new Error('Error creating new user');
    }
}

module.exports = { createUser, User };
