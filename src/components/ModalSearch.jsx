import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 60%;
  justify-content: flex-end;
  align-items: center;
  max-width: 558.578px;
  max-height: 44px;
  margin-bottom: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 44px;
  line-height: 20.02px;
  margin: 0;
  padding: 12px 12px 12px 16px;
  position: relative;
  text-size-adjust: 100%;
  max-width: 558.578px;
  width: 100%;
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
  width: 100%;
  height: 20px;
  padding: 12px 0 12px 0;
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
  width: 100%;
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

const ModalBodyHeaderSearch = ({
  searchText,
  handleInputChange,
  // handleEnterKeyDown,
}) => {
  const textInput = useRef(null);
  const handleClick = () => {
    textInput.current.focus();
  };

  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  // const handleKeyDown = (e) => {
  //   handleEnterKeyDown(e);
  // };

  const handleDelete = () => {
    handleInputChange('');
  };

  return (
    <SearchContainer>
      <InputContainer onClick={handleClick}>
        <InputArea>
          <MagnifyingGlass>
            <i className="fas fa-search" />
          </MagnifyingGlass>
          <Input
            ref={textInput}
            type="text"
            placeholder="Search reviews"
            value={searchText}
            onChange={handleChange}
            // onKeyDown={handleKeyDown}
          />
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
  );
};

export default ModalBodyHeaderSearch;

ModalBodyHeaderSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  // handleEnterKeyDown: PropTypes.func.isRequired,
};
