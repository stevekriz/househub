import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Review = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 558.578px;
  margin-bottom: 48px;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 56px;
  width: 100%;
  max-width: 558.578px;
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

const Owner = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 526.578px;
  margin-top: 48px;
  margin-left: 32px;
`;

const OwnerHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 56px;
  width: 100%;
  max-width: 526.578px;
  margin-bottom: 16px;
  align-items: center;
`;

const OwnerComment = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: min-content;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  margin-left: 68px;
`;

const ModalReview = ({ review, searchText }) => {
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
        {review.comment.length <= 180 || showComment || (searchText && review.comment.lastIndexOf(searchText) > 180) ? <span dangerouslySetInnerHTML={{ __html: review.comment.replace(new RegExp(searchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
          : (
            <>
              <span dangerouslySetInnerHTML={{ __html: review.comment.substring(0, 180).replace(new RegExp(searchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
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
                {review.ownerComment.length <= 180 || showOwnerComment || (searchText && review.ownerComment.lastIndexOf(searchText) > 180) ? <span dangerouslySetInnerHTML={{ __html: review.comment.replace(new RegExp(searchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
                  : (
                    <>
                      <span dangerouslySetInnerHTML={{ __html: review.comment.substring(0, 180).replace(new RegExp(searchText, 'gi'), (match) => `<mark>${match}</mark>`) }} />
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
  searchText: PropTypes.string.isRequired,
};
