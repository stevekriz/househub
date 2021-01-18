import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from './modal';

const FooterContainer = styled.div`
`;

const ShowAllReviewsButton = styled.div`
  display: flex;
  height: 48px;
  padding: 13px, 23px;
  width: 199.578px;
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

const Footer = ({ reviewCount }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <FooterContainer>
        <ShowAllReviewsButton onClick={() => setDisplayModal(true)}>
          {`Show all ${reviewCount} reviews`}
        </ShowAllReviewsButton>
      </FooterContainer>
      <Modal displayModal={displayModal} setDisplayModal={() => setDisplayModal(false)} />
    </>
  );
};

export default Footer;

Footer.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};
