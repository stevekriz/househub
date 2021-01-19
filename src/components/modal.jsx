import React, { useState, useEffect } from 'react';
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
  border-top-right-radius: 12px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0 8px 28px 0;
  margin: 0 auto;
  background-color: white;
`;

const Modal = ({ reviews, closeModal }) => {
  const [searchText, setSearchText] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [useFiltered, setUseFiltered] = useState(false);

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

  const handleInputChange = (text) => {
    setSearchText(text);
  };

  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter' && searchText) {
      const searchResults = reviews.reviews.filter(
        (review) => review.comment.split(' ').some(
          (element) => element.toLowerCase() === searchText.toLowerCase(),
        ),
      );
      for (let i = 0; i < searchResults.length; i += 1) {
        const newText = searchResults[i].comment.replace(new RegExp(searchText, 'gi'), (match) => `<mark>${match}</mark>`);
        searchResults[i].comment = newText;
      }
      setFiltered(searchResults);
      setUseFiltered(true);
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer onClick={handleModalClick}>
        <ModalHeader
          averageRating={reviews.averageRating}
          reviewCount={reviews.reviewCount}
          closeModal={closeModal}
          searchText={searchText}
          handleInputChange={handleInputChange}
          handleEnterKeyDown={handleEnterKeyDown}
        />
        <ModalBody
          reviews={reviews}
          filtered={filtered}
          useFiltered={useFiltered}
        />
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;

Modal.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
  closeModal: PropTypes.func.isRequired,
};
