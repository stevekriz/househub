import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalHeader from './ModalHeader';
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
  width: 1032px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0 8px 28px 0;
  margin: 0 auto;
  background-color: white;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      filtered: [],
      useFiltered: false,
    };
    this.ModalContainerRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0';
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.ModalContainerRef && !this.ModalContainerRef.current.contains(event.target)) {
      const { closeModal } = this.props;
      closeModal();
    }
  }

  handleChange(searchText) {
    if (!searchText) {
      this.setState({
        useFiltered: false,
        searchText,
      });
    } else {
      this.setState({
        searchText,
      });
    }
  }

  handleKey(e) {
    const { reviews } = this.props;
    const { searchText } = this.state;
    if (e.keyCode === 13 && searchText) {
      const filtered = reviews.reviews.filter(
        (review) => review.comment.split(' ').some(
          (element) => element.toLowerCase() === searchText.toLowerCase(),
        ),
      );
      for (let i = 0; i < filtered.length; i += 1) {
        const newText = filtered[i].comment.replace(new RegExp(searchText, 'gi'), (match) => `<mark>${match}</mark>`);
        filtered[i].comment = newText;
      }
      this.setState({
        filtered,
        useFiltered: true,
      });
    }
  }

  render() {
    const { reviews, closeModal } = this.props;
    const { searchText, filtered, useFiltered } = this.state;
    return (
      <Backdrop>
        <ModalContainer ref={this.ModalContainerRef}>
          <ModalHeader
            reviews={reviews}
            closeModal={closeModal}
            searchText={searchText}
            handleChange={this.handleChange}
            handleKey={this.handleKey}
          />
          <ModalBody
            reviews={reviews}
            filtered={filtered}
            useFiltered={useFiltered}
          />
        </ModalContainer>
      </Backdrop>
    );
  }
}

export default Modal;

Modal.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
  closeModal: PropTypes.func.isRequired,
};
