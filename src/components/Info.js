import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {fetchFilteredCodes} from '../http';

const Wrapper = styled.section`
  margin-top: 4rem;
  width: 100%;
  
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  
    @media (min-width: 767px) {
      height: auto;
      object-fit: contain;
  }
  
`

const InfoTitle = styled.h1`
  margin-bottom: 2rem;
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
    @media (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: wrap;
  }
`

const InfoList = styled.ul`
  &:not(:first-child) {
    margin-top: 2rem;
  }
  
  
  @media (min-width: 1164px) {
      &:not(:first-child) {
        margin-top: 0;
      }
  }
`

const InfoListItem = styled.li`
  font: var(--md-font);
  line-height: 1.8;
  font-weight: var(--fw-light);
    b {
      font-weight: var(--fw-normal);
    }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
      b {
      margin-bottom: 2rem;
      font-weight: var(--fw-normal);
    }
  
  @media (min-width: 767px) {
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.span`
  margin: 0 1rem 1rem 0;
  padding: 0 1rem;
  background-color: var(--color-ui);
  line-height: 1.8;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  cursor: pointer;
`

const Info = (props) => {

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push
    } = props

    const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        if (borders.length) {
            fetchFilteredCodes(borders)
            .then(data => setNeighbors(data.map(c => c.name)))
        }
    }, [borders])

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <InfoList>
                        <InfoListItem>
                            <b>Native Name: </b>{nativeName}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Population: </b>{population.toLocaleString()}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Region: </b>{region}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Sub Region: </b>{subregion}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Capital: </b>{capital}
                        </InfoListItem>
                    </InfoList>

                    <InfoList>
                        <InfoListItem>
                            <b>Top Level Domain: </b>{topLevelDomain.map(d => <span key={d}>{d} </span>)}
                        </InfoListItem>

                        <InfoListItem>
                            <b>Currencies: </b>{currencies.map(c => <span key={c.code}>{c.name}, </span>)}
                        </InfoListItem>

                        <InfoListItem>
                            <b>Languages: </b>{languages.map(l => <span key={l.name}>{l.name}, </span>)}
                        </InfoListItem>
                    </InfoList>
                </ListGroup>

                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? <span>There is no border countries</span>
                        :
                        (
                            <TagGroup>
                                {neighbors.map(b => <Tag key={b} onClick={() => push(`/country/${b}`)}>{b}</Tag>)}
                            </TagGroup>
                        )}
                </Meta>
            </div>
        </Wrapper>
    );
};

export default Info;