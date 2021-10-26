import React from 'react';
import styled from 'styled-components';
import {ButtonBack} from '../components/ButtonBack';
import {IoArrowBack} from 'react-icons/io5';
import {useHistory} from 'react-router';

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font: var(--hg-font);
  text-align: center;
  margin-bottom: 2rem;
  line-height: 2;
  
  
  @media (min-width: 767px) {
    font-size: 30px;
  }
  
    @media (min-width: 1024px) {
    font-size: 50px;
  }
`

const NotFoundPage = () => {

    const {push} = useHistory()

    return (
        <Wrapper>
            <Title>
                404 <br/> The page you are looking for isn’t here
            </Title>
            <ButtonBack onClick={() => push('/')}>
                <IoArrowBack/>
                Back to Home
            </ButtonBack>
        </Wrapper>


    );
};

export default NotFoundPage;