import {GET_PRODUCTS_REQUEST, GET_ALL_PRODUCTS, GET_FILTRED_PRODUCTS} from '../actions/action';

export const initialState = {
    allProducts:[
        
    ]
};

export function allProductsReducer(state = initialState, action ) {
    

    switch (action.type) {
        case GET_PRODUCTS_REQUEST :
            return {...state, allProducts:[...state.allProducts, ...action.payload]}
        case GET_ALL_PRODUCTS:
            return {...state, allProducts:[...action.payload]}
        case GET_FILTRED_PRODUCTS:
            return {...state, allProducts:[...action.payload]}
        default:
            return state
    }
}