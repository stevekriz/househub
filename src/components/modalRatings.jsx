import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 40%;
  max-width: 312.328px;
  justify-content: space-between;
  align-items: center;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 12px;
`;

const Category = styled.div`
  display: flex;
  flex: 1 1 54.25%;
  line-height: 20.02px;
`;
const Rating = styled.div`
  display: flex;
  flex: 1 0 41.5%;
  justify-content: flex-end;
  align-items: center;
  padding-left: 4.25%;
`;

const RatingMeter = styled.div`
  display: flex;
  height: 4px;
  width: 100%;
  margin-right: 10px;
  background: rgb(221, 221, 221);
`;

const RatingMeterFill = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => props.width || 0}%;
  background: rgb(34, 34, 34);
`;

const Number = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const ModalRatings = ({ ratings }) => (
  <RatingsContainer>
    {ratings.map((rating) => (
      <RatingContainer key={rating[0]} rating={rating}>
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
    ))}
  </RatingsContainer>
);

export default ModalRatings;

ModalRatings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};
