import styled from 'styled-components';

export const ButtonBack = styled.button`
  padding: 0 1.5rem;
  background-color: var(--color-ui);
  box-shadow: var(--shadow);
  border-radius: 0.2rem;
  font: var(--md-font);
  line-height: 2.5;
  border: none;
  color: var(--color-text);
  display: flex;
  align-items: center;
  
  cursor: pointer;
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`