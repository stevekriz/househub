import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RatingsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: safe flex-start;
  align-items: safe flex-start;
  width: 1144px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const MainColumn = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 36px;
  width: 460.66px;
  padding-right: 8px;
  margin-right: 103.3281px;
`;

const CategoryColumn = styled.div`
  display: flex;
  align-items: safe center;
  height: 20px;
  width: 299.11px;
`;
const RatingColumn = styled.div`
  display: flex;
  justify-content: safe flex-end;
  align-items: safe center;
  height: 20px;
  width: 149.55px;
  padding-left: 12px;
`;

const RatingMeter = styled.div`
  display: flex;
  height: 4px;
  width: 125.05px;
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
  padding-left: 6px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
`;

const Ratings = ({ ratings }) => {
  const render = ratings.map((rating) => (
    <MainColumn key={rating[0]}>
      <CategoryColumn>
        {rating[0]}
      </CategoryColumn>
      <RatingColumn>
        <RatingMeter>
          <RatingMeterFill width={rating[1] * 20 || 0} />
        </RatingMeter>
        <Number>
          {rating[1]}
        </Number>
      </RatingColumn>
    </MainColumn>
  ));

  return (
    <RatingsContainer>
      {render}
    </RatingsContainer>
  );
};

export default Ratings;

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.array).isRequired,
};
