import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 33%;
  justify-content: flex-start;
  align-items: center;
  margin-right: 7%;
  margin-bottom: 24px;
`;

const Star = styled.span`
  display: flex;
  align-items: center;
  color: rgb(255, 56, 92);
  font-size: 22.76px;
  padding-right: 8px;
`;

const RatingHeader = styled.span`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const ModalRatingsHeader = ({ averageRating, reviewCount }) => (
  <Container>
    <Star>
      <i className="fas fa-star" />
    </Star>
    <RatingHeader>
      {`${averageRating} (${reviewCount} reviews)`}
    </RatingHeader>
  </Container>
);

export default ModalRatingsHeader;

ModalRatingsHeader.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
