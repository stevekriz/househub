import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalClose from './ModalClose';
import ModalBody from './ModalBody';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px;
  background: rgb(34, 34, 34, 0.6);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  overflow-y: hidden;
  max-height: 100%;
  max-width: 1032px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0 8px 28px 0;
  margin: 0 auto;
  background-color: white;
`;

const Modal = ({ reviews, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  }, []);

  const handleBackdropClick = () => {
    closeModal();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer onClick={handleModalClick}>
        <ModalClose closeModal={closeModal} />
        <ModalBody reviews={reviews} />
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;

Modal.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
  closeModal: PropTypes.func.isRequired,
};
