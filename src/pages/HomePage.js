import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Controls from '../components/Controls';
import List from '../components/List';
import {fetchAllCountries} from '../http';
import Card from '../components/Card';
import SkeletonList from '../components/Loader/SkeletonList';

const HomePage = ({countries, setCountries}) => {

    const {push} = useHistory()
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [isLoaded, setIsLoaded] = useState(false)

    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter((c) => c.region.includes(region))
        }

        if (search) {
            data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }

    useEffect(() => {
        if (!countries.length) {
            setIsLoaded(true)
            fetchAllCountries()
            .then(data => setCountries(data))
            .then(() => setTimeout(() => {
                setIsLoaded(false)
            }, 1100))
            .catch((e) => console.log(`ERROR ${e.response.status} ` + JSON.stringify(e.response.data)))
        }
    }, [])

    useEffect(() => {
        handleSearch()
    }, [countries])

    const visibleCountries = filteredCountries.map((c) => {

        const countryInfo = {
            img: c.flags.svg,
            name: c.name,
            info: [
                {
                    title: 'Population',
                    description: c.population.toLocaleString()
                },
                {
                    title: 'Region',
                    description: c.region
                },
                {
                    title: 'Capital',
                    description: c.capital
                },
            ]
        }
        return <Card key={c.name} {...countryInfo} onClick={() => push(`/country/${c.name}`)}/>
    })

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {isLoaded ? <SkeletonList/> : visibleCountries}
            </List>
        </>
    );
};

export default HomePage;