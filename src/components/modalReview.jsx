/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Review = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin-bottom: 48px;
  @media (max-width: 1128px) {
    margin-bottom: 32px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 56px;
  width: 100%;
  margin-bottom: 16px;
  align-items: center;
  @media (max-width: 1128px) {
    margin-bottom: 12px;
  }
  @media (max-width: 730px) {
    height: 40px;
  }
`;

const PictureWrapper = styled.a`
  cursor: pointer;
  height: 56px;
  width: 56px;
  @media (max-width: 730px) {
    height: 40px;
    width: 40px;
  }
`;

const Picture = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
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
  min-height: min-content;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
`;

const ReadMore = styled.span`
  display: inline;
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

const Owner = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 526.578px;
  margin-top: 48px;
  margin-left: 32px;
  @media (max-width: 1128px) {
    margin-top: 24px;
    margin-left: 24px;
  }
`;

const OwnerHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 56px;
  width: 100%;
  max-width: 526.578px;
  margin-bottom: 16px;
  align-items: center;
  @media (max-width: 1128px) {
    margin-bottom: 12px;
  }
`;

const OwnerComment = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: min-content;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  margin-left: 68px;
  -webkit-font-smoothing: antialiased;
  @media (max-width: 1128px) {
    margin-left: 52px;
  }
  @media (max-width: 730px) {
    margin-left: 52px;
  }
`;

const ModalReview = ({ review, delayedSearchText }) => {
  const [showComment, setShowComment] = useState(false);
  const [showOwnerComment, setShowOwnerComment] = useState(false);

  const handleCommentClick = () => setShowComment(true);
  const handleOwnerCommentClick = () => setShowOwnerComment(true);

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
        {review.comment.length <= 180 || showComment || (delayedSearchText && review.comment.lastIndexOf(delayedSearchText) > 180) ? <span dangerouslySetInnerHTML={{ __html: review.comment.replace(new RegExp(delayedSearchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
          : (
            <>
              <span dangerouslySetInnerHTML={{ __html: review.comment.substring(0, 180).replace(new RegExp(delayedSearchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
              {'... '}
              <ReadMore onClick={handleCommentClick}>
                read more
              </ReadMore>
            </>
          )}
      </Comment>
      {
        review.ownerComment
          ? (
            <Owner>
              <OwnerHeader>
                <PictureWrapper href={review.ownerProfilePicture}>
                  <Picture src={review.ownerProfilePicture} />
                </PictureWrapper>
                <NameDate>
                  {`Response from ${review.ownerName}`}
                  <Date>
                    {review.ownerCommentDate}
                  </Date>
                </NameDate>
              </OwnerHeader>
              <OwnerComment>
                {review.ownerComment.length <= 180 || showOwnerComment || (delayedSearchText && review.ownerComment.lastIndexOf(delayedSearchText) > 180) ? <span dangerouslySetInnerHTML={{ __html: review.ownerComment.replace(new RegExp(delayedSearchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
                  : (
                    <>
                      <span dangerouslySetInnerHTML={{ __html: review.ownerComment.substring(0, 180).replace(new RegExp(delayedSearchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
                      {'... '}
                      <ReadMore onClick={handleOwnerCommentClick}>
                        read more
                      </ReadMore>
                    </>
                  )}
              </OwnerComment>
            </Owner>
          )
          : null
      }
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
    ownerProfilePicture: PropTypes.string,
    ownerName: PropTypes.string,
    ownerCommentDate: PropTypes.string,
    ownerComment: PropTypes.string,
  }).isRequired,
  delayedSearchText: PropTypes.string,
};

ModalReview.defaultProps = { delayedSearchText: '' };
