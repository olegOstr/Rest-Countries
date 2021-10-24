import React from 'react';
import styled from 'styled-components';
import {Container} from './Container';

const WrapperMain = styled.main`
  padding: 2rem 0;
  
  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`

const Main = ({children}) => {
    return (
        <WrapperMain>
            <Container>
                {children}
            </Container>
        </WrapperMain>
    );
};

export default Main;