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

{
  _id: 1,
  averageRating: 4.8,
  reviewCount: 1,
  cleanliness: 4.9,
  accuracy: 4.7,
  communication: 5.0,
  location: 4.9,
  checkIn: 4.7,
  value: 4.6
  reviews:
    [
      {
        _id: 1,
        profilePicture: "http://placeimg.com/640/480/people",
        userName: "Alene22",
        date: "2019-03-06T21:03:15.859Z",
        comment: "Repellendus dolor voluptatum. Reiciendis voluptatem fuga molestiae et in vel quo dolores. Repellat in consequuntur. Occaecati repudiandae excepturi qui libero. Consequatur et dolores eaque.",
        ownerComment: "Ut quam et maxime. Culpa expedita molestias maiores culpa necessitatibus itaque optio et. Quasi veritatis voluptatem sunt alias omnis consectetur accusantium.",
      },
      ...
    ]
}