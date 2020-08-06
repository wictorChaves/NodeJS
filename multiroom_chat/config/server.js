const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include('app/controllers')
    .then('app/routes')
    .then('helper')
    .then('app/models')
    .into(app);

module.exports = app;