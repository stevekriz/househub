import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShowAllReviewsButton = styled.div`
  display: flex;
  height: 48px;
  width: 199.578px;
  padding: 13px, 23px;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(34, 34, 34);
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    transform: scale(0.96) !important;
    background-color: rgb(247, 247, 247);
  }
`;

const Footer = ({ reviewCount, openModal }) => {
  const handleClick = () => {
    openModal();
  };

  return (
    <div>
      <ShowAllReviewsButton onClick={handleClick}>
        {`Show all ${reviewCount} reviews`}
      </ShowAllReviewsButton>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
