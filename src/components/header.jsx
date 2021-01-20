import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  font-size: 22px;
  font-weight: 600;
`;

const Star = styled.span`
  margin-right: 8px;
  color: rgb(255, 56, 92);
  font-size: 15.64px;
`;

const Header = ({ averageRating, reviewCount }) => (
  <Container>
    <Star><i className="fas fa-star" /></Star>
    <span>{`${averageRating} (${reviewCount} reviews)`}</span>
  </Container>
);

export default Header;

Header.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
