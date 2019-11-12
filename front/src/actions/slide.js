import axios from 'axios';

import { GET_SLIDES } from './action';

export const getSlides = () => dispatch => {
    axios.get("/slides/get").then(response => {
        dispatch({
            type: GET_SLIDES,
            payload: response.data
        });
    }).catch(error => {

    })
};