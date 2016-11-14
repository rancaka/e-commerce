const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: String,
    price: Number
});
var Item = mongoose.model('Item', itemSchema);

module.exports = Item;