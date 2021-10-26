import React from 'react';
import styled, {keyframes} from 'styled-components';

const shineLines = keyframes`
  to {
    background-position: 0 0, 0 0, 0 190px, 50px 195px;
  }
`

const Wrapper = styled.div`
  border-radius: var(--radius);
  background-color: var(--color-ui);
  overflow: hidden;
  box-shadow: var(--shadow);
`

const SkImage = styled.div`
  height: 210px;
  margin: 0 auto;

  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 350px 190px;
  background-position: -350px 0, 0 0, 0 190px, 50px 195px; 
  box-shadow: var(--shadow);
  animation: ${shineLines} 1.5s infinite ease-in-out;
`

const SKBody = styled.div`
  padding: 2rem 1rem;
`
const SkTitle = styled.div`
  height: 20px;
  border-radius: var(--radius);
  margin-bottom: 2rem;
  box-shadow: var(--shadow);
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 350px 190px;
  background-position: -350px 0, 0 0, 0 190px, 50px 195px; 
  animation: ${shineLines} 1.5s infinite ease-in-out;
`

const SkListItem = styled.li`
  height: 12px;
  width: 50%;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  margin-bottom: 1rem;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 350px 190px;
  background-position: -350px 0, 0 0, 0 190px, 50px 195px; 
  animation: ${shineLines} 1.5s infinite ease-in-out;
`

const SkeletonUiCard = () => {
    return (
        <Wrapper>
            <SkImage/>
            <SKBody>
                <SkTitle/>
                <ul>
                    <SkListItem/>
                    <SkListItem/>
                    <SkListItem/>
                </ul>
            </SKBody>
        </Wrapper>
    );
};

export default SkeletonUiCard;