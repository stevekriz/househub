const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const reviewsSchema = new mongoose.Schema({
  _id: Number,
  averageRating: Number,
  reviewCount: Number,
  cleanliness: Number,
  accuracy: Number,
  communication: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  reviews:
    [
      {
        _id: Number,
        profilePicture: String,
        userName: String,
        date: Date,
        comment: String,
        ownerComment: String,
      },
    ],
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;
