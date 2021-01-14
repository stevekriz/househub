const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/api/reviews', routes);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
