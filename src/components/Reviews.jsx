import { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    axios.get('/api/reviews/1')
      .then(({ data }) => setReviews(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    'Hello from Reviews'
  );
};

export default Reviews;
