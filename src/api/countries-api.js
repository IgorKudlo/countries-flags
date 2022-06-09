import axios from 'axios';
import {filterByCode} from '../config';

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/',
});

export const countriesAPI = {
    getCountries() {
        return instance.get('all?fields=name,capital,flags,population,region');
    },
    getCountryByName(name) {
        return instance.get(`name/${name}`)
    },
    filterByCode(codes) {
        return instance.get(`alpha?codes=${codes.join(',')}`)
    }
}