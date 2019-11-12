import {COUNT_OF_CART, GET_PRODUCT_IN_CART} from '../actions/action';

export const initialState = {
    cart:{
        count:0,
        product:[]
    }
};

export function cartReducer(state = initialState, action ) {
    
    switch (action.type) {
        case COUNT_OF_CART :
            return {...state, cart:{...state.cart, count:action.payload}}
        case GET_PRODUCT_IN_CART:
            return {...state, cart:{...state.cart, product:action.payload}}
        default:
            return state
    }
}