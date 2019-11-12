import {GET_ORDERS, SET_ORDER} from '../actions/action';

export const initialState = {
    orders:[],
    newOrder:{}
};

export function orderReducer(state = initialState, action ) {

    switch (action.type) {
        case GET_ORDERS :
            return {...state, orders:[...action.payload]}
        case SET_ORDER:
            return {...state, newOrder:{...action.payload}}
        default:
            return state
    }
}