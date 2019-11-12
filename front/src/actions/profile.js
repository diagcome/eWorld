import axios from 'axios';

import {EDIT_PROFILE_PASS_REQUEST, EDIT_PROFILE_REQUEST, CUSTOMER_REQUEST, GET_CUSTOMER, EDIT_ADRESS_REQUEST} from './action';

import {popupValidatorOn} from './popup';

axios.defaults.headers.common['authorization'] = localStorage.getItem('accessToken');

// PROFILE PAGE ACTION
export function getCustomer(checkout) {
    
    return dispatch => {
        dispatch({
            type: CUSTOMER_REQUEST,
        });
       
        axios.get("/profile")
        .then(res => {
            if(res.status === 200){
                dispatch({
                    type: GET_CUSTOMER,
                    payload: res.data.customer
                })
            }
        })
        .catch((error) => {
            if(!checkout){
                if(error.response.data.message){
                    dispatch(popupValidatorOn(error.response.data.message));
                } else {
                    dispatch(popupValidatorOn(error.message));
                }

                setTimeout(() => {
                    window.location.href = "/login";
                }, 4000);
            }
        });
    }
}

export function editProfile(email, login, firstName, lastName, phone) {

    return async dispatch => {
        dispatch({
            type: CUSTOMER_REQUEST,
        });

        await axios.put("/profile/editprof",{
            data:{email, login, firstName, lastName, phone}
        })
        .then(res => { 
            if(res.status === 200){
                dispatch({
                    type: EDIT_PROFILE_REQUEST,
                    payload: res.data.customer
                })
                window.location.href = "/profile";
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

export function editAdress(city, street, num, post_code){

    return async dispatch => {
        dispatch({
            type: CUSTOMER_REQUEST,
        });

        await axios.put("/profile/ediadress",{
            data:{city, street, num, post_code }
        })
        .then(res => {
            if(res.status === 200){
                dispatch({
                    type: EDIT_ADRESS_REQUEST,
                    payload:res.data.message
                })
                window.location.href = "/profile";
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
                dispatch(popupValidatorOn("Incorrect old password"))
            } else {
                dispatch(popupValidatorOn(error.response.data.message));
            }  
        });
    }

}

export function editCustomerPass(oldPassword, newPassword) {
    return async dispatch => {
        dispatch({
            type: CUSTOMER_REQUEST,
        });

        await axios.put("/profile/editpass",{
            data:{ oldPassword, newPassword }
        })
        .then(res => {
            if(res.status === 200){
                dispatch({
                    type: EDIT_PROFILE_PASS_REQUEST,
                    payload:res.data.message
                })
                window.location.href = "/profile";
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
                dispatch(popupValidatorOn("Incorrect old password"))
            } else {
                dispatch(popupValidatorOn(error.response.data.message));
            }  
        });
    }
}