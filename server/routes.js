const express = require('express');
const ReviewsController = require('./controllers/ReviewsController');

const router = express.Router();

router.get('/:id', ReviewsController.getReviews);

module.exports = router;
