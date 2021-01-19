import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Review from './Review';

const ReviewsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const Reviews = ({ reviews }) => (
  <ReviewsContainer>
    {reviews.slice(0, 6).map((review) => <Review key={review._id} review={review} />)}
  </ReviewsContainer>
);

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ownerComment: PropTypes.string,
    profilePicture: PropTypes.string.isRequired,
  })).isRequired,
};
