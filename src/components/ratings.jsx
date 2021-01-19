import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RatingsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  width: 100%;
  margin-bottom: 24px;
`;

const Column = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  width: 50%;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const Category = styled.div`
  display: flex;
  flex: 1 1 53.25%;
`;
const Rating = styled.div`
  display: flex;
  flex: 1 0 26.5%;
  justify-content: flex-end;
  align-items: center;
  padding-left: 2.25%;
  margin-right: 18%;
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

const Ratings = ({ ratings }) => (
  <RatingsContainer>
    {ratings.map((rating) => (
      <Column key={rating[0]}>
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
      </Column>
    ))}
  </RatingsContainer>
);

export default Ratings;

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};
