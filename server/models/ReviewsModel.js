const Review = require('../../database/index');

const getReviews = (id, callback) => {
  Review.findById(id, callback);
};

module.exports = {
  getReviews,
};
