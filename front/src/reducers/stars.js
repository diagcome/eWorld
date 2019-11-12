import {SET_STARS} from '../actions/action';

export const initialState = {
    stars:{

    }
};

export function starsReducer(state = initialState, action ) {

    switch (action.type) {
        case SET_STARS :
            return {stars:action.payload}
        default:
            return state
    }
}