import {countriesAPI} from '../../api/countries-api';

export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS';

const setLoading = () => ({
    type: SET_LOADING,
});

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
});

export const loadCountryByName = (name) => (dispatch) => {
    dispatch(setLoading());
    countriesAPI.getCountryByName(name)
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch((err) => dispatch(setError(err.message)));
};

export const clearDetails = () => ({
    type: CLEAR_DETAILS,
});