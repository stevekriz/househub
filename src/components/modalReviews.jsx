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
  margin-left: 98.040px;
  max-width: 558.578px;
`;

const ModalReviews = ({ reviews, searchText }) => {
  const searchResults = searchText
    ? reviews.filter(
      (review) => review.comment.toLowerCase().includes(searchText.toLowerCase())
      || (review.ownerComment
        && review.ownerComment.toLowerCase().includes(searchText.toLowerCase())),
    )
    : reviews;

  return (
    <ReviewsContainer>
      {searchResults.map((review) => (
        <ModalReview key={review._id} review={review} searchText={searchText} />
      ))}
    </ReviewsContainer>
  );
};

export default ModalReviews;

ModalReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  // search: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
};

// {useFiltered
//   ? filtered.map((review) => (
//     <ModalReview key={review._id} review={review} />
//   )) : reviews.map((review) => (
//     <ModalReview key={review._id} review={review} />
//   ))}

// const searchResults = reviews.reviews.filter(
//   (review) => review.comment.split(' ').some(
//     (element) => element.toLowerCase() === searchText.toLowerCase(),
//   ),
// );
// for (let i = 0; i < searchResults.length; i += 1) {
// const newText =
// searchResults[i].comment.replace(new RegExp(searchText, 'gi'),(match)=> `<mark>${match}</mark>`);
//   searchResults[i].comment = newText;
// }
