const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fName: {
        type: String,
        required: true,
        trim: true
    },
    lName: {
        type: String,
        required: true,
        trim: true
    },
    Age: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    collection: 'Users', // this will create a collection in the database with the name 'Users'
    timestamps: true}  // this will automatically add the createdAt and updatedAt fields
);



module.exports = {
    User: mongoose.model('User', userSchema)
}
