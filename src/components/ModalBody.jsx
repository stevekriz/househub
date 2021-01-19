import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalRatings from './modalRatings';
import ModalReviews from './modalReviews';

const ModalScroll = styled.div`
  box-sizing: border-box;
  color: rgb(72, 72, 72);
  display: block;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  height: 1004px;
  line-height: 20.02px;
  overflow-x: auto;
  overflow-y: auto;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  text-size-adjust: 100%;
  width: 1032px;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content: safe flex-start;
  align-items: safe flex-start;
  height: 1004px;
  width: 969px;
  margin-right: 15px;
`;

const ModalBody = ({ reviews, filtered, useFiltered }) => (
  <ModalScroll>
    <Container>
      <ModalRatings ratings={reviews.ratings} />
      <ModalReviews reviews={reviews.reviews} filtered={filtered} useFiltered={useFiltered} />
    </Container>
  </ModalScroll>
);

export default ModalBody;

ModalBody.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.arrayOf).isRequired,
  filtered: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  useFiltered: PropTypes.bool.isRequired,
};
