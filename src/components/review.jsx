import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 56px;
  width: 460.66px;
  margin-bottom: 16px;
  align-items: center;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 56px;
  src: ${(props) => props.src || null}%;
`;

const NameDate = styled.div`
  padding-left: 12px;
  font-weight: 600;
  height: 40px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(113, 113, 113);
`;

const Comment = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: min-content;
  line-height: 24px;
`;

const ReadMore = styled.span`
  display: inline-block;
  color: rgb(34, 34, 34);
  cursor: pointer;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 24px;
  line-height: 24px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-line: underline;
  text-decoration-style: solid;
  width: 77.3594px;
  -webkit-font-smoothing: antialiased;
`;

const Shown = styled.span`
  min-height: min-content;
  max-height: 96px;
  line-height: 24px;
`;

const Hidden = styled.span`
  min-height: min-content;
  line-height: 24px;
`;

const Review = ({ review }) => {
  const [showAll, setShowAll] = useState(false);

  const truncate = (str) => {
    if (str.length > 180) {
      return (
        <Comment>
          {showAll ? <Hidden>{str}</Hidden>
            : (
              <Shown>
                {str.substring(0, 180)}
                {'... '}
                <ReadMore onClick={() => setShowAll(true)}>
                  read more
                </ReadMore>
              </Shown>
            )}
        </Comment>
      );
    }
    return str;
  };

  return (
    <>
      <Header>
        <Picture src={review.profilePicture} />
        <NameDate>
          {review.name}
          <Date>
            {review.date}
          </Date>
        </NameDate>
      </Header>
      <Comment>
        {truncate(review.comment)}
      </Comment>
    </>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    profilePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    ownerComment: PropTypes.string,
  }).isRequired,
};
