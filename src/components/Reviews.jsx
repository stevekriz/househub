import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    axios.get('/api/reviews/1')
      .then(({ data }) => setReviews(data));
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <h1>Reviews</h1>
      <div>{reviews}</div>
    </>
  );
};

export default Reviews;
