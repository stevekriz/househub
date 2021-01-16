const faker = require('faker');

const db = require('./database/index.js');

const seed = [];

for (let i = 1; i <= 100; i += 1) {
  const listing = {
    _id: i,
    averageRating: null,
    reviewCount: faker.finance.amount(10, 50, 0),
    cleanliness: faker.finance.amount(0, 5, 1),
    accuracy: faker.finance.amount(0, 5, 1),
    communication: faker.finance.amount(0, 5, 1),
    location: faker.finance.amount(0, 5, 1),
    checkIn: faker.finance.amount(0, 5, 1),
    value: faker.finance.amount(0, 5, 1),
    reviews: [],
  };

  const sum = listing.cleanliness + listing.accuracy + listing.communication
    + listing.location + listing.checkIn + listing.value;

  const ratingCategories = 6;

  const average = (sum / ratingCategories).toFixed(2);

  listing.averageRating = average;

  for (let j = 1; j <= listing.reviewCount; j += 1) {
    listing.reviews.push({
      _id: j,
      profilePicture: faker.image.people(),
      userName: faker.internet.userName(),
      date: faker.date.between('2015-01-01', '2020-12-31'),
      comment: faker.lorem.sentences(),
      ownerComment: Math.random() < 0.1 ? faker.lorem.sentences() : null,
    });
  }

  seed.push(listing);
}

db.Review.insertMany(seed, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    db.connection.close();
  }
});
