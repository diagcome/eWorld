import {CLEAR_POPUP_VALIDATOR, SET_POPUP_VALIDATOR} from './action';

export function popupValidatorOn(message) {
    
    return dispatch => {
        dispatch({
            type: SET_POPUP_VALIDATOR,
            payload:{messageError:message, statusError: true}
        });

        setTimeout(() => {
            dispatch(popupValidatorOff());
        }, 5000);
    };
}

export function popupValidatorOff() {
    
    return  dispatch => {
        dispatch({
            type: CLEAR_POPUP_VALIDATOR,
            payload: {messageError:"No Error", statusError: false}
        });
    };
}