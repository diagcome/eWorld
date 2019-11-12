import { FETCH_BLOG_FAILURE, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS,FETCH_BLOG_DETAILS_REQUEST,
    FETCH_BLOG_DETAILS_SUCCESS, FETCH_BLOG_DETAILS_FAILURE} from './../actions/action';

export const initialState = {
    blogItems: [],
    currentBlogDetails:[],
    isLoading: false,
    error: null
};

export function blogReducer(state = initialState, action ) {
    switch (action.type) {
        case FETCH_BLOG_REQUEST :
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_BLOG_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_BLOG_DETAILS_SUCCESS :
            return {
                ...state,
                currentBlogDetails: action.payload,
                isLoading: false,
            };

        case FETCH_BLOG_SUCCESS :
            return {
                ...state,
                blogItems: action.payload,
                isLoading: false,
            };


        case FETCH_BLOG_FAILURE :
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case FETCH_BLOG_DETAILS_FAILURE :
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };


        default:
            return state
    }
}

export default blogReducer;

