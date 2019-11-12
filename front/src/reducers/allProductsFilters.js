import {WAIT_PRODUCTS_FILTERS, GET_PRODUCTS_FILTERS} from '../actions/action';

export const initialState = {
    allProductsFilters:[
        
    ]
};

export function allProductsFiltersReducer(state = initialState, action ) {

    switch (action.type) {
        case GET_PRODUCTS_FILTERS :
            return {...state, allProductsFilters:[...state.allProductsFilters,...action.payload]}
        case WAIT_PRODUCTS_FILTERS:
            return {...state, allProductsFilters:[...action.payload]}
        default:
            return state
    }
}