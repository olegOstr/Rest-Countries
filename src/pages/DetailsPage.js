import React, {useEffect, useState} from 'react';
import Info from '../components/Info';
import {fetchCurrentCountry} from '../http';
import {useHistory, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import {ButtonBack} from '../components/ButtonBack';


const DetailsPage = () => {

    const {push, goBack} = useHistory();
    const {name} = useParams();

    const [country, setCountry] = useState(null)

    useEffect(() => {
        fetchCurrentCountry(name)
        .then(data => setCountry(data[0]))
    }, [name])

    return (
        <div>
            <ButtonBack onClick={goBack}>
                <IoArrowBack/>
                Back
            </ButtonBack>

            {country && <Info push={push} {...country} />}

        </div>
    );
};

export default DetailsPage;