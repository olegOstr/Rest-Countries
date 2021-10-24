import React, {useEffect, useState} from 'react';
import Search from './Search';
import styled from 'styled-components';
import {CustomSelect} from './CustomSelect';

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: space-between;
  
  @media (min-width: 767px) {
    margin-bottom: 3rem;
  }
`

const Controls = ({onSearch}) => {

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {

        const regionValue = region?.value || ''

        onSearch(search, regionValue)
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect
                options={options}
                placeholder='Filter be region'
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    );
};

export default Controls;