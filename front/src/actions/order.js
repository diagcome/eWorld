import axios from 'axios';

import {GET_ORDERS, SET_ORDER} from './action';
import {popupValidatorOn} from './popup';

axios.defaults.headers.common['authorization'] = localStorage.getItem('accessToken');

export function getOrders() {

    return dispatch => {
        axios.get("/orders/get")  
         .then(res => { 
             if(res.status === 200){
                 dispatch({
                    type: GET_ORDERS,
                    payload:res.data.orders
                 });
            }
         })
         .catch((error) => {
            if(error.response.data.message){
                dispatch(popupValidatorOn(error.response.data.message));
            } else {
                dispatch(popupValidatorOn(error.message));
            }   
         });
     }
}

export function setNewOrderReg(registrations, delivery_type, payment_type, delivery_info, adress, email, all_price, order_no, product_item, history) {

    return async dispatch => {
       await axios.post("/orders/add",
       {newOrder:{registrations, delivery_type, payment_type, delivery_info, adress, email, all_price, order_no, product_item}})  
        .then(res => { 
            if(res.status === 200){
                dispatch({
                    type: SET_ORDER,
                    payload:res.data
                });
                localStorage.removeItem('myCart');
                history.push('/order-information');
            }
        })
        .catch((error) => {
            console.log(error)
            if(error.response.data.message){
                dispatch(popupValidatorOn(error.response.data.message));
            } else {
                dispatch(popupValidatorOn(error.message));
            }   
        });
    }
}

export function setNewOrderNoReg(registrations, delivery_type, payment_type, delivery_info, email, phone, all_price, order_no, product_item, history) {

    return async dispatch => {
      await  axios.post("/orders/add",
       {newOrder:{registrations, delivery_type, payment_type, delivery_info, email, phone, all_price, order_no, product_item}})  
        .then(res => { 
            if(res.status === 200){
                dispatch({
                    type: SET_ORDER,
                    payload:res.data
                });
                localStorage.removeItem('myCart');
                history.push('/order-information');
            }
        })
        .catch((error) => {
            if(error.response.data.message){
                dispatch(popupValidatorOn(error.response.data.message));
            } else {
                dispatch(popupValidatorOn(error.message));
            }   
        });
    }
}