import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: safe flex-start;
  align-items: safe center;
  font-size: 22px;
  font-weight: 600;
  height: 27px;
  padding-bottom: 32px;
`;

const Star = styled.span`
  color: rgb(255, 56, 92);
  font-size: 15.64px;
  padding-right: 8px;
`;

const RatingReviews = styled.div`
  line-height: 26px;
`;

const Header = ({ averageRating, reviewCount }) => (
  <HeaderContainer>
    <Star>
      <i className="fas fa-star" />
    </Star>
    <RatingReviews>
      {`${averageRating} (${reviewCount} reviews)`}
    </RatingReviews>
  </HeaderContainer>
);

export default Header;

Header.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
