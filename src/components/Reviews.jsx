import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Review from './Review';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const Reviews = ({ reviews }) => (
  <Container>
    {reviews.slice(0, 6).map((review) => <Review key={review._id} review={review} />)}
  </Container>
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
