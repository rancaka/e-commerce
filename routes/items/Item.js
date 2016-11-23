const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    cover: String,
    images: []
}, { timestamps: true });

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;