import axios from 'axios';

import {GET_ALL_PRODUCTS, GET_FILTRED_PRODUCTS} from './action';

export function getAllProducts() {
    
    return dispatch => {
        axios.get("/products/get")
        .then(res => {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload:res.data
            });
        })
        .catch(error => {
            alert(error)
        })
    };
}

export function getFiltredProducts(filters) {

    return dispatch => {
        axios.get("/products/filter-product",
        { params: filters})
        .then(res => {
            dispatch({
                type: GET_FILTRED_PRODUCTS,
                payload:res.data
            });
        })
        .catch(error => {
            alert(error)
        })
    };
}
