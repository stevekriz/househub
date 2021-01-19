import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalRating from './modalRating';

const RatingsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: safe flex-start;
  align-items: safe flex-start;
  height: 192px;
  width: 312.328px;
`;

const ModalRatings = ({ ratings }) => (
  <RatingsContainer>
    {
      ratings.map((rating) => (
        <ModalRating key={rating[0]} rating={rating} />
      ))
    }
  </RatingsContainer>
);

export default ModalRatings;

ModalRatings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};
