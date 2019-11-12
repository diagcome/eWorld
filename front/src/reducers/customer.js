import {SET_CUSTOMER, CUSTOMER_REQUEST, GET_CUSTOMER, EDIT_PROFILE_REQUEST, EDIT_PROFILE_PASS_REQUEST, EDIT_ADRESS_REQUEST} from '../actions/action';

export const initialState = {
    customer:{
       
    }
};

export function customerReducer(state = initialState, action ) {

    switch (action.type) {
        case SET_CUSTOMER :
            return {...state, customer:{...state.customer,...action.payload}}
        case CUSTOMER_REQUEST:
            return {...state, customer:{...state.customer,...action.payload}}
        case GET_CUSTOMER:
            return {...state, customer:{...state.customer, ...action.payload}}
        case EDIT_PROFILE_REQUEST:
            return {...state, customer:{...state.customer, ...action.payload}}
        case EDIT_ADRESS_REQUEST:
            return {...state, customer:{...state.customer, ...action.payload}}
        case EDIT_PROFILE_PASS_REQUEST:
            return {...state, customer:{...state.customer, passwordControl:action.payload}}
        default:
            return state
    }
}