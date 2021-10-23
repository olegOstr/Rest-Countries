import React from 'react';
import styled from 'styled-components'

const Header = () => {

    const Container = styled.div`
      width: 100%;
      max-width: 1470px;
      margin: 0 auto;
      padding: 0 15px;
`
    const Header = styled.header`
      height: 50px;
      box-shadow: var(--shadow);
`

    const Title = styled.h1`
      font: var(--hg-font);
`

    return (
        <Header>
            <Container>
                <Title>Where in the world?</Title>
            </Container>

        </Header>
    );
};

export default Header;