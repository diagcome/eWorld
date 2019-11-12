import axios from 'axios';

import {COUNT_OF_CART, GET_PRODUCT_IN_CART} from './action';
axios.defaults.headers.common['authorization'] = localStorage.getItem('accessToken');

export function getCountOfCart() {
    return dispatch => {
        dispatch({
            type: COUNT_OF_CART,
            payload:localStorage.getItem('myCart') != null?JSON.parse(localStorage.getItem('myCart')).length:0
        });
    }
}

export function getProductInCart(myCart){
    return dispatch => {

       axios.post("/cart/search",
        {myCart}
       )  
        .then(res => { 
            if(res.status === 200){
                dispatch({
                    type: GET_PRODUCT_IN_CART,
                    payload:res.data
                });
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }
}