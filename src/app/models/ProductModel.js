const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema ({
    title: { type: String },
    productId: { type: String },
    productName: { type: String },
    price: { type: Number },
    location: { type: String },
    size: { type: String },
    address: { type: String },
    district: { type: String },
    city: { type: String },
    image: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Product', Product);