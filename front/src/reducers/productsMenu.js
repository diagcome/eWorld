import {GET_PRODUCTS_MENU, WAIT_PRODUCTS_MENU} from '../actions/action';

export const initialState = {
    productsMenu:[
        
    ]
};

export function productsMenuReducer(state = initialState, action ) {
    
    switch (action.type) {
        case GET_PRODUCTS_MENU :
            return {...state, productsMenu:[...state.productsMenu,...action.payload]}
        case WAIT_PRODUCTS_MENU:
            return {...state, productsMenu:[...action.payload]}
        default:
            return state
    }
}