import axios from 'axios';

import {GET_RECOMMENDED_PRODUCTS} from './action';

export function getRecProd() {
    
    return dispatch => {
        axios.get("/recom-product/get")
        .then(res => {
            dispatch({
                type: GET_RECOMMENDED_PRODUCTS ,
                payload:res.data
            });
        })
        .catch(error => {
            alert(error)
        })
    };
}
