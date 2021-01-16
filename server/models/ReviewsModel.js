const db = require('../../database/index');

const getReviews = (id, callback) => {
  db.Review.findById(id, callback);
};

module.exports = {
  getReviews,
};
