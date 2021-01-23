import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  max-width: 320.328px;
  @media (max-width: 1128px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

const Star = styled.span`
  display: flex;
  align-items: center;
  color: rgb(255, 56, 92);
  font-size: 22.76px;
  padding-right: 8px;
  @media (max-width: 730px) {
    font-size: 18.5px;
  }
`;

const RatingHeader = styled.span`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  @media (max-width: 730px) {
    font-size: 26px;
    line-height: 31px;
  }
`;

const ModalRatingsHeader = ({ averageRating, reviewCount }) => (
  <Container>
    <Star><i className="fas fa-star" /></Star>
    <RatingHeader>{`${averageRating} (${reviewCount} reviews)`}</RatingHeader>
  </Container>
);

export default ModalRatingsHeader;

ModalRatingsHeader.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
