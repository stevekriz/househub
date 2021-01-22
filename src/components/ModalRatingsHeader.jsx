import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  width: 40%;
  justify-content: flex-start;
  max-width: 312.328px;
  align-items: center;
  @media (max-width: 1128px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 24px;
  }
`;

const Star = styled.span`
  display: flex;
  align-items: center;
  color: rgb(255, 56, 92);
  font-size: 18.5px;
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
  @media (max-width: 730px) {
    font-size: 26px;
    line-height: 31px;
  }
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
