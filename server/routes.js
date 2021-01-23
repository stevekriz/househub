const express = require('express');
const getReviews = require('./controllers/ReviewsController');

const router = express.Router();

router.get('/:id', getReviews);

module.exports = router;
