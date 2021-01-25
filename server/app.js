const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/1'));
app.use('/:id', express.static(path.join(__dirname, '../public/main.js')));
app.use('/api/reviews', routes);

module.exports = app;
