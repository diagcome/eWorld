import {SET_ORDER} from '../actions/action';

export const initialState = {
    newOrder:{}
};

export function newOrderReducer(state = initialState, action ) {

    switch (action.type) {
        case SET_ORDER:
            return {...state, newOrder:{...action.payload}}
        default:
            return state;
    }
}