import {countriesAPI} from '../../api/countries-api';

export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

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

const setNeighbors = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries,
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

export const loadNeighborsByBorder = (borders) => (dispatch) => {
    countriesAPI.filterByCode(borders)
        .then(({data}) => dispatch(setNeighbors(data.map((c) => c.name))))
        .catch(console.error);
};