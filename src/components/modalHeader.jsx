import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CloseModal = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content: safe center;
  align-items: safe center;
  width: 100%;
  height: 72px;
`;

const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 32px;
  width: 32px;
  position: absolute;
  border-radius: 50%;
  justify-content: safe center;
  align-items: safe center;
  top: 8px;
  left: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    transform: scale(0.96) !important;
    background-color: rgb(247, 247, 247);
  }
`;

const X = styled.span`
  box-sizing: border-box;
  display: flex;
  font-size: 18px;
`;

const ModalHeader = ({ setDisplayModal }) => (
  <CloseModal>
    <Button onClick={() => setDisplayModal(false)}>
      <X>
        <i className="fas fa-times" />
      </X>
    </Button>
  </CloseModal>
);

export default ModalHeader;

ModalHeader.propTypes = {
  setDisplayModal: PropTypes.func.isRequired,
};
