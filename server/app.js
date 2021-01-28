const compression = require('compression');
const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();
app.use(compression());

app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use('/:id/bundle', express.static(path.join(__dirname, '../public/main.js')));
app.use('/api/reviews', routes);

module.exports = app;
