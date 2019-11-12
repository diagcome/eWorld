import axios from 'axios';

import {GET_PRODUCTS_MENU, WAIT_PRODUCTS_MENU} from './action';

export function getProductsMenu() {

    return dispatch => {
        dispatch({
            type:WAIT_PRODUCTS_MENU,
            payload:[]
        })
        axios.get("/category-of-product/get")
            .then(res => {
                dispatch({
                    type: GET_PRODUCTS_MENU,
                    payload: res.data
                });
            })
        .catch(error => {
            alert(error)
        })
    }
}