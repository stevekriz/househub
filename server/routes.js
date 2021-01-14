const express = require('express');
const ReviewsController = require('./controllers/ReviewsController.js');

const router = express.Router();

router.get('/:id', ReviewsController.getReviews);

module.exports = router;
