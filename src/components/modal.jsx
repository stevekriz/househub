import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalHeader from './modalHeader';

const Backdrop = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content: safe center;
  align-items: safe center;
  position: fixed;
  padding: 40px;
  bottom: 0px;
  right: 0px;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgb(34, 34, 34, 0.6);
  display: ${(props) => props.displayModal || 'none'};
`;

const ModalContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content: safe flex-start;
  align-items: safe flex-start;
  max-height: 100%;
  max-width: 1032px;
  height: 1144px;
  margin: auto;
  position: relative;
  width: 1032px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 20.02px;
  text-size-adjust: 100%;
  color: rgb(72, 72, 72);
  opacity: 1;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: white;
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px 0px;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  -webkit-font-smoothing: antialiased;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.ModalContainerRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.ModalContainerRef && !this.ModalContainerRef.current.contains(event.target)) {
      const { setDisplayModal } = this.props;
      setDisplayModal(false);
    }
  }

  render() {
    const { displayModal, setDisplayModal } = this.props;
    return (
      <Backdrop displayModal={displayModal ? 'block' : 'none'}>
        <ModalContainer ref={this.ModalContainerRef}>
          <ModalHeader setDisplayModal={setDisplayModal} />
        </ModalContainer>
      </Backdrop>
    );
  }
}

export default Modal;

Modal.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  setDisplayModal: PropTypes.func.isRequired,
};
