const mongoose = require('mongoose');
var moment = require('moment');

var itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    createdAt: {type: Number, default: moment().unix()},
    updatedAt: {type: Number, default: moment().unix()}
});
var Item = mongoose.model('Item', itemSchema);

module.exports = Item;