import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalReview from './modalReview';

const ReviewsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: safe flex-start;
  align-items: safe flex-start;
  margin-left: 98.040px;
  width: 558.578px;
`;

const ModalReviews = ({ reviews, filtered, useFiltered }) => (
  <ReviewsContainer>
    {useFiltered
      ? filtered.map((review) => (
        <ModalReview key={review._id} review={review} />
      )) : reviews.map((review) => (
        <ModalReview key={review._id} review={review} />
      ))}
  </ReviewsContainer>
);

export default ModalReviews;

ModalReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  filtered: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  useFiltered: PropTypes.bool.isRequired,
};
