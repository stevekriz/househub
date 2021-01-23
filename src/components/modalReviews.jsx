import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalReview from './ModalReview';

const ReviewsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 60%;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 558.578px;
  margin-bottom: 72px;
  margin-left: 90.040px;
  @media (max-width: 1128px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0px;
  }
  @media (max-width: 730px) {
    margin-bottom: 24px;
   }
`;

const ModalReviews = ({ reviews, delayedSearchText }) => {
  const searchResults = delayedSearchText ? reviews.filter(
    (review) => review.comment.toLowerCase().includes(delayedSearchText.toLowerCase())
      || (review.ownerComment
        && review.ownerComment.toLowerCase().includes(delayedSearchText.toLowerCase())),
  )
    : reviews;

  return (
    <ReviewsContainer>
      {searchResults.map((review) => (
        <ModalReview key={review._id} review={review} delayedSearchText={delayedSearchText} />
      ))}
    </ReviewsContainer>
  );
};

export default ModalReviews;

ModalReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  delayedSearchText: PropTypes.string,
};

ModalReviews.defaultProps = { delayedSearchText: '' };
