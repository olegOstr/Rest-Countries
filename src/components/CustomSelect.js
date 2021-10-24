import styled from 'styled-components'
import Select from 'react-select';


export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            width: '200px',
            height: '58px',
            padding: '0.25rem',
            backgroundColor: 'var(--color-ui)',
            color: 'var(--color-ui)',
            borderRadius: 'var(--radius)',
            border: 'none',
            boxShadow: 'var(--shadow)',
            cursor: 'pointer'

        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--color-text)',
            backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui)',
        }),
    }
})`
  font: var(--sm-font);
  border-radius: var(--radius);
  
  & > & {
    box-shadow: var(--shadow);
  }
  
  & * {
    color: var(--color-text) !important;
  }
  
  & input {
    margin-left: 1.25rem;
  }
  
  & > div[id] {
    background-color: var(--color-ui);
  }
  
  & span {
    width: 0;
  }
`