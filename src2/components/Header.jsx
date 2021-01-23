import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  align-items: center;
  margin-bottom: 32px;
`;

const Star = styled.span`
  margin-right: 8px;
  color: rgb(255, 56, 92);
  font-size: 15.64px;
`;

const Text = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const Header = ({ averageRating, reviewCount }) => (
  <Container>
    <Star><i className="fas fa-star" /></Star>
    <Text>{`${averageRating} (${reviewCount} reviews)`}</Text>
  </Container>
);

export default Header;

Header.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
