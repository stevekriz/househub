import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Review from './review';

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1144px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const MainColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 460.66px;
  padding-right: 8px;
  margin-right: 103.3281px;
  margin-bottom: 40px;
`;

const Reviews = ({ reviews }) => {
  const initialReviews = reviews.slice(0, 6);
  const render = initialReviews.map((review) => (
    <MainColumn key={review._id}>
      <Review review={review} />
    </MainColumn>
  ));

  return (
    <Row>
      {render}
    </Row>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
