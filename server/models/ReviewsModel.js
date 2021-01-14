const Review = require('../../database/index.js');

const getReviews = (req, callback) => {
  Review.findById(req.params.id, callback);
};

module.exports = {
  getReviews,
};
