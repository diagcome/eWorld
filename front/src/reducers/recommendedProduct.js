import {GET_RECOMMENDED_PRODUCTS} from '../actions/action';

export const initialState = {
    recProduct:[
        
    ]
};

export function recProductReducer(state = initialState, action ) {
    
    switch (action.type) {
        case GET_RECOMMENDED_PRODUCTS :
            return {...state, recProduct:[...state.recProduct, ...action.payload]}
        default:
            return state
    }
}