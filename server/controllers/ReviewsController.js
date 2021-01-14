const ReviewsModel = require('../models/ReviewsModel');

const getReviews = (req, res) => {
  ReviewsModel.getReviews(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
};

module.exports = {
  getReviews,
};
