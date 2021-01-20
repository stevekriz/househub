import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalRatingsHeader from './ModalRatingsHeader';
import ModalSearch from './ModalSearch';
import ModalRatings from './ModalRatings';
import ModalReviews from './ModalReviews';

const ScrollContainer = styled.div`
  display: block;
  flex-flow: column wrap;
  flex: 1 1 auto;
  box-sizing: border-box;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 1004px;
  padding: 24px;
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 986px;
  width: 100%;
  margin-top: -24px;
  margin-right: 15px;
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: -24px;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 986px;
  width: 100%;
  max-height: 44px;
  margin-bottom: 24px;
  background-color: rgb(255, 255, 255);
`;

const BodyContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const ModalBody = ({ reviews }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (text) => {
    setSearchText(text);
  };

  // const handleEnterKeyDown = (e) => {
  //   if (e.key === 'Enter' && searchText) {
  //     setSearch(true);
  //   }
  // };

  return (
    <ScrollContainer>
      <Container>
        <HeaderContainer>
          <ModalRatingsHeader
            averageRating={reviews.averageRating}
            reviewCount={reviews.reviewCount}
          />
          <ModalSearch
            searchText={searchText}
            handleInputChange={handleInputChange}
            // handleEnterKeyDown={handleEnterKeyDown}
          />
        </HeaderContainer>
        <BodyContainer>
          <ModalRatings ratings={reviews.ratings} />
          <ModalReviews reviews={reviews.reviews} searchText={searchText} />
        </BodyContainer>
      </Container>
    </ScrollContainer>
  );
};

export default ModalBody;

ModalBody.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
};
