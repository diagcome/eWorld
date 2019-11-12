import axios from 'axios';

import {SET_CUSTOMER, CUSTOMER_REQUEST, CHECK_AUTH} from './action';
import {popupValidatorOn} from './popup';

axios.defaults.headers.common['authorization'] = localStorage.getItem('accessToken');

//LOGIN, REGISTRATION, LOGOUT
export function registrationCustomer(email, login, firstName, lastName, secondPass, phone) {
    return dispatch => {
        axios.post("/authentication/registration", {
            data:{email, login, firstName, lastName, secondPass, phone}
        })
        .then(res => {
            if(res.data.tokens && res.status === 200) {

                localStorage.setItem("accessToken", res.data.tokens.accessToken);
                localStorage.setItem("refreshToken", res.data.tokens.refreshToken);
                localStorage.setItem("expires_in", res.data.tokens.expires_in);

                window.location.href = "/";
            }
        })
        .catch((error) => {
            if(error.response.data.message){
                dispatch(popupValidatorOn(error.response.data.message));
            } else {
                dispatch(popupValidatorOn(error.message));
            }      
        })
    }
}

export function loginCustomer(email, password, history) {

    return dispatch => {
        dispatch({
            type: CUSTOMER_REQUEST,
        });

        axios.post("/authentication/login",{
        data:{email, password}
        })
        .then(res => {
            if(res.status === 200) {

                localStorage.setItem("accessToken", res.data.tokens.accessToken);
                localStorage.setItem("refreshToken", res.data.tokens.refreshToken);
                localStorage.setItem("expires_in", res.data.tokens.expires_in);
    
                dispatch({
                    type: SET_CUSTOMER,
                    payload: res.data.customer
                })
                window.location.href = "/";
            }     
        })
        .catch((error) => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('refreshToken');
            
            if(error.response.data.message){
                dispatch(popupValidatorOn(error.response.data.message));
            } else {
                dispatch(popupValidatorOn(error.message));
            }   
        });
    }
}

export function checkAuth(){

    return dispatch => {
        axios.post("/authentication/check-auth",{
            data:{rout:"check-auth"}
        })
        .then(res => {
            if(res.status === 200){
                dispatch({
                    type: CHECK_AUTH,
                    payload: res.data.loginIs
                })
            }
        })
    }
}

export function logOut(history) {

    return dispatch => {
        dispatch({
            type: SET_CUSTOMER,
            payload:""
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('refreshToken');

        window.location.href = "/";
    }
}
