import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  max-width: 558.578px;
  max-height: 44px;
  margin-left: 90.040px;
  @media (max-width: 1128px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 44px;
  width: 100%;
  color: rgb(34, 34, 34);
  cursor: text;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.02px;
  text-size-adjust: 100%;
  background-color: rgb(247, 247, 247);
  padding: 12px 12px 12px 16px;
  box-sizing: border-box;
  border-color: rgb(34, 34, 34);
  border-radius: 100px;
  box-shadow: rgb(176, 176, 176) 0 0 0 1px inset;
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

const InputArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-item: center;
  height: 20px;
  width: 100%;
  padding: 0;
`;

const MagnifyingGlass = styled.div`
  height: 16px;
  width: 16px;
  font-size: 16px;
  margin-right: 8px;
`;

const Input = styled.input`
  display: flex;
  flex: 1 1 0;
  height: 20px;
  width: 100%;
  border: none;
  outline: none;
  margin: 0 8px 0 0;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: text;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: safe center;
  align-items: safe center;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
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
  display: flex;
  font-size: 12px;
`;

const ModalBodyHeaderSearch = ({ searchText, handleInputChange }) => {
  const textInput = useRef(null);
  const handleClick = () => textInput.current.focus();
  const handleChange = (e) => handleInputChange(e.target.value);
  const handleDelete = () => handleInputChange('');

  return (
    <SearchContainer>
      <InputContainer id="search" onClick={handleClick}>
        <InputArea>
          <MagnifyingGlass><i className="fas fa-search" /></MagnifyingGlass>
          <Input
            ref={textInput}
            type="text"
            placeholder="Search reviews"
            value={searchText}
            onChange={handleChange}
          />
          {searchText ? (
            <DeleteButton onClick={handleDelete}>
              <X2><i className="fas fa-times" /></X2>
            </DeleteButton>
          )
            : null}
        </InputArea>
      </InputContainer>
    </SearchContainer>
  );
};

export default ModalBodyHeaderSearch;

ModalBodyHeaderSearch.propTypes = {
  searchText: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

ModalBodyHeaderSearch.defaultProps = { searchText: '' };
