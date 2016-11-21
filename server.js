require('babel-register')({
    presets: ['react']
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index.jsx');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(routes);

mongoose.connect('mongodb://localhost:27017/e-commerce');
app.listen(3000);