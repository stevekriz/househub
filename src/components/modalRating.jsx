import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  height: 32px;
  width: 312.328px;
`;

const Category = styled.div`
  display: flex;
  height: 20px;
  width: 171.625px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: safe flex-end;
  align-items: safe center;
  height: 20px;
  width: 128.703px;
  margin-left: 12px;
`;

const RatingMeter = styled.div`
  display: flex;
  height: 4px;
  width: 101.516px;
  margin-right: 4px;
  background: rgb(221, 221, 221);
`;

const RatingMeterFill = styled.div`
  display: flex;
  height: 4px;
  width: ${(props) => props.width || 0}%;
  background: rgb(34, 34, 34);
`;

const Number = styled.span`
  display: flex;
  margin-left: 6px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  text-size-adjust: 100%;
`;

const ModalRating = ({ rating }) => (
  <RatingContainer>
    <Category>
      {rating[0]}
    </Category>
    <Rating>
      <RatingMeter>
        <RatingMeterFill width={rating[1] * 20 || 0} />
      </RatingMeter>
      <Number>
        {rating[1]}
      </Number>
    </Rating>
  </RatingContainer>
);

export default ModalRating;

ModalRating.propTypes = {
  rating: PropTypes.arrayOf(PropTypes.string).isRequired,
};
