import axios from 'axios';

import {WAIT_PRODUCTS_FILTERS, GET_PRODUCTS_FILTERS} from './action';

export function getProductsFilters() {

    return dispatch => {
        dispatch({
            type:WAIT_PRODUCTS_FILTERS,
            payload:[]
        })
        axios.get("/products/filters")
            .then(res => {
                dispatch({
                    type: GET_PRODUCTS_FILTERS,
                    payload: res.data
                });
            })
        .catch(error => {
            alert(error)
        })
    }
}