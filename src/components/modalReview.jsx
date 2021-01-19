import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Review = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 558.578px;
  margin-bottom: 48px;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 56px;
  width: 558.578px;
  margin-bottom: 16px;
  align-items: center;
`;

const PictureWrapper = styled.a`
  cursor: pointer;
  height: 56px;
  width: 56px;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 56px;
  src: ${(props) => props.src || null}%;
`;

const NameDate = styled.div`
  color: rgb(34, 34, 34);
  margin-left: 12px;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(113, 113, 113);
`;

const Comment = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: min-content;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
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

const ModalReview = ({ review }) => {
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
    <Review>
      <Header>
        <PictureWrapper href={review.profilePicture}>
          <Picture src={review.profilePicture} />
        </PictureWrapper>
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
    </Review>
  );
};

export default ModalReview;

ModalReview.propTypes = {
  review: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    profilePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    ownerComment: PropTypes.string,
  }).isRequired,
};
