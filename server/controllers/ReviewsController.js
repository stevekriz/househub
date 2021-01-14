const ReviewsModel = require('../models/ReviewsModel.js');

const getReviews = (req, res) => {
  ReviewsModel.getReviews(req, (err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(success);
    }
  });
};

module.exports = {
  getReviews,
};
