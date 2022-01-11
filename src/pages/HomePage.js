import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Controls from '../components/Controls';
import List from '../components/List';
import {fetchAllCountries} from '../http';
import Card from '../components/Card';
import SkeletonList from '../components/UI/Loader/SkeletonList';
import Pagination from '../components/Pagination';

const HomePage = ({countries, setCountries}) => {

    const {push} = useHistory()

    const [isLoaded, setIsLoaded] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const [currentPage, setCurrentPage] = useState(0)
    const [countPerPage] = useState(21)

    const lastCountryIndex = currentPage * countPerPage
    const firstCountryIndex = lastCountryIndex - countPerPage
    const currentCountry = filteredCountries.slice(firstCountryIndex, lastCountryIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const handleSearch = (search, region) => {
        let data = [...countries]

        if (region) {
            data = data.filter((c) => c.region.includes(region))
        }

        if (search) {
            data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setCurrentPage(1)
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

    const visibleCountries = currentCountry.map((c) => {

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
            <Pagination countPerPage={countPerPage} totalCountries={filteredCountries.length} paginate={paginate}
                        currentPage={currentPage}/>
        </>
    );
};

export default HomePage;