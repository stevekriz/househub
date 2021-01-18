const faker = require('faker');

const db = require('./database/index.js');

const seed = [];

for (let i = 1; i <= 100; i += 1) {
  const listing = {
    _id: i,
    averageRating: null,
    reviewCount: Math.floor(Math.random() * (50 - 10 + 1) + 10),
    ratings: [
      ['Cleanliness', (Math.random() * 5).toFixed(1)],
      ['Accuracy', (Math.random() * 5).toFixed(1)],
      ['Communication', (Math.random() * 5).toFixed(1)],
      ['Location', (Math.random() * 5).toFixed(1)],
      ['Check-In', (Math.random() * 5).toFixed(1)],
      ['Value', (Math.random() * 5).toFixed(1)],
    ],
    reviews: [],
  };

  const lr = listing.ratings;
  const sum = Number(lr[0][1]) + Number(lr[1][1])
    + Number(lr[2][1]) + Number(lr[3][1]) + Number(lr[4][1])
    + Number(lr[5][1]);
  const ratingCategories = 6;

  const average = (sum / ratingCategories).toFixed(2);
  listing.averageRating = average;

  const month = {
    12: 'January',
    11: 'February',
    10: 'March',
    9: 'April',
    8: 'May',
    7: 'June',
    6: 'July',
    5: 'August',
    4: 'September',
    3: 'October',
    2: 'November',
    1: 'December',
  };

  for (let j = 1; j <= listing.reviewCount; j += 1) {
    listing.reviews.push({
      _id: j,
      profilePicture: `https://airbnbfec.s3-us-west-1.amazonaws.com/${Math.floor(Math.random() * (41 - 1 + 1) + 1)}.jpeg`,
      name: faker.name.firstName(),
      date: `${j < 13 ? month[j] : 'January'} ${j < 13 ? 2020 : 2019}`,
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
