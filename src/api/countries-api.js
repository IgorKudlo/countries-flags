import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/',
});

export const countriesAPI = {
    getCountries() {
        return instance.get('all?fields=name,capital,flags,population,region');
    },
}