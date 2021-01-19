import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CloseModalContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  justify-content: safe center;
  align-items: safe center;
  width: 100%;
  height: 72px;
`;

const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 32px;
  width: 32px;
  position: absolute;
  border-radius: 50%;
  justify-content: safe center;
  align-items: safe center;
  top: 16px;
  left: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  &:active {
    transform: scale(0.96) !important;
    background-color: rgb(247, 247, 247);
  }
`;

const X = styled.span`
  box-sizing: border-box;
  display: flex;
  font-size: 18px;
`;

const MainHeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: safe flex-start;
  align-items: safe flex-start;
  width: 969px;
  margin-right: 15px;
  height: 44px;
  padding-bottom: 24px;
`;

const RatingReviewsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: safe flex-start;
  align-items: safe center;
  width: 312.328px;
  height: 38px;
`;

const Star = styled.span`
  display: flex;
  align-items: center;
  color: rgb(255, 56, 92);
  height: 38px;
  font-size: 22.76px;
  padding-right: 8px;
`;

const RatingReviews = styled.span`
  display: flex;
  align-items: center;
  height: 38px;
  font-size: 32px;
  font-weight: 700;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const SearchContainer = styled.div`
  width: 558.578px;
  height: 44px;
  margin-left: 98.04px;
`;

const InputContainer = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  border-radius: 100px;
  border-color: rgb(34, 34, 34);
  border-style: none;
  border-width: 0;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  box-shadow: rgb(176, 176, 176) 0 0 0 1px inset;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  cursor: text;
  display: flex;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 44px;
  line-height: 20.02px;
  margin: 0;
  padding: 12px 16px 12px 0;
  position: relative;
  text-size-adjust: 100%;
  width: 558.578px;
  -webkit-box-align: center;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  &:focus {
    outline: none !important;
    box-shadow: rgb(34, 34, 34) 0 0 0 2px inset !important;
  }
  &:focus-within {
    outline: none !important;
    box-shadow: rgb(34, 34, 34) 0 0 0 2px inset !important;
  }
  &:active {
    outline: none !important;
    box-shadow: rgb(34, 34, 34) 0 0 0 2px inset !important;
  }
`;

const MagnifyingGlass = styled.div`
  height: 16px;
  width: 16px;
  font-size: 16px;
  margin-right: 8px;
`;

const InputArea = styled.div`
  display: flex;
  width: 530.578px;
  height: 20px;
  padding: 12px 12px 12px 16px;
`;

const Input = styled.input`
  display: flex;
  appearance: none;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(34, 34, 34);
  border-style: none;
  border-width: 0;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  box-sizing: border-box;
  color: rgb(34, 34, 34);
  cursor: text;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  height: 20px;
  letter-spacing: normal;
  line-height: 20px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 8px;
  margin-top: 0;
  min-height: 1px;
  outline-color: rgb(34, 34, 34);
  outline-style: none;
  outline-width: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  text-align: start;
  text-indent: 0;
  text-overflow: ellipsis;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  width: 498.578px;
  word-spacing: 0;
  writing-mode: horizontal-tb;
  -webkit-box-direction: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-rtl-ordering: logical;
  -webkit-border-image: none;
`;

const DeleteButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: safe center;
  align-items: safe center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(221, 221, 221) !important;
  color: rgb(113, 113, 113) !important;
  cursor: pointer;
  &:hover {
    background-color: rgb(176, 176, 176) !important;
  }
  &:active {
    background-color: rgb(176, 176, 176) !important;
  }
`;

const X2 = styled.span`
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
`;

const ModalHeader = ({
  averageRating,
  reviewCount,
  closeModal,
  searchText,
  handleInputChange,
  handleEnterKeyDown,
}) => {
  const handleClick = () => {
    closeModal();
  };

  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    handleEnterKeyDown(e);
  };

  const handleDelete = () => {
    handleChange('');
  };

  return (
    <>
      <CloseModalContainer>
        <Button onClick={handleClick}>
          <X>
            <i className="fas fa-times" />
          </X>
        </Button>
      </CloseModalContainer>
      <MainHeaderContainer>
        <RatingReviewsContainer>
          <Star>
            <i className="fas fa-star" />
          </Star>
          <RatingReviews>
            {`${averageRating} (${reviewCount} reviews)`}
          </RatingReviews>
        </RatingReviewsContainer>
        <SearchContainer>
          <InputContainer>
            <InputArea>
              <MagnifyingGlass>
                <i className="fas fa-search" />
              </MagnifyingGlass>
              <Input placeholder="Search reviews" value={searchText} onChange={handleChange} onKeyDown={handleKeyDown} />
              { searchText
                ? (
                  <DeleteButton onClick={handleDelete}>
                    <X2>
                      <i className="fas fa-times" />
                    </X2>
                  </DeleteButton>
                )
                : null}
            </InputArea>
          </InputContainer>
        </SearchContainer>
      </MainHeaderContainer>
    </>
  );
};

export default ModalHeader;

ModalHeader.propTypes = {
  averageRating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleEnterKeyDown: PropTypes.func.isRequired,
};
