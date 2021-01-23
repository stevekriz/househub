import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 72px;
  @media (max-width: 730px) {
    height: 48px;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    background-color: rgb(247, 247, 247);
    transform: scale(0.96) !important;
  }
  @media (max-width: 730px) {
    top: 8px;
  }
`;

const ModalClose = ({ handleClose, viewPortWidth }) => {
  const handleClick = () => handleClose();

  return (
    <Container>
      <Button id="close" onClick={handleClick}>
        {viewPortWidth > 730 ? <i className="fas fa-times" />
          : <i className="fas fa-chevron-left" />}
      </Button>
    </Container>
  );
};

export default ModalClose;

ModalClose.propTypes = {
  handleClose: PropTypes.func.isRequired,
  viewPortWidth: PropTypes.number.isRequired,
};
