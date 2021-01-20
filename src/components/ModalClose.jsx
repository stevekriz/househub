import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 72px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 16px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    transform: scale(0.96) !important;
    background-color: rgb(247, 247, 247);
  }
`;

const ModalHeader = ({ closeModal }) => {
  const handleClick = () => {
    closeModal();
  };

  return (
    <Container>
      <Button onClick={handleClick}>
        <i className="fas fa-times" />
      </Button>
    </Container>
  );
};

export default ModalHeader;

ModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
