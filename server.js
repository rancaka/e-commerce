require('babel-register')({
    presets: ['react']
});

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

app.listen(3000);