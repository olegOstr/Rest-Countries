import React from 'react';
import styled from 'styled-components'
import {IoSearch} from 'react-icons/io5';

const InputContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  
  background-color: var(--color-ui);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  
    @media(min-width: 567px) {
    margin-bottom: 0;
    width: 280px;
  }
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 380px;
  }
  
  & > svg {
    display: block;
  }
`
const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
  width: 100%;
  margin-left: 1rem;
  
  font: var(--md-font);
  background-color: var(--color-ui);
  color: var(--color-text);
  border: none;
  outline: none;
  
  &::placeholder {
    font: var(--sm-font);
    color: var(--color-text);
  }
`

const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearch size='20px'/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    );
};

export default Search;