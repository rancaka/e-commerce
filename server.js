require('babel-register')({
    presets: ['react']
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

mongoose.connect('mongodb://localhost:27017/e-commerce');
app.listen(3000);