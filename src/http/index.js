import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://restcountries.com/v2/'
})

export const fetchAllCountries = async () => {
    const {data} = await $host.get('all?fields=name,capital,flags,population,region')
    return data
}

export const fetchCurrentCountry = async (name) => {
    const {data} = await $host.get('name/' + name)
    return data
}

export const fetchFilteredCodes = async (codes) => {
    const {data} = await $host.get('alpha?codes=' + codes)
    return data
}