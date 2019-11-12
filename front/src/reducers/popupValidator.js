import {SET_POPUP_VALIDATOR, CLEAR_POPUP_VALIDATOR} from '../actions/action';

export const initialState = {
    popupValidator:{
        messageError:"No Error",
        statusError: false
    }
};

export function popupValidatorReducer(state = initialState, action ) {
    switch (action.type) {
        case SET_POPUP_VALIDATOR :
            return {...state, popupValidator:{...state.customer,...action.payload}}
        case  CLEAR_POPUP_VALIDATOR:
            return {...state, popupValidator:{...state.customer,...action.payload}}
        default:
            return state
    }
}