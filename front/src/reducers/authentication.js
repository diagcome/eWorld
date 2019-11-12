import {CHECK_AUTH} from '../actions/action';

export const initialState = {
    
};

export function authenticationReducer(state = initialState, action ) {
    switch (action.type) {
        case CHECK_AUTH:
            return {...state,  loginIs:action.payload}
        default:
            return state
    }
}