const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    fistName: { type: String },
    lastName: { type: String },
    birthday: { type: Date },
    gender: { type: String },
    email: { type: String },
    address: { type: String },
    phoneNumber: { type: Number },
    image: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', User);