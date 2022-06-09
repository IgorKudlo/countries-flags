import {countriesAPI} from '../../api/countries-api';

export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
});

export const setLoading = () => ({
    type: SET_LOADING
});

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

export const loadCountries = () => (dispatch, getState) => {
    dispatch(setLoading());
    countriesAPI.getCountries()
        .then(({data}) => dispatch(setCountries(data)))
        .catch((err) => dispatch(setError(err)));
}