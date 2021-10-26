import React from 'react';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid';

const Wrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--color-ui);
  overflow: hidden;
  box-shadow: var(--shadow);
  cursor: pointer;
  
  @media (min-width: 1024px) {
    transition: transform .3s ease-in-out;
      &:hover {
        transform: translateY(-10px);
      }
  }
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`

const CardBody = styled.div`
  padding: 2rem 1rem;
`

const CardTitle = styled.h3`
  font: var(--hg-font);
  margin-bottom: 1rem;
`

const CardListItem = styled.li`
  font: var(--md-font);
  font-weight: var(--fw-light);
    span {
      font-weight: var(--fw-normal);
    }
`

const Card = ({img, name, info = [], onClick}) => {

    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={'Flag ' + name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <ul>
                    {info.map(el => (
                        <CardListItem key={uuid()}>
                            <span>{el.title}:</span> {el.description}
                        </CardListItem>
                    ))}
                </ul>
            </CardBody>
        </Wrapper>
    );
};

export default Card;