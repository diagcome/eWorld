import {GET_SLIDES} from '../actions/action';

export const initialState = {
    slides:[]
};

export function slideReducer(state = initialState, action ) {

    switch (action.type) {
        case GET_SLIDES :
            return {...state, slides: [...state.slides, ...action.payload]}
        default:
            return state
    }
}