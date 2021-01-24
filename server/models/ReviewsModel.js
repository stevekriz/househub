const db = require('../../database/index');

const get = (id, callback) => db.Review.findById(id, callback);

module.exports = get;
