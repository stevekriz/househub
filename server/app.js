const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/api/reviews', routes);

module.exports = app;
